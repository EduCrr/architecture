import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingle } from "../../services/houses";
import * as C from "./styles";
import Slider from "react-slick";

export const Interiro = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const { id } = useParams();
  const [house, setHouse] = useState<any>({});

  useEffect(() => {
    const loadHouse = async (id: any) => {
      setHouse(await getSingle(id));
      console.log(await getSingle(id));
    };
    loadHouse(id);
  }, [id]);

  return (
    <C.Container>
      <div className="left-side">
        <h2>{house.name}</h2>
        <div className="info">
          <div className="item" style={{ flex: "1" }}>
            <span>Category</span>
            <h3> {house.category}</h3>
          </div>
          <div className="item" style={{ width: "150px" }}>
            <span>Highlight color</span>
            <h3> {house.color}</h3>
          </div>
        </div>
        <div className="info">
          <div className="item" style={{ flex: "1" }}>
            <span>Company</span>
            <h3> {house.company}</h3>
          </div>
          <div className="item" style={{ width: "150px" }}>
            <span>Full Price</span>
            <h3> $ {house.price}</h3>
          </div>
        </div>
        <div className="item">
          <span>Description</span>
          <br />
          <h3> {house.description}</h3>
        </div>
        <div className="item">
          <button>Add to cart</button>
        </div>
      </div>
      <div className="right-side">
        {house.images && (
          <>
            <Slider {...settings}>
              {house.images.map((item: string, k: string) => (
                <div key={k}>
                  <img src={item} />
                </div>
              ))}
            </Slider>
          </>
        )}
      </div>
    </C.Container>
  );
};
