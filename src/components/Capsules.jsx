import React from "react";
import { capsule } from "../assets/data/capsuleData";
import { useGSAP } from "@gsap/react";
import gsap, { Power4 } from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(useGSAP, ScrollTrigger);
const Capsules = () => {
  useGSAP(() => {
    gsap.to(".capsule2", {
      y: "-20",
      ease: Power4,
      scrollTrigger: {
        trigger: ".Capsule",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
  }, []);
  return (
    <div
      data-color="white"
      className="Capsule section w-full min-h-screen p-5 lg:p-12 flex flex-col lg:flex-row lg:gap-20"
    >
      <div className="upper w-[90%] lg:w-[20%] flex flex-col lg:flex-col-reverse justify-between items-center">
        <h2 className="light text-5xl lg:text-6xl lg:-translate-y-16">
          Explore <br /> Our Insights
        </h2>
        <h2 className="text-lg lg:font-medium mt-4 lg:mt-0">
          Stay up-to-date on the latest healthcare innovations and thought
          leadership.
        </h2>
      </div>
      <div className="btn lg:hidden w-full border-[1px] border-black bg-[#F5F19C] font-semibold text-center py-5 mt-4">
        VIEW ALL ARTICLES
      </div>
      <div className="lower mt-20 lg:mt-0 flex flex-col lg:flex-row gap-12">
        {capsule.map((items, index) => (
          <div
            key={index}
            className={`capsule border-[1px] border-black rounded-full p-10 flex flex-col justify-between items-center lg:rotate-[-16deg] lg:translate-y-16 ${
              index === 1 && "capsule2 "
            }`}
          >
            <div className="img w-72 h-72 rounded-full bg-red-800 overflow-hidden">
              <img
                src={items.img}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text text-center mt-20">
              {items.h2.map((e, i) => (
                <h2 key={i} className="medium text-xl lg:text-2xl">
                  {e}
                </h2>
              ))}
            </div>
            <div className="btn medium text-lg bg-[#E9BBFF] rounded-full px-4 py-2 mt-8 cursor-pointer mb-6">
              Thought Leadership
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Capsules;
