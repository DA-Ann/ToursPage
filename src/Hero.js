import React from "react";
import LoadTours from "./LoadTours";
import Review from "./Reviews";
import { useGlobalContext } from "./context";

const Hero = () => {
  const { closeSubmenu } = useGlobalContext();
  return (
    <div onMouseOver={closeSubmenu}>
      <LoadTours />
      <Review />
    </div>
  );
};

export default Hero;
