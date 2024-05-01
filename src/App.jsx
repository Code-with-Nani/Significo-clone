import "./App.css";
import video from "./assets/images/significo-main-hero.mp4";

function App() {
  return (
    <div theme="black" className="main w-full">
      <div className="Home section w-full h-screen relative">
        <div className="btmtext absolute z-20 bottom-10 left-10 w-44">
          <h1 className="font-semibold">
            We build big ideas. Software. Apps. Tools. For real people. Real
            lives.
          </h1>
        </div>
        <div className="hidden videoDiv w-full h-screen absolute z-10 top-0 left-0 bg-black overflow-hidden">
          <video
            className="w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            src={video}
          ></video>
        </div>
        <div className="marqueeContainer w-full h-screen relative overflow-hidden">
          <div className="heading absolute top-20 left-1/2 -translate-x-1/2 w-80 text-center">
            <h2 className="text-2xl font-medium">
              Crafting a new paradigm of healthcare, one that is
            </h2>
          </div>
          <div className="box scale-[1] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%]">
            <div className="row w-full flex items-center gap-10 -translate-x-2/4 whitespace-nowrap">
              <div className="elem flex items-center gap-10">
                <h2 className="medium text-7xl">intuitive</h2>
                <div className="imgDiv w-12 h-12 bg-red-600 rounded-full">
                  <img
                    src="/profilesImg/659dbdfd5a080be8d348317a_Ellipse 845-10.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="elem flex items-center gap-10">
                <h2 className="medium text-7xl">useful</h2>
                <div className="imgDiv w-12 h-12 bg-red-600 rounded-full">
                  <img
                    src="/profilesImg/659dbdfd5a080be8d348317e_Ellipse 845-7.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="elem flex items-center gap-10">
                <h2 className="medium text-7xl">empathetic</h2>
                <div className="imgDiv w-12 h-12 bg-red-600 rounded-full">
                  <img
                    src="/profilesImg/659dbdfd5a080be8d3483180_Ellipse 845-4.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="elem flex items-center gap-10">
                <h2 className="medium text-7xl">intuitive</h2>
                <div className="imgDiv w-12 h-12 bg-red-600 rounded-full">
                  <img
                    src="/profilesImg/659dbdfd5a080be8d3483181_Ellipse 845-5.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="elem flex items-center gap-10">
                <h2 className="medium text-7xl">useful</h2>
                <div className="imgDiv w-12 h-12 bg-red-600 rounded-full">
                  <img
                    src="/profilesImg/659dbdfd5a080be8d3483182_Ellipse 845-8.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="elem flex items-center gap-10">
                <h2 className="medium text-7xl">empathetic</h2>
                <div className="imgDiv w-12 h-12 bg-red-600 rounded-full">
                  <img
                    src="/profilesImg/659dbdfd5a080be8d3483183_Ellipse 845-6.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="row w-full flex items-center gap-10 -translate-x-1/4 whitespace-nowrap">
              <div className="elem flex items-center gap-10">
                <h2 className="medium text-7xl">useful</h2>
                <div className="imgDiv w-12 h-12 bg-red-600 rounded-full">
                  <img
                    src="/profilesImg/659dbdfd5a080be8d3483188_Ellipse 845-2.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="elem flex items-center gap-10">
                <h2 className="medium text-7xl">intuitive</h2>
                <div className="imgDiv w-12 h-12 bg-red-600 rounded-full">
                  <img
                    src="/profilesImg/659dbdfd5a080be8d3483184_Ellipse 845.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="elem flex items-center gap-10">
                <h2 className="medium text-7xl">empathetic</h2>
                <div className="imgDiv w-12 h-12 bg-red-600 rounded-full">
                  <img
                    src="/profilesImg/659dbdfd5a080be8d3483189_Ellipse 845-1.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="elem flex items-center gap-10">
                <h2 className="medium text-7xl">intuitive</h2>
                <div className="imgDiv w-12 h-12 bg-red-600 rounded-full">
                  <img
                    src="/profilesImg/659dbdfd5a080be8d3483195_Ellipse 845.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="elem flex items-center gap-10">
                <h2 className="medium text-7xl">useful</h2>
                <div className="imgDiv w-12 h-12 bg-red-600 rounded-full">
                  <img
                    src="/profilesImg/659dbdfd5a080be8d3483183_Ellipse"
                    alt=""
                  />
                </div>
              </div>
              <div className="elem flex items-center gap-10">
                <h2 className="medium text-7xl">empathetic</h2>
                <div className="imgDiv w-12 h-12 bg-red-600 rounded-full">
                  <img
                    src="/profilesImg/659dbdfd5a080be8d3483188_Ellipse"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="row w-full flex items-center gap-10 -translate-x-3/4 whitespace-nowrap">
              <div className="elem flex items-center gap-10">
                <h2 className="medium text-7xl">intuitive</h2>
                <div className="imgDiv w-12 h-12 bg-red-600 rounded-full">
                  <img
                    src="/profilesImg/659dbdfd5a080be8d348317a_Ellipse 845-10.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="elem flex items-center gap-10">
                <h2 className="medium text-7xl">useful</h2>
                <div className="imgDiv w-12 h-12 bg-red-600 rounded-full">
                  <img
                    src="/profilesImg/659dbdfd5a080be8d348317e_Ellipse 845-7.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="elem flex items-center gap-10">
                <h2 className="medium text-7xl">empathetic</h2>
                <div className="imgDiv w-12 h-12 bg-red-600 rounded-full">
                  <img
                    src="/profilesImg/659dbdfd5a080be8d3483180_Ellipse 845-4.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="elem flex items-center gap-10">
                <h2 className="medium text-7xl">intuitive</h2>
                <div className="imgDiv w-12 h-12 bg-red-600 rounded-full">
                  <img
                    src="/profilesImg/659dbdfd5a080be8d3483181_Ellipse 845-5.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="elem flex items-center gap-10">
                <h2 className="medium text-7xl">useful</h2>
                <div className="imgDiv w-12 h-12 bg-red-600 rounded-full">
                  <img
                    src="/profilesImg/659dbdfd5a080be8d3483182_Ellipse 845-8.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="elem flex items-center gap-10">
                <h2 className="medium text-7xl">empathetic</h2>
                <div className="imgDiv w-12 h-12 bg-red-600 rounded-full">
                  <img
                    src="/profilesImg/659dbdfd5a080be8d3483183_Ellipse 845-6.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="row w-full flex items-center gap-10 -translate-x-1/2 whitespace-nowrap">
              <div className="elem flex items-center gap-10">
                <h2 className="medium text-7xl">intuitive</h2>
                <div className="imgDiv w-12 h-12 bg-red-600 rounded-full">
                  <img
                    src="/profilesImg/659dbdfd5a080be8d3483184_Ellipse 845.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="elem flex items-center gap-10">
                <h2 className="medium text-7xl">useful</h2>
                <div className="imgDiv w-12 h-12 bg-red-600 rounded-full">
                  <img
                    src="/profilesImg/659dbdfd5a080be8d3483188_Ellipse 845-2.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="elem flex items-center gap-10">
                <h2 className="medium text-7xl">empathetic</h2>
                <div className="imgDiv w-12 h-12 bg-red-600 rounded-full">
                  <img
                    src="/profilesImg/659dbdfd5a080be8d3483189_Ellipse 845-1.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="elem flex items-center gap-10">
                <h2 className="medium text-7xl">intuitive</h2>
                <div className="imgDiv w-12 h-12 bg-red-600 rounded-full">
                  <img
                    src="/profilesImg/659dbdfd5a080be8d3483195_Ellipse 845.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="elem flex items-center gap-10">
                <h2 className="medium text-7xl">useful</h2>
                <div className="imgDiv w-12 h-12 bg-red-600 rounded-full">
                  <img
                    src="/profilesImg/659dbdfd5a080be8d3483183_Ellipse"
                    alt=""
                  />
                </div>
              </div>
              <div className="elem flex items-center gap-10">
                <h2 className="medium text-7xl">empathetic</h2>
                <div className="imgDiv w-12 h-12 bg-red-600 rounded-full">
                  <img
                    src="/profilesImg/659dbdfd5a080be8d3483188_Ellipse"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
