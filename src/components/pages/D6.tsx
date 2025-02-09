import "./D.css";
import Footer from "./Footer";
import { useEffect } from "react";
import Club from "../Club";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import Slider from "react-slick";

const accumed = [
  "./src/assets/others/accumed/Accumed1.png",
  "./src/assets/others/accumed/Accumed3.jpg",
  "./src/assets/others/accumed/Accumed4.jpg",
  "./src/assets/others/accumed/Accumed5.png",
  "./src/assets/others/accumed/Accumed6.jpg",
  "./src/assets/others/accumed/Accumed7.jpg",
  "./src/assets/others/accumed/Accumed2.jpg",
];
const alharaka = [
  "./src/assets/others/alharaka/alharaka4.jpg",
  "./src/assets/others/alharaka/alharaka5.jpg",
  "./src/assets/others/alharaka/alharaka6.jpg",
  "./src/assets/others/alharaka/alharaka3.jpg",
  "./src/assets/others/alharaka/alharaka1.jpg",
  "./src/assets/others/alharaka/alharaka2.jpg",
];
const franklins = [
  "./src/assets/others/franklins/br1.jpg",
  "./src/assets/others/franklins/br2.jpg",
  "./src/assets/others/franklins/br3.jpg",
  "./src/assets/others/franklins/br4.jpg",
  "./src/assets/others/franklins/br5.jpg",
  "./src/assets/others/franklins/br6.jpg",
];
const hitech = [
  "./src/assets/others/hitech/hit3.jpg",
  "./src/assets/others/hitech/hit1.jpg",
  "./src/assets/others/hitech/hit2.jpg",
  "./src/assets/others/hitech/hit4.jpg",
  "./src/assets/others/hitech/hit5.jpg",
  "./src/assets/others/hitech/hit6.jpg",
];
const igc = [
  "./src/assets/others/igc/igc1.png",
  "./src/assets/others/igc/igc2.jpg",
  "./src/assets/others/igc/igc3.jpg",
];
const raha = [
  "./src/assets/others/raha/raha4.png",
  "./src/assets/others/raha/raha6.jpg",
  "./src/assets/others/raha/raha5.png",
  "./src/assets/others/raha/raha1.png",
  "./src/assets/others/raha/raha2.png",
  "./src/assets/others/raha/raha3.jpg",
];
const roy = [
  "./src/assets/others/roy/roy01.jpg",
  "./src/assets/others/roy/roy02.jpg",
  "./src/assets/others/roy/roy03.jpg",
  "./src/assets/others/roy/roy04.jpg",
  "./src/assets/others/roy/roy05.jpg",
  "./src/assets/others/roy/roy06.jpg",
  "./src/assets/others/roy/roy07.jpg",
  "./src/assets/others/roy/roy08.jpg",
  "./src/assets/others/roy/roy09.jpg",
  "./src/assets/others/roy/roy10.jpg",
  "./src/assets/others/roy/roy11.jpg",
  "./src/assets/others/roy/roy12.jpg",
  "./src/assets/others/roy/roy13.jpg",
  "./src/assets/others/roy/roy14.jpg",
  "./src/assets/others/roy/roy15.jpg",
  "./src/assets/others/roy/roy16.jpg",
  "./src/assets/others/roy/roy17.jpg",
  "./src/assets/others/roy/roy18.jpg",
  "./src/assets/others/roy/roy19.jpg",
  "./src/assets/others/roy/roy20.jpg",
  "./src/assets/others/roy/roy21.jpg",
  "./src/assets/others/roy/roy22.jpg",
];
const ssf = [
  "./src/assets/others/ssf/ssf01.jpg",
  "./src/assets/others/ssf/ssf16.jpg",
  "./src/assets/others/ssf/ssf02.jpg",
  "./src/assets/others/ssf/ssf10.jpg",
  "./src/assets/others/ssf/ssf11.jpg",
  "./src/assets/others/ssf/ssf12.jpg",
  "./src/assets/others/ssf/ssf13.jpg",
  "./src/assets/others/ssf/ssf14.jpg",
  "./src/assets/others/ssf/ssf18.jpg",
  "./src/assets/others/ssf/ssf19.jpg",
  "./src/assets/others/ssf/ssf20.png",
  "./src/assets/others/ssf/ssf21.jpg",
  "./src/assets/others/ssf/ssf23.jpg",
  "./src/assets/others/ssf/ssf03.jpg",
  "./src/assets/others/ssf/ssf04.jpg",
  "./src/assets/others/ssf/ssf08.jpg",
  "./src/assets/others/ssf/ssf09.jpg",
  "./src/assets/others/ssf/ssf15.jpg",
  "./src/assets/others/ssf/ssf22.jpg",
  "./src/assets/others/ssf/ssf05.jpg",
  "./src/assets/others/ssf/ssf06.jpg",
  "./src/assets/others/ssf/ssf17.jpg",
  "./src/assets/others/ssf/ssf07.jpg",
];
const tm = [
  "./src/assets/others/tm/tm16.jpg",
  "./src/assets/others/tm/tm02.png",
  "./src/assets/others/tm/tm10.png",
  "./src/assets/others/tm/tm11.png",
  "./src/assets/others/tm/tm12.jpg",
  "./src/assets/others/tm/tm14.png",
  "./src/assets/others/tm/tm03.jpg",
  "./src/assets/others/tm/tm04.jpg",
  "./src/assets/others/tm/tm08.png",
  "./src/assets/others/tm/tm09.png",
  "./src/assets/others/tm/tm15.png",
  "./src/assets/others/tm/tm05.jpg",
  "./src/assets/others/tm/tm13.png",
  "./src/assets/others/tm/tm06.png",
  "./src/assets/others/tm/tm07.png",
  "./src/assets/others/tm/tm01.jpg",
];
const others = [
  "./src/assets/others/other05.jpg",
  "./src/assets/others/other06.jpg",
  "./src/assets/others/other07.jpg",
  "./src/assets/others/other09.jpg",
  "./src/assets/others/other10.jpg",
  "./src/assets/others/other12.jpg",
  "./src/assets/others/other14.jpg",
  "./src/assets/others/other15.jpg",
  "./src/assets/others/other25.jpg",
  "./src/assets/others/other11.jpg",
  "./src/assets/others/other20.jpg",
  "./src/assets/others/other24.jpg",
  "./src/assets/others/other03.jpg",
  "./src/assets/others/other23.jpg",
  "./src/assets/others/other18.jpg",
  "./src/assets/others/other30.png",
  "./src/assets/others/other02.jpg",
  "./src/assets/others/other28.png",
  "./src/assets/others/other13.jpg",
  "./src/assets/others/other27.jpg",
  "./src/assets/others/other04.jpg",
  "./src/assets/others/other26.jpg",
  "./src/assets/others/other22.jpg",
  "./src/assets/others/other16.png",
  "./src/assets/others/other17.jpg",
  "./src/assets/others/other08.jpg",
  "./src/assets/others/other01.jpg",
  "./src/assets/others/other31.jpg",
  "./src/assets/others/other32.jpg",
  "./src/assets/others/other29.jpg",
  "./src/assets/others/other21.jpg",
  "./src/assets/others/other19.jpg",
];

const D6 = () => {
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
        <img src="./src/assets/Accumed.png" alt="" />
      </div>
      <Club clubname="TostMasters" arrayname={tm} />
      <Club clubname="RAHA" arrayname={raha} />
      <Club clubname="AccuMed" arrayname={accumed} />
      <div className="clubhead">FRANKLIN'S</div>
      <div className="gallery">
        <div className="himages">
          <Slider {...settings}>
            {franklins.map((src, index) => (
              <div key={index} className="himage">
                <img src={src} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <Club clubname="SSF" arrayname={ssf} />
      <Club clubname="Algosail" arrayname={roy} />
      <Club clubname="IGC Group" arrayname={igc} />
      <Club clubname="HI TECH" arrayname={hitech} />
      <Club clubname="Al haraka" arrayname={alharaka} />

      <Club clubname="Others" arrayname={others} />
      <Footer />
    </>
  );
};

export default D6;
