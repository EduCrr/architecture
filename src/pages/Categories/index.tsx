import { useState, useEffect, ChangeEvent } from "react";
import { houseTypes } from "../../types/houseType";
import { getAll } from "../../services/houses";
import { CategoriesItem } from "../../components/CategoriesItem";
import * as C from "./styles";
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
      <select value={showCat} onChange={handleCats}>
        <option value="">All</option>
        {cat.map((item, k) => (
          <option key={k} value={item.slug}>
            {item.title}
          </option>
        ))}
      </select>

      <div className="allHouses">
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
      </div>
    </C.Container>
  );
};
