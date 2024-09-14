import React from "react";
import { Linkedin, Github, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <div>
      <div className="border-b-2 px-10 border-gray-800"></div>
      <footer className="footer  grid grid-cols-1 md:grid-cols-3 gap-4 justify-between items-center p-6 md:px-10  text-gray-300 text-center md:text-left">
        {/* Developer Name */}
        <div>
          <p>Developed by Tasmim</p>
        </div>

        {/* Copyright */}
        <div className="text-center">
          <h2>Copyright © 2023 TASMIM</h2>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center md:justify-end space-x-4">
          <a
            className="bg-[#a54657] rounded-md p-1 shadow-md"
            href="https://www.linkedin.com/in/tasmim-rahman"
          >
            <Linkedin size={28} />
          </a>
          <a
            className="bg-[#a54657] rounded-md p-1 shadow-md"
            href="https://github.com/tasmim20"
          >
            <Github size={28} />
          </a>
          <a
            className="bg-[#a54657] rounded-md p-1 shadow-md"
            href="https://www.facebook.com"
          >
            <Facebook size={28} />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
