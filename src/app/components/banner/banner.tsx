'use client';

// app/components/InteractiveHero.tsx
import React from 'react';

function AuroraBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* subtle stars */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(2px 2px at 20% 30%, rgba(255,255,255,0.25), transparent 60%), radial-gradient(1px 1px at 70% 40%, rgba(255,255,255,0.2), transparent 55%), radial-gradient(1.5px 1.5px at 40% 80%, rgba(255,255,255,0.2), transparent 60%)",
          backgroundRepeat: "repeat",
          backgroundSize: "300px 300px",
        }}
      />

      {/* animated aurora layers */}
      <div className="aurora-layer mix-blend-screen bg-[radial-gradient(800px_400px_at_20%_30%,rgba(0,212,255,0.25),transparent_70%)]" />
      <div className="aurora-layer delay-1000 mix-blend-screen bg-[radial-gradient(900px_500px_at_80%_50%,rgba(168,85,247,0.25),transparent_70%)]" />
      <div className="aurora-layer delay-2000 mix-blend-screen bg-[radial-gradient(900px_600px_at_50%_80%,rgba(0,255,128,0.25),transparent_70%)]" />

      <style jsx>{`
        .aurora-layer {
          position: absolute;
          inset: 0;
          animation: aurora-move 18s ease-in-out infinite alternate;
          background-repeat: no-repeat;
          background-size: cover;
          opacity: 0.9;
        }
        @keyframes aurora-move {
          0% { transform: translate3d(0,0,0) scale(1); filter: hue-rotate(0deg); }
          50% { transform: translate3d(-3%,2%,0) scale(1.05); filter: hue-rotate(120deg); }
          100% { transform: translate3d(3%,-2%,0) scale(1); filter: hue-rotate(240deg); }
        }
        .delay-1000 { animation-delay: 5s; }
        .delay-2000 { animation-delay: 10s; }
      `}</style>
    </div>
  );
}

export default function Banner() {
  return (
    <section className="relative isolate overflow-hidden bg-[#0b1020] py-24 text-center text-gray-200 sm:py-32">
      <AuroraBackground />

      <div className="absolute inset-0 -z-10">
        {/* dots */}
        <div
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, rgba(255,255,255,0.08) 0px, rgba(255,255,255,0.08) 1px, transparent 1px, transparent 26px), repeating-linear-gradient(90deg, rgba(255,255,255,0.08) 0px, rgba(255,255,255,0.08) 1px, transparent 1px, transparent 26px)",
          }}
        />
        {/* animated nebula tint */}
        <div className="absolute inset-0 animate-nebula bg-[radial-gradient(900px_500px_at_20%_30%,rgba(56,189,248,0.14),transparent_60%),radial-gradient(1200px_600px_at_80%_35%,rgba(168,85,247,0.14),transparent_65%),radial-gradient(700px_400px_at_50%_85%,rgba(34,197,94,0.08),transparent_60%)]" />
        <div className="absolute inset-0 [mask-image:radial-gradient(60%_60%_at_50%_50%,#000_50%,transparent_100%)]" />
      </div>

      <div className="mx-auto max-w-5xl px-4">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-white/70">
          Hi, I’m <span className="text-white/90">Tasmim</span>
        </p>

        <h1 className="mt-4 text-4xl font-extrabold leading-tight text-white sm:text-6xl">
          <span className="block animate-hue bg-gradient-to-r from-sky-400 via-indigo-400 to-fuchsia-400 bg-clip-text text-transparent">
            Transforming Ideas
          </span>
          <span className="mt-1 block">into Interactive Realities</span>
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
          I build fast, accessible web apps with React/Next.js & TypeScript. Let’s turn concepts into
          beautiful, high-performance digital products.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#projects"
            className="inline-flex items-center rounded-xl bg-gradient-to-r from-sky-500 to-indigo-500 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:shadow-xl hover:brightness-110"
          >
            View Projects →
          </a>
          <a
            href="#contact"
            className="inline-flex items-center rounded-xl border border-white/20 px-6 py-3 text-sm font-semibold text-white/90 backdrop-blur transition hover:bg-white/10"
          >
            Contact me
          </a>
        </div>
      </div>

      <style jsx>{`
        @keyframes hueShift {
          0% { filter: hue-rotate(0deg); }
          50% { filter: hue-rotate(180deg); }
          100% { filter: hue-rotate(360deg); }
        }
        @keyframes nebulaDrift {
          0% { transform: translate3d(0,0,0) scale(1); }
          50% { transform: translate3d(-2%,-1%,1px) scale(1.03); }
          100% { transform: translate3d(0,0,0) scale(1); }
        }
        .animate-hue { animation: hueShift 18s linear infinite; }
        .animate-nebula { animation: nebulaDrift 22s ease-in-out infinite; }

        @media (prefers-reduced-motion: reduce) {
          .animate-hue, .animate-nebula { animation: none; }
        }
      `}</style>
    </section>
  );
}
