import "./D.css";
import Footer from "./Footer";
import { useEffect } from "react";
import Slider from "react-slick";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const images = [
  "./src/assets/fr/fr02.jpg",
  "./src/assets/fr/fr03.jpg",
  "./src/assets/fr/fr04.jpg",
  "./src/assets/fr/fr01.jpg",
  "./src/assets/fr/fr06.png",
  "./src/assets/fr/fr23.jpg",
  "./src/assets/fr/fr07.jpg",
  "./src/assets/fr/fr05.jpg",
  "./src/assets/fr/fr08.jpg",
  "./src/assets/fr/fr09.jpg",
  "./src/assets/fr/fr10.jpg",
  "./src/assets/fr/fr13.jpg",
  "./src/assets/fr/fr15.jpg",
  "./src/assets/fr/fr16.jpg",
  "./src/assets/fr/fr17.jpg",
  "./src/assets/fr/fr18.jpg",
  "./src/assets/fr/fr20.jpg",
  "./src/assets/fr/fr12.jpg",
  "./src/assets/fr/fr21.jpg",
  "./src/assets/fr/fr19.jpg",
  "./src/assets/fr/fr25.jpg",
  "./src/assets/fr/fr14.png",
];

const slides = [
  "./src/assets/fr/tn9.jpg",
  "./src/assets/fr/tn1.jpg",
  "./src/assets/fr/tn2.jpg",
  "./src/assets/fr/tn3.jpg",
  "./src/assets/fr/tn4.jpg",
  "./src/assets/fr/tn5.jpg",
  "./src/assets/fr/tn7.jpg",
  "./src/assets/fr/tn8.jpg",
  "./src/assets/fr/tn10.png",
  "./src/assets/fr/tn11.jpg",
  "./src/assets/fr/tn12.jpg",
  "./src/assets/fr/tn13.jpg",
  "./src/assets/fr/tn14.jpg",
];

const D4 = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, []);

  let settings = {
    arrow: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <FaAngleRight />,
    prevArrow: <FaAngleLeft />,
  };

  return (
    <>
      <div className="coverimg">
        <img src="./src/assets/fr.jpg" alt="" />
      </div>
      <div className="imgcontainer">
        {images.map((src, index) => (
          <div key={index} className="break-inside-avoid">
            <img src={src} className="w-full object-cover " />
          </div>
        ))}
      </div>

      <div className="gallery">
        <div className="himages">
          <Slider {...settings}>
            {slides.map((src, index) => (
              <div key={index} className="himage">
                <img src={src} />
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default D4;
