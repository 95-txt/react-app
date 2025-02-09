import "./D.css";
import Footer from "./Footer";
import { useEffect } from "react";

const images = [
  "./src/assets/kallu/kallu3.jpg",
  "./src/assets/kallu/kallu2.jpg",
  "./src/assets/kallu/kallu4.jpg",
  "./src/assets/kallu/kallu5.jpg",
  "./src/assets/kallu/kallu6.jpg",
  "./src/assets/kallu/kallu7.jpg",
  "./src/assets/kallu/kallu8.jpg",
  "./src/assets/kallu/kallu9.jpg",
  "./src/assets/kallu/kallu10.jpg",
  "./src/assets/kallu/kallu11.jpg",
  "./src/assets/kallu/kallu1.jpg",
];

const D2 = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, []);

  return (
    <>
      <div className="coverimg">
        <img src="./src/assets/kallu/kallu11.jpg" alt="" />
      </div>
      <div className="imgcontainer">
        {images.map((src, index) => (
          <div key={index} className="break-inside-avoid">
            <img src={src} className="w-full object-cover " />
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default D2;
