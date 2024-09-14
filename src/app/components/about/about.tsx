import Image from "next/image";
import React from "react";
import download from "../../assets/cat.gif";
import Link from "next/link";

const AboutMe = () => {
  return (
    <div className="text-gray-300 -my-10">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between">
          {/* Left-Side Content */}
          <div
            className="lg:w-1/2 w-full text-left lg:pr-10 lg:mt-0 mt-10"
            data-aos="fade-right"
          >
            <h1 className="text-3xl sm:text-4xl font-bold mb-6">
              Transforming Ideas into Reality
            </h1>
            <ul className="list-disc list-inside text-lg leading-relaxed space-y-4 text-gray-300">
              <li>
                Hey there! I'm a passionate
                <span className="text-pink-700"> MERN Stack Developer</span> who
                is deeply in love with coding 💻 and creating amazing web
                experiences 🌐.
              </li>

              <li>
                If you're looking for someone who’s eager to bring creative
                ideas to life 💡, check out my portfolio! I'm open to
                collaborations, freelance projects, or any exciting
                opportunities 💼. Let’s build something great together!
              </li>
            </ul>

            <Link href="/contact">
              <button
                style={{
                  boxShadow: "0 4px 15px rgba(255, 20, 147, 0.8)", // Neon glow effect
                }}
                className="mt-6 bg-transparent hover:bg-pink-700 text-pink-800 font-semibold hover:text-white py-2 px-6 border border-pink-800 hover:border-transparent rounded transition duration-300"
              >
                HIRE ME
              </button>
            </Link>
          </div>

          {/* Right-Side Image */}
          <div className="lg:w-1/2 w-full flex justify-center">
            <Image
              src={download}
              width={400}
              height={400}
              alt="Tasmim Rahman"
              className="rounded-lg mb-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
