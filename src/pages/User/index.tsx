import React, { ChangeEvent, useState } from "react";
import * as C from "./styles";
import { useSelectorApp } from "../../redux/hooks/userSelectorApp";
import { newUserinfo, newUserPassword } from "../../services/houses";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";
import { setNameUsuario } from "../../redux/reducers/userReducer";
export const User = () => {
  const dispatch = useDispatch();
  const user = useSelectorApp((state) => state.user);
  const [userName, setUserName] = useState(user.name);
  const [userEmail, setUserEmail] = useState(user.email);
  const [userPassword, setUserPassword] = useState("");

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (userPassword !== "" && userPassword.length >= 6) {
      await newUserinfo(userName, user.uid);
      await newUserPassword(userPassword);
    } else if (userPassword === "") {
      await newUserinfo(userName, user.uid);
    }
  };

  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
    dispatch(setNameUsuario(e.target.value));
  };

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserPassword(e.target.value);
  };

  return (
    <C.Container>
      <motion.div
        className="user-info"
        exit={{ opacity: 0 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h1>User Info</h1>
        <form onSubmit={handleUpdate}>
          <input
            placeholder="name"
            type="text"
            value={userName}
            onChange={handleName}
          />
          <input placeholder="Email" disabled value={userEmail} type="email" />
          <input
            placeholder="New password"
            value={userPassword}
            type="password"
            onChange={handlePassword}
          />
          <button type="submit">Send</button>
        </form>
      </motion.div>
    </C.Container>
  );
};
