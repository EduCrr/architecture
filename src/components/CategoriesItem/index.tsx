import { Link } from "react-router-dom";
import { houseTypes } from "../../types/houseType";
import * as C from "./styles";
type Props = {
  data: houseTypes;
};
export const CategoriesItem = ({ data }: Props) => {
  return (
    <C.Container>
      <div className="imgHover">
        <div className="items">
          <Link to={`/interior/${data.id}`}>
            <img src={data.images} />
          </Link>
        </div>
        <div className="middle">
          <span>{data.company}</span>
          <br />
          <Link to={`/interior/${data.id}`}>{data.name}</Link>
        </div>
      </div>
    </C.Container>
  );
};
