import "./App.css";
import video from "./assets/images/significo-main-hero.mp4";
import card from "./assets/images/card.svg";
import slide1 from "./assets/images/slidesimg1.jpg";
import slide2 from "./assets/images/slidesimg2.jpg";
import slide3 from "./assets/images/slidesimg5.jpg";
import slide4 from "./assets/images/slidesimg4.jpg";
import slide5 from "./assets/images/flash.png";

function App() {
  return (
    <div theme="salmon" className="main w-full">
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
      {/* real */}
      <div className="real section w-full ">
        {/*container*/}
        <div className="cont h-[400vh] relative">
          {/*slides*/}
          <div className="slides w-full h-screen flex sticky top-0 left-0 overflow-hidden">
            {/*slide--1*/}
            <div className="slide w-full h-screen flex-shrink-0 flex justify-center items-center relative ">
              <div className="text">
                <h2 className="light text-8xl">Real Talk,</h2>
                <h2 className="light text-8xl">Real Impact</h2>
              </div>
              <div className="img w-72 h-72 rounded-full overflow-hidden absolute right-0 translate-x-[60%] z-10">
                <img
                  src={slide1}
                  alt=""
                  className="w-full h-full object-cover "
                />
              </div>
            </div>
            {/*slide--2*/}
            <div className="slide w-full h-screen flex-shrink-0 bg-[--salmon] flex justify-center items-center relative">
              <div className="text w-[70%] text-center">
                <h2 className="medium text-9xl text-[--white]">20.4M</h2>
                <h2 className="medium text-5xl">
                  Real people — real lives — we have built products and
                  solutions for.
                </h2>
                <p className="absolute top-[25%] left-[15%] w-60 font-semibold text-lg text-left">
                  W're on a mission to impact as many lives as possible and
                  build a better company while we do it. Here's our progress.
                </p>
              </div>
              <div className="img absolute w-40 h-40 rounded-full overflow-hidden bg-red-600 bottom-[15%] left-[25%]">
                <img
                  src={slide2}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="img absolute w-80 h-80 rounded-full overflow-hidden bg-red-600 bottom-0 left-[50%] translate-y-[35%]">
                <img
                  src={slide4}
                  alt=""
                  className="w-full h-full object-cover scale-125"
                />
              </div>
              <div className="img w-72 h-72 rounded-full overflow-hidden absolute right-0 translate-x-[30%] z-10">
                <img
                  src={slide3}
                  alt=""
                  className="w-full h-full object-cover "
                />
              </div>
            </div>
            {/*slide--3*/}
            <div className="slide w-full h-screen flex-shrink-0 bg-[--salmon] flex justify-center items-center relative ">
              <div className="text w-[70%] text-center">
                <h2 className="medium text-9xl text-[--white]">49%</h2>
                <h2 className="medium text-5xl">Expert Women in Tech.</h2>
                <p className="absolute top-[25%] left-[15%] w-60 font-semibold text-lg text-left">
                  Our team is global and diverse, because our individual
                  experiences make us stronger
                </p>
              </div>

              <div className="img absolute w-40 h-40 rounded-full overflow-hidden top-10 left-[50%] -translate-x-1/2">
                <img
                  src={slide5}
                  alt=""
                  className="w-full h-full object-cover scale-125"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* team */}
      <div className="team section w-full min-h-screen p-12 ">
        <h2 className="light text-6xl text-center">Our Team</h2>
        {/* list */}
        <div className="list w-full mt-16">
          {/* listelem */}
          <div className="listelem w-full p-10 border-b-[1px] border-b-black relative">
            {/* content */}
            <div className="content flex justify-between items-center relative z-10">
              <div className="left flex justify-center items-center gap-10">
                <h2 className="light text-5xl text-black/25">01</h2>
                <h2 className="light text-5xl">Dr. Rick McCartney</h2>
              </div>
              <div className="right">
                <h2 className="font-medium text-xl">CEO</h2>
              </div>
            </div>
            {/* blueLayer */}
            <div className="blueLayer w-full h-0 bg-[#2544EE] absolute bottom-0 left-0"></div>
            {/* img */}
            <div className="hidden img w-[15rem] h-[15rem] bg-red-600 rounded-full absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-20"></div>
          </div>
          {/* listelem */}
          <div className="listelem w-full p-10 border-b-[1px] border-b-black relative">
            {/* content */}
            <div className="content flex justify-between items-center relative z-10">
              <div className="left flex justify-center items-center gap-10">
                <h2 className="light text-5xl text-black/25">01</h2>
                <h2 className="light text-5xl">Dr. Rick McCartney</h2>
              </div>
              <div className="right">
                <h2 className="font-medium text-xl">CEO</h2>
              </div>
            </div>
            {/* blueLayer */}
            <div className="blueLayer w-full h-0 bg-[#2544EE] absolute bottom-0 left-0"></div>
            {/* img */}
            <div className="hidden img w-[15rem] h-[15rem] bg-red-600 rounded-full absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-20"></div>
          </div>
          {/* listelem */}
          <div className="listelem w-full p-10 border-b-[1px] border-b-black relative">
            {/* content */}
            <div className="content flex justify-between items-center relative z-10">
              <div className="left flex justify-center items-center gap-10">
                <h2 className="light text-5xl text-black/25">01</h2>
                <h2 className="light text-5xl">Dr. Rick McCartney</h2>
              </div>
              <div className="right">
                <h2 className="font-medium text-xl">CEO</h2>
              </div>
            </div>
            {/* blueLayer */}
            <div className="blueLayer w-full h-0 bg-[#2544EE] absolute bottom-0 left-0"></div>
            {/* img */}
            <div className="hidden img w-[15rem] h-[15rem] bg-red-600 rounded-full absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-20"></div>
          </div>
          {/* listelem */}
          <div className="listelem w-full p-10 border-b-[1px] border-b-black relative">
            {/* content */}
            <div className="content flex justify-between items-center relative z-10">
              <div className="left flex justify-center items-center gap-10">
                <h2 className="light text-5xl text-black/25">01</h2>
                <h2 className="light text-5xl">Dr. Rick McCartney</h2>
              </div>
              <div className="right">
                <h2 className="font-medium text-xl">CEO</h2>
              </div>
            </div>
            {/* blueLayer */}
            <div className="blueLayer w-full h-0 bg-[#2544EE] absolute bottom-0 left-0"></div>
            {/* img */}
            <div className="hidden img w-[15rem] h-[15rem] bg-red-600 rounded-full absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-20"></div>
          </div>
          {/* listelem */}
          <div className="listelem w-full p-10 border-b-[1px] border-b-black relative">
            {/* content */}
            <div className="content flex justify-between items-center relative z-10">
              <div className="left flex justify-center items-center gap-10">
                <h2 className="light text-5xl text-black/25">01</h2>
                <h2 className="light text-5xl">Dr. Rick McCartney</h2>
              </div>
              <div className="right">
                <h2 className="font-medium text-xl">CEO</h2>
              </div>
            </div>
            {/* blueLayer */}
            <div className="blueLayer w-full h-0 bg-[#2544EE] absolute bottom-0 left-0"></div>
            {/* img */}
            <div className="hidden img w-[15rem] h-[15rem] bg-red-600 rounded-full absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-20"></div>
          </div>
          {/* listelem */}
          <div className="listelem w-full p-10 border-b-[1px] border-b-black relative">
            {/* content */}
            <div className="content flex justify-between items-center relative z-10">
              <div className="left flex justify-center items-center gap-10">
                <h2 className="light text-5xl text-black/25">01</h2>
                <h2 className="light text-5xl">Dr. Rick McCartney</h2>
              </div>
              <div className="right">
                <h2 className="font-medium text-xl">CEO</h2>
              </div>
            </div>
            {/* blueLayer */}
            <div className="blueLayer w-full h-0 bg-[#2544EE] absolute bottom-0 left-0"></div>
            {/* img */}
            <div className="hidden img w-[15rem] h-[15rem] bg-red-600 rounded-full absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-20"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
