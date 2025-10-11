"use client"
import { ReactElement } from "react";
import { motion } from "framer-motion";
import type { Variants, Transition } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiGit,
  SiFigma,
 
} from "react-icons/si";
import { FaServer } from "react-icons/fa";


type Skill = {
  name: string;
  sub?: string;
  icon: ReactElement;
};

type Group = {
  title: string;
  items: Skill[];
};

const groups: Group[] = [
  {
    title: "Frontend Development",
    items: [
      { name: "ReactJS",       icon: <SiReact size={32} color="#61DAFB" /> },
      { name: "Next.js",       icon: <SiNextdotjs size={32} color="#000000" /> }, // black brand
      { name: "JavaScript",    sub: "ES6+", icon: <SiJavascript size={32} color="#F7DF1E" /> },
      { name: "TypeScript",    icon: <SiTypescript size={32} color="#3178C6" /> },
      { name: "HTML5",         icon: <SiHtml5 size={32} color="#E34F26" /> },
      { name: "CSS3",          icon: <SiCss3 size={32} color="#1572B6" /> },
      { name: "Tailwind CSS",  icon: <SiTailwindcss size={32} color="#38BDF8" /> }
    ]
  },
  {
    title: "Backend & Database",
    items: [
      { name: "Node.js",       icon: <SiNodedotjs size={32} color="#339933" /> },
      { name: "Express.js",    icon: <SiExpress size={32} color="#FFFFFF" /> }, // Express brand is usually monochrome
      { name: "MongoDB",       icon: <SiMongodb size={32} color="#47A248" /> },
      { name: "MySQL",         icon: <SiMysql size={32} color="#4479A1" /> }
    ]
  },
  {
    title: "Tools & Methodologies",
    items: [
      { name: "Git",              icon: <SiGit size={32} color="#F05032" /> },
      { name: "RESTful APIs",     icon: <FaServer size={32} /> }, // neutral grey
      { name: "Responsive Design",icon: <SiCss3 size={32} color="#1572B6" /> },
      { name: "Figma",            icon: <SiFigma size={32} color="#F24E1E" /> }
    ]
  }
];

// Keep transition strongly typed (prevents string-widening issues)
const spring: Transition = { type: "spring", stiffness: 120, damping: 14 };

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.05 }
  }
} satisfies Variants;

const item = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0, transition: spring }
} satisfies Variants;

export default function SkillsSection() {
  return (
    <section
      aria-label="Technologies & Expertise"
      className="relative overflow-hidden pt-10 sm:pb-10 sm:pt-10 bg-[#050f25]"
    >
      {/* Subtle nebula background */}
      <div
        aria-hidden
        className=""
      />
      <div className="absolute inset-0 -z-10 opacity-60 [mask-image:radial-gradient(60%_60%_at_50%_50%,#000_40%,transparent_100%)]">
        <Stars />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full border border-white/10 px-4 py-1 text-xs tracking-wide text-white/70 backdrop-blur">
            Technologies & Expertise
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
            My Skills
          </h2>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3"
        >
          {groups.map((group) => (
            <motion.div
              key={group.title}
              variants={item}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/20 backdrop-blur-xl transition hover:shadow-black/30 dark:bg-black/30"
            >
              <h3 className="mb-4 text-center text-lg font-semibold tracking-wide">
                {group.title}
              </h3>
              <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                {group.items.map((s) => (
                  <li
                    key={s.name}
                    className="group flex flex-col items-center gap-2 rounded-xl bg-white/5 p-4 ring-1 ring-white/10 transition hover:translate-y-[-2px] hover:bg-white/10 hover:ring-white/20"
                  >
                    <div className="text-3xl opacity-90 drop-shadow">{s.icon}</div>
                    <div className="text-center text-gray-300 text-sm font-medium leading-tight">
                      {s.name}
                    </div>
                    {s.sub && <div className="text-xs text-white/60">{s.sub}</div>}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Stars() {
  return (
    <div className="h-full w-full [background-image:radial-gradient(2px_2px_at_20%_30%,rgba(255,255,255,0.25),transparent_60%),radial-gradient(1px_1px_at_70%_40%,rgba(255,255,255,0.2),transparent_55%),radial-gradient(1.5px_1.5px_at_40%_80%,rgba(255,255,255,0.2),transparent_60%)]" />
  );
}
