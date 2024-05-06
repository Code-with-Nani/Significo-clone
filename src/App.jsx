import LocomotiveScroll from "locomotive-scroll";
import "./App.css";
import About from "./components/About";
import Capsules from "./components/Capsules";
import Home from "./components/Home";
import Slides from "./components/Slides";
import Team from "./components/Team";
import Testimonials from "./components/Testimonials";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/all";

function App() {
  const mainRef = useRef();
  const locomotive = new LocomotiveScroll();

  useEffect(() => {
    document.querySelectorAll(".section").forEach((e) => {
      ScrollTrigger.create({
        trigger: e,
        start: "top 50%",
        end: "bottom 50%",
        scrub: true,
        onEnter: () => {
          document
            .querySelector(".main")
            .setAttribute("theme", e.dataset.color);
        },
        onEnterBack: () => {
          document
            .querySelector(".main")
            .setAttribute("theme", e.dataset.color);
        },
      });
    });
  }, []);

  return (
    <div
      ref={mainRef}
      theme="black"
      className="main w-full transition-all ease-out duration-[0.5s]"
    >
      <Home />
      <About />
      <Slides />
      <Team />
      <Testimonials />
      <Capsules />
    </div>
  );
}

export default App;
