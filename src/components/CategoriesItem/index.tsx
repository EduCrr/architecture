import { Link } from "react-router-dom";
import { houseTypes } from "../../types/houseType";
import * as C from "./styles";
type Props = {
  data: houseTypes;
};
export const CategoriesItem = ({ data }: Props) => {
  return (
    <C.Container>
      <div className="items">
        <Link to={`/interior/${data.id}`}>
          <img src={data.images} />
        </Link>

        <h3>{data.name}</h3>
      </div>
    </C.Container>
  );
};
