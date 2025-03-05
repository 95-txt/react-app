import "./D.css";
import Footer from "./Footer";
import { useEffect } from "react";

const images = [
  "/assets/kallu/kallu3.jpg",
  "/assets/kallu/kallu2.jpg",
  "/assets/kallu/kallu4.jpg",
  "/assets/kallu/kallu5.jpg",
  "/assets/kallu/kallu6.jpg",
  "/assets/kallu/kallu7.jpg",
  "/assets/kallu/kallu8.jpg",
  "/assets/kallu/kallu9.jpg",
  "/assets/kallu/kallu10.jpg",
  "/assets/kallu/kallu11.jpg",
  "/assets/kallu/kallu1.jpg",
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
        <img src="/assets/kallu/kallu11.jpg" alt="" />
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
