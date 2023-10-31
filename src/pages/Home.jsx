import React, { useRef } from "react";
import Lander from "../components/Lander";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Home = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div >
    <div
      className="text-white justify-center flex  gap-x-10 py-4"
      style={{ backgroundColor: "black" }}
    >
      <span>
        <button
          onClick={() => scrollToSection("landerSection")}
          className="cursor-pointer transition-all text-white px-6 py-2 rounded-lg hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px] hover:shadow-xl hover:shadow-green-300 shadow-green-300 active:shadow-none"
        >
          Home
        </button>
      </span>
      <span>
        <button
          onClick={() => scrollToSection("aboutSection")}
          className="cursor-pointer transition-all text-white px-6 py-2 rounded-lg hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px] hover:shadow-xl hover:shadow-green-300 shadow-green-300 active:shadow-none"
        >
          About
        </button>
      </span>
      <span>
        <button
          onClick={() => scrollToSection("projectsSection")}
          className="cursor-pointer transition-all text-white px-6 py-2 rounded-lg hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px] hover:shadow-xl hover:shadow-green-300 shadow-green-300 active:shadow-none"
        >
          Projects
        </button>
      </span>
      <span>
        <button
          onClick={() => scrollToSection("contactSection")}
          className="cursor-pointer transition-all text-white px-6 py-2 rounded-lg hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px] hover:shadow-xl hover:shadow-green-300 shadow-green-300 active:shadow-none"
        >
          Contact Us
        </button>
      </span>
    </div>

    <Lander />
    <div id="aboutSection">
      <About />
    </div>
    <div id="projectsSection">
      <Projects />
    </div>
    <div id="contactSection">
      <Contact />
    </div>
    <Footer />
  </div>
  );
};

export default Home;
