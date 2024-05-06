import React, { useEffect, useState } from "react";
import { listelem } from "../assets/data/teamData";
import { motion } from "framer-motion";
import gsap, { Power4 } from "gsap";
import { useGSAP } from "@gsap/react";

const Team = () => {
  const [hover, setHover] = useState(null);

  useEffect(() => {
    const handleFnc = (dets) => {
      const X = gsap.utils.mapRange(
        0,
        window.innerWidth,
        -100,
        100,
        dets.clientX
      );

      gsap.to("#img", {
        x: X,
      });
    };

    document.addEventListener("mousemove", handleFnc);

    return () => {
      document.removeEventListener("mousemove", handleFnc);
    };
  }, []);

  return (
    <div className="w-full min-h-screen bg-red-70 lg:px-12 px-6 lg:py-10 py-8 select-none ">
      <h1 className="light text-5xl lg:text-7xl text-center">Our Team</h1>
      <div className="list mt-8 lg:mt-16">
        {listelem.map((items, index) => (
          <div
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(null)}
            key={index}
            className="listelem w-full p-5 lg:p-10 border-b-[1px] border-b-black flex justify-between items-center relative"
          >
            <div className="left flex justify-center items-center gap-10 z-10">
              <h2 className="light hidden lg:block text-5xl text-black text-opacity-25">
                {items.num}
              </h2>
              <h2 className="light text-3xl lg:text-5xl tracking-tighter lg:tracking-normal">
                {items.name}
              </h2>
            </div>
            <div className="right z-10">
              <h2 className="font-medium text-xl lg:text-xl">CEO</h2>
            </div>
            <motion.div
              animate={hover === index ? { height: "100%" } : ""}
              transition={{ duration: 0.3 }}
              className="blueLayer absolute w-full h-0 -translate-x-1/2 left-1/2 top-0 bg-[#2544EE] "
            ></motion.div>
            <motion.div
              id="img"
              animate={hover === index ? { opacity: 1 } : ""}
              className="img absolute w-20 h-20 lg:w-40 lg:h-40 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden opacity-0 z-10"
            >
              <img
                src={items.img}
                alt=""
                className="w-full h-full object-cover select-none"
              />
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
