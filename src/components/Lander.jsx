import React, { useState, useEffect, useRef } from "react";
import RINGS from "vanta/dist/vanta.rings.min";
import * as THREE from "three";
import "../components/Lander.css"
import Typewriter from "typewriter-effect";

const Lander = () => {
  const myRef = useRef();
  const [vantaEffect, setVantaEffect] = useState(0);
  
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        RINGS({
          el: myRef.current,
          THREE: THREE, // use a custom THREE when initializing
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          backgroundColor: 0x000000,
          color: 0x000000, // Wrap the color in an array

          amplitudeFactor: 0,
        })
      );
    }
    
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect, window.THREE]);

  return (
    <div>
    <div ref={myRef} className="h-[100vh] min-w-full">
  {/* Foreground content goes here */}
  <div className="flex items-center h-full  mx-20">
    <div className="text-white text-center">
      <p className="text-3xl font-semibold">
        Hi I am Piyush Kushwah
        <div className="font-serif">
          <Typewriter
            options={{
              strings: [
                "I Love to code",
                "I Love Deep Learning",
                "I Love Web Development",
              ],
              autoStart: true,
              loop: true,
              deleteSpeed: 10,
            }}
          />
        </div>
        <br />
        <br />
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-normal w-full max-w-md">
          I'm a student of Artificial Intelligence and Machine Learning, proficient in the MERN stack, and passionate about deep learning.
        </p>
      </p>
      <br />
      <br />
      <a href="https://drive.google.com/file/d/1mKwCZRU6oRN0GECyBdwHNM0nCmddnwXf/view?usp=drive_link" target="_blank">
        <button_1 className="button_1">
          <span>Resume</span>
        </button_1>
      </a>
    </div>
  </div>
</div>

    </div>
  );
  
};

export default Lander;
