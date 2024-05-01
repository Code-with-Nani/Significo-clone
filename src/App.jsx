import "./App.css";
import About from "./components/About";
import Home from "./components/Home";

function App() {
  return (
    <div theme="cyan" className="main w-full">
      <Home />
      <About />
    </div>
  );
}

export default App;
