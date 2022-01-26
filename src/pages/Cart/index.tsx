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
  const total = cart.reduce((amount, item) => item.price + amount, 0);
  let totalMascara = total.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
  return (
    <C.Container>
      {cart.length == 0 ? (
        <h2>Cart zero</h2>
      ) : (
        <>
          <div className="cart">
            {cart.map((item, k) => (
              <div className="cartInfo" key={k}>
                <img src={item.images} />
                <span>{item.company}</span>
                <div className="info">
                  <h4>{item.name}</h4>
                  <h4>{item.color}</h4>
                  <p>
                    {item.price.toLocaleString("en-US", {
                      style: "currency",
                      currency: "USD",
                    })}
                  </p>
                </div>
                <button onClick={() => handleDelete(item.id)}>Remove</button>
              </div>
            ))}
          </div>
          <div className="checkCart">
            <h2>Total Cost:</h2>
            <strong>{totalMascara}</strong>
          </div>
        </>
      )}
    </C.Container>
  );
};
