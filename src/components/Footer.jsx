import React from "react";
import { FaGithub, FaLinkedin, FaDiscord, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto flex flex-col items-center">
        <div className="text-2xl font-semibold mb-4">Contact Information</div>
        <address className="text-center mb-4">
          Gwalior , M.P. ,India
          <br />
          Email: piyush.kushwah128@gmail.com
          <br/>
          Phone : +91 9171169038
        </address>
        <div className="flex space-x-4">
          <a
            href="github.com/piyush12800"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform transform hover:scale-110"
          >
            <FaGithub className="text-3xl" />
          </a>
          <a
            href="linkedin.com/in/piyushkushwah"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform transform hover:scale-110"
          >
            <FaLinkedin className="text-3xl" />
          </a>
          <a
            href="https://discordapp.com/_thande__papa_"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform transform hover:scale-110"
          >
            <FaDiscord className="text-3xl" />
          </a>
          <a
            href="https://www.instagram.com/___p_i_y_u_s_h/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform transform hover:scale-110"
          >
            <FaInstagram className="text-3xl" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
