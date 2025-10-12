"use client";
import React, { useState } from "react";
import { Menu, X, Scroll, Mail, ChevronRight, ChevronLeft } from "lucide-react";
import Link from "next/link";
import { RiArticleLine, RiProfileFill, RiToolsFill } from "react-icons/ri";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false); // Close the menu
  };

  const menuItems = [
    { name: "About", icon: <RiProfileFill size={16} /> },
    { name: "Projects", icon: <Scroll size={16} /> },
    { name: "Hire", icon: <Mail size={16} /> },
    { name: "Uses", icon: <RiToolsFill size={16} /> },
    { name: "Blog", icon: <RiArticleLine size={16} /> },
  ];

  return (
    <nav className="text-white p-4 flex justify-between items-center relative mx-10">
      <Link href="/" className="text-2xl font-bold cursor-pointer">
        <span
          className="flex items-center justify-center space-x-2"
          style={{
            fontFamily: "'Pacifico', cursive",
            color: "#FF69B4",
            textShadow: "0 0 10px rgba(255, 105, 180, 0.8)",
          }}
        >
          <ChevronLeft size={30} />
          <span>Tasmim Rahman </span>
          <ChevronRight size={30} />
        </span>
      </Link>

      <div className="hidden md:flex flex-grow justify-center items-center ">
        <div
          className="flex space-x-4 p-1 rounded-lg"
          style={{
            backgroundColor: "rgba(255, 20, 147, 0.6)", // Semi-transparent neon background
            boxShadow: "0 4px 15px rgba(255, 20, 147, 0.8)", // Neon glow effect
          }}
        >
          {menuItems.map((item) => (
            <Link
              href={`/${item.name.toLowerCase()}`}
              key={item.name}
              className="flex items-center space-x-2 text-gray-300 px-2 py-1 rounded hover:bg-pink-800"
              style={{
                textShadow: "0 0 5px rgba(255, 105, 180, 0.8)", // Neon text glow
              }}
            >
              {item.icon}
              <span>{item.name}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Contact Button */}
      {/* <Link href="/Tasmim_Rahman_Resume.pdf" target="_blank">
        <button
          style={{
            backgroundColor: "rgba(255, 20, 147, 0.6)",
            boxShadow: "0 4px 15px rgba(255, 20, 147, 0.8)",
          }}
          className="rounded-md px-5 py-2 font-semibold  text-gray-300 transition-transform duration-300 hover:scale-105"
        >
          Download Resume
        </button>
      </Link> */}
      <a
        href="/Tasmim_Rahman_Resume.pdf"
        download
        className="rounded-md px-5 py-3 font-semibold uppercase text-gray-300 transition-transform duration-300 hover:scale-105"
        style={{
          backgroundColor: "rgba(255, 20, 147, 0.6)",
          boxShadow: "0 4px 15px rgba(255, 20, 147, 0.8)",
        }}
      >
        Download Resume
      </a>
      {/* Mobile Menu Button */}
      <button onClick={toggleMenu} className="md:hidden z-30">
        {isOpen ? <X size={24} className="text-black" /> : <Menu size={24} />}
      </button>

      {/* Mobile Slide-In Menu */}
      <div
        style={{
          boxShadow: "0 4px 15px rgba(255, 20, 147, 0.8)", // Neon glow effect
        }}
        className={`fixed top-0 h-96 bg-[#0c1c3e] text-pink-800 w-64 transform ${
          isOpen ? "translate-x-0" : "translate-x-[-150%]"
        } transition-transform duration-1000 ease-in-out z-20 shadow-lg rounded-lg mt-20 md:hidden`}
      >
        <button onClick={toggleMenu} className="absolute top-2 right-4">
          <X size={24} />
        </button>
        <div className="flex flex-col items-start space-y-4 p-6 mt-5">
          {menuItems.map((item) => (
            <Link
              href={`/${item.name.toLowerCase()}`}
              key={item.name}
              className="flex items-center space-x-2 text-gray-300 shadow-sm rounded px-4 py-1 w-full hover:bg-pink-700"
              onClick={closeMenu} // Close the menu when link is clicked
            >
              {item.icon}
              <span>{item.name}</span>
            </Link>
          ))}
          {/* Mobile Contact Button */}
          {/* <Link
            href="/contact"
            style={{
              backgroundColor: "rgba(255, 20, 147, 0.8)",
            }}
            className="text-gray-300  px-4 py-2 rounded w-full mt-4"
            onClick={closeMenu} // Close the menu when link is clicked
          >
           Download Resume
          </Link> */}
          <div className="mt-12 text-center">
            <a
              href="/Tasmim_Rahman_Resume.pdf"
              download
              className="rounded-md px-5 py-3 font-semibold uppercase text-gray-300 transition-transform duration-300 hover:scale-105"
              style={{
                backgroundColor: "rgba(255, 20, 147, 0.6)",
                boxShadow: "0 4px 15px rgba(255, 20, 147, 0.8)",
              }}
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>

      {/* Background Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-10"
          onClick={toggleMenu}
        ></div>
      )}
    </nav>
  );
};

export default Navbar;
