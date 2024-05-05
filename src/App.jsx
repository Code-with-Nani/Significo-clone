import "./App.css";
import About from "./components/About";
import Home from "./components/Home";
import Slides from "./components/Slides";
import Team from "./components/Team";

function App() {
  return (
    <div theme="salmon" className="main w-full">
      <Home />
      <About />
      <Slides />
      <Team />
    </div>
  );
}

export default App;
