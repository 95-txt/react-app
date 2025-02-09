import "./D.css";
import Footer from "./Footer";
import { useEffect } from "react";

const images = [
  "./src/assets/icebae/icebae2.jpg",
  "./src/assets/icebae/icebae10.jpg",
  "./src/assets/icebae/icebae12.jpg",
  "./src/assets/icebae/icebae4.jpg",
  "./src/assets/icebae/icebae9.jpg",
  "./src/assets/icebae/icebae13.jpg",
  "./src/assets/icebae/icebae11.jpg",
  "./src/assets/icebae/icebae7.png",
  "./src/assets/icebae/icebae8.jpg",
  "./src/assets/icebae/icebae1.jpg",
  "./src/assets/icebae/icebae3.jpg",
  "./src/assets/icebae/icebae6.jpg",
  "./src/assets/icebae/icebae5.jpg",
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
        <img src="./src/assets/icebae.jpg" alt="" />
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
