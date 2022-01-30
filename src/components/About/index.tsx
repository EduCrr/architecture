import { Link } from "react-router-dom";
import * as C from "./styles";
import { getAll } from "../../services/houses";
import { useEffect, useState } from "react";
import { houseTypes } from "../../types/houseType";
import { motion } from "framer-motion";
export const About = () => {
  const [images, setImages] = useState<houseTypes[]>([]);

  useEffect(() => {
    const getImages = async () => {
      setImages(await getAll());
    };
    getImages();
  }, []);

  return (
    <C.Container>
      <div className="about">
        <h1>About Us</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <C.Gallery>
        {images.length > 0 && (
          <>
            {images.slice(0, 5).map((item, k) => (
              <motion.div
                className={`item-${k}`}
                key={k}
                exit={{ opacity: 0 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                <div className="imgHover">
                  <img src={item.images} alt={item.name} />

                  <div className="middle">
                    <div className="text">
                      <Link to={`/interior/${item.id}`}>Veja mais</Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </>
        )}
      </C.Gallery>
    </C.Container>
  );
};
