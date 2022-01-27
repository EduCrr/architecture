import { Link } from "react-router-dom";
import * as C from "./styles";
import { FaOpencart, FaRegUser, FaArrowRight } from "react-icons/fa";
import { useSelectorApp } from "../../redux/hooks/userSelectorApp";
import { useDispatch } from "react-redux";
import { setLogOut } from "../../redux/reducers/userReducer";
export const Header = () => {
  const dispatch = useDispatch();
  const user = useSelectorApp((state) => state.user);
  const handleLogout = () => {
    dispatch(setLogOut());
  };
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
            {user.uid === "" && (
              <li>
                <Link to="/login">Login</Link>
              </li>
            )}
            {user.uid !== "" && (
              <>
                <li>
                  <Link to="/cart">
                    <FaOpencart />
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <FaRegUser />
                  </Link>
                </li>
                <li>
                  <FaArrowRight
                    onClick={handleLogout}
                    style={{ cursor: "pointer" }}
                  />
                </li>
              </>
            )}
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
