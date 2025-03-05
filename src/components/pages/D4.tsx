import "./D.css";
import Footer from "./Footer";
import { useEffect } from "react";
import Slider from "react-slick";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const images = [
  "/assets/fr/fr02.jpg",
  "/assets/fr/fr03.jpg",
  "/assets/fr/fr04.jpg",
  "/assets/fr/fr01.jpg",
  "/assets/fr/fr06.png",
  "/assets/fr/fr23.jpg",
  "/assets/fr/fr07.jpg",
  "/assets/fr/fr05.jpg",
  "/assets/fr/fr08.jpg",
  "/assets/fr/fr09.jpg",
  "/assets/fr/fr10.jpg",
  "/assets/fr/fr13.jpg",
  "/assets/fr/fr15.jpg",
  "/assets/fr/fr16.jpg",
  "/assets/fr/fr17.jpg",
  "/assets/fr/fr18.jpg",
  "/assets/fr/fr20.jpg",
  "/assets/fr/fr12.jpg",
  "/assets/fr/fr21.jpg",
  "/assets/fr/fr19.jpg",
  "/assets/fr/fr25.jpg",
  "/assets/fr/fr14.png",
];

const slides = [
  "/assets/fr/tn9.jpg",
  "/assets/fr/tn1.jpg",
  "/assets/fr/tn2.jpg",
  "/assets/fr/tn3.jpg",
  "/assets/fr/tn4.jpg",
  "/assets/fr/tn5.jpg",
  "/assets/fr/tn7.jpg",
  "/assets/fr/tn8.jpg",
  "/assets/fr/tn10.png",
  "/assets/fr/tn11.jpg",
  "/assets/fr/tn12.jpg",
  "/assets/fr/tn13.jpg",
  "/assets/fr/tn14.jpg",
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
        <img src="/assets/fr.jpg" alt="" />
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
