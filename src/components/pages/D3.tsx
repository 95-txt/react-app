import "./D.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "./Footer";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { useEffect } from "react";

const images = [
  "src/assets/hestia/antara1.jpg",
  "src/assets/hestia/antara2.jpg",
  "src/assets/hestia/antara3.jpg",
  "src/assets/hestia/allppl_01.jpg",
  "src/assets/hestia/allppl_02.jpg",
  "src/assets/hestia/allppl_03.jpg",
  "src/assets/hestia/holyc1.jpg",
  "src/assets/hestia/holyc2.jpg",
  "src/assets/hestia/holyc3.jpg",
  "src/assets/hestia/blaviken_04.jpg",
  "src/assets/hestia/blaviken_05.jpg",
  "src/assets/hestia/blaviken_06.jpg",
  "src/assets/hestia/All-Events-sq_04.jpg",
  "src/assets/hestia/All-Events-sq_05.jpg",
  "src/assets/hestia/All-Events-sq_06.jpg",
  "src/assets/hestia/veyil_01.jpg",
  "src/assets/hestia/veyil_02.jpg",
  "src/assets/hestia/veyil_03.jpg",
  "src/assets/hestia/pre-event-tile_01.jpg",
  "src/assets/hestia/pre-event-tile_02.jpg",
  "src/assets/hestia/pre-event-tile_03.jpg",
  "src/assets/hestia/sports-posters_01.png",
  "src/assets/hestia/sports-posters_02.png",
  "src/assets/hestia/sports-posters_03.jpg",
  "src/assets/hestia/certificate1.jpg",
  "src/assets/hestia/certificate2.jpg",
  "src/assets/hestia/certificate3.jpg",
];
const slides = [
  "src/assets/hestia/1.jpg",
  "src/assets/hestia/2.jpg",
  "src/assets/hestia/3.jpg",
  "src/assets/hestia/4.jpg",
  "src/assets/hestia/5.jpg",
  "src/assets/hestia/6.jpg",
  "src/assets/hestia/7.jpg",
  "src/assets/hestia/8.jpg",
  "src/assets/hestia/9.jpg",
  "src/assets/hestia/10.jpg",
  "src/assets/hestia/11.jpg",
];
const images23 = [
  "src/assets/hestia/hestia23/23h17.jpg",
  "src/assets/hestia/hestia23/23h18.jpg",
  "src/assets/hestia/hestia23/23h03.jpg",
  "src/assets/hestia/hestia23/23h01.jpg",
  "src/assets/hestia/hestia23/23h02.jpg",
  "src/assets/hestia/hestia23/23h04.jpg",
  "src/assets/hestia/hestia23/23h05.jpg",
  "src/assets/hestia/hestia23/23h06.jpg",
  "src/assets/hestia/hestia23/23h07.jpg",
  "src/assets/hestia/hestia23/23h08.jpg",
  "src/assets/hestia/hestia23/23h09.jpg",
  "src/assets/hestia/hestia23/23h10.jpg",
  "src/assets/hestia/hestia23/23h11.jpg",
  "src/assets/hestia/hestia23/23h15.jpg",
  "src/assets/hestia/hestia23/23h16.jpg",
  "src/assets/hestia/hestia23/23h13.jpg",
  "src/assets/hestia/hestia23/23h12.jpg",
  "src/assets/hestia/hestia23/23h14.jpg",
];

const D3 = () => {
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
        <img src="./src/assets/hestia.png" alt="" />
      </div>

      <div className="discription">
        <p>
          Hestia is the amalgamation of talent, creativity and innovation binded
          by the passion of students of TKMCE. <br />
          It is the national techno-cultural fest of TKM College of Engineering
          that has in its few years of existance, quickly emerged as one of the
          biggest tech fests in south india. <br />
          I'm honored to have been a part of Hestia'22, Hestia'23, Hestia'24.
          <br />
          <br />
          Some of my works from Hestia'24.
        </p>
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

      <div className="imgcontainer">
        {images23.map((src, index) => (
          <div key={index} className="break-inside-avoid">
            <img src={src} className="w-full object-cover " />
          </div>
        ))}
      </div>

      <Footer />
    </>
  );
};

export default D3;
