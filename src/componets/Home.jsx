import React from "react";
import video from "../assets/video/significo-main-hero.mp4";
import { elem } from "../assets/data/marqueeData";

const Home = () => {
  return (
    <div className="Home section w-full h-screen relative">
      <div className="hidden videoDiv w-full h-full absolute z-[5] overflow-hidden">
        <video className="w-full" src={video}></video>
      </div>
      <div className="marqueeContainer w-full h-full relative">
        <div className="heading absolute top-20 left-1/2 -translate-x-1/2 w-80">
          <h2 className="text-2xl font-semibold text-center">
            Crafting a new paradigm of healthcare, one that is
          </h2>
        </div>
        <div className="box w-full absolute top-1/2 -translate-y-1/2 overflow-hidden">
          <div className="row w-full flex gap-8 -translate-x-2/3">
            {elem.map((items, index) => (
              <div key={index} className="elem flex items-center gap-8">
                <h2 className="medium text-7xl">{items.h2}</h2>
                <div className="imgDiv w-12 h-12 rounded-full overflow-hidden">
                  <img
                    src={items.img}
                    alt=""
                    className="w-full h-full object-cover select-none"
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="row w-full flex gap-8 -translate-x-1/4">
            {elem.map((items, index) => (
              <div key={index} className="elem flex items-center gap-8">
                <h2 className="medium text-7xl">{items.h2}</h2>
                <div className="imgDiv w-12 h-12 rounded-full overflow-hidden">
                  <img
                    src={items.img}
                    alt=""
                    className="w-full h-full object-cover select-none"
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="row w-full flex gap-8 -translate-x-2/4">
            {elem.map((items, index) => (
              <div key={index} className="elem flex items-center gap-8">
                <h2 className="medium text-7xl">{items.h2}</h2>
                <div className="imgDiv w-12 h-12 rounded-full overflow-hidden">
                  <img
                    src={items.img}
                    alt=""
                    className="w-full h-full object-cover select-none"
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="row w-full flex gap-8 -translate-x-3/4">
            {elem.map((items, index) => (
              <div key={index} className="elem flex items-center gap-8">
                <h2 className="medium text-7xl">{items.h2}</h2>
                <div className="imgDiv w-12 h-12 rounded-full overflow-hidden">
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
      <div className="btmText absolute z-[6] bottom-12 left-12">
        <h1 className="font-medium w-40">
          We build big ideas. Software. Apps. Tools. For real people. Real
          lives.
        </h1>
      </div>
    </div>
  );
};

export default Home;
