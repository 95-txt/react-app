import "./Home.css";
import { useEffect, useState } from "react";
import ReactTextTransition, { presets } from "react-text-transition";
import { FaArrowDown } from "react-icons/fa";
import Card from "../Card";
import Footer from "./Footer";

const Home = () => {
  const discriptions = ["Designer", "Developer", "Engineering Student"];
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((index + 1) % discriptions.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [index]);

  const handleArrowClick = () => {
    window.scrollTo(0, 750);
  };

  return (
    <>
      <div className="home">
        <div className="image">
          <img src=".\src\assets\face1.JPG" alt="image" />
        </div>
        <div className="name">
          <p>Hi I'm Sinan</p>
        </div>
        <div className="namedisc">
          <ReactTextTransition
            className="flex justify-center"
            springConfig={presets.default}
            delay={0}
          >
            {discriptions[index]}
          </ReactTextTransition>
        </div>
        <div className="downarrow">
          <FaArrowDown className="animate-bounce" onClick={handleArrowClick} />
        </div>
      </div>

      <div className="cardcontainer">
        <div className="cards">
          <Card
            cardtitle="Projects"
            cardtext="I love crafting meaningful projects that resonate with target audiences."
            route="/projects"
            bgpath="'./src/assets/leaf.png'"
          />
          <Card
            cardtitle="Designs"
            cardtext="I love crafting meaningful designs that resonate with target audiences."
            route="/designs"
            bgpath="'./src/assets/kallu.JPG'"
          />
          <Card
            cardtitle="Art Works"
            cardtext="I love crafting meaningful arts that resonate with target audiences."
            route="/arts"
            bgpath="'./src/assets/achimma.png'"
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
