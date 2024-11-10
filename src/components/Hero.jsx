import React from "react";
import { SummafyLogoIco } from "../assets";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex flex-col justify-between items-center">
        <img src={logo} alt="summafyLogo" />
      </nav>
    </header>
  );
};

export default Hero;
