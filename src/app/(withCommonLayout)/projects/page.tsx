"use client";
import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import harmic from "../../assets/harmic2.png";
import hoco from "../../assets/HOCO.png";
import nolan from "../../assets/directRelief.png";
import { ExternalLink, Laptop, Info } from "lucide-react";

interface Project {
  imgSrc: StaticImageData;
  title: string;
  description: string;
  liveLink: string;
  frontEndLink: string;
  backEndLink: string;
}

const projects: Project[] = [
  {
    imgSrc: hoco,
    title: "HOCO",
    description:
      "Hoco enhances Home Schooling with advanced SSR for optimal performance and SEO, offering a user-centric experience.",
    liveLink: "https://hoco-education-client.vercel.app/",
    frontEndLink: "https://github.com/tasmim20/hoco-education-client",
    backEndLink: "https://github.com/tasmim20/hoco-education-server",
  },
  {
    imgSrc: nolan,
    title: "Direct-Relief",
    description:
      "Direct Relief is a project for donation. Manage application state centrally with Redux and data fetching with RTQ Query.",
    liveLink: "https://direct-relief-client1.vercel.app/",
    frontEndLink: "https://github.com/tasmim20/direct-relief-client",
    backEndLink: "https://github.com/tasmim20/direct-relief-server",
  },
  {
    imgSrc: harmic,
    title: "HARMIC",
    description:
      "Harmic is an e-commerce website for different types of fruits and vegetables. Users can add and manage their blog.",
    liveLink: "https://harmic-client.firebaseapp.com/",
    frontEndLink: "https://github.com/tasmim20/harmic-client",
    backEndLink: "https://github.com/tasmim20/harmic-server",
  },
];

const ProjectCard = ({
  title,

  imageSrc,
  liveLink,
  frontEndLink,
  backEndLink,
  onDetailsClick,
}: {
  title: string;
  description: string;
  imageSrc: StaticImageData;
  liveLink: string;
  frontEndLink: string;
  backEndLink: string;
  onDetailsClick: () => void;
}) => (
  <div
    style={{
      boxShadow: "0 5px 10px rgba(255, 20, 147, 0.4)", // Neon glow effect
    }}
    className="bg-[#1e2235] rounded-lg overflow-hidden shadow-lg text-gray-200 transition-transform transform hover:scale-105 flex flex-col mx-7 md:mx-0"
  >
    <Image
      src={imageSrc}
      alt={title}
      layout="responsive"
      width={800}
      height={600}
      className="object-cover"
    />
    <div className="px-5 py-6 flex flex-col justify-between flex-grow">
      <h3 className="font-bold text-xl mb-4 text-gray-300 text-center">
        {title}
      </h3>
      <div className="mt-auto">
        <div className="flex gap-4 justify-center border-b border-b-gray-600 my-5 text-pink-800">
          <a
            className="font-bold hover:underline flex items-center gap-1"
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Laptop size={18} /> Live Link
          </a>
          <a
            className="font-bold hover:underline flex items-center gap-1"
            href={frontEndLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <ExternalLink size={18} /> Front-End
          </a>
          <a
            className="font-bold hover:underline flex items-center gap-1"
            href={backEndLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <ExternalLink size={18} /> Back-End
          </a>
        </div>
        <button
          onClick={onDetailsClick}
          className="bg-[#a54657] border border-gray-700 text-gray-300 font-bold py-2 px-4 rounded-full flex items-center justify-center w-full text-sm"
        >
          <Info className="mr-2" /> View Details
        </button>
      </div>
    </div>
  </div>
);

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleDetailsClick = (project: Project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <div id="projects" className="my-10 mb-20 text-gray-300 mx-auto max-w-8xl">
      <div className="ps-5  mt-16 mb-10 max-w-6xl mx-auto ">
        <h2 className="text-4xl font-bold mt-10 ">Check Out My Projects</h2>
        <p className="mt-3 ">
          Embark on a Journey Through My Diverse and Innovative Web Projects
          Showcase, Where I Keep Abreast of the Latest Trends and Technologies
          in the Field.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 mx-auto max-w-6xl">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            imageSrc={project.imgSrc}
            liveLink={project.liveLink}
            frontEndLink={project.frontEndLink}
            backEndLink={project.backEndLink}
            onDetailsClick={() => handleDetailsClick(project)}
          />
        ))}
      </div>

      {selectedProject && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
          <div className="bg-white p-6 rounded-lg max-w-lg w-full relative">
            <button
              onClick={handleCloseModal}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 text-2xl"
            >
              &times;
            </button>
            <h3 className="text-2xl font-semibold mb-4">
              {selectedProject.title}
            </h3>
            <p className="text-gray-700 mb-4">{selectedProject.description}</p>
            <div className="flex gap-4">
              <a
                className="text-gray-800 hover:underline flex items-center gap-1"
                href={selectedProject.liveLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="text-gray-800" /> Live Link
              </a>
              <a
                className="text-gray-800 hover:underline flex items-center gap-1"
                href={selectedProject.frontEndLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="text-gray-800" /> Front-End
              </a>
              <a
                className="text-gray-800 hover:underline flex items-center gap-1"
                href={selectedProject.backEndLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="text-gray-800" /> Back-End
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
