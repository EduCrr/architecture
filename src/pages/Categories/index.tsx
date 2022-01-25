import { useState, useEffect } from "react";
import { houseTypes } from "../../types/houseType";
import { getAll } from "../../services/houses";
import { CategoriesItem } from "../../components/CategoriesItem";
import * as C from "./styles";
export const Categories = () => {
  const [houses, setHouses] = useState<houseTypes[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getAllHouse = async () => {
      setLoading(true);
      setHouses(await getAll());
      setLoading(false);
      console.log(getAll());
    };
    getAllHouse();
  }, []);
  return (
    <C.Container>
      {houses.map((item, k) => (
        <CategoriesItem data={item} key={k} />
      ))}
    </C.Container>
  );
};
