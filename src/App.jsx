import LocomotiveScroll from "locomotive-scroll";
import "./App.css";
import About from "./components/About";
import Capsules from "./components/Capsules";
import Home from "./components/Home";
import Slides from "./components/Slides";
import Team from "./components/Team";
import Testimonials from "./components/Testimonials";
import { useRef } from "react";

function App() {
  const mainRef = useRef();
  const locomotive = new LocomotiveScroll({
    el: mainRef.current,
    smooth: true,
  });

  return (
    <div ref={mainRef} theme="light" className="main w-full">
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
