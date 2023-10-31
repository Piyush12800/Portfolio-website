import React from 'react';
import '../components/Lander.css';
import me from '../assets/stack/me.png';

const About = () => {
  return (
    <div className="bg-gray-700 w-full py-8">
      <div className="page-header">About Me</div>
      <div className="flex flex-col md:flex-row items-center justify-center">
       
        <div className="w-11/12 md:w-1/2 p-4">
          <div className="card">
            <div className="tools">
              <div className="circle">
                <span className="red box"></span>
              </div>
              <div className="circle">
                <span className="yellow box"></span>
              </div>
              <div className="green box"></div>
            </div>
            <div className="card__content text-black">
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden mx-auto mb-4 border-4 border-white">
            <img src={me} alt="Me" className="w-full h-full object-cover" />
          </div>
          <hr className="border-t border-white my-4 md:hidden" />
              <p className='mx-3 font-semibold'>
                I am a highly motivated student with a passion for Artificial
                Intelligence and Machine Learning. I am proficient in the MERN
                stack and have experience with cutting-edge frameworks like
                TensorFlow and PyTorch. I am eager to contribute to the advancement
                of AI and make a meaningful impact in the field by solving
                real-world problems and driving innovation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
