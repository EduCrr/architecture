import { useEffect, useState } from "react";
import * as C from "./styles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { houseTypes } from "../../types/houseType";
import { getAll } from "../../services/houses";
import { Link } from "react-router-dom";
export const SliderIntro = () => {
  const [images, setImages] = useState<houseTypes[]>([]);
  const [loading, setLoading] = useState(false);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    arrows: false,
    slidesToScroll: 3,
  };
  useEffect(() => {
    const getAllHouse = async () => {
      setLoading(true);
      setImages(await getAll());
      setLoading(false);
      console.log(await getAll());
    };
    getAllHouse();
  }, []);
  return (
    <>
      <C.Container>
        <div className="left-side">
          <span>02.</span>
          <h1>Dark Interior</h1>
        </div>
        <div className="right-side">
          <Slider {...settings}>
            {images.map((item, k) => (
              <div className="image-slider" key={k}>
                <Link to={`/interior/${item.id}`}>
                  <img src={item.images} />
                </Link>
              </div>
            ))}
          </Slider>
        </div>
      </C.Container>
    </>
  );
};
