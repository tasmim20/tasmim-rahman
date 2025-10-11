"use client";
import React, { useEffect, useRef, useState } from "react";

const sections = [
  {
    title: "Workstation",
    items: [
      {
        name: "HP Pavilion Laptop 15",
        type: "Personal",
        desc: "My primary machine with 16GB RAM, 512GB SSD running Windows 11. It handles all my development needs smoothly and is perfect for my daily tasks.",
      },
    ],
  },
  {
    title: "Development Tools",
    items: [
      {
        name: "Visual Studio Code",
        type: "Personal",
        desc: "My go-to code editor for all development work. The extensive plugin ecosystem and integrated terminal make it perfect for my workflow.",
      },
    ],
  },
  {
    title: "Documentation & Design",
    items: [
      {
        name: "Personal Code Diary",
        type: "Personal",
        desc: "I maintain personal documentation of code logic and solutions, helping me track progress and build a strong reference for future projects.",
      },
      {
        name: "Excalidraw",
        type: "Personal",
        desc: "My go-to tool for quick sketches and visualizing system architecture — its hand-drawn style makes complex ideas more approachable.",
      },
      {
        name: "Figma",
        type: "Personal",
        desc: "Used occasionally for detailed UI design, layout planning, and component prototyping before development.",
      },
    ],
  },
  {
    title: "Productivity",
    items: [
      {
        name: "Windows Terminal",
        type: "Personal",
        desc: "A massive improvement over the traditional command prompt — supports tabs, split panes, and custom themes that enhance productivity.",
      },
      {
        name: "GitHub Desktop",
        type: "Personal",
        desc: "While I’m comfortable with Git commands, GitHub Desktop simplifies version control with an intuitive, visual interface.",
      },
      {
        name: "Microsoft Edge",
        type: "Personal",
        desc: "Built on Chromium, it provides excellent developer tools and performance while consuming fewer resources than Chrome.",
      },
    ],
  },
];

const Uses = () => {
  const refs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = refs.current.indexOf(entry.target as HTMLDivElement);
          if (entry.isIntersecting) setActiveIndex(index);
        });
      },
      { threshold: 0.4 }
    );

    refs.current.forEach((ref) => ref && observer.observe(ref));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative mx-auto max-w-5xl px-6 py-20 text-gray-300">
      {/* Background dots */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />

      {/* Header */}
      <div className="text-center mb-20">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-300">
          Software and gadgets I use to get the job done.
        </h1>
        <p className="mt-4 text-gray-300 max-w-2xl mx-auto leading-relaxed">
          I’m a tech enthusiast who enjoys exploring new tools and gadgets that
          make development smoother and more fun. Here’s what’s powering my
          workflow ⚡
        </p>
      </div>

      {/* Line and sections */}
      <div className="relative border-l border-white/10 pl-8">
        {/* Highlighted active line */}
        <div
          className="absolute top-0 bottom-0 left-[1px] w-[2px] transition-colors duration-300"
          style={{
            background: `linear-gradient(
              to bottom,
              rgba(236,72,153,0.9) ${activeIndex * 25}%,
              rgba(255,255,255,0.1) ${activeIndex * 25}%
            )`,
          }}
        />

        {/* Sections */}
        <div className="space-y-16">
          {sections.map((section, index) => (
            <div
              key={index}
              ref={(el) => void (refs.current[index] = el)}
              className="grid grid-cols-1 sm:grid-cols-2 gap-8 relative"
            >
              <div className="relative">
                {/* Bullet centered on the line */}
                <div className="relative">
                  {/* bullet centered on the left line */}
                  <span
                    className={`absolute left-[-2rem] -translate-x-1/2 top-1.5 h-3 w-3 rounded-full transform transition-all duration-300 ${
                      activeIndex === index
                        ? "bg-pink-500 shadow-pink-500/50 shadow-md scale-110"
                        : "bg-white/40"
                    }`}
                  />
                  <h2 className="pl-6 text-xl font-bold text-gray-300">
                    {section.title}
                  </h2>
                </div>
              </div>

              {/* Right column */}
              <div className="space-y-6 text-gray-300">
                {section.items.map((item, i) => (
                  <div key={i}>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-gray-300">
                        {item.name}
                      </span>
                      <span className="text-xs uppercase bg-pink-500/20 border border-pink-500/30 px-2 py-0.5 rounded-full">
                        {item.type}
                      </span>
                    </div>
                    <p className="mt-1 text-gray-300 leading-relaxed max-w-xl">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Uses;
