import React from "react";
import img1 from "../assets/images/testimonial1.avif";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(useGSAP, ScrollTrigger);
const Testimonials = () => {
  useGSAP(() => {
    gsap.to("span", {
      opacity: 1,
      stagger: 0.3,

      scrollTrigger: {
        trigger: ".para",
        start: "top 50%",
        end: "bottom 60%",
        scrub: true,
      },
    });
  }, []);

  return (
    <div
      data-color="white"
      className="para section w-full h-screen flex flex-col gap-12 justify-center items-center"
    >
      <div className="text text-center lg:w-[80%] w-[90%]">
        {" Working with Significo and their recommendation service has been a game-changer for our occupational prevention efforts. Our customers are extremely satisfied with the tool's impressive technical capabilities and data-driven approach. But what truly sets it apart is the intuitive and modern user experience it offers, making it a breeze for our clients to navigate. By leveraging this service, our customers have successfully tackled presenteeism and absenteeism."
          .split("")
          .map((items, index) => (
            <span key={index} className="text-lg lg:text-2xl opacity-[0.1]">
              {items}
            </span>
          ))}
      </div>
      <div className="personal flex flex-col items-center gap-1">
        <div className="img w-20 h-20 bg-red-600 rounded-full overflow-hidden">
          <img src={img1} alt="" className="w-full h-full object-cover" />
        </div>
        <h2 className="text-center text-xl medium">Miranda Ernst</h2>
        <h2 className="text-center text-xl medium">
          Product Managre @ HealthCheck
        </h2>
      </div>
    </div>
  );
};

export default Testimonials;
