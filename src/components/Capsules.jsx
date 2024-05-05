import React from "react";
import img1 from "../assets/images/capsule1.png";

const Capsules = () => {
  return (
    <div className="w-full min-h-screen bg-red-800 p-5">
      <div className="upper w-[90%]">
        <h2 className="light text-5xl">
          Explore <br /> Our Insights
        </h2>
        <h2 className="text-lg mt-4">
          Stay up-to-date on the latest healthcare innovations and thought
          leadership.
        </h2>
      </div>
      <div className="btn w-full border-[1px] border-black bg-[#F5F19C] font-semibold text-center py-5 mt-4">
        VIEW ALL ARTICLES
      </div>
      <div className="lower mt-20">
        <div className="capsule border-[1px] border-black rounded-full p-10 flex flex-col justify-center items-center">
          <div className="img w-64 h-64 bg-red-600 rounded-full overflow-hidden">
            <img src={img1} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="text text-center mt-10">
            <h2>
              {" "}
              "Digital Therapeutics ", "Decoded: A Guide to ", "and Why They're
              ", "Understanding DTx ", "and Why They're ", "Worth Your
              Attention",
            </h2>
          </div>
          <div className="btn mt-4">
            <button className="bg-[#E9BBFF] px-4 py-1 medium text-lg rounded-full">
              Thought Leadership
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Capsules;
