import "./App.css";
import video from "./assets/images/significo-main-hero.mp4";

function App() {
  return (
    <div theme="black" className="main w-full">
      <div className="Home section w-full h-screen relative">
        <div className="hidden videoDiv w-full h-screen absolute z-10 top-0 left-0 bg-black overflow-hidden">
          <video
            className="w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            src={video}
          ></video>
        </div>
        <div className="marqueeContainer w-full h-screen relative overflow-hidden">
          <div className="box scale-[1] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%]">
            <div className="row w-full flex items-center gap-10 -translate-x-2/4 whitespace-nowrap">
              <div className="elem flex items-center gap-10">
                <h2 className="medium text-7xl">intuitive</h2>
                <div className="imgDiv w-12 h-12 bg-red-600 rounded-full"></div>
              </div>
              <div className="elem flex items-center gap-10">
                <h2 className="medium text-7xl">useful</h2>
                <div className="imgDiv w-12 h-12 bg-red-600 rounded-full"></div>
              </div>
              <div className="elem flex items-center gap-10">
                <h2 className="medium text-7xl">empathetic</h2>
                <div className="imgDiv w-12 h-12 bg-red-600 rounded-full"></div>
              </div>
              <div className="elem flex items-center gap-10">
                <h2 className="medium text-7xl">intuitive</h2>
                <div className="imgDiv w-12 h-12 bg-red-600 rounded-full"></div>
              </div>
              <div className="elem flex items-center gap-10">
                <h2 className="medium text-7xl">useful</h2>
                <div className="imgDiv w-12 h-12 bg-red-600 rounded-full"></div>
              </div>
              <div className="elem flex items-center gap-10">
                <h2 className="medium text-7xl">empathetic</h2>
                <div className="imgDiv w-12 h-12 bg-red-600 rounded-full"></div>
              </div>
            </div>
            <div className="row w-full flex items-center gap-10 -translate-x-1/4 whitespace-nowrap">
              <div className="elem flex items-center gap-10">
                <h2 className="medium text-7xl">intuitive</h2>
                <div className="imgDiv w-12 h-12 bg-red-600 rounded-full"></div>
              </div>
              <div className="elem flex items-center gap-10">
                <h2 className="medium text-7xl">useful</h2>
                <div className="imgDiv w-12 h-12 bg-red-600 rounded-full"></div>
              </div>
              <div className="elem flex items-center gap-10">
                <h2 className="medium text-7xl">empathetic</h2>
                <div className="imgDiv w-12 h-12 bg-red-600 rounded-full"></div>
              </div>
              <div className="elem flex items-center gap-10">
                <h2 className="medium text-7xl">intuitive</h2>
                <div className="imgDiv w-12 h-12 bg-red-600 rounded-full"></div>
              </div>
              <div className="elem flex items-center gap-10">
                <h2 className="medium text-7xl">useful</h2>
                <div className="imgDiv w-12 h-12 bg-red-600 rounded-full"></div>
              </div>
              <div className="elem flex items-center gap-10">
                <h2 className="medium text-7xl">empathetic</h2>
                <div className="imgDiv w-12 h-12 bg-red-600 rounded-full"></div>
              </div>
            </div>
            <div className="row w-full flex items-center gap-10 -translate-x-3/4 whitespace-nowrap">
              <div className="elem flex items-center gap-10">
                <h2 className="medium text-7xl">intuitive</h2>
                <div className="imgDiv w-12 h-12 bg-red-600 rounded-full"></div>
              </div>
              <div className="elem flex items-center gap-10">
                <h2 className="medium text-7xl">useful</h2>
                <div className="imgDiv w-12 h-12 bg-red-600 rounded-full"></div>
              </div>
              <div className="elem flex items-center gap-10">
                <h2 className="medium text-7xl">empathetic</h2>
                <div className="imgDiv w-12 h-12 bg-red-600 rounded-full"></div>
              </div>
              <div className="elem flex items-center gap-10">
                <h2 className="medium text-7xl">intuitive</h2>
                <div className="imgDiv w-12 h-12 bg-red-600 rounded-full"></div>
              </div>
              <div className="elem flex items-center gap-10">
                <h2 className="medium text-7xl">useful</h2>
                <div className="imgDiv w-12 h-12 bg-red-600 rounded-full"></div>
              </div>
              <div className="elem flex items-center gap-10">
                <h2 className="medium text-7xl">empathetic</h2>
                <div className="imgDiv w-12 h-12 bg-red-600 rounded-full"></div>
              </div>
            </div>
            <div className="row w-full flex items-center gap-10 -translate-x-1/2 whitespace-nowrap">
              <div className="elem flex items-center gap-10">
                <h2 className="medium text-7xl">intuitive</h2>
                <div className="imgDiv w-12 h-12 bg-red-600 rounded-full"></div>
              </div>
              <div className="elem flex items-center gap-10">
                <h2 className="medium text-7xl">useful</h2>
                <div className="imgDiv w-12 h-12 bg-red-600 rounded-full"></div>
              </div>
              <div className="elem flex items-center gap-10">
                <h2 className="medium text-7xl">empathetic</h2>
                <div className="imgDiv w-12 h-12 bg-red-600 rounded-full"></div>
              </div>
              <div className="elem flex items-center gap-10">
                <h2 className="medium text-7xl">intuitive</h2>
                <div className="imgDiv w-12 h-12 bg-red-600 rounded-full"></div>
              </div>
              <div className="elem flex items-center gap-10">
                <h2 className="medium text-7xl">useful</h2>
                <div className="imgDiv w-12 h-12 bg-red-600 rounded-full"></div>
              </div>
              <div className="elem flex items-center gap-10">
                <h2 className="medium text-7xl">empathetic</h2>
                <div className="imgDiv w-12 h-12 bg-red-600 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
