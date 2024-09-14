/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Code, BookOpen, FileCode } from "lucide-react";

// Define TypeScript types for props
interface ServiceCardProps {
  icon: React.ElementType; // Icon component
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon: Icon,
  title,
  description,
}) => (
  <div
    style={{
      // Semi-transparent neon background
      // Semi-transparent neon background
      boxShadow: "0 8px 15px rgba(255, 20, 147, 0.8)", // Neon glow effect with emphasis on bottom-right
    }}
    className="bg-[#1e2235] p-6 rounded-lg relative"
  >
    <div className="w-12 h-12 bg-[#2a2f45] rounded-full flex items-center justify-center mb-4">
      <Icon className="text-gray-300 " size={54} />
    </div>
    <h3 className="text-gray-300  text-xl font-semibold mb-3">{title}</h3>
    <p className="text-gray-400 text-md">{description}</p>
  </div>
);

const ExpertiseServices: React.FC = () => {
  const services = [
    {
      icon: Code,
      title: "Frontend Development",
      description:
        "I specialize in crafting visually engaging and responsive front-end experiences using the latest technologies. From building intuitive user interfaces with React and modern JavaScript frameworks to ensuring cross-browser compatibility and optimal performance, I deliver solutions that enhance user engagement and provide a seamless experience across devices.",
    },
    {
      icon: BookOpen,
      title: "MERN Stack Development",
      description:
        "With extensive experience in the MERN stack (MongoDB, Express.js, React, and Node.js), I build full-stack applications that are scalable, efficient, and modern. This approach enables the development of robust web applications that can handle complex features and large amounts of data while maintaining a clean and dynamic user experience.",
    },
    {
      icon: FileCode,
      title: "Backend Development",
      description:
        "I offer comprehensive backend development services, focusing on building scalable server-side applications and APIs. Utilizing technologies like Node.js, Express.js, and various database systems, I ensure that the backend is secure, efficient, and well-integrated with the frontend, enabling smooth data flow and reliable functionality for web applications.",
    },
  ];

  return (
    <div className="text-gray-300  p-8">
      <div className="max-w-6xl mx-auto">
        <div className="my-10">
          <div>
            <h1 className="text-4xl font-bold my-5">Expertise service!</h1>
            <h2 className="text-3xl font-semibold mb-4">Let's check it out.</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExpertiseServices;
