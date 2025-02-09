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
        bgpath="./src/assets/icebae.jpg"
      />
      <Design
        route="/designs/tkmce"
        designTitle="TKMCE"
        bgpath="./src/assets/TKMCE.JPG"
      />
      <Design
        route="/designs/hestia"
        designTitle="Hestia"
        bgpath="./src/assets/hestia.png"
      />
      <Design
        route="/designs/kallu"
        designTitle="Kallu"
        bgpath="./src/assets/kallu.JPG"
      />
      <Design
        route="/designs/northgate"
        designTitle="CREATIVE23"
        bgpath="./src/assets/northgate.jpg"
      />
      <Design
        route="/designs/fr"
        designTitle="FR"
        bgpath="./src/assets/fr.JPG"
      />
      <Design
        route="/designs/others"
        designTitle="Others"
        bgpath="./src/assets/Others.png"
      />
    </>
  );
};

export default Designs;
