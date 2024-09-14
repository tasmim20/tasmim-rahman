"use client";
import React, { useState } from "react";
import {
  Menu,
  X,
  File,
  Scroll,
  Briefcase,
  Mail,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";

import Link from "next/link"; // Import Next.js Link component for navigation

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to handle menu toggle

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle menu open/close state
  };

  const menuItems = [
    { name: "Resume", icon: <File size={16} /> },
    { name: "Projects", icon: <Scroll size={16} /> },
    { name: "Services", icon: <Briefcase size={16} /> },
    { name: "Contact", icon: <Mail size={16} /> },
  ];

  return (
    <nav className="text-white p-4 flex justify-between items-center relative mx-10">
      {/* Home Link with Stylish Font */}
      <Link href="/" className="text-2xl font-bold cursor-pointer">
        <span
          className="flex items-center justify-center space-x-2"
          style={{
            fontFamily: "'Pacifico', cursive", // Stylish custom font for the name
            color: "#FF69B4", // Hot pink color for neon effect
            textShadow: "0 0 10px rgba(255, 105, 180, 0.8)", // Neon text glow effect
          }}
        >
          <ChevronLeft size={30} />
          <span>Tasmim Rahman</span>
          <ChevronRight size={30} />
        </span>
      </Link>

      {/* Desktop Menu */}
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
              className="flex items-center space-x-2  text-gray-300 px-2 py-2 rounded hover:bg-pink-800"
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
      <Link
        href="/contact"
        style={{
          backgroundColor: "rgba(255, 20, 147, 0.6)", // Semi-transparent neon background
          boxShadow: "0 4px 15px rgba(255, 20, 147, 0.8)", // Neon glow effect
        }}
        className="text-white px-4 py-2 rounded hidden md:block"
      >
        Hit me Up
      </Link>

      {/* Mobile Menu Button */}
      <button onClick={toggleMenu} className="md:hidden z-20">
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Slide-In Menu */}
      <div
        className={`fixed top-0 left-0 h-96 bg-white text-black w-64 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-10 shadow-lg`}
      >
        <button onClick={toggleMenu} className="absolute top-4 right-4">
          <X size={24} />
        </button>
        <div className="flex flex-col items-start space-y-4 p-6">
          {menuItems.map((item) => (
            <Link
              href={`/${item.name.toLowerCase()}`}
              key={item.name}
              className="flex items-center space-x-2 text-black shadow-sm rounded px-4 py-1 w-full hover:bg-pink-300"
            >
              {item.icon}
              <span>{item.name}</span>
            </Link>
          ))}
          {/* Mobile Contact Button */}
          <Link
            href="/contact"
            style={{
              backgroundColor: "rgba(255, 20, 147, 0.8)", // Semi-transparent neon background
            }}
            className="text-gray-300  px-4 py-2 rounded w-full mt-4"
          >
            Hit me Up
          </Link>
        </div>
      </div>

      {/* Background Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-0"
          onClick={toggleMenu}
        ></div>
      )}
    </nav>
  );
};

export default Navbar;
