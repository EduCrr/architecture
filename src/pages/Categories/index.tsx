import { useState, useEffect, ChangeEvent } from "react";
import { houseTypes } from "../../types/houseType";
import { getAll } from "../../services/houses";
import { CategoriesItem } from "../../components/CategoriesItem";
import * as C from "./styles";
import { motion } from "framer-motion";
export const Categories = () => {
  const [houses, setHouses] = useState<houseTypes[]>([]);
  const [loading, setLoading] = useState(false);
  const [cat, setCat] = useState([
    { title: "Room", slug: "room" },
    { title: "Bedroom", slug: "bedroom" },
    { title: "Bathroom", slug: "bathroom" },
  ]);
  const [showCat, setShowCat] = useState("");

  useEffect(() => {
    const getAllHouse = async () => {
      setLoading(true);
      setHouses(await getAll());
      setLoading(false);
      console.log(await getAll());
    };
    getAllHouse();
  }, []);

  const handleCats = (e: ChangeEvent<HTMLSelectElement>) => {
    setShowCat(e.target.value);
  };

  return (
    <C.Container>
      <motion.div
        exit={{ opacity: 0 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <select value={showCat} onChange={handleCats}>
          <option value="">All</option>
          {cat.map((item, k) => (
            <option key={k} value={item.slug}>
              {item.title}
            </option>
          ))}
        </select>
      </motion.div>

      <motion.div
        exit={{ opacity: 0, y: "10vh" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: "5vh" }}
        transition={{ duration: 0.8 }}
        className="allHouses"
      >
        {showCat === "" && (
          <>
            {houses.map((item, k) => (
              <CategoriesItem data={item} key={k} />
            ))}
          </>
        )}
        {showCat !== "" && (
          <>
            {houses
              .filter((item) => item.category === showCat)
              .map((item, k) => (
                <CategoriesItem data={item} key={k} />
              ))}
          </>
        )}
      </motion.div>
    </C.Container>
  );
};
