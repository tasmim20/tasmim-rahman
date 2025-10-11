import React, { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import bulb from "../../assets/giphy.gif";

const PortfolioHero = () => {
  const titles = useMemo(
    () => [
      "Frontend Developer",
      "MERN Stack Developer",
      "React JS Developer",
      "Next Level Developer",
    ],
    []
  );

  const [currentTitle, setCurrentTitle] = useState(titles[0]);
  const [index, setIndex] = useState(0);
  const [typing, setTyping] = useState(true);

  // Typewriter effect
  useEffect(() => {
    const typingSpeed = 150;
    const deletingSpeed = 50;
    const pauseTime = 2000;
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
          setIndex((prevIndex) => (prevIndex + 1) % titles.length);
        }
      }
    };

    timeout = setTimeout(typeTitle, typingSpeed);
    return () => clearTimeout(timeout);
  }, [index, typing, titles]);

  // Animations

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
  // const style = `
  //   @keyframes blink-caret {
  //     from, to { border-color: transparent; }
  //     50% { border-color: rgba(255, 105, 180, 0.8); }
  //   }
  //   @keyframes hueShift {
  //     0% { filter: hue-rotate(0deg); }
  //     50% { filter: hue-rotate(180deg); }
  //     100% { filter: hue-rotate(360deg); }
  //   }
  //   .animate-hue { animation: hueShift 18s linear infinite; }
  // `;

  return (
    //     <section className="relative flex flex-col items-center justify-center min-h-screen  text-center text-gray-300 overflow-hidden px-4 -mt-5">
    //       {/* Floating bulb */}

    //       <style>{style}</style>

    //       {/* Main content */}
    //       <div className="flex flex-col items-center justify-center space-y-2">
    //         {/* Intro + Typing text */}
    //         <div>
    //           <p className="text-5xl font-bold  ">
    //             Hi, I’m <span className="">Tasmim Rahman </span>
    //           </p>

    //           <p
    //             className="mt-2 text-3xl font-bold text-pink-400 border-r-2 border-pink-500 pr-1 inline-block overflow-hidden whitespace-nowrap"
    //             style={{ animation: "blink-caret 0.75s step-end infinite" }}
    //           >
    //             {currentTitle}
    //           </p>
    //         </div>

    //         {/* Title */}
    //     <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight text-white">
    //   <span className="block animate-hue bg-gradient-to-r from-sky-400 via-indigo-400 to-fuchsia-400 bg-clip-text text-transparent">
    //     <div className="flex items-center justify-center gap-3">
    //       <span className="inline-block">Transforming Ideas</span>
    //       <Image
    //         src={bulb}
    //         width={70}
    //         height={70}
    //         alt="Bulb"
    //         className="inline-block translate-y-1" // small tweak for perfect alignment
    //       />
    //     </div>
    //   </span>
    //   <span className="block mt-1">into Interactive Realities</span>
    // </h1>

    //         {/* Description */}
    //         <p className="mx-auto my-4 max-w-2xl text-base sm:text-lg leading-relaxed text-white/80">
    //           I build fast, accessible web apps with React, Next.js & TypeScript.
    //           Let’s turn concepts into beautiful, high-performance digital experiences.
    //         </p>

    //         {/* Buttons */}
    //         <div className="py-5">
    //   <div className="flex flex-wrap justify-center gap-4 ">
    //           <Link href="projects">
    //             <button className="bg-gradient-to-r from-sky-500 to-indigo-500 hover:brightness-110 text-white font-semibold py-2 px-6 rounded-xl shadow-lg transition hover:shadow-xl uppercase">
    //               View Projects →
    //             </button>
    //           </Link>

    //           <Link href="/contact">
    //             <button className="bg-transparent hover:bg-white/10 border border-white/20 text-white/80 font-semibold py-2 px-6 rounded-xl backdrop-blur transition uppercase">
    //               Contact Me
    //             </button>
    //           </Link>
    //         </div>
    //         </div>

    //       </div>
    //     </section>
    <section className="relative flex flex-col items-center justify-center min-h-screen text-center text-gray-300 overflow-hidden px-4 -mt-5">
      <style>{style}</style>

      {/* Main content */}
      <div className="flex flex-col items-center justify-center space-y-3 max-w-3xl w-full">
        {/* Intro + Typing text */}
        <div>
          <p className=" text-3xl md:text-4xl lg:text-5xl  font-bold">
            Hi, I’m <span>Tasmim Rahman</span>
          </p>

          <p
            className="mt-2 text-lg sm:text-3xl -mb-2 font-bold text-pink-400 border-r-2 border-pink-500 pr-1 inline-block overflow-hidden whitespace-nowrap"
            style={{ animation: "blink-caret 0.75s step-end infinite" }}
          >
            {currentTitle}
          </p>
        </div>

        {/* Title */}
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold leading-tight md:leading-[1.1] text-white text-balance">
          <span className="block animate-hue bg-gradient-to-r from-sky-400 via-indigo-400 to-fuchsia-400 bg-clip-text text-transparent">
            {/* On mobile: stack vertically; on larger screens: inline */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-0">
              <span className="inline-block">Transforming Ideas</span>
              <Image
                src={bulb}
                width={70}
                height={70}
                alt="Bulb"
                className="inline-block w-8 h-8 sm:w-[70px] sm:h-[70px] translate-y-0 sm:translate-y-1"
              />
            </div>
          </span>
          <span className="block mt-1 text-gray-300">
            into Interactive Realities
          </span>
        </h1>

        {/* Description */}
        <p className="mx-auto my-4 max-w-2xl text-sm sm:text-base md:text-lg leading-relaxed text-gray-300">
          I build fast, accessible web apps with React, Next.js & TypeScript.
          Let’s turn concepts into beautiful, high-performance digital
          experiences.
        </p>

        {/* Buttons */}
        <div className="py-5">
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            <Link href="projects">
              <button
                style={{
                  boxShadow: "0 4px 15px rgba(255, 20, 147, 0.8)", // Neon glow effect
                }}
                className=" bg-transparent hover:bg-pink-700 text-pink-800 font-semibold hover:text-white py-2 px-6 border border-pink-800 hover:border-transparent rounded transition duration-300"
              >
                View Projects →
              </button>
            </Link>

            <Link href="/contact">
              <button className=" bg-transparent hover:bg-pink-700 text-pink-800 font-semibold hover:text-white py-2 px-6 border border-gray-800   duration-300">
                Contact me
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioHero;
