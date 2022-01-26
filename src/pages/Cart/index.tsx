import { useSelectorApp } from "../../redux/hooks/userSelectorApp";
import { useDispatch } from "react-redux";
import { removeItemFromCart } from "../../redux/reducers/cartReducer";
import * as C from "./styles";
export const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelectorApp((state) => state.cart);
  const handleDelete = (id: string) => {
    dispatch(removeItemFromCart(id));
  };
  return (
    <C.Container>
      <div className="cart">
        {cart.map((item, k) => (
          <div className="cartInfo" key={k}>
            <img src={item.images} />
            <span>{item.company}</span>
            <div className="info">
              <h4>{item.name}</h4>
              <h4>{item.color}</h4>
              <p>$ {item.price}</p>
            </div>
            <button onClick={() => handleDelete(item.id)}>Remove</button>
          </div>
        ))}
      </div>
    </C.Container>
  );
};
