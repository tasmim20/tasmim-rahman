/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import { SiLinkedin, SiGithub} from "react-icons/si";
import photo from "../../assets/t-photo.png";

export default function About() {
  return (
    <section className="relative overflow-hidden bg-[#0b1020] py-16 text-gray-200 sm:py-24">
   

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12 lg:px-8">
        {/* Left: Text */}
        <div>
          <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">About me</h2>

          <div className="mt-6 space-y-5 text-base leading-7 text-white/85">
            <p>
              Hey there 👋🏼 I'm <span className="font-semibold text-white">Tasmim Rahman</span>, a MERN stack developer passionate about creating dynamic, user-friendly, and impactful web experiences.
            </p>
            <p>
        I recently completed my Bachelor’s in Electronics & Communication Engineering (ECE), where I discovered my true passion for software and web development. What started with curiosity has grown into a focused career path, and I’m excited to keep building solutions that make a real difference.
            </p>
            <p>
            Over the past couple of years, I’ve worked on multiple projects—both independently and as part of a team delivering client projects. Through this experience, I’ve strengthened my skills in React, Next.js, Node.js, TypeScript, and MongoDB/MySQL, while also learning how to collaborate effectively, follow an agile workflow, and deliver high-quality solutions on time.
            </p>
            <p>
           I enjoy solving problems, debugging complex issues, and continuously learning new technologies. Currently, I’m exploring machine learning and AI tools to combine them with my web development skills, aiming to build smarter and more interactive applications
            </p>
            <p>If you’re looking for someone who pairs technical expertise with a creative, user-focused approach, I’d love to collaborate and bring your ideas to life.</p>
            <p>Check out my <a href="/hire" className="text-[#ff1493] hover:underline">Hire Me</a> page.</p>
          </div>
        </div>

        {/* Right: Photo + Links */}
        <aside className="lg:pl-4">
          <div className="relative mx-auto w-full max-w-md rotate-1 overflow-hidden rounded-3xl border border-white/10  p-2 shadow-2xl shadow-black/30 backdrop-blur-md lg:mx-0">
            <div className="overflow-hidden rounded-2xl">
              {/* Replace src with your photo */}
              <Image
                src={photo}
                alt="Portrait"
                width={500}
                height={700}
                className="w-full  object-cover"
                priority
              />
            </div>
          </div>

          {/* Social links */}
          <ul className="mt-8 space-y-3 text-sm">
            <SocialLink href="https://www.linkedin.com/in/tasmim-rahman/" icon={<SiLinkedin />} label="Follow on LinkedIn" />
            <SocialLink href="https://github.com/tasmim20" icon={<SiGithub />} label="Follow on GitHub" />
          </ul>
        </aside>
      </div>
    </section>
  );
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <li>
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white/90 shadow-2xl shadow-black/20 backdrop-blur transition hover:bg-white/10"
      >
        <span className="grid h-7 w-7 place-items-center rounded-md bg-white/10 ring-1 ring-white/20">
          <span className="text-lg opacity-90">{icon}</span>
        </span>
        <span className="font-medium">{label}</span>
      </a>
    </li>
  );
}


