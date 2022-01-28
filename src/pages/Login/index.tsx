import React, { ChangeEvent, useState } from "react";
import * as C from "./styles";
import { sendLogin, sendNewAccount } from "../../services/houses";
import {
  setEmailUsuario,
  setUid,
  setNameUsuario,
} from "../../redux/reducers/userReducer";
import { useDispatch } from "react-redux";
import { useSelectorApp } from "../../redux/hooks/userSelectorApp";
import { Navigate } from "react-router-dom";
export const Login = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [isLogin, setIsLogin] = useState("");
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userId, setUserId] = useState("");
  const user = useSelectorApp((state) => state.user);

  const handleSendForm = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isLogin === "login") {
      await sendLogin(email, password, setUserName, setUserEmail, setUserId);
      dispatch(setNameUsuario(userName));
      dispatch(setEmailUsuario(userEmail));
      dispatch(setUid(userId));
    } else if (isLogin === "cadastro") {
      await sendNewAccount(
        email,
        password,
        name,
        setUserName,
        setUserEmail,
        setUserId
      );
      dispatch(setNameUsuario(userName));
      dispatch(setEmailUsuario(userEmail));
      dispatch(setUid(userId));
    }
  };

  const handleIsLogin = (e: ChangeEvent<HTMLSelectElement>) => {
    setIsLogin(e.target.value);
  };
  if (user.uid !== "") {
    return <Navigate to="/" />;
  }
  return (
    <C.Container>
      <div className="left-side">
        <img
          src="https://images.unsplash.com/photo-1547645890-36d42b462191?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          alt=""
        />
      </div>
      <div className="right-side">
        <select onChange={handleIsLogin} value={isLogin}>
          <option value="">Select your choice</option>
          <option value="login">Login</option>
          <option value="cadastro">Cadastro</option>
        </select>
        {isLogin !== "" && (
          <>
            <form onSubmit={handleSendForm}>
              {isLogin === "cadastro" && (
                <input
                  placeholder="name"
                  required
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              )}

              <input
                placeholder="Email"
                type="text"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                placeholder="Password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button type="submit">Send</button>
            </form>
          </>
        )}
      </div>
    </C.Container>
  );
};
