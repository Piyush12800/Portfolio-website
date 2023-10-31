import React from 'react'
import '../components/Lander.css'
import { projects } from '../data/Data'
import CSS from "../assets/stack/CSS.png"
import Express from "../assets/stack/Express.png"
import Git from "../assets/stack/Git.svg"
import Github from "../assets/stack/Github.svg"
import HTML from "../assets/stack/HTML.png"
import ml from "../assets/stack/ml.png"
import MongoDB from "../assets/stack/MongoDB.svg"
import Nodejs from "../assets/stack/NodeJs.svg"
import python from "../assets/stack/python.jpg"
import Javascript from "../assets/stack/Javascript.svg"
import Reactjs from "../assets/stack/React.png"
import Redux from "../assets/stack/Redux.svg"
import Tailwind from "../assets/stack/Tailwind.png"
import pytorch from "../assets/stack/pytorch.png"
import opencv from "../assets/stack/opencv.png"
import nlp from "../assets/stack/nlp.png"
import tensorflow from "../assets/stack/tensorflow.png"
const Projects = () => {
  return (
    <div className=''>
      <div>
        <div className='page-header text-black'>Projects</div>
        <div className='flex flex-wrap gap-x-12 gap-y-8 mx-auto justify-center'>
          {projects.map((project, index) => (
            <div className="project-card bg-neutral-200 text-neutral-800 p-4 flex flex-col hover:bg-neutral-100 hover:shadow-lg hover:text-sky-700 transition-shadow">
  <img src={project.pic} alt={project.name} className="rounded-lg" />
  <div className="p-4">
    <h3 className="font-extrabold text-xl mb-2">{project.name}</h3>
    <p className="text-sm">{project.description}</p>
  </div>

  <div className="button-container mt-auto">
    <a href={project.source_code_link}>
      <button className="bg-sky-700 text-white font-extrabold p-2 px-6 rounded-full hover:bg-sky-500 transition-colors">
        Github
      </button>
    </a>

    {project.demo && (
      <a href={project.demo}>
        <button className="bg-sky-700 text-white font-extrabold p-2 px-6 rounded-full hover:bg-sky-500 transition-colors">
          Demo
        </button>
      </a>
    )}
  </div>
</div>

          ))}
        </div>

       
        <div>
        <div name='skills' className='w-full h-full bg-[#0a192f] text-gray-300 mt-6'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div>
              <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Skills</p>
              <p className='py-4'>// These are the technologies I've worked with</p>
          </div>

          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Reactjs} alt="HTML icon" />
                  <p className='my-4'>REACT</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={python} alt="HTML icon" />
                  <p className='my-4'>python</p>

              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={ml} alt="HTML icon" />
                  <p className='my-4'>Machine Learning</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
                  <p className='my-4'>HTML</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={CSS} alt="HTML icon" />
                  <p className='my-4'>CSS</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Javascript} alt="HTML icon" />
                  <p className='my-4'>JAVASCRIPT</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={pytorch} alt="HTML icon" />
                  <p className='my-4'>PYTORCH</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Github} alt="HTML icon" />
                  <p className='my-4'>GITHUB</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Nodejs} alt="HTML icon" />
                  <p className='my-4'>NODE JS</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={tensorflow} alt="HTML icon" />
                  <p className='my-4'>TENSORFLOW</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={opencv} alt="HTML icon" />
                  <p className='my-4'>COMPUTER VISION</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={MongoDB} alt="HTML icon" />
                  <p className='my-4'>MONGO DB</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Tailwind} alt="HTML icon" />
                  <p className='my-4'>TAILWIND</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Redux} alt="HTML icon" />
                  <p className='my-4'>REDUX</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Express} alt="HTML icon" />
                  <p className='my-4'>EXPRESS</p>
              </div>
          
          </div>
      </div>
    </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
