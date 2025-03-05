import "./D.css";
import Footer from "./Footer";
import { useEffect } from "react";
import Club from "../Club";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import Slider from "react-slick";

const accumed = [
  "/assets/others/accumed/Accumed1.png",
  "/assets/others/accumed/Accumed3.jpg",
  "/assets/others/accumed/Accumed4.jpg",
  "/assets/others/accumed/Accumed5.png",
  "/assets/others/accumed/Accumed6.jpg",
  "/assets/others/accumed/Accumed7.jpg",
  "/assets/others/accumed/Accumed2.jpg",
];
const alharaka = [
  "/assets/others/alharaka/alharaka4.jpg",
  "/assets/others/alharaka/alharaka5.jpg",
  "/assets/others/alharaka/alharaka6.jpg",
  "/assets/others/alharaka/alharaka3.jpg",
  "/assets/others/alharaka/alharaka1.jpg",
  "/assets/others/alharaka/alharaka2.jpg",
];
const franklins = [
  "/assets/others/franklins/br1.jpg",
  "/assets/others/franklins/br2.jpg",
  "/assets/others/franklins/br3.jpg",
  "/assets/others/franklins/br4.jpg",
  "/assets/others/franklins/br5.jpg",
  "/assets/others/franklins/br6.jpg",
];
const hitech = [
  "/assets/others/hitech/hit3.jpg",
  "/assets/others/hitech/hit1.jpg",
  "/assets/others/hitech/hit2.jpg",
  "/assets/others/hitech/hit4.jpg",
  "/assets/others/hitech/hit5.jpg",
  "/assets/others/hitech/hit6.jpg",
];
const igc = [
  "/assets/others/igc/igc1.png",
  "/assets/others/igc/igc2.jpg",
  "/assets/others/igc/igc3.jpg",
];
const raha = [
  "/assets/others/raha/raha4.png",
  "/assets/others/raha/raha6.jpg",
  "/assets/others/raha/raha5.png",
  "/assets/others/raha/raha1.png",
  "/assets/others/raha/raha2.png",
  "/assets/others/raha/raha3.jpg",
];
const roy = [
  "/assets/others/roy/roy01.jpg",
  "/assets/others/roy/roy02.jpg",
  "/assets/others/roy/roy03.jpg",
  "/assets/others/roy/roy04.jpg",
  "/assets/others/roy/roy05.jpg",
  "/assets/others/roy/roy06.jpg",
  "/assets/others/roy/roy07.jpg",
  "/assets/others/roy/roy08.jpg",
  "/assets/others/roy/roy09.jpg",
  "/assets/others/roy/roy10.jpg",
  "/assets/others/roy/roy11.jpg",
  "/assets/others/roy/roy12.jpg",
  "/assets/others/roy/roy13.jpg",
  "/assets/others/roy/roy14.jpg",
  "/assets/others/roy/roy15.jpg",
  "/assets/others/roy/roy16.jpg",
  "/assets/others/roy/roy17.jpg",
  "/assets/others/roy/roy18.jpg",
  "/assets/others/roy/roy19.jpg",
  "/assets/others/roy/roy20.jpg",
  "/assets/others/roy/roy21.jpg",
  "/assets/others/roy/roy22.jpg",
];
const ssf = [
  "/assets/others/ssf/ssf01.jpg",
  "/assets/others/ssf/ssf16.jpg",
  "/assets/others/ssf/ssf02.jpg",
  "/assets/others/ssf/ssf10.jpg",
  "/assets/others/ssf/ssf11.jpg",
  "/assets/others/ssf/ssf12.jpg",
  "/assets/others/ssf/ssf13.jpg",
  "/assets/others/ssf/ssf14.jpg",
  "/assets/others/ssf/ssf18.jpg",
  "/assets/others/ssf/ssf19.jpg",
  "/assets/others/ssf/ssf20.png",
  "/assets/others/ssf/ssf21.jpg",
  "/assets/others/ssf/ssf23.jpg",
  "/assets/others/ssf/ssf03.jpg",
  "/assets/others/ssf/ssf04.jpg",
  "/assets/others/ssf/ssf08.jpg",
  "/assets/others/ssf/ssf09.jpg",
  "/assets/others/ssf/ssf15.jpg",
  "/assets/others/ssf/ssf22.jpg",
  "/assets/others/ssf/ssf05.jpg",
  "/assets/others/ssf/ssf06.jpg",
  "/assets/others/ssf/ssf17.jpg",
  "/assets/others/ssf/ssf07.jpg",
];
const tm = [
  "/assets/others/tm/tm16.jpg",
  "/assets/others/tm/tm02.png",
  "/assets/others/tm/tm10.png",
  "/assets/others/tm/tm11.png",
  "/assets/others/tm/tm12.jpg",
  "/assets/others/tm/tm14.png",
  "/assets/others/tm/tm03.jpg",
  "/assets/others/tm/tm04.jpg",
  "/assets/others/tm/tm08.png",
  "/assets/others/tm/tm09.png",
  "/assets/others/tm/tm15.png",
  "/assets/others/tm/tm05.jpg",
  "/assets/others/tm/tm13.png",
  "/assets/others/tm/tm06.png",
  "/assets/others/tm/tm07.png",
  "/assets/others/tm/tm01.jpg",
];
const others = [
  "/assets/others/other05.jpg",
  "/assets/others/other06.jpg",
  "/assets/others/other07.jpg",
  "/assets/others/other09.jpg",
  "/assets/others/other10.jpg",
  "/assets/others/other12.jpg",
  "/assets/others/other14.jpg",
  "/assets/others/other15.jpg",
  "/assets/others/other25.jpg",
  "/assets/others/other11.jpg",
  "/assets/others/other20.jpg",
  "/assets/others/other24.jpg",
  "/assets/others/other03.jpg",
  "/assets/others/other23.jpg",
  "/assets/others/other18.jpg",
  "/assets/others/other30.png",
  "/assets/others/other02.jpg",
  "/assets/others/other28.png",
  "/assets/others/other13.jpg",
  "/assets/others/other27.jpg",
  "/assets/others/other04.jpg",
  "/assets/others/other26.jpg",
  "/assets/others/other22.jpg",
  "/assets/others/other16.png",
  "/assets/others/other17.jpg",
  "/assets/others/other08.jpg",
  "/assets/others/other01.jpg",
  "/assets/others/other31.jpg",
  "/assets/others/other32.jpg",
  "/assets/others/other29.jpg",
  "/assets/others/other21.jpg",
  "/assets/others/other19.jpg",
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
        <img src="/assets/Accumed.png" alt="" />
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
