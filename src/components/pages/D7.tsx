import "./D.css";
import Footer from "./Footer";
import { useEffect } from "react";

const northgate = [
  "./src/assets/northgate/ng12.jpg",
  "./src/assets/northgate/ng13.jpg",
  "./src/assets/northgate/ng23.jpg",

  "./src/assets/northgate/ng25.jpg",
  "./src/assets/northgate/ng04.jpg",
  "./src/assets/northgate/ng07.jpg",

  "./src/assets/northgate/ng14.jpg",
  "./src/assets/northgate/ng28.jpg",
  "./src/assets/northgate/ng36.jpg",

  "./src/assets/northgate/ng15.jpg",
  "./src/assets/northgate/ng22.jpg",
  "./src/assets/northgate/ng06.jpg",

  "./src/assets/northgate/ng20.jpg",
  "./src/assets/northgate/ng16.jpg",
  "./src/assets/northgate/ng19.jpg",

  "./src/assets/northgate/ng01.jpg",
  "./src/assets/northgate/ng02.jpg",
  "./src/assets/northgate/ng03.jpg",

  "./src/assets/northgate/ng38.jpg",
  "./src/assets/northgate/ng09.jpg",
  "./src/assets/northgate/ng37.jpg",

  "./src/assets/northgate/ng21.jpg",
  "./src/assets/northgate/ng08.jpg",
  "./src/assets/northgate/ng26.jpg",

  "./src/assets/northgate/ng24.jpg",
  "./src/assets/northgate/ng39.jpg",
  "./src/assets/northgate/ng27.jpg",

  "./src/assets/northgate/ng10.jpg",
  "./src/assets/northgate/ng29.jpg",
  "./src/assets/northgate/ng05.jpg",

  "./src/assets/northgate/ng31.jpg",
  "./src/assets/northgate/ng30.jpg",
  "./src/assets/northgate/ng33.jpg",

  "./src/assets/northgate/ng32.jpg",
  "./src/assets/northgate/ng35.jpg",
  "./src/assets/northgate/ng34.jpg",

  "./src/assets/northgate/ng17.jpg",
  "./src/assets/northgate/ng18.jpg",
  "./src/assets/northgate/ng11.jpg",
];

const D7 = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, []);

  return (
    <>
      <div className="coverimg">
        <img src="./src/assets/northgate/ng11.jpg" alt="" />
      </div>
      <div className="imgcontainer">
        {northgate.map((src, index) => (
          <div key={index} className="break-inside-avoid">
            <img src={src} className="w-full object-cover " />
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default D7;
