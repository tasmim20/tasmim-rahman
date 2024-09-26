"use client";
import React, { useEffect, useRef, useState } from "react";
import PortfolioHero from "./PortfolioHero";
import AboutMe from "../about/about";
import Contact from "../Contact/Contact";

const Header: React.FC = () => {
  const blobRef = useRef<HTMLDivElement>(null);
  const [showBlob, setShowBlob] = useState(true);

  const randomBlob = (blobRef: React.RefObject<HTMLDivElement>) => {
    if (!blobRef.current) return;

    blobRef.current.style.left = `0px`;
    blobRef.current.style.top = `0px`;
  };

  useEffect(() => {
    const handleResize = () => {
      randomBlob(blobRef);
    };

    randomBlob(blobRef);

    window.addEventListener("resize", handleResize);

    const intervalId = setInterval(() => {
      setShowBlob((prev) => !prev);
    }, 2000);

    return () => {
      clearInterval(intervalId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className=" relative ">
        <div
          ref={blobRef}
          className="blob absolute w-[350px] h-[300px] rounded-full"
          style={{
            filter: "blur(50px)",
            backgroundColor: "rgba(255, 20, 147, 0.4)",
            left: "0",
            top: "0",
            transition: "opacity 1s ease-out",
            opacity: showBlob ? 1 : 0,
          }}
        >
          {" "}
        </div>

        {/* Content */}
        <PortfolioHero />
        <AboutMe />
        <Contact />
      </div>
    </>
  );
};

export default Header;
