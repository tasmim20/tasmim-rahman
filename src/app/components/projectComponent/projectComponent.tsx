"use client";

import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import harmic from "../../assets/harmic2.png";
import hoco from "../../assets/HOCO.png";
import nolan from "../../assets/directRelief.png";
import clothingStore from "../../assets/clothing.png";
import portfolio from "../../assets/portfolio.png";
import event from "../../assets/event.png";
import { ExternalLink, Laptop, Info } from "lucide-react";
import Link from "next/link";

interface Project {
  imgSrc: string | StaticImageData;
  title: string;
  description: string;
  liveLink: string;
  frontEndLink?: string;
  backEndLink?: string;
  tech: string[];
  features?: string[];
}

// ✅ Use the same identifier everywhere: `projects`
const projects: Project[] = [
  {
    imgSrc: hoco,
    title: "HOCO",
    description:
      "Full Stack project for Online Homeschooling with advanced SSR for optimal performance and SEO, offering a seamless, user-centric experience using Next.js and Redux.",
    liveLink: "https://hoco-education-client.vercel.app/",
    frontEndLink: "https://github.com/tasmim20/hoco-education-client",
    backEndLink: "https://github.com/tasmim20/hoco-education-server",
    tech: [
      "Next.js",
      "NextAuth",
      "Redux Toolkit",
      "Axios",
      "TypeScript",
      "Material UI",
      "MongoDB",
      "Node.js",
      "Express.js",
      "SSR",
      "Vercel",
    ],
    features: [
      "Students can enroll in courses and buy books; job seekers can apply for positions.",
      "Authentication via NextAuth (Google/GitHub) and custom email-based signup/login.",
      "Custom dashboards for students, instructors, and admin.",
    ],
  },
  {
    imgSrc: nolan,
    title: "DIRECT-RELIEF",
    description:
      "Dynamic donation platform using Redux for centralized state management and robust authentication, enabling efficient donation workflows with real-time data handling.",
    liveLink: "https://direct-relief-client1.vercel.app/",
    frontEndLink: "https://github.com/tasmim20/direct-relief-client",
    backEndLink: "https://github.com/tasmim20/direct-relief-server",
    tech: [
      "React",
      "TypeScript",
      "Redux Toolkit",
      "RTK Query",
      "MongoDB",
      "Node.js",
      "Express.js",
      "Tailwind CSS",
      "React Hook Form",
    ],
    features: [
      "Centralized state with Redux Toolkit and data fetching via RTK Query.",
      "Donors can post, update, and delete donations persisted in MongoDB.",
      "Authentication for user login and signup (client and server-side).",
    ],
  },
  {
    imgSrc: harmic,
    title: "HARMIC",
    description:
      "A visually appealing, responsive online vegetable shopping experience with robust user authentication and content management.",
    liveLink: "https://harmic-client.firebaseapp.com/",
    frontEndLink: "https://github.com/tasmim20/harmic-client",
    backEndLink: "https://github.com/tasmim20/harmic-server",
    tech: [
      "React",
      "MongoDB",
      "Express.js",
      "Firebase Auth",
      "Tailwind CSS",
      "React Hook Form",
      "Axios",
      "TanStack Query",
      "Node.js",
    ],
    features: [
      "Responsive vegetable store designed for all devices.",
      "Firebase authentication for login and signup.",
      "Personal dashboard to add, update, and delete blogs.",
    ],
  },
  // extra
  {
    imgSrc: clothingStore,
    title: "Clothing Store",
    description:
      "Mobile-first e-commerce with rich product cards and a persistent, real-time cart.",
    liveLink: "https://chutti-clothing-store.vercel.app/",
    frontEndLink: "https://github.com/tasmim20/clothing-store-client",
    backEndLink: "https://github.com/tasmim20/clothing-store-server",
    tech: [
      "Next.js",
      "App Router",
      "MongoDB",
      "Node.js",
      "Express.js",
      "Tailwind CSS",
    ],
  },
  {
    imgSrc: portfolio,
    title: "My Personal Portfolio Website",
    description:
      "Projects, skills, and experience with smooth sections and recruiter-friendly navigation.",
    liveLink: "https://tasmim-rahman.vercel.app/",
    frontEndLink: "https://github.com/tasmim20/tasmim-rahman",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
  },
  {
    imgSrc: event,
    title: "event360",
    description:
      "Kanban-style task management for events with team collaboration.",
    liveLink: "https://event-360-three.vercel.app/",
    frontEndLink: "https://github.com/you/taskflow-client",
    backEndLink: "https://github.com/you/taskflow-server",
    tech: ["Vite + React", "Tailwind CSS"],
  },
];

const TechBadges = ({ tech }: { tech: string[] }) => (
  <div className="flex flex-wrap gap-2 mt-3">
    {tech.map((t) => (
      <span
        key={t}
        className="text-xs px-2 py-1 rounded-full border border-pink-500/40 bg-pink-500/10"
      >
        {t}
      </span>
    ))}
  </div>
);

const ProjectCard = ({
  title,
  imageSrc,
  liveLink,
  frontEndLink,
  backEndLink,
  onDetailsClick,
  tech,
}: {
  title: string;
  imageSrc: string | StaticImageData;
  liveLink: string;
  frontEndLink?: string;
  backEndLink?: string;
  onDetailsClick: () => void;
  tech: string[];
}) => (
  <div
    style={{ boxShadow: "0 5px 10px rgba(255, 20, 147, 0.4)" }}
    className="bg-[#1e2235] rounded-lg overflow-hidden shadow-lg text-gray-200 transition-transform transform hover:scale-105 flex flex-col mx-7 md:mx-0"
  >
    <Image
      src={imageSrc}
      alt={title}
      width={800}
      height={600}
      sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
      className="object-cover"
    />
    <div className="px-5 py-6 flex flex-col justify-between flex-grow">
      <h3 className="font-bold text-xl mb-2 text-gray-300 text-center">
        {title}
      </h3>

      <TechBadges tech={tech} />

      <div className="mt-auto">
        <div className="flex flex-wrap gap-4 justify-center border-b border-b-gray-600 my-5 text-pink-800">
          <a
            className="font-bold hover:underline flex items-center gap-1"
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Laptop size={18} /> Live
          </a>

          {frontEndLink && (
            <a
              className="font-bold hover:underline flex items-center gap-1"
              href={frontEndLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink size={18} /> Front-End
            </a>
          )}

          {backEndLink && (
            <a
              className="font-bold hover:underline flex items-center gap-1"
              href={backEndLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink size={18} /> Back-End
            </a>
          )}
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

// ✅ PascalCase component; use the same `projects` variable
const ProjectsComponent: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showAll, setShowAll] = useState(false);
  console.log(setShowAll);

  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  const handleDetailsClick = (project: Project) => setSelectedProject(project);
  const handleCloseModal = () => setSelectedProject(null);

  return (
    <div id="projects" className="mb-20  mx-auto max-w-8xl bg-[#050f25]">
      <div className="mx-auto max-w-2xl text-center my-10">
        <span className="inline-block rounded-full border border-white/10 px-4 py-1 text-xs tracking-wide text-white/70 backdrop-blur">
          My Roadmap
        </span>
        <h2 className="my-4 text-3xl font-extrabold tracking-tight sm:text-4xl text-[#ff1493]">
          Featured Projects
        </h2>
        <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-white/70" />
      </div>

      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 mx-auto max-w-6xl">
        {visibleProjects.map((p, index) => (
          <ProjectCard
            key={index}
            title={p.title}
            imageSrc={p.imgSrc}
            liveLink={p.liveLink}
            frontEndLink={p.frontEndLink}
            backEndLink={p.backEndLink}
            onDetailsClick={() => handleDetailsClick(p)}
            tech={p.tech}
          />
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <Link href="/projects">
          <button
            style={{
              boxShadow: "0 4px 15px rgba(255, 20, 147, 0.8)", // Neon glow effect
            }}
            className="mt-6 bg-transparent hover:bg-pink-700 text-pink-800 font-semibold hover:text-white py-2 px-6 border border-pink-800 hover:border-transparent rounded transition duration-300"
          >
            LOAD MORE
          </button>
        </Link>
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
            <h3 className="text-2xl font-semibold mb-3 text-gray-900">
              {selectedProject.title}
            </h3>
            <p className="text-gray-700 mb-4">{selectedProject.description}</p>

            <div className="mb-4">
              <h4 className="font-semibold text-gray-900 mb-2">Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2 py-1 rounded-full border border-gray-300 bg-gray-100 text-gray-800"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {selectedProject.features &&
              selectedProject.features.length > 0 && (
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Features</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-800">
                    {selectedProject.features.map((f, i) => (
                      <li key={i}>{f}</li>
                    ))}
                  </ul>
                </div>
              )}

            <div className="flex flex-wrap gap-4">
              <a
                className="text-gray-800 hover:underline flex items-center gap-1"
                href={selectedProject.liveLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="text-gray-800" /> Live
              </a>

              {selectedProject.frontEndLink && (
                <a
                  className="text-gray-800 hover:underline flex items-center gap-1"
                  href={selectedProject.frontEndLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="text-gray-800" /> Front-End
                </a>
              )}

              {selectedProject.backEndLink && (
                <a
                  className="text-gray-800 hover:underline flex items-center gap-1"
                  href={selectedProject.backEndLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="text-gray-800" /> Back-End
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectsComponent;
