"use client";
import { motion } from "framer-motion";
import type { Variants, Transition } from "framer-motion";
import { RiRocketFill } from "react-icons/ri";
import { MdBarChart } from "react-icons/md";
import { FiTarget } from "react-icons/fi";

export default function Goals() {
  return (
    <section
      aria-label="Career Goals"
      className="relative overflow-hidden py-20 sm:py-24"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_600px_at_80%_40%,rgba(168,85,247,0.12),transparent_60%),radial-gradient(1000px_500px_at_20%_70%,rgba(59,130,246,0.12),transparent_60%)]"
      />
      <div className="absolute inset-0 -z-10 opacity-70 [mask-image:radial-gradient(60%_60%_at_50%_50%,#000_40%,transparent_100%)]">
        <Stars />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full border border-white/10 px-4 py-1 text-xs tracking-wide text-white/70 backdrop-blur">
            My Roadmap
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Career Goals
          </h2>
          <div className="mx-auto mt-3 h-1 w-20 rounded-full bg-white/70" />
        </div>

        {/* Cards */}
        <motion.ul
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3"
        >
          <GoalCard
            icon={<RiRocketFill className="text-3xl" />}
            title="Short-Term Goal"
            text="To Secure a challenging role where I build fast, accessible web apps with React/Next.js, TypeScript, and modern tooling—owning UI development end-to-end,collaborating closely with design and backend, and shipping high-quality features while learning from experienced mentors."
          />
          <GoalCard
            icon={<MdBarChart className="text-3xl" />}
            title="Mid-Term Goal"
            text="Grow into a Senior developer who can design front-end architectures, improve performance and DX, write robust tests, and lead small initiatives—whether in a pure Frontend, React-focused, or MERN stack context."
          />
          <GoalCard
            icon={<FiTarget className="text-3xl" />}
            title="Long-Term Goal"
            text="To become a technical lead or solutions architect, guiding technical strategy, driving innovation in user experience, and making a significant impact on the products and teams I help create."
          />
        </motion.ul>
      </div>
    </section>
  );
}

type GoalCardProps = {
  icon: React.ReactNode;
  title: string;
  text: string;
};

const spring: Transition = { type: "spring", stiffness: 120, damping: 16 };

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.06 } },
} satisfies Variants;

const card = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: spring },
} satisfies Variants;

function GoalCard({ icon, title, text }: GoalCardProps) {
  return (
    <motion.li
      variants={card}
      className="relative rounded-2xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/20 backdrop-blur-xl transition hover:bg-white/10 hover:shadow-black/30 dark:bg-black/30"
    >
      {/* Accent border glow */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10" />
      <div className="mb-3 flex items-center gap-3">
        <span className="grid h-10 w-10 place-items-center rounded-full bg-white/10 ring-1 ring-white/20">
          {icon}
        </span>
        <h3 className="text-lg font-semibold tracking-wide">{title}</h3>
      </div>
      <p className="text-sm/6 text-white/80">{text}</p>
    </motion.li>
  );
}

function Stars() {
  return (
    <div className="h-full w-full [background-image:radial-gradient(2px_2px_at_20%_30%,rgba(255,255,255,0.25),transparent_60%),radial-gradient(1px_1px_at_70%_40%,rgba(255,255,255,0.2),transparent_55%),radial-gradient(1.5px_1.5px_at_40%_80%,rgba(255,255,255,0.2),transparent_60%)]" />
  );
}
