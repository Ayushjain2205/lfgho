import React from "react";
import Lottie from "react-lottie-player";
import LoaderLottie from "./Loader.json";

const Loader = () => {
  return (
    <div>
      <Lottie
        loop
        animationData={LoaderLottie}
        play
        style={{ width: 200, height: 200 }}
      />
    </div>
  );
};

export default Loader;
