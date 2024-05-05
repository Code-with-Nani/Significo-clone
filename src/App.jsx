import "./App.css";
import About from "./components/About";
import Capsules from "./components/Capsules";
import Home from "./components/Home";
import Slides from "./components/Slides";
import Team from "./components/Team";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <div theme="light" className="main w-full">
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
