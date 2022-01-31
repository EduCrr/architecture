import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getSingle } from "../../services/houses";
import * as C from "./styles";
import Slider from "react-slick";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../redux/reducers/cartReducer";
import { motion } from "framer-motion";
export const Interiro = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const [house, setHouse] = useState<any>({});
  const dispatch = useDispatch();

  useEffect(() => {
    const loadHouse = async (id: any) => {
      setLoading(true);
      setHouse(await getSingle(id));
      setLoading(false);
    };
    loadHouse(id);
    window.scrollTo(0, 0);
  }, [id]);

  const settings = {
    infinite: true,
    arrows: false,
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const handleAddCart = (data: any) => {
    dispatch(addItemToCart(data));
    navigate("/cart");
  };

  return (
    <>
      {loading && (
        <div className="loading">
          <img src="/assets/loading.gif" />
        </div>
      )}
      <C.Container>
        <motion.div
          exit={{ opacity: 0 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="left-side"
        >
          <div
            style={{
              display: "inline",
              marginBottom: "10px",
            }}
          >
            <span
              style={{
                cursor: "pointer",
                color: "#dc9763",
                display: "inline",
              }}
              onClick={() => navigate(-1)}
            >
              Go back
            </span>
          </div>
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
              <h3>
                {house.price &&
                  house.price.toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                  })}
              </h3>
            </div>
          </div>
          <div className="item">
            <button onClick={() => handleAddCart(house)}>Add to cart</button>
          </div>
        </motion.div>
        <motion.div
          exit={{ opacity: 0, height: "0vh" }}
          initial={{ opacity: 0, height: "0vh" }}
          animate={{ opacity: 1, height: "100vh" }}
          transition={{ duration: 0.8 }}
          className="right-side"
        >
          {house.images && (
            <>
              <Slider {...settings}>
                {house.images.map((item: string, k: string) => (
                  <div key={k}>
                    <img src={item} alt={house.name} />
                  </div>
                ))}
              </Slider>
            </>
          )}
        </motion.div>
      </C.Container>
    </>
  );
};
