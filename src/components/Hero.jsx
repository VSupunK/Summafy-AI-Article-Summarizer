import React from "react";
import { logo } from "../assets";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo} alt="summafyLogo" className="w-28 object-contain" />

        <button
          type="button"
          onClick={() =>
            window.open(
              "https://github.com/VSupunK/Summafy-AI-Article-Summerizer"
            )
          }
          className="black_btn"
        >
          GitHub
        </button>
      </nav>

      <h1 className="head_text">
        Summarize Your Article with <br className="max-md:hidden" />
        <span className="green_gradient" q>
          OpenAI GPT-4
        </span>{" "}
        Simply
      </h1>
      <h2 className="desc">
        Simplify your reading experience with Summafy AI Article Summarizer.
        this helps you to summarize lengthy article into clear and concise
        content.
      </h2>
    </header>
  );
};

export default Hero;
