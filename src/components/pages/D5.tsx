//tkmce
import "./D.css";
import Footer from "./Footer";
import { useEffect } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import Slider from "react-slick";
import Club from "../Club";

const roobaro = [
  "/assets/tkmce/roobaroo/roobaroo4.jpg",
  "/assets/tkmce/roobaroo/roobaroo2.jpg",
  "/assets/tkmce/roobaroo/roobaroo3.jpg",
  "/assets/tkmce/roobaroo/roobaroo1.jpg",
];
const ieee = [
  "/assets/tkmce/ieee/ieee01.jpg",
  "/assets/tkmce/ieee/ieee03.jpg",
  "/assets/tkmce/ieee/ieee02.jpg",
  "/assets/tkmce/ieee/ieee07.jpg",
  "/assets/tkmce/ieee/ieee09.jpg",
  "/assets/tkmce/ieee/ieee10.jpg",
  "/assets/tkmce/ieee/ieee11.png",
  "/assets/tkmce/ieee/ieee12.jpg",
  "/assets/tkmce/ieee/ieee13.jpg",
  "/assets/tkmce/ieee/ieee15.jpg",
  "/assets/tkmce/ieee/ieee16.jpg",
  "/assets/tkmce/ieee/ieee17.jpg",
  "/assets/tkmce/ieee/ieee18.png",
  "/assets/tkmce/ieee/ieee19.jpg",
  "/assets/tkmce/ieee/ieee20.jpg",
  "/assets/tkmce/ieee/ieee22.jpg",
  "/assets/tkmce/ieee/ieee23.jpg",
  //"./src/assets/tkmce/ieee/ieee24.png",
  "/assets/tkmce/ieee/ieee26.jpg",
  "/assets/tkmce/ieee/ieee21.jpg",
  "/assets/tkmce/ieee/ieee29.jpg",
  "/assets/tkmce/ieee/ieee30.jpg",
  "/assets/tkmce/ieee/ieee31.jpg",
  "/assets/tkmce/ieee/ieee32.jpg",
  "/assets/tkmce/ieee/ieee33.jpg",
];

const ieeeslide = [
  "/assets/tkmce/ieee/ieee27.jpg",
  "/assets/tkmce/ieee/ieee28.jpg",
  "/assets/tkmce/ieee/ieee25.jpg",
  "/assets/tkmce/ieee/ieee04.jpg",
  "/assets/tkmce/ieee/ieee06.jpg",
  "/assets/tkmce/ieee/ieee05.jpg",
  "/assets/tkmce/ieee/ieee08.jpg",
];
const gdsc = [
  "/assets/tkmce/gdsc/core-9_01.jpg",
  "/assets/tkmce/gdsc/core-9_02.jpg",
  "/assets/tkmce/gdsc/core-9_03.jpg",
  "/assets/tkmce/gdsc/core-9_04.jpg",
  "/assets/tkmce/gdsc/core-9_05.jpg",
  "/assets/tkmce/gdsc/core-9_06.jpg",
  "/assets/tkmce/gdsc/core-9_07.jpg",
  "/assets/tkmce/gdsc/core-9_08.jpg",
  "/assets/tkmce/gdsc/core-9_09.jpg",
  "/assets/tkmce/gdsc/gdsc01.jpg",
  "/assets/tkmce/gdsc/gdsc02.gif",
  "/assets/tkmce/gdsc/gdsc03.gif",
  "/assets/tkmce/gdsc/gdsc05.jpg",
  "/assets/tkmce/gdsc/gdsc04.jpg",
  "/assets/tkmce/gdsc/gdsc06.jpg",
  "/assets/tkmce/gdsc/gdsc10.jpg",
  "/assets/tkmce/gdsc/gdsc11.jpg",
  "/assets/tkmce/gdsc/gdsc14.jpg",
  //"./src/assets/tkmce/gdsc/gdsc15.jpg",
  //"./src/assets/tkmce/gdsc/gdsc20.jpg",
  "/assets/tkmce/gdsc/gdsc22.jpg",
  "/assets/tkmce/gdsc/gdsc23.jpg",
  "/assets/tkmce/gdsc/gdsc26.jpg",
  "/assets/tkmce/gdsc/gdsc07.jpg",
  "/assets/tkmce/gdsc/gdsc19.jpg",
  "/assets/tkmce/gdsc/gdsc08.jpg",
  "/assets/tkmce/gdsc/gdsc24.jpg",
  "/assets/tkmce/gdsc/gdsc25.jpg",
  "/assets/tkmce/gdsc/gdsc09.jpg",
];

const gdscslide = [
  //"./src/assets/tkmce/gdsc/gdsc12.jpg",
  //"./src/assets/tkmce/gdsc/gdsc13.jpg",
  "/assets/tkmce/gdsc/gdsc21.jpg",
  "/assets/tkmce/gdsc/gdsc16.jpg",
  "/assets/tkmce/gdsc/gdsc17.jpg",
  "/assets/tkmce/gdsc/gdsc27.jpg",
  "/assets/tkmce/gdsc/gdsc18.jpg",
  "/assets/tkmce/gdsc/gdsc28.jpg",
  "/assets/tkmce/gdsc/gdsc29.jpg",
  "/assets/tkmce/gdsc/gdsc30.jpg",
];
const codingclub = [
  "/assets/tkmce/codingclub/cc07.jpg",
  "/assets/tkmce/codingclub/cc08.jpg",
  "/assets/tkmce/codingclub/cc01.jpg",
  "/assets/tkmce/codingclub/cc02.jpg",
  "/assets/tkmce/codingclub/cc04.jpg",
  "/assets/tkmce/codingclub/cc05.jpg",
  "/assets/tkmce/codingclub/cc06.jpg",
  "/assets/tkmce/codingclub/cc10.jpg",
  "/assets/tkmce/codingclub/cc09.png",
  "/assets/tkmce/codingclub/cc03.jpg",
];
const iste = [
  "/assets/tkmce/iste/iste02.png",
  "/assets/tkmce/iste/iste03.png",
  "/assets/tkmce/iste/iste04.png",
  "/assets/tkmce/iste/iste05.jpg",
  "/assets/tkmce/iste/iste07.png",
  "/assets/tkmce/iste/iste01.jpg",
  "/assets/tkmce/iste/iste06.jpg",
  "/assets/tkmce/iste/iste08.jpg",
];
const litdeb = [
  "/assets/tkmce/litdeb/ld01.jpg",
  "/assets/tkmce/litdeb/ld02.jpg",
  "/assets/tkmce/litdeb/ld06.jpg",
  "/assets/tkmce/litdeb/ld07.jpg",
  "/assets/tkmce/litdeb/ld08.jpg",
  "/assets/tkmce/litdeb/ld09.jpg",
  "/assets/tkmce/litdeb/ld10.jpg",
  "/assets/tkmce/litdeb/ld12.jpg",
  "/assets/tkmce/litdeb/ld14.jpg",
  "/assets/tkmce/litdeb/ld11.jpg",
  "/assets/tkmce/litdeb/ld13.jpg",
  "/assets/tkmce/litdeb/ld03.jpg",
  "/assets/tkmce/litdeb/ld04.jpg",
  "/assets/tkmce/litdeb/ld05.jpg",
];
const sports = [
  "/assets/tkmce/sports/sports12.jpg",
  "/assets/tkmce/sports/sports13.jpg",
  "/assets/tkmce/sports/sports09.jpg",
  "/assets/tkmce/sports/sports02.jpg",
  "/assets/tkmce/sports/sports05.jpg",
  "/assets/tkmce/sports/sports06.jpg",
  "/assets/tkmce/sports/sports03.jpg",
  "/assets/tkmce/sports/sports07.jpg",
  "/assets/tkmce/sports/sports08.jpg",
  "/assets/tkmce/sports/sports10.jpg",
  "/assets/tkmce/sports/sports11.jpg",
  "/assets/tkmce/sports/sports01.png",
  "/assets/tkmce/sports/sports14.jpg",
  "/assets/tkmce/sports/sports04.jpg",
];
const iei = [
  "/assets/tkmce/iei/iei1.png",
  "/assets/tkmce/iei/iei2.jpg",
  "/assets/tkmce/iei/iei3.jpg",
];
const iktara = [
  "/assets/tkmce/iktara/iktara5.jpg",
  "/assets/tkmce/iktara/iktara1.jpg",
  "/assets/tkmce/iktara/iktara2.jpg",
  "/assets/tkmce/iktara/iktara6.jpg",
  "/assets/tkmce/iktara/iktara3.jpg",
  "/assets/tkmce/iktara/iktara4.jpg",
];
const cse = [
  "/assets/tkmce/cse/cse5.jpg",
  "/assets/tkmce/cse/cse2.jpg",
  "/assets/tkmce/cse/cse1.jpg",
  "/assets/tkmce/cse/cse3.jpg",
  "/assets/tkmce/cse/cse4.jpg",
];
const deeksha = [
  "/assets/tkmce/deeksha/deeksha1.jpg",
  "/assets/tkmce/deeksha/deeksha2.jpg",
  "/assets/tkmce/deeksha/deeksha3.jpg",
];
const others = [
  "/assets/tkmce/tkm1.jpg",
  "/assets/tkmce/tkm2.jpg",
  "/assets/tkmce/tkm6.jpg",
  "/assets/tkmce/tkm12.jpg",
  "/assets/tkmce/tkm4.jpg",
  "/assets/tkmce/tkm10.jpg",
  "/assets/tkmce/tkm8.jpg",
  "/assets/tkmce/tkm9.jpg",
  "/assets/tkmce/tkm7.png",
  "/assets/tkmce/tkm13.jpg",
  "/assets/tkmce/tkm15.jpg",
  "/assets/tkmce/tkm17.jpg",
  "/assets/tkmce/tkm3.jpg",
  "/assets/tkmce/tkm16.png",
  "/assets/tkmce/tkm14.jpg",
  "/assets/tkmce/tkm5.jpg",
  "/assets/tkmce/tkm11.jpg",
];

const D5 = () => {
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
        <img src="/assets/tkmce.jpg" />
      </div>

      <Club clubname="Sports" arrayname={sports} />
      <Club clubname="GDSC" arrayname={gdsc} />
      <div className="gallery">
        <div className="himages">
          <Slider {...settings}>
            {gdscslide.map((src, index) => (
              <div key={index} className="himage">
                <img src={src} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <Club clubname="IEEE" arrayname={ieee} />
      <div className="gallery">
        <div className="himages">
          <Slider {...settings}>
            {ieeeslide.map((src, index) => (
              <div key={index} className="himage">
                <img src={src} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <Club clubname="L & D" arrayname={litdeb} />
      <Club clubname="Coding Club" arrayname={codingclub} />
      <Club clubname="IKTARA" arrayname={iktara} />
      <Club clubname="CSE" arrayname={cse} />
      <Club clubname="Roobaroo'23" arrayname={roobaro} />
      <Club clubname="Deeksha'23" arrayname={deeksha} />
      <Club clubname="IEI" arrayname={iei} />
      <Club clubname="ISTE" arrayname={iste} />
      <Club clubname="Others" arrayname={others} />
      <Footer />
    </>
  );
};

export default D5;
