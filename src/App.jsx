import "./App.css";
import video from "./assets/images/significo-main-hero.mp4";
import card from "./assets/images/card.svg";

function App() {
  return (
    <div theme="cyan" className="main w-full">
      {/* home */}
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
      {/* about */}
      <div className="About section w-full flex items-start gap-10 py-52 px-11 relative">
        <div className="ltext w-[45%] sticky top-20">
          <p className="text-lg font-semibold">
            Significo is a custom health software developer founded on the
            belief <br /> that technology can transform healthcare to put people
            first. We put humanity back at the center of healthcare by
            simplifying complexity, accelerating capacity, and improving
            outcomes.
          </p>
          <h2 className="text-7xl light pt-10">
            We Craft Human-Centric Health Software
          </h2>
          <div className="btn pt-8">
            <button className="border-[1px] border-[--dcyan] px-4 py-3 font-semibold">
              OUR SOLUTIONS
            </button>
          </div>
        </div>
        <div className="cards w-[55%] space-y-10  pt-[38rem]">
          <div className="card bg-[--black] text-[--cyan] w-[80%] border-[1px] border-[--dcyan] px-6 flex justify-between items-center">
            <div className="cardLeft">
              <h2 className="text-xl font-semibold">Driven by Purpose</h2>
              <p className="font-medium pt-2">
                We believe technology can dramatically improve the experience of
                managing health, and when crafted with empathy, intention, and
                expertise, impact lives at scale.
              </p>
            </div>
            <div className="cardRight">
              <img className="h-48 select-none" src={card} alt="" />
            </div>
          </div>
          <div className="card  w-[80%] border-[1px] border-[--dcyan] px-6 flex justify-between items-center">
            <div className="cardLeft">
              <h2 className="text-xl font-semibold">Driven by Purpose</h2>
              <p className="font-medium pt-2">
                We believe technology can dramatically improve the experience of
                managing health, and when crafted with empathy, intention, and
                expertise, impact lives at scale.
              </p>
            </div>
            <div className="cardRight">
              <img className="h-48 select-none" src={card} alt="" />
            </div>
          </div>
          <div className="card w-[80%] border-[1px] border-[--dcyan] px-6 flex justify-between items-center">
            <div className="cardLeft">
              <h2 className="text-xl font-semibold">Driven by Purpose</h2>
              <p className="font-medium pt-2">
                We believe technology can dramatically improve the experience of
                managing health, and when crafted with empathy, intention, and
                expertise, impact lives at scale.
              </p>
            </div>
            <div className="cardRight">
              <img className="h-48 select-none" src={card} alt="" />
            </div>
          </div>
          <div className="card w-[80%] border-[1px] border-[--dcyan] px-6 flex justify-between items-center">
            <div className="cardLeft">
              <h2 className="text-xl font-semibold">Driven by Purpose</h2>
              <p className="font-medium pt-2">
                We believe technology can dramatically improve the experience of
                managing health, and when crafted with empathy, intention, and
                expertise, impact lives at scale.
              </p>
            </div>
            <div className="cardRight">
              <img className="h-48 select-none" src={card} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
