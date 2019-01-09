import React from "react";
import { Fade } from "react-slideshow-image";

const fadeImages = [
  require("../images/slide1.jpg.png"),
  require("../images/slide2.jpg.png"),
  require("../images/slide3.jpg.png")
];

const fadeProperties = {
  duration: 5000,
  transitionDuration: 200,
  infinite: true,
  indicators: true,
  arrows: false
};

const Slideshow = () => {
  return (
    <Fade {...fadeProperties}>
      <div className="each-fade">
        <div className="image-container">
          <img src={fadeImages[0]} alt="slideone" />
        </div>
      </div>
      <div className="each-fade">
        <div className="image-container">
          <img src={fadeImages[1]} alt="slideone" />
        </div>
      </div>
      <div className="each-fade">
        <div className="image-container">
          <img src={fadeImages[2]} alt="slideone" />
        </div>
      </div>
    </Fade>
  );
};
export default Slideshow;
