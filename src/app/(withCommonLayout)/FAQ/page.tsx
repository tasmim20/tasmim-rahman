import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";

export default function FAQ() {
  return (
    <section aria-label="Frequently Asked Questions" className="relative overflow-hidden py-20 sm:py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 "
      />
      <div className="absolute inset-0 -z-10 opacity-70 [mask-image:radial-gradient(60%_60%_at_50%_50%,#000_40%,transparent_100%)]">
        <Stars />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full border border-white/10 px-4 py-1 text-xs tracking-wide text-white/70 backdrop-blur">
            Have Questions? I Have Answers
          </span>
          <h2 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
            Frequently Asked Questions
          </h2>
          <div className="mx-auto mt-3 h-1 w-20 rounded-full bg-white/70" />
        </div>

        {/* FAQ list */}
        <ul className="mx-auto mt-10 max-w-5xl space-y-4">
          {faqs.map((f, i) => (
            <FAQItem key={i} q={f.q} a={f.a} />)
          )}
        </ul>
      </div>
    </section>
  );
}

// ——— Item ———

type FAQItemProps = { q: string; a: string };

const caret = {
  closed: { rotate: 0 },
  open: { rotate: 180 },
} satisfies Variants;

function FAQItem({ q, a }: FAQItemProps) {
  const [open, setOpen] = useState(false);
  const id = q.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");

  return (
    <li className="rounded-2xl border border-white/10 bg-white/5 shadow-2xl shadow-black/20 backdrop-blur-xl">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={`panel-${id}`}
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-6 rounded-2xl px-6 py-5 text-left transition hover:bg-white/10"
      >
        <span className="text-base font-semibold tracking-wide text-white/90">
          {q}
        </span>
        <motion.span
          variants={caret}
          animate={open ? "open" : "closed"}
          className="grid h-7 w-7 place-items-center rounded-full bg-white/10 ring-1 ring-white/20"
        >
          <FiChevronDown className="text-lg" />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={`panel-${id}`}
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ type: "tween", duration: 0.25 }}
            className="overflow-hidden px-6"
          >
            <div className="pb-5 text-sm/6 text-white/80">
              {a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
}

// ——— Data ———

const faqs: FAQItemProps[] = [
  {
    q: "Are you currently available for freelance projects or full-time opportunities?",
    a: "Absolutely! I am actively seeking new full-time opportunities. I am also open to discussing interesting freelance projects that align with my skillset. Please feel free to reach out via the contact form below.s"
  },
  {
    q: "What is your preferred technology stack?",
    a: "My core expertise lies in the modern JavaScript ecosystem. I'm most proficient with React and Next.js for frontend development. For backend tasks, I'm comfortable with Node.js and have experience with various databases like MongoDB. I'm a lifelong learner and always excited to adapt to new technologies required by a project."
  },
  {
    q: "What does your typical development process look like?",
    a: "I follow an agile approach. My process usually begins with understanding requirements and user stories, then designing a clear component architecture. From there, I move into development, writing clean and maintainable code. I emphasize frequent communication, regular code reviews, and thorough testing to ensure a high-quality final product"
  },
  {
    q: "Are you open to working remotely or considering relocation?",
    a: "Yes. I enjoy remote collaboration across time zones and can align with core hours. I am also open to discussing relocation opportunities for a position that is a great fit for my career goals."
  }
];

function Stars() {
  return (
    <div className="h-full w-full [background-image:radial-gradient(2px_2px_at_20%_30%,rgba(255,255,255,0.25),transparent_60%),radial-gradient(1px_1px_at_70%_40%,rgba(255,255,255,0.2),transparent_55%),radial-gradient(1.5px_1.5px_at_40%_80%,rgba(255,255,255,0.2),transparent_60%)]" />
  );
}
