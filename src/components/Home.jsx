import React from "react";
import video from "../assets/video/significo-main-hero.mp4";
import { elem } from "../assets/data/marqueeData";

const Home = () => {
  return (
    <div className="Home section w-full h-screen relative">
      <div className="hidden videoDiv w-full h-full absolute z-[5] overflow-hidden">
        <video className="w-full h-full object-cover" src={video}></video>
      </div>
      <div className="marqueeContainer w-full h-full relative">
        <div className="heading absolute top-32 lg:top-20 left-1/2 -translate-x-1/2 w-80">
          <h2 className="lg:text-2xl text-lg font-semibold text-center">
            Crafting a new paradigm of healthcare, one that is
          </h2>
        </div>
        <div className="box w-full absolute top-1/2 -translate-y-[48%] overflow-hidden">
          <div className="row w-full flex gap-6 lg:gap-8 -translate-x-2/3">
            {elem.map((items, index) => (
              <div
                key={index}
                className="elem flex items-center gap-6 lg:gap-8"
              >
                <h2 className="medium text-5xl lg:text-7xl">{items.h2}</h2>
                <div className="imgDiv w-10 lg:w-12 h-10 lg:h-12 rounded-full overflow-hidden">
                  <img
                    src={items.img}
                    alt=""
                    className="w-full h-full object-cover select-none"
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="row w-full flex gap-6 lg:gap-8 -translate-x-1/4">
            {elem.map((items, index) => (
              <div
                key={index}
                className="elem flex items-center gap-6 lg:gap-8"
              >
                <h2 className="medium text-5xl lg:text-7xl">{items.h2}</h2>
                <div className="imgDiv w-10 lg:w-12 h-10 lg:h-12 rounded-full overflow-hidden">
                  <img
                    src={items.img}
                    alt=""
                    className="w-full h-full object-cover select-none"
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="row w-full flex gap-6 lg:gap-8 -translate-x-2/4">
            {elem.map((items, index) => (
              <div
                key={index}
                className="elem flex items-center gap-6 lg:gap-8"
              >
                <h2 className="medium text-5xl lg:text-7xl">{items.h2}</h2>
                <div className="imgDiv w-10 lg:w-12 h-10 lg:h-12 rounded-full overflow-hidden">
                  <img
                    src={items.img}
                    alt=""
                    className="w-full h-full object-cover select-none"
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="row w-full flex gap-6 lg:gap-8 -translate-x-3/4">
            {elem.map((items, index) => (
              <div
                key={index}
                className="elem flex items-center gap-6 lg:gap-8"
              >
                <h2 className="medium text-5xl lg:text-7xl">{items.h2}</h2>
                <div className="imgDiv w-10 lg:w-12 h-10 lg:h-12 rounded-full overflow-hidden">
                  <img
                    src={items.img}
                    alt=""
                    className="w-full h-full object-cover select-none"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="btmText absolute z-[6] bottom-16 lg:bottom-12 left-12">
        <h1 className="font-medium w-40">
          We build big ideas. Software. Apps. Tools. For real people. Real
          lives.
        </h1>
      </div>
    </div>
  );
};

export default Home;
