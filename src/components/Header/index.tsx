import { Link } from "react-router-dom";
import * as C from "./styles";
import {
  FaOpencart,
  FaRegUser,
  FaArrowRight,
  FaAlignJustify,
} from "react-icons/fa";
import { useSelectorApp } from "../../redux/hooks/userSelectorApp";
import { useDispatch } from "react-redux";
import { setLogOut } from "../../redux/reducers/userReducer";
import { useLocation } from "react-router-dom";
import { useState } from "react";
export const Header = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const splitLocation = location.pathname.split("/");
  const user = useSelectorApp((state) => state.user);
  const [openMenu, setOpenMenu] = useState(false);
  const handleLogout = () => {
    dispatch(setLogOut());
  };
  const handleMenu = () => {
    setOpenMenu(true);
  };
  return (
    <>
      <C.Container menu={openMenu}>
        <div className="logo">
          <Link to="/" style={{ color: "white" }}>
            Architecture
          </Link>
        </div>
        <nav>
          <ul onClick={() => setOpenMenu(false)}>
            <li>
              <Link className={splitLocation[1] === "" ? "active" : ""} to="/">
                Home
              </Link>
            </li>
            <li>
              <Link
                className={splitLocation[1] === "categories" ? "active" : ""}
                to="/categories"
              >
                Categories
              </Link>
            </li>

            {user.uid === "" && (
              <li>
                <Link
                  className={splitLocation[1] === "login" ? "active" : ""}
                  to="/login"
                >
                  Login
                </Link>
              </li>
            )}

            {user.uid !== "" && (
              <>
                <li>
                  <Link to="/cart">
                    <FaOpencart
                      style={{
                        color: splitLocation[1] === "cart" ? "#fff" : "#67686a",
                      }}
                    />
                  </Link>
                </li>
                <li>
                  <Link to="/user">
                    <FaRegUser
                      style={{
                        color: splitLocation[1] === "user" ? "#fff" : "#67686a",
                      }}
                    />
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
        <div className="menu">
          <FaAlignJustify style={{ cursor: "pointer" }} onClick={handleMenu} />
        </div>
      </C.Container>
      <div
        style={{
          borderBottom: "0.1px solid #b1aca9",
        }}
      ></div>
    </>
  );
};
