
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
import React from "../assets/stack/React.png"
import Redux from "../assets/stack/Redux.svg"
import Tailwind from "../assets/stack/Tailwind.png"
import backend from "../assets/stack/backend.jpg"
import micrograd from "../assets/stack/micrograd.png"
import movierecommender from "../assets/stack/movierecommend.png"
import srgan from "../assets/stack/srgan.png"
import studynotion from "../assets/stack/studynotion.png"
import shopping from "../assets/stack/shopping.png"



const projects = [
{
    name :"Study Notion",
    description :"StudyNotion is a fully functional ed-tech platform that enables users to create, consume, and rate educational content. The platform is built using the MERN stack, which includes ReactJS, NodeJS, MongoDB, and ExpressJS.",
    source_code_link : "https://github.com/Piyush12800/Study-Notion_",
    pic:studynotion,
    demo:"https://study-notion-piyush.vercel.app/",
    stack:[React , Tailwind , MongoDB , Express,Nodejs,Redux, Javascript, Github ]

},
{
    name :"Micrograd",
    description:"Micrograd, a lightweight autograd library inspired by PyTorch. Micrograd allows you to compute gradients for functions using automatic differentiation. It is designed for educational purposes and small-scale projects.",
    source_code_link:"https://github.com/Piyush12800/Micrograd",
    pic:micrograd,
    stack:[python , ml , Github,]
},
{
    name:"Shopping App with Redux",
    description:"The Shopping App with Redux - Frontend is a basic shopping application frontend built using Redux.",
    source_code_link:"https://github.com/Piyush12800/Shopping-App_Redux",
    pic:shopping,
    demo:"https://shopping-app-redux-edb33ntef-piyush12800s-projects.vercel.app/",
    stack:[React , Tailwind ,Redux, Javascript, Github , CSS ]
},
{
    name:"SRGAN",
    description:"I implemented the SRGAN (Super-Resolution Generative Adversarial Network) research paper, a state-of-the-art deep learning model for enhancing image resolution. This project demonstrated proficiency in deep learning, GANs, and image processing techniques, contributing to advancements in computer vision and image enhancement. ",
    source_code_link:"https://github.com/Piyush12800/SRGAN",
    pic:srgan,
    stack:[python , ml , Github,]
},
{
    name:"Movie Recommendation with Streamlit",
    description:"This project is a movie recommendation system using NLP and deployed using Streamlit . ",
    source_code_link:"https://github.com/Piyush12800/Movie-Recommendation-system",
    pic:movierecommender,
    stack:[python , ml , Github,]

},
{
    name:"Backend Project: User Authentication with JWT, Bcrypt, and Nodemailer",
    description:"This backend project provides user authentication functionality, allowing users to sign up, log in, and receive verification emails. The project uses Bcrypt for password hashing, JWT (JSON Web Tokens) for authentication, and Nodemailer for sending verification emails. ",
    source_code_link:"https://github.com/Piyush12800/Backend-Authenticatio",
    pic:backend,
    stack:[ MongoDB , Express,Nodejs, Javascript, Github ]

}
];

export {projects};