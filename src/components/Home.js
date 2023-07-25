import React from "react";
import backgroundImage from "../assets/backgroundImage.jpg";
import PalomaLogo from "../assets/PalomaLogo.svg";
import Description from "./Description";

const Home = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <img
        src={backgroundImage}
        alt="/"
        className="fixed h-screen object-cover w-screen"
      />
      {/* logo on the left */}
      <div className="fixed flex  h-screen w-screen left-0 top-[0] md: bottom-0  sm:p-0 sm:ml-0 z-10 ">
        <img src={PalomaLogo} alt="Logo" className="logo-image " />
      </div>
      <div className="fixed flex bottom-7 right-[16rem] translate-y-[17.75rem] -rotate-90 md:text-2 ">
        <Description />
      </div>
    </div>
  );
};

export default Home;
