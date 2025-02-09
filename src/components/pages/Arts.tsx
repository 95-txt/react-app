import Club from "../Club";
import Footer from "./Footer";

const accumed = [
  "./src/assets/arts/art01.jpg",
  "./src/assets/arts/art02.jpg",
  "./src/assets/arts/art04.jpg",
  "./src/assets/arts/art03.jpg",
  "./src/assets/arts/art05.jpg",
  "./src/assets/arts/art06.jpg",
  "./src/assets/arts/art07.jpg",
  "./src/assets/arts/art08.jpg",
  "./src/assets/arts/art09.jpg",
  "./src/assets/arts/art10.jpg",
  "./src/assets/arts/art11.jpg",
  "./src/assets/arts/art12.jpg",
  "./src/assets/arts/art13.jpg",
  "./src/assets/arts/art14.jpg",
  "./src/assets/arts/art15.jpg",
  "./src/assets/arts/art16.jpg",
  "./src/assets/arts/art17.jpg",
  "./src/assets/arts/art18.jpg",
  "./src/assets/arts/art19.jpg",
  "./src/assets/arts/art20.jpg",
  "./src/assets/arts/art21.jpg",
  "./src/assets/arts/art22.jpg",
  "./src/assets/arts/art25.jpg",
  "./src/assets/arts/art26.jpg",
  "./src/assets/arts/art24.jpg",
  "./src/assets/arts/art23.jpg",

  "./src/assets/arts/art27.jpg",
  "./src/assets/arts/art33.jpg",
  "./src/assets/arts/art34.jpg",
  "./src/assets/arts/art31.jpg",
  "./src/assets/arts/art32.jpg",
  "./src/assets/arts/art35.jpg",
  "./src/assets/arts/art37.jpg",
  "./src/assets/arts/art38.jpg",
  "./src/assets/arts/art40.jpg",
  "./src/assets/arts/art41.jpg",
  "./src/assets/arts/art43.jpg",
  "./src/assets/arts/art44.jpg",
  "./src/assets/arts/art45.jpg",
  "./src/assets/arts/art39.jpg",
  "./src/assets/arts/art42.jpg",
  "./src/assets/arts/art36.jpg",
  "./src/assets/arts/art28.jpg",
  "./src/assets/arts/art29.jpg",
  "./src/assets/arts/art30.jpg",

  "./src/assets/arts/art46.jpg",
  "./src/assets/arts/art47.jpg",
  "./src/assets/arts/art50.jpg",
  "./src/assets/arts/art48.jpg",
  "./src/assets/arts/art51.jpg",
  "./src/assets/arts/art52.jpg",
  "./src/assets/arts/art53.jpg",
  "./src/assets/arts/art54.jpg",
  "./src/assets/arts/art55.jpg",
  "./src/assets/arts/art56.jpg",
  "./src/assets/arts/art57.jpg",
  "./src/assets/arts/art49.jpg",
];

const Arts = () => {
  return (
    <>
      <div className="coverimg">
        <img src="./src/assets/arts/art.jpg" alt="" />
      </div>
      <Club clubname="Arts" arrayname={accumed} />
      <Footer />
    </>
  );
};

export default Arts;
