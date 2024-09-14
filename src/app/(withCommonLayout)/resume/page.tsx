/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Github, Figma, Framer, Code2, GitMerge, Code } from "lucide-react";
import Link from "next/link";

const Resume = () => {
  return (
    <div className="bg-gray-900 text-gray-300  p-8 max-w-7xl mx-auto my-20">
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Resume</h1>
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Main Info */}
        <div className="lg:col-span-2">
          <h2 className="text-3xl font-bold mb-2">Tasmim Rahman</h2>
          <p className="text-gray-400 mb-4">MERN Stack Developer</p>

          <p className="text-sm mb-6">
            I'm a young and energetic MERN Stack Developer who's passionate
            about learning and staying on the cutting edge of technology. I love
            picking up new skills quickly and staying in tune with the latest
            industry trends. My main goal is to use my skills to make a positive
            impact in the world. In addition to my technical abilities, I'm a
            great communicator, which helps me collaborate effectively with
            diverse teams. I bridge the gap between developers and other
            stakeholders to ensure successful projects. I'm committed to using
            my knowledge to create solutions that not only meet but surpass user
            and client expectations, ultimately making a real difference in the
            digital world.
          </p>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">Skills</h3>
            <div className="flex flex-wrap gap-2">
              {[
                "HTML",
                "CSS",
                "JavaScript",
                "ReactJs",
                "NextJs",
                "NodeJs",
                "ExpressJs",
                "MongoDB",
                "MySQL",
                "Tailwind",
                "Bootstrap",
                "Mongoose",
                "TypeScript",
                "Redux",
                "Firebase",
              ].map((skill) => (
                <span
                  key={skill}
                  className="bg-[#713450] px-4 py-2 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Education and Tools */}
        <div>
          {/* Education Section */}
          <div className="space-y-4 mb-6">
            <h3 className="text-2xl font-semibold mb-4">Education</h3>
            <div>
              <h4 className="font-semibold">
                BSc in Electronics & Communication Engineering
              </h4>
              <p className="text-sm text-gray-400">
                Hajee Mohammad Danesh Science & Technology University
              </p>
              <p className="text-xs text-gray-500">2020 - Present</p>
            </div>
            <div>
              <h4 className="font-semibold">
                Higher Secondary School Certificate (HSC)
              </h4>
              <p className="text-sm text-gray-400">
                Parbatipur Adarsha Degree College
              </p>
              <p className="text-xs text-gray-500">2017 - 2019</p>
            </div>
            <div>
              <h4 className="font-semibold">
                Secondary School Certificate (SSC)
              </h4>
              <p className="text-sm text-gray-400">
                Janankur Pilot Model High School
              </p>
              <p className="text-xs text-gray-500">2015 - 2017</p>
            </div>
          </div>

          {/* Tools Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Tools I use every day
            </h3>
            <div className="grid grid-cols-3 gap-2">
              <Github
                className="bg-[#221b36] rounded-md p-2 shadow-md"
                size={40}
              />
              <Figma
                className="bg-[#221b36] rounded-md p-2 shadow-md"
                size={40}
              />
              <Framer
                className="bg-[#221b36] rounded-md p-2 shadow-md"
                size={40}
              />
              <Code2
                className="bg-[#221b36] rounded-md p-2 shadow-md"
                size={40}
              />
              <GitMerge
                className="bg-[#221b36] rounded-md p-2 shadow-md"
                size={40}
              />
              <Code
                className="bg-[#221b36] rounded-md p-2 shadow-md"
                size={40}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Download Resume Button */}
      <div className="text-center my-10">
        <Link href="" download>
          <button
            style={{
              backgroundColor: "rgba(255, 20, 147, 0.6)", // Semi-transparent neon background
              boxShadow: "0 4px 15px rgba(255, 20, 147, 0.8)", // Neon glow effect
            }}
            className="text-center text-gray-300  uppercase font-semibold py-3 px-5 rounded-md transition-transform duration-300 transform hover:scale-110"
          >
            Download Resume
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Resume;
