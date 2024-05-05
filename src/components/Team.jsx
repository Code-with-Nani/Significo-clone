import React from "react";
import { listelem } from "../assets/data/teamData";

const Team = () => {
  return (
    <div className="w-full min-h-screen bg-red-70 lg:px-12 px-6 lg:py-10 py-8">
      <h1 className="light text-5xl lg:text-7xl text-center">Our Team</h1>
      <div className="list mt-8 lg:mt-16">
        {listelem.map((items, index) => (
          <div
            key={index}
            className="listelem w-full p-5 lg:p-10 border-b-[1px] border-b-black flex justify-between items-center relative"
          >
            <div className="left flex justify-center items-center gap-10">
              <h2 className="light hidden lg:block text-5xl text-black text-opacity-25">
                {items.num}
              </h2>
              <h2 className="light text-3xl lg:text-5xl tracking-tighter lg:tracking-normal">
                {items.name}
              </h2>
            </div>
            <div className="right">
              <h2 className="font-medium text-xl lg:text-xl">CEO</h2>
            </div>
            <div className="blueLayer absolute w-full h-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  bg-[#2544EE]"></div>
            <div className="img absolute w-40 h-40 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden opacity-0">
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
  );
};

export default Team;
