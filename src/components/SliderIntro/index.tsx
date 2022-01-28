import { useEffect, useState } from "react";
import * as C from "./styles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { houseTypes } from "../../types/houseType";
import { getAll } from "../../services/houses";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
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
      {loading && (
        <div className="loading">
          <img src="" />
        </div>
      )}
      <C.Container>
        <motion.div
          className="left-side"
          exit={{ opacity: 0 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <span>02.</span>
          <h1>Dark Interior</h1>
        </motion.div>
        <motion.div
          className="right-side"
          exit={{ opacity: 0, y: "5vh" }}
          initial={{ opacity: 0, y: "15vh" }}
          animate={{ opacity: 1, y: "0" }}
          transition={{ duration: 0.8 }}
        >
          <Slider {...settings}>
            {images.map((item, k) => (
              <div className="image-slider" key={k}>
                <Link to={`/interior/${item.id}`}>
                  <img src={item.images} />
                </Link>
              </div>
            ))}
          </Slider>
        </motion.div>
      </C.Container>
    </>
  );
};
