/* eslint-disable react/no-unescaped-entities */
import { SiApple, SiGoogle, SiMeta, SiAmazon, } from "react-icons/si";
import { FiArrowRight } from "react-icons/fi";
import SkillsSection from "../skills/page";


export default function WorkWithMePage() {
  return (
    <main className="relative overflow-x-clip bg-[#050f25] text-gray-300">
    
      <section className="relative mx-auto max-w-6xl px-4 py-10 sm:py-24">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl mt-6">Let's work together</h1>
        <p className="mt-4 max-w-3xl text-base text-white/80 sm:text-lg">
          I'm always excited about new opportunities to create amazing digital experiences. Whether you're
          looking for a full-time developer or need help with a specific project, I'd love to hear from you.
        </p>
  <SkillsSection/>
      </section>


      <Divider />

      {/* 2) Why must you hire me? */}
   <section className="relative mx-auto max-w-6xl px-4 pb-10 sm:py-10">
  <h2 className="text-2xl font-bold sm:text-3xl">Why must you hire me?</h2>
  <ul className="mt-6 space-y-6 text-white/85">
    {whyHireMe.map((item, i) => (
      <li key={i} className="flex items-start gap-3">
        <FiArrowRight className="mt-1 shrink-0 text-indigo-400" />
        <p>{item.body}</p>
      </li>
    ))}
  </ul>
</section>

      <Divider />

   {/* 3) Preferences */}
<section className="relative mx-auto max-w-6xl px-4 py-14 sm:py-20" id="preferences">
  <h2 className="text-2xl font-bold sm:text-3xl">My preferences</h2>
  <div className="mt-8 grid gap-6 sm:grid-cols-2">
    {preferences.map((p) => (
      <div
        key={p.title}
        className="flex items-start gap-3 "
      >
        <FiArrowRight className="mt-1 shrink-0 text-indigo-400" />
        <div>
          <p className="font-semibold">{p.title}</p>
          <p className="mt-2 text-sm text-white/75">{p.body}</p>
        </div>
      </div>
    ))}
  </div>
</section>


      {/* Companies */}
      <section className="relative mx-auto max-w-6xl px-4 pb-24" id="companies">
        <h2 className="text-2xl font-bold sm:text-3xl">Companies I'd love to work with</h2>
        <p className="mt-2 text-white/70">Dream companies where I'd love to make an impact.</p>

        <ul className="mt-8 grid gap-6 sm:grid-cols-3 lg:grid-cols-5">
          {companies.map((c) => (
            <li
              key={c.name}
              className="group rounded-2xl border border-white/10 bg-white/5 p-5 text-center shadow-2xl shadow-black/20 backdrop-blur transition hover:translate-y-[-2px] hover:bg-white/10 hover:shadow-black/30"
            >
              <div className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-white/10 ring-1 ring-white/15">
                {c.icon}
              </div>
              <div className="mt-3 text-sm font-medium text-white/90">{c.name}</div>
            </li>
          ))}
        </ul>
           <div className="mx-auto max-w-4xl px-4 py-10 text-center">
        <p className="text-sm sm:text-base text-white/80">
          Ready to start a conversation? Reach out at{" "}
          <span
         
            className="font-medium text-[#ff1493]"
          >
           tasmim.tr@gmail.com
          </span>
        </p>

        <p className="mt-6 italic text-white/70">
Let's create something extraordinary together!
        </p>
      </div>
      </section>
    </main>
  );
}


const whyHireMe = [
  {
    title: "Pragmatic, positive teammate.",
    body:
      "Hiring me comes with a blend of clear communication, a knack for turning challenges into solvable problems, and a passion for delighting users with everything I build.",
  },
  {
    title: "Proven experience across domains.",
    body:
      "I’ve built skills by working with modern web technologies (React, Next.js, TypeScript, MERN stack) and gained exposure to different challenges across sectors. I also have hands-on experience working on client projects as part of a team, which strengthened my ability to collaborate, deliver on deadlines, and adapt to real-world requirements",
  },
  {
    title: "Always learning, always accountable.",
    body:
      "I learn quickly and enjoy taking on new challenges. I take responsibility for my work, focus on quality, and can work both independently and in a team. I’m always looking for ways to improve myself and the products I build.",
  },
];

const preferences = [
  {
    title: "Amazing work culture.",
    body:
      "I value companies that support their people and create room for growth. Healthy teams ship better products.",
  },
  {
    title: "Remote first.",
    body:
      "I value the flexibility and comfort of working from anywhere. A company that supports remote work is a big plus for me.",
  },
  {
    title: "Familiar tech stack.",
    body:
      "I like using the right tool for the job. I pick up new technologies quickly and enjoy modern web stacks.",
  },
  {
    title: "Fair compensation.",
    body:
      "I care about meaningful work and fair pay aligned with impact. Side projects keep me curious and sharp.",
  },
];

const companies = [
  { name: "Apple", icon: <SiApple size={28} color="#A2AAAD" /> },       
  { name: "Google", icon: <SiGoogle size={28} color="#4285F4" /> },     
  { name: "Meta", icon: <SiMeta size={28} color="#1877F2" /> },         
  { name: "Amazon", icon: <SiAmazon size={28} color="#FF9900" /> }, 
];

function Divider() {
  return <div className="mx-auto h-px max-w-6xl bg-gradient-to-r from-transparent via-white/15 to-transparent" />;
}

