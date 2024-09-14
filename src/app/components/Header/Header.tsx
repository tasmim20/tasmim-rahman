"use client";
import React, { useEffect, useRef, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import PortfolioHero from "./PortfolioHero";
import AboutMe from "../about/about";
import Contact from "../Contact/Contact";

const Header: React.FC = () => {
  const blobRef = useRef<HTMLDivElement>(null);
  const [showBlob, setShowBlob] = useState(true);

  // Function to randomize the blob's position within the container
  const randomBlob = (blobRef: React.RefObject<HTMLDivElement>) => {
    if (!blobRef.current) return;

    // Set the blob to a fixed size and position it at the top-left corner
    blobRef.current.style.left = `0px`;
    blobRef.current.style.top = `0px`;
  };

  useEffect(() => {
    // Randomize the initial position and setup visibility toggling
    const handleResize = () => {
      randomBlob(blobRef);
    };

    // Initial position
    randomBlob(blobRef);

    window.addEventListener("resize", handleResize);

    const intervalId = setInterval(() => {
      setShowBlob((prev) => !prev); // Toggle blob visibility
    }, 2000); // Toggle every 2 seconds

    return () => {
      clearInterval(intervalId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className=" relative ">
        {/* Blurry background */}
        <div
          ref={blobRef}
          className="blob absolute w-[350px] h-[300px] rounded-full" // Increased size
          style={{
            filter: "blur(50px)", // Adjust blur intensity for the larger blob
            backgroundColor: "rgba(255, 20, 147, 0.4)",
            left: "0", // Fixed at the top-left corner
            top: "0", // Fixed at the top-left corner
            transition: "opacity 1s ease-out", // Smooth transition for visibility changes
            opacity: showBlob ? 1 : 0, // Toggle visibility
          }}
        ></div>

        {/* Content */}
        <PortfolioHero />
        <AboutMe />
        <Contact />
      </div>
      e
    </>
  );
};

export default Header;
