import "./D.css";
import Footer from "./Footer";
import { useEffect } from "react";

const northgate = [
  "/assets/northgate/ng12.jpg",
  "/assets/northgate/ng13.jpg",
  "/assets/northgate/ng23.jpg",

  "/assets/northgate/ng25.jpg",
  "/assets/northgate/ng04.jpg",
  "/assets/northgate/ng07.jpg",

  "/assets/northgate/ng14.jpg",
  "/assets/northgate/ng28.jpg",
  "/assets/northgate/ng36.jpg",

  "/assets/northgate/ng15.jpg",
  "/assets/northgate/ng22.jpg",
  "/assets/northgate/ng06.jpg",

  "/assets/northgate/ng20.jpg",
  "/assets/northgate/ng16.jpg",
  "/assets/northgate/ng19.jpg",

  "/assets/northgate/ng01.jpg",
  "/assets/northgate/ng02.jpg",
  "/assets/northgate/ng03.jpg",

  "/assets/northgate/ng38.jpg",
  "/assets/northgate/ng09.jpg",
  "/assets/northgate/ng37.jpg",

  "/assets/northgate/ng21.jpg",
  "/assets/northgate/ng08.jpg",
  "/assets/northgate/ng26.jpg",

  "/assets/northgate/ng24.jpg",
  "/assets/northgate/ng39.jpg",
  "/assets/northgate/ng27.jpg",

  "/assets/northgate/ng10.jpg",
  "/assets/northgate/ng29.jpg",
  "/assets/northgate/ng05.jpg",

  "/assets/northgate/ng31.jpg",
  "/assets/northgate/ng30.jpg",
  "/assets/northgate/ng33.jpg",

  "/assets/northgate/ng32.jpg",
  "/assets/northgate/ng35.jpg",
  "/assets/northgate/ng34.jpg",

  "/assets/northgate/ng17.jpg",
  "/assets/northgate/ng18.jpg",
  "/assets/northgate/ng11.jpg",
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
        <img src="/assets/northgate/ng11.jpg" alt="" />
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
