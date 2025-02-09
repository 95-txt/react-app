//tkmce
import "./D.css";
import Footer from "./Footer";
import { useEffect } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import Slider from "react-slick";
import Club from "../Club";

const roobaro = [
  "./src/assets/tkmce/roobaroo/roobaroo4.jpg",
  "./src/assets/tkmce/roobaroo/roobaroo2.jpg",
  "./src/assets/tkmce/roobaroo/roobaroo3.jpg",
  "./src/assets/tkmce/roobaroo/roobaroo1.jpg",
];
const ieee = [
  "./src/assets/tkmce/ieee/ieee01.jpg",
  "./src/assets/tkmce/ieee/ieee03.jpg",
  "./src/assets/tkmce/ieee/ieee02.jpg",
  "./src/assets/tkmce/ieee/ieee07.jpg",
  "./src/assets/tkmce/ieee/ieee09.jpg",
  "./src/assets/tkmce/ieee/ieee10.jpg",
  "./src/assets/tkmce/ieee/ieee11.png",
  "./src/assets/tkmce/ieee/ieee12.jpg",
  "./src/assets/tkmce/ieee/ieee13.jpg",
  "./src/assets/tkmce/ieee/ieee15.jpg",
  "./src/assets/tkmce/ieee/ieee16.jpg",
  "./src/assets/tkmce/ieee/ieee17.jpg",
  "./src/assets/tkmce/ieee/ieee18.png",
  "./src/assets/tkmce/ieee/ieee19.jpg",
  "./src/assets/tkmce/ieee/ieee20.jpg",
  "./src/assets/tkmce/ieee/ieee22.jpg",
  "./src/assets/tkmce/ieee/ieee23.jpg",
  //"./src/assets/tkmce/ieee/ieee24.png",
  "./src/assets/tkmce/ieee/ieee26.jpg",
  "./src/assets/tkmce/ieee/ieee21.jpg",
  "./src/assets/tkmce/ieee/ieee29.jpg",
  "./src/assets/tkmce/ieee/ieee30.jpg",
  "./src/assets/tkmce/ieee/ieee31.jpg",
  "./src/assets/tkmce/ieee/ieee32.jpg",
  "./src/assets/tkmce/ieee/ieee33.jpg",
];

const ieeeslide = [
  "./src/assets/tkmce/ieee/ieee27.jpg",
  "./src/assets/tkmce/ieee/ieee28.jpg",
  "./src/assets/tkmce/ieee/ieee25.jpg",
  "./src/assets/tkmce/ieee/ieee04.jpg",
  "./src/assets/tkmce/ieee/ieee06.jpg",
  "./src/assets/tkmce/ieee/ieee05.jpg",
  "./src/assets/tkmce/ieee/ieee08.jpg",
];
const gdsc = [
  "./src/assets/tkmce/gdsc/core-9_01.jpg",
  "./src/assets/tkmce/gdsc/core-9_02.jpg",
  "./src/assets/tkmce/gdsc/core-9_03.jpg",
  "./src/assets/tkmce/gdsc/core-9_04.jpg",
  "./src/assets/tkmce/gdsc/core-9_05.jpg",
  "./src/assets/tkmce/gdsc/core-9_06.jpg",
  "./src/assets/tkmce/gdsc/core-9_07.jpg",
  "./src/assets/tkmce/gdsc/core-9_08.jpg",
  "./src/assets/tkmce/gdsc/core-9_09.jpg",
  "./src/assets/tkmce/gdsc/gdsc01.jpg",
  "./src/assets/tkmce/gdsc/gdsc02.gif",
  "./src/assets/tkmce/gdsc/gdsc03.gif",
  "./src/assets/tkmce/gdsc/gdsc05.jpg",
  "./src/assets/tkmce/gdsc/gdsc04.jpg",
  "./src/assets/tkmce/gdsc/gdsc06.jpg",
  "./src/assets/tkmce/gdsc/gdsc10.jpg",
  "./src/assets/tkmce/gdsc/gdsc11.jpg",
  "./src/assets/tkmce/gdsc/gdsc14.jpg",
  //"./src/assets/tkmce/gdsc/gdsc15.jpg",
  //"./src/assets/tkmce/gdsc/gdsc20.jpg",
  "./src/assets/tkmce/gdsc/gdsc22.jpg",
  "./src/assets/tkmce/gdsc/gdsc23.jpg",
  "./src/assets/tkmce/gdsc/gdsc26.jpg",
  "./src/assets/tkmce/gdsc/gdsc07.jpg",
  "./src/assets/tkmce/gdsc/gdsc19.jpg",
  "./src/assets/tkmce/gdsc/gdsc08.jpg",
  "./src/assets/tkmce/gdsc/gdsc24.jpg",
  "./src/assets/tkmce/gdsc/gdsc25.jpg",
  "./src/assets/tkmce/gdsc/gdsc09.jpg",
];

const gdscslide = [
  //"./src/assets/tkmce/gdsc/gdsc12.jpg",
  //"./src/assets/tkmce/gdsc/gdsc13.jpg",
  "./src/assets/tkmce/gdsc/gdsc21.jpg",
  "./src/assets/tkmce/gdsc/gdsc16.jpg",
  "./src/assets/tkmce/gdsc/gdsc17.jpg",
  "./src/assets/tkmce/gdsc/gdsc27.jpg",
  "./src/assets/tkmce/gdsc/gdsc18.jpg",
  "./src/assets/tkmce/gdsc/gdsc28.jpg",
  "./src/assets/tkmce/gdsc/gdsc29.jpg",
  "./src/assets/tkmce/gdsc/gdsc30.jpg",
];
const codingclub = [
  "./src/assets/tkmce/codingclub/cc07.jpg",
  "./src/assets/tkmce/codingclub/cc08.jpg",
  "./src/assets/tkmce/codingclub/cc01.jpg",
  "./src/assets/tkmce/codingclub/cc02.jpg",
  "./src/assets/tkmce/codingclub/cc04.jpg",
  "./src/assets/tkmce/codingclub/cc05.jpg",
  "./src/assets/tkmce/codingclub/cc06.jpg",
  "./src/assets/tkmce/codingclub/cc10.jpg",
  "./src/assets/tkmce/codingclub/cc09.png",
  "./src/assets/tkmce/codingclub/cc03.jpg",
];
const iste = [
  "./src/assets/tkmce/iste/iste02.png",
  "./src/assets/tkmce/iste/iste03.png",
  "./src/assets/tkmce/iste/iste04.png",
  "./src/assets/tkmce/iste/iste05.jpg",
  "./src/assets/tkmce/iste/iste07.png",
  "./src/assets/tkmce/iste/iste01.jpg",
  "./src/assets/tkmce/iste/iste06.jpg",
  "./src/assets/tkmce/iste/iste08.jpg",
];
const litdeb = [
  "./src/assets/tkmce/litdeb/ld01.jpg",
  "./src/assets/tkmce/litdeb/ld02.jpg",
  "./src/assets/tkmce/litdeb/ld06.jpg",
  "./src/assets/tkmce/litdeb/ld07.jpg",
  "./src/assets/tkmce/litdeb/ld08.jpg",
  "./src/assets/tkmce/litdeb/ld09.jpg",
  "./src/assets/tkmce/litdeb/ld10.jpg",
  "./src/assets/tkmce/litdeb/ld12.jpg",
  "./src/assets/tkmce/litdeb/ld14.jpg",
  "./src/assets/tkmce/litdeb/ld11.jpg",
  "./src/assets/tkmce/litdeb/ld13.jpg",
  "./src/assets/tkmce/litdeb/ld03.jpg",
  "./src/assets/tkmce/litdeb/ld04.jpg",
  "./src/assets/tkmce/litdeb/ld05.jpg",
];
const sports = [
  "./src/assets/tkmce/sports/sports12.jpg",
  "./src/assets/tkmce/sports/sports13.jpg",
  "./src/assets/tkmce/sports/sports09.jpg",
  "./src/assets/tkmce/sports/sports02.jpg",
  "./src/assets/tkmce/sports/sports05.jpg",
  "./src/assets/tkmce/sports/sports06.jpg",
  "./src/assets/tkmce/sports/sports03.jpg",
  "./src/assets/tkmce/sports/sports07.jpg",
  "./src/assets/tkmce/sports/sports08.jpg",
  "./src/assets/tkmce/sports/sports10.jpg",
  "./src/assets/tkmce/sports/sports11.jpg",
  "./src/assets/tkmce/sports/sports01.png",
  "./src/assets/tkmce/sports/sports14.jpg",
  "./src/assets/tkmce/sports/sports04.jpg",
];
const iei = [
  "./src/assets/tkmce/iei/iei1.png",
  "./src/assets/tkmce/iei/iei2.jpg",
  "./src/assets/tkmce/iei/iei3.jpg",
];
const iktara = [
  "./src/assets/tkmce/iktara/iktara5.jpg",
  "./src/assets/tkmce/iktara/iktara1.jpg",
  "./src/assets/tkmce/iktara/iktara2.jpg",
  "./src/assets/tkmce/iktara/iktara6.jpg",
  "./src/assets/tkmce/iktara/iktara3.jpg",
  "./src/assets/tkmce/iktara/iktara4.jpg",
];
const cse = [
  "./src/assets/tkmce/cse/cse5.jpg",
  "./src/assets/tkmce/cse/cse2.jpg",
  "./src/assets/tkmce/cse/cse1.jpg",
  "./src/assets/tkmce/cse/cse3.jpg",
  "./src/assets/tkmce/cse/cse4.jpg",
];
const deeksha = [
  "./src/assets/tkmce/deeksha/deeksha1.jpg",
  "./src/assets/tkmce/deeksha/deeksha2.jpg",
  "./src/assets/tkmce/deeksha/deeksha3.jpg",
];
const others = [
  "./src/assets/tkmce/tkm1.jpg",
  "./src/assets/tkmce/tkm2.jpg",
  "./src/assets/tkmce/tkm6.jpg",
  "./src/assets/tkmce/tkm12.jpg",
  "./src/assets/tkmce/tkm4.jpg",
  "./src/assets/tkmce/tkm10.jpg",
  "./src/assets/tkmce/tkm8.jpg",
  "./src/assets/tkmce/tkm9.jpg",
  "./src/assets/tkmce/tkm7.png",
  "./src/assets/tkmce/tkm13.jpg",
  "./src/assets/tkmce/tkm15.jpg",
  "./src/assets/tkmce/tkm17.jpg",
  "./src/assets/tkmce/tkm3.jpg",
  "./src/assets/tkmce/tkm16.png",
  "./src/assets/tkmce/tkm14.jpg",
  "./src/assets/tkmce/tkm5.jpg",
  "./src/assets/tkmce/tkm11.jpg",
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
        <img src="./src/assets/tkmce.jpg" />
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
