import Design from "../Design";
import { useEffect } from "react";

const Designs = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, []);

  return (
    <>
      <Design
        route="/designs/icebae"
        designTitle="icebae"
        bgpath="/assets/icebae.jpg"
      />
      <Design
        route="/designs/tkmce"
        designTitle="TKMCE"
        bgpath="/assets/TKMCE.jpg"
      />
      <Design
        route="/designs/hestia"
        designTitle="Hestia"
        bgpath="/assets/hestia.png"
      />
      <Design
        route="/designs/kallu"
        designTitle="Kallu"
        bgpath="/assets/kallu.jpg"
      />
      <Design
        route="/designs/northgate"
        designTitle="CREATIVE23"
        bgpath="/assets/northgate.jpg"
      />
      <Design route="/designs/fr" designTitle="FR" bgpath="/assets/fr.jpg" />
      <Design
        route="/designs/others"
        designTitle="Others"
        bgpath="/assets/Others.png"
      />
    </>
  );
};

export default Designs;
