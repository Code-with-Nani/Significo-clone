import React from "react";
import { card } from "../assets/data/cardsData";

const About = () => {
  return (
    <div className="About section w-full flex lg:flex-row flex-col items-start gap-12 py-32 lg:py-52 px-7 lg:px-12 relative">
      <div className="leftText lg:w-[45%] lg:sticky top-20">
        <p className="text-lg font-semibold">
          Significo is a custom health software developer founded on the belief
          <br />
          that technology can transform healthcare to put people first. We put
          humanity back at the center of healthcare by simplifying complexity,
          accelerating capacity, and improving outcomes.
        </p>
        <h2 className="lg:text-7xl text-5xl light mt-8">
          We Craft Human-Centric Health Software
        </h2>
        <button className="font-semibold uppercase border-[1px] border-[--dcyan] px-4 py-3 mt-8">
          Our Solutions
        </button>
      </div>
      <div className="rightCard lg:w-[55%] flex flex-col gap-10 lg:pt-[40rem] overflow-x-auto">
        {card.map((items, index) => (
          <div
            key={index}
            className={`card lg:w-[75%] flex justify-between items-center px-4 lg:px-10 py-6 border-[1px] border-[--dcyan] ${
              index === 0 && "bg-[--black] text-[--cyan]"
            }`}
          >
            <div className="cardLeft lg:w-[65%]">
              <h2 className="text-lg font-semibold">{items.h2}</h2>
              <p className="font-semibold mt-2">{items.p}</p>
            </div>
            <div className="cardRight  select-none">
              <img src={items.img} alt="" className="w-[160px] sm:w-[80px]" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
