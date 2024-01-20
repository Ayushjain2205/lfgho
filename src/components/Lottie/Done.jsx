import React from "react";
import Lottie from "react-lottie-player";
import DoneLottie from "./Done.json";

const Done = () => {
  return (
    <Lottie
      loop
      animationData={DoneLottie}
      play
      style={{ width: 180, height: 180 }}
    />
  );
};

export default Done;
