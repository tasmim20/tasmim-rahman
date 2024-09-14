import React, { useState, useEffect } from "react";
import download from "../../assets/cute-girl.png";
import Image from "next/image";
import Link from "next/link";

const PortfolioHero = () => {
  // Titles to be cycled through by the typewriter
  const titles = [
    "Frontend Developer",
    "MERN Stack Developer",
    "React JS Developer",
    "Next Level Developer",
  ];

  const [currentTitle, setCurrentTitle] = useState(titles[0]);
  const [index, setIndex] = useState(0);
  const [typing, setTyping] = useState(true); // To control typing and deleting

  // Typewriter effect with cycling between titles
  useEffect(() => {
    const typingSpeed = 150; // Speed of typing each character
    const deletingSpeed = 50; // Speed of deleting each character
    const pauseTime = 2000; // Time to pause after typing a word

    let charIndex = 0;
    let timeout: string | number | NodeJS.Timeout | undefined;

    const typeTitle = () => {
      if (typing) {
        if (charIndex < titles[index].length) {
          setCurrentTitle(titles[index].substring(0, charIndex + 1));
          charIndex += 1;
          timeout = setTimeout(typeTitle, typingSpeed);
        } else {
          setTimeout(() => setTyping(false), pauseTime);
        }
      } else {
        if (charIndex > 0) {
          setCurrentTitle(titles[index].substring(0, charIndex - 1));
          charIndex -= 1;
          timeout = setTimeout(typeTitle, deletingSpeed);
        } else {
          setTyping(true);
          setIndex((prevIndex) => (prevIndex + 1) % titles.length); // Cycle through titles
        }
      }
    };

    timeout = setTimeout(typeTitle, typingSpeed);

    return () => clearTimeout(timeout); // Cleanup the timeout on unmount
  }, [index, typing]); // Re-run when index or typing changes

  // CSS keyframes for animations
  const style = `
    @keyframes glow {
      0% {
        text-shadow: 0 0 5px rgba(255, 105, 180, 0.8);
      }
      50% {
        text-shadow: 0 0 10px rgba(255, 105, 180, 0.8);
      }
      100% {
        text-shadow: 0 0 5px rgba(255, 105, 180, 0.8);
      }
    }
    @keyframes blink-caret {
      from, to {
        border-color: transparent;
      }
      50% {
        border-color: rgba(255, 105, 180, 0.8);
      }
    }
  `;

  return (
    <div className="text-gray-300 min-h-screen mx-auto max-w-7xl items-center">
      <style>{style}</style> {/* Inject the keyframes into the component */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center my-10 space-y-8">
        {/* Image Section */}
        <div className="text-center">
          <Image
            src={download}
            width={300}
            height={300}
            alt="Tasmim Rahman"
            className="rounded-lg"
          />
        </div>

        {/* Text Section */}
        <div className="text-center">
          <h1 className="text-4xl  font-bold mb-4 -mt-5">
            Hey There!
            <br />
            I'm <span className="text-pink-700">Tasmim Rahman</span>
            <br />
            <span
              className="inline-block overflow-hidden whitespace-nowrap border-r-2 border-pink-600 pr-1"
              style={{
                animation: "blink-caret 0.75s step-end infinite",
              }}
            >
              {currentTitle}
            </span>
          </h1>

          {/* Buttons */}
          <div className="space-x-4">
            <Link href="projects">
              <button className="bg-transparent uppercase hover:bg-pink-700 text-pink-800 font-semibold hover:text-white py-2 px-4 border border-pink-800 hover:border-transparent rounded">
                See my Latest Works
              </button>
            </Link>

            <Link href="/contact">
              <button className="bg-transparent hover:bg-pink-700 text-pink-800 font-semibold hover:text-white py-2 px-4 border border-pink-800 hover:border-transparent rounded">
                CONTACT ME
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioHero;
