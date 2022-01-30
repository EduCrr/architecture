import { useNavigate } from "react-router-dom";
import * as C from "./styles";
import { motion } from "framer-motion";
export const Create = () => {
  let navigate = useNavigate();
  const handleCat = () => {
    navigate("/categories");
  };
  return (
    <C.Container>
      <motion.div
        className="left-side"
        exit={{ opacity: 0 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src="https://images.unsplash.com/photo-1591931681345-16b532514cde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80"
          alt=""
        />
      </motion.div>
      <motion.div
        className="right-side"
        exit={{ opacity: 0, y: "5vh" }}
        initial={{ opacity: 0, y: "15vh" }}
        animate={{ opacity: 1, y: "0" }}
        transition={{ duration: 0.8 }}
      >
        <h2 style={{ marginBottom: "20px" }}>
          We create a dream beautiful interior
        </h2>
        <span>Experience</span>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.{" "}
        </p>
        <div className="btn">
          <button onClick={handleCat}>More</button>
        </div>
      </motion.div>
    </C.Container>
  );
};
