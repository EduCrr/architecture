import { Link } from "react-router-dom";
import * as C from "./styles";
export const Header = () => {
  return (
    <>
      <C.Container>
        <div className="logo">Architecture</div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/categories">Categories</Link>
            </li>
            <li>
              <Link to="/cart">Cart</Link>
            </li>
          </ul>
        </nav>
      </C.Container>
      <div
        style={{
          borderBottom: "0.1px solid #b1aca9",
        }}
      ></div>
    </>
  );
};
