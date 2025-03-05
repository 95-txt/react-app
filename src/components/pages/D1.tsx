import "./D.css";
import Footer from "./Footer";
import { useEffect } from "react";

const images = [
  "/assets/icebae/icebae2.jpg",
  "/assets/icebae/icebae10.jpg",
  "/assets/icebae/icebae12.jpg",
  "/assets/icebae/icebae4.jpg",
  "/assets/icebae/icebae9.jpg",
  "/assets/icebae/icebae13.jpg",
  "/assets/icebae/icebae11.jpg",
  "/assets/icebae/icebae7.png",
  "/assets/icebae/icebae8.jpg",
  "/assets/icebae/icebae1.jpg",
  "/assets/icebae/icebae3.jpg",
  "/assets/icebae/icebae6.jpg",
  "/assets/icebae/icebae5.jpg",
];

const D1 = () => {
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
        <img src="/assets/icebae.jpg" alt="" />
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

export default D1;
