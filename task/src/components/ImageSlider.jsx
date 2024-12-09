import React from "react";
import { useState } from "react";

const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const sliderStyle = {
    height: "100%",
     
  }

const slideStyle = {
    width: "100%",
    height: "100%",
    borderRadius: "10px",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundImage: `url(${slides[currentIndex].url})`,
}

  return (
    <div className="sliderStyle">
      <div
        style={slideStyle}
      ></div>
    </div>
  );
};

export default ImageSlider;
