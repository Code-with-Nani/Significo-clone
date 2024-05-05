import React from "react";
import img1 from "../assets/images/slidesimg.jpg";
import img2 from "../assets/images/slidesImg5.jpg";
import img3 from "../assets/images/slideImg2.jpg";
import img4 from "../assets/images/slidesImg4.jpg";
import img5 from "../assets/images/slidesImg3.jpg";
import img6 from "../assets/images/Lightning.png";
import img7 from "../assets/images/Rocket.png";

const Slides = () => {
  return (
    <div className="slides section w-full h-screen flex overflow-hidden">
      <div className="slide1 w-full h-screen flex-shrink-0 flex flex-col justify-center items-center relative z-10">
        <div className="text ">
          <h2 className="light text-5xl lg:text-8xl">
            Real Talk,
            <br /> Real Impact
          </h2>
        </div>
        <div className="img lg:w-72 lg:h-72 w-48 h-48 bg-zinc-900 rounded-full overflow-hidden absolute right-0 translate-x-1/2">
          <img src={img1} alt="" className="select-none" />
        </div>
      </div>
      <div className="slide2 w-full h-screen flex-shrink-0 bg-[--salmon] flex justify-center items-center relative z-[9]">
        <div className="text text-center lg:w-[70%] w-[85%]">
          <h2 className="medium text-6xl lg:text-9xl text-white">20.4M</h2>
          <h2 className="medium text-2xl lg:text-5xl">
            Real people — real lives — we have built products and solutions for.
          </h2>
        </div>
        <div className="img lg:w-72 lg:h-72 w-48 h-48 absolute right-0 rounded-full translate-x-1/2 overflow-hidden">
          <img
            src={img2}
            alt=""
            className="w-full h-full object-cover select-none"
          />
        </div>
        <div className="img lg:w-52 lg:h-52 w-48 h-48 absolute top-1 rounded-full  overflow-hidden">
          <img
            src={img3}
            alt=""
            className="w-full h-full object-cover select-none"
          />
        </div>
        <div className="img  lg:w-52 lg:h-52 w-48 h-48 absolute bottom-1 rounded-full  overflow-hidden">
          <img
            src={img4}
            alt=""
            className="w-full h-full object-cover scale-125"
          />
        </div>
        <div className="img w-32 h-32 absolute -translate-x-32 lg:-translate-x-60 lg:bottom-24 bottom-36 rounded-full  overflow-hidden">
          <img
            src={img5}
            alt=""
            className="w-full h-full object-cover select-none"
          />
        </div>
      </div>
      <div className="slide3 w-full h-screen flex-shrink-0 bg-[--salmon] flex justify-center items-center relative">
        <div className="text text-center lg:w-[70%] w-[85%]">
          <h2 className="medium text-6xl lg:text-9xl text-white">49%</h2>
          <h2 className="medium text-2xl lg:text-5xl">Expert Women in Tech.</h2>
        </div>
        <div className="img lg:w-52 lg:h-52 w-48 h-48 absolute top-1 rounded-full  overflow-hidden">
          <img
            src={img6}
            alt=""
            className="w-full h-full object-cover select-none"
          />
        </div>
        <div className="img  lg:w-52 lg:h-52 w-48 h-48 absolute bottom-1 rounded-full  overflow-hidden lg:right-28 right-10">
          <img
            src={img7}
            alt=""
            className="w-full h-full object-cover scale-125 select-none"
          />
        </div>
      </div>
    </div>
  );
};

export default Slides;
