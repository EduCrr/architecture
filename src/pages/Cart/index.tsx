import { useSelectorApp } from "../../redux/hooks/userSelectorApp";
import { useDispatch } from "react-redux";
import { removeItemFromCart } from "../../redux/reducers/cartReducer";
import { motion } from "framer-motion";
import * as C from "./styles";
import { Link } from "react-router-dom";

export const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelectorApp((state) => state.cart);
  const user = useSelectorApp((state) => state.user);

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
        <h2>Empty cart</h2>
      ) : (
        <>
          <motion.div
            className="cart"
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            {cart.map((item, k) => (
              <div className="cartInfo" key={k}>
                <Link to={`/interior/${item.id}`}>
                  <img src={item.images} />
                </Link>
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
          </motion.div>
          <motion.div
            className="checkCart"
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div>
              <h2>Total Cost:</h2>
              <strong>{totalMascara}</strong>
            </div>
            <br />
            <span>Name</span>
            <h3>{user.name}</h3>
            <br />
            <span>Email</span>
            <h3>{user.email}</h3>
          </motion.div>
        </>
      )}
    </C.Container>
  );
};
