/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";
import profilePic from "../../assets/t-photo.png";
import { SlSocialLinkedin } from "react-icons/sl";
import { SiFacebook, SiGithub } from "react-icons/si";

export default function AboutSection() {
  return (
    <section className="relative mx-auto max-w-7xl rounded-2xl bg-[#050f25] px-6 -mt-10 text-gray-300 sm:px-10 overflow-hidden">
      {/* Background pattern */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-25"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, rgba(255,255,255,0.08) 0px, rgba(255,255,255,0.08) 1px, transparent 1px, transparent 26px), repeating-linear-gradient(90deg, rgba(255,255,255,0.08) 0px, rgba(255,255,255,0.08) 1px, transparent 1px, transparent 26px)",
          borderRadius: "1rem",
        }}
      />

      {/* Header */}
      <header className="mb-10">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full border border-white/10 px-4 py-1 text-xs tracking-wide text-white/70 backdrop-blur">
            My Journey
          </span>
          <h2 className="my-4 text-3xl font-extrabold tracking-tight sm:text-4xl text-[#ff1493]">
            About Me
          </h2>
          <div className="mx-auto mt-3 h-1 w-20 rounded-full bg-white/70" />
        </div>
      </header>

      {/* Main Content */}
      <div className="grid gap-10 lg:grid-cols-2 items-start">
        {/* LEFT: About + Education */}
        <div className="order-2 lg:order-1 space-y-8">
          {/* <div>
            <h2 className="text-xl font-semibold text-white">A Bit About Me</h2>
            <p className="mt-3 text-white/85 leading-relaxed">
              I'm a passionate MERN Stack Developer who loves solving real-world problems through clean,
              efficient, and scalable code. I enjoy transforming ideas into interactive, high-performance
              digital experiences using modern web technologies like React, Next.js, and Node.js.
            </p>
            <p className="mt-3 text-white/85 leading-relaxed">
              Beyond coding, I value teamwork, adaptability, and continuous learning. I thrive in
              collaborative environments where I can contribute to building meaningful products that make
              a difference.
            </p>
          </div> */}
          <div>
            <h2 className="text-xl font-semibold text-white">A Bit About Me</h2>
            <p className="mt-3 text-white/85 leading-relaxed">
              I’m{" "}
              <span className="text-pink-400 font-semibold">Tasmim Rahman</span>
              , a MERN Stack Developer passionate about crafting dynamic,
              user-friendly, and impactful web experiences. With a background in{" "}
              <span className="text-pink-400 font-semibold">
                Electronics & Communication Engineering
              </span>
              , I discovered my love for software and web
              development—transforming curiosity into a career focused on
              building meaningful digital solutions.
            </p>
            <p className="mt-3 text-white/85 leading-relaxed">
              Over the years, I’ve developed projects using{" "}
              <span className="text-pink-400 font-semibold">
                React, Next.js, Node.js, TypeScript
              </span>
              , and <span className="text-pink-400 font-semibold">MongoDB</span>
              , gaining experience in both independent and collaborative team
              environments.
            </p>
            <p className="mt-3 text-white/85 leading-relaxed">
              I love solving problems, learning continuously, and exploring{" "}
              <span className="text-pink-400 font-semibold">
                AI and machine learning
              </span>{" "}
              to create smarter, more interactive web applications.
            </p>
          </div>

          {/* Education */}
          <div className="rounded-lg border border-white/10 bg-white/5 p-6">
            <h3 className="text-lg font-semibold text-white">Education</h3>
            <ul className="mt-4 space-y-5 text-sm">
              <li>
                <p className="font-medium text-white">
                  BSc in Electronics & Communication Engineering
                </p>
                <p className="text-white/70">
                  Hajee Mohammad Danesh Science & Technology University
                </p>
                <p className="text-white/50 text-xs">2020 – 2025</p>
                <p className="text-pink-400 text-xs font-semibold mt-1">
                  CGPA: 3.55 / 4.00
                </p>
              </li>
              <li>
                <p className="font-medium text-white">
                  Higher Secondary School Certificate (HSC)
                </p>
                <p className="text-white/70">
                  Parbatipur Adarsha Degree College
                </p>
                <p className="text-white/50 text-xs">2017 – 2019</p>
                <p className="text-pink-400 text-xs font-semibold mt-1">
                  GPA: 5.00 / 5.00
                </p>
              </li>
              <li>
                <p className="font-medium text-white">
                  Secondary School Certificate (SSC)
                </p>
                <p className="text-white/70">
                  Janankur Pilot Model High School
                </p>
                <p className="text-white/50 text-xs">2015 – 2017</p>
                <p className="text-pink-400 text-xs font-semibold mt-1">
                  GPA: 5.00 / 5.00
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* RIGHT: Photo + Social Links */}
        {/* RIGHT: photo + links in one column with the same width */}
        <div className="order-1 lg:order-2 w-full flex lg:justify-end">
          <div className="w-full max-w-md">
            {/* Photo */}
            <div className="relative overflow-hidden rounded-3xl border border-white/10 p-2 shadow-2xl shadow-black/30 backdrop-blur-md">
              <div className="overflow-hidden rounded-2xl">
                <Image
                  src={profilePic}
                  alt="Tasmim Rahman"
                  width={500}
                  height={700}
                  className="w-full object-cover"
                  priority
                />
              </div>
            </div>

            {/* Social Buttons */}
            <div className="mt-6 space-y-3">
              <a
                href="https://www.linkedin.com/in/tasmim-rahman/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-gray-200 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10">
                  <SlSocialLinkedin className="text-xl text-white" />
                </div>
                <span>Follow on LinkedIn</span>
              </a>

              <a
                href="https://github.com/tasmim20"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-gray-200 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10">
                  <SiGithub className="text-xl text-white" />
                </div>
                <span>Follow on GitHub</span>
              </a>

              <a
                href="https://web.facebook.com/tasmim.rahman.526889"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-gray-200 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10">
                  <SiFacebook className="text-xl text-white" />
                </div>
                <span>Follow on Facebook</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
