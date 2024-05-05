import "./App.css";
import About from "./components/About";
import Home from "./components/Home";
import Slides from "./components/Slides";
import Team from "./components/Team";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <div theme="salmon" className="main w-full">
      <Home />
      <About />
      <Slides />
      <Team />
      <Testimonials />
    </div>
  );
}

export default App;
