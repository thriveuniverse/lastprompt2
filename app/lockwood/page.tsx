"use client";

import { motion } from "framer-motion";
import { ArrowRight, Cpu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { LeadForm } from "@/components/lead-form";

const CHAPTERS = [
  {
    number: "01",
    year: "1936",
    title: "The Paper Exists",
    anchor: "Turing's On Computable Numbers is published. The machine is theoretical. The window for shaping its first reception is open.",
  },
  {
    number: "02",
    year: "1941",
    title: "The Machine is Real",
    anchor: "Zuse builds the Z3 — the first programmable digital computer — without knowing Turing's work. Binary. Elegant. Unexamined.",
  },
  {
    number: "03",
    year: "1943–44",
    title: "The Hidden Machine",
    anchor: "Colossus is built in secret at Bletchley Park. The dual-use question — tool or weapon, servant or instrument of control — is live for the first time.",
  },
  {
    number: "04",
    year: "1945",
    title: "The Draft Circulates",
    anchor: "The von Neumann stored-program architecture is proposed. It will become the foundation of modern computing. Nobody has voted on it yet.",
  },
  {
    number: "05",
    year: "1946",
    title: "The Machine Goes Public",
    anchor: "ENIAC is demonstrated to journalists, politicians, industrialists. Scale, access, and control are being decided right now.",
  },
  {
    number: "06",
    year: "1948",
    title: "The Feedback Loop",
    anchor: "Wiener's Cybernetics arrives. Adaptive systems. Self-correcting machines. Eventually, learning machines. Who controls the feedback loop?",
  },
];

const STATS = [
  {
    label: "COGNITIVE",
    desc: "The depth and quality of reasoning. High: ideas understood and transmitted clearly. Low: shallow reception, misapplication, loss of meaning.",
  },
  {
    label: "MORAL",
    desc: "The ethical weight carried through each decision. High: accountability maintained. Low: short-term thinking, harm without reckoning.",
  },
  {
    label: "PERCEPTUAL",
    desc: "The ability to see clearly — patterns, context, consequence. High: the wider picture is visible. Low: narrow vision, wilful blindness.",
  },
  {
    label: "COLLECTIVE",
    desc: "The shared benefit of decisions across people and time. High: the many were considered. Low: the few were served at cost to others.",
  },
  {
    label: "TEMPORAL",
    desc: "The relationship between decision and time. High: thinking across long horizons, acting before windows close. Low: urgency dominated, or the moment passed unrecognised.",
  },
];

const ADVISORS = [
  {
    name: "The Spark",
    role: "Innovation & Discovery",
    perspective: "Sees the breakthrough. Misses the institution that must carry it.",
    color: "text-amber-400",
    border: "border-amber-500/20",
    bg: "bg-amber-950/10",
  },
  {
    name: "The Wanderer",
    role: "Exploration & Expansion",
    perspective: "Sees the frontier. Misses the cost of leaving the known world behind.",
    color: "text-blue-400",
    border: "border-blue-500/20",
    bg: "bg-blue-950/10",
  },
  {
    name: "The Sovereign",
    role: "Power & Governance",
    perspective: "Sees who controls the decision. Misses what the decision actually does.",
    color: "text-red-400",
    border: "border-red-500/20",
    bg: "bg-red-950/10",
  },
  {
    name: "The Weaver",
    role: "Society & Culture",
    perspective: "Sees how people will live with it. Misses whether it will be built at all.",
    color: "text-green-400",
    border: "border-green-500/20",
    bg: "bg-green-950/10",
  },
  {
    name: "The Questioner",
    role: "Ethics & Philosophy",
    perspective: "Sees what it means. Misses what it will become.",
    color: "text-[#baa5e8]",
    border: "border-[#baa5e8]/20",
    bg: "bg-purple-950/10",
  },
  {
    name: "The Survivor",
    role: "Resilience & Adaptation",
    perspective: "Sees what breaks. Misses what was being built before it broke.",
    color: "text-cyan-400",
    border: "border-cyan-500/20",
    bg: "bg-cyan-950/10",
  },
];

const WHISPER_PARTS = [
  {
    label: "WHISPER INTENTION",
    desc: "What shift is the whisper trying to create? What changes in the mind that receives it?",
    mono: "TARGET_STATE:",
  },
  {
    label: "WHISPER PLAN",
    desc: "What does the whisper set in motion? What chain of thought or action does it initiate?",
    mono: "MECHANISM:",
  },
  {
    label: "CONTINGENCY",
    desc: "If the whisper fades unheard — what remains? What fallback preserves the thread?",
    mono: "FALLBACK:",
  },
  {
    label: "THE WHISPER",
    desc: "The idea, precisely formed. This is what slips into the mind like a half-remembered dream.",
    mono: "TRANSMISSION:",
  },
];

export default function LockwoodPage() {
  return (
    <div className="pt-16 overflow-x-hidden">
      {/* ── HERO ── */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-[#050810]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_20%_50%,rgba(186,165,232,0.06),transparent)]" />
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.5) 2px, rgba(255,255,255,0.5) 3px)",
            backgroundSize: "100% 3px",
          }}
        />

        <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Link
                href="/engine"
                className="inline-flex items-center gap-2 px-3 py-1.5 border border-cyan-400/20 bg-cyan-400/5 rounded-full text-xs font-mono text-cyan-400 mb-6 hover:border-cyan-400/40 transition-colors"
              >
                <Cpu className="w-3 h-3" />
                Powered by Last Prompt Engine
              </Link>

              <div className="flex items-center gap-2 mb-4">
                <span className="text-xs font-mono text-[#baa5e8] tracking-widest uppercase">
                  Skin 03 — Historical Decision Simulation
                </span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6 leading-[0.9] tracking-tight">
                Last Prompt:
                <br />
                <span className="text-[#baa5e8]">Lockwood</span>
              </h1>

              <p className="text-xl text-gray-400 mb-4 leading-relaxed">
                Six crux points in history. One thread connecting them. Your reasoning changes what comes next.
              </p>
              <p className="text-gray-500 leading-relaxed mb-8">
                Lockwood places you inside real historical moments in the development of computing and machine intelligence. You are The Traveller — a silent operative who cannot act directly. You whisper. You nudge. And a neutral AI evaluates whether the quality of your thinking was sufficient to move the thread.
              </p>
              <p className="text-gray-500 leading-relaxed mb-8">
                No historical knowledge required. The events provide everything you need. What is being judged is your reasoning — not your recall.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#signup"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#baa5e8] hover:bg-[#c9baf0] text-black font-bold rounded-lg transition-all text-sm"
                >
                  Join the Waitlist <ArrowRight className="w-4 h-4" />
                </a>
                <Link
                  href="/engine"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-gray-700 hover:border-gray-500 text-gray-300 hover:text-white rounded-lg transition-all text-sm"
                >
                  How the Engine Works
                </Link>
              </div>
            </motion.div>

            {/* Screenshot */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden border border-[#baa5e8]/20 shadow-2xl shadow-[#baa5e8]/5">
                <div className="flex items-center gap-2 px-4 py-3 bg-gray-900 border-b border-gray-800">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/70" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                    <div className="w-3 h-3 rounded-full bg-[#baa5e8]/70" />
                  </div>
                  <span className="text-xs font-mono text-gray-500">MANDATE TERMINAL — LOCKWOOD SEQUENCE</span>
                </div>
                <div className="relative w-full" style={{ aspectRatio: "16/10" }}>
                  <Image
                    src="/lockwood/survivor_last_harvest.png"
                    alt="Lockwood — The Survivor: Last Harvest event"
                    fill
                    className="object-cover object-top"
                    priority
                  />
                </div>
              </div>
              <p className="text-xs font-mono text-gray-600 text-center mt-3">
                CHAPTER 06 — THE SURVIVOR — LAST HARVEST
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── THE PREMISE ── */}
      <section className="py-24 bg-gray-950">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-xs font-mono text-[#baa5e8] tracking-widest uppercase">The Premise</span>
              <h2 className="text-4xl font-bold text-white mt-4 mb-6">The Traveller carries no stake. Only the quality of their reasoning.</h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                The Mandate has sent you back. You are The Traveller — a silent, invisible operative positioned at crux points in the historical record. The people around you do not know you are there.
              </p>
              <p className="text-gray-400 leading-relaxed mb-4">
                You cannot act directly. You whisper — a precisely formed idea, slipped into a mind at the exact moment it is most open. Whether the whisper lands depends on how well you reasoned before you sent it.
              </p>
              <p className="text-gray-400 leading-relaxed">
                The first event in each chapter is anchored to real history. What follows is the Lockwood timeline — the world your reasoning creates.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              {/* Mandate terminal block */}
              <div className="bg-gray-900/60 border border-gray-800 rounded-xl p-5 font-mono text-xs">
                <div className="text-[#baa5e8] mb-3 tracking-widest">MANDATE TERMINAL — FIELD RECORD</div>
                <div className="space-y-2 text-gray-400">
                  <div><span className="text-gray-600">operator:</span> <span className="text-white">The Traveller</span></div>
                  <div><span className="text-gray-600">sequence:</span> <span className="text-white">Lockwood — 6 chapters, 134 events</span></div>
                  <div><span className="text-gray-600">black_swan_events:</span> <span className="text-amber-400">12</span></div>
                  <div><span className="text-gray-600">visibility:</span> <span className="text-white">undetected</span></div>
                  <div><span className="text-gray-600">mechanism:</span> <span className="text-[#baa5e8]">The Whisper</span></div>
                  <div className="pt-2 border-t border-gray-800 text-gray-600 italic">
                    "The archive logs this as a viable alternative thread."
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-gray-900/60 border border-gray-800 rounded-xl text-center">
                  <div className="text-3xl font-black text-white mb-1">134</div>
                  <div className="text-xs font-mono text-gray-500">EVENTS ACROSS<br />6 CHAPTERS</div>
                </div>
                <div className="p-4 bg-gray-900/60 border border-gray-800 rounded-xl text-center">
                  <div className="text-3xl font-black text-amber-400 mb-1">12</div>
                  <div className="text-xs font-mono text-gray-500">BLACK SWAN<br />EVENTS</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CHAPTERS ── */}
      <section className="py-24 bg-[#050810] border-y border-gray-900">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-xs font-mono text-[#baa5e8] tracking-widest uppercase">The Sequence</span>
            <h2 className="text-4xl font-bold text-white mt-4 mb-4">Six chapters. One thread.</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Each chapter anchors to a real moment in the history of computing. What follows is the Lockwood timeline — shaped by your reasoning.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {CHAPTERS.map((ch, i) => (
              <motion.div
                key={ch.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                viewport={{ once: true }}
                className="p-6 bg-gray-900/40 border border-gray-800 rounded-xl hover:border-[#baa5e8]/30 transition-colors"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-mono text-[#baa5e8] tracking-widest">{ch.number}</span>
                  <span className="text-xs font-mono text-gray-600 px-2 py-0.5 border border-gray-800 rounded">{ch.year}</span>
                </div>
                <h3 className="text-white font-bold text-lg mb-3">{ch.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{ch.anchor}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="py-24 bg-gray-950">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mb-16"
          >
            <span className="text-xs font-mono text-[#baa5e8] tracking-widest uppercase">Five Dimensions</span>
            <h2 className="text-4xl font-bold text-white mt-4 mb-6">Not what happened. How you reasoned about it.</h2>
            <p className="text-gray-400 leading-relaxed">
              Lockwood doesn't measure historical knowledge or outcomes. It measures the quality of thinking you carried through the timeline. Five stats track the reasoning dimensions that shaped each decision.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                viewport={{ once: true }}
                className="p-4 bg-gray-900/60 border border-gray-800 rounded-xl"
              >
                <div className="text-xs font-mono text-[#baa5e8] mb-2">{stat.label}</div>
                <div className="h-1.5 bg-gray-800 rounded-full mb-3">
                  <div className="h-full w-3/5 rounded-full" style={{ backgroundColor: "#baa5e8" }} />
                </div>
                <p className="text-gray-600 text-xs leading-relaxed">{stat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ADVISORS ── */}
      <section className="py-24 bg-[#050810] border-y border-gray-900">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-xs font-mono text-[#baa5e8] tracking-widest uppercase">Six Voices</span>
            <h2 className="text-4xl font-bold text-white mt-4 mb-4">Each advisor sees only part of the picture.</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              In Lockwood the advisors are not people — they are perspectives. Each one is a lens through which the historical moment is interpreted. Each one is incomplete by design. The Traveller must integrate across all six.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {ADVISORS.map((advisor, i) => (
              <motion.div
                key={advisor.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                viewport={{ once: true }}
                className={`p-6 rounded-2xl border ${advisor.border} ${advisor.bg}`}
              >
                <div className={`text-xs font-mono ${advisor.color} tracking-widest mb-1`}>{advisor.role}</div>
                <h3 className="text-white font-bold text-lg mb-3">{advisor.name}</h3>
                <p className="text-gray-400 text-sm leading-relaxed italic border-l-2 border-gray-700 pl-3">
                  {advisor.perspective}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── THE WHISPER ── */}
      <section className="py-24 bg-gray-950">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-xs font-mono text-[#baa5e8] tracking-widest uppercase">The Mechanic</span>
              <h2 className="text-4xl font-bold text-white mt-4 mb-6">You cannot act directly. You whisper.</h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                The Traveller works at the edge of influence. You cannot command. You cannot intervene. You can only form a precisely reasoned idea and slip it into a mind at the exact moment it is most open.
              </p>
              <p className="text-gray-400 leading-relaxed mb-4">
                Whether it lands depends on the quality of the reasoning that preceded it — the intention you diagnosed, the plan you constructed, the contingency you held in reserve.
              </p>
              <p className="text-gray-400 leading-relaxed">
                This is not a strategy game. It is a thinking game. The friction is real. The whisper must be earned.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-3"
            >
              {WHISPER_PARTS.map((part, i) => (
                <motion.div
                  key={part.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4 p-4 bg-gray-900/60 border border-gray-800 rounded-xl"
                >
                  <div className="shrink-0 w-24 pt-0.5">
                    <span className="text-[10px] font-mono text-[#baa5e8] tracking-wider">{part.mono}</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm mb-0.5">{part.label}</div>
                    <div className="text-gray-500 text-sm">{part.desc}</div>
                  </div>
                </motion.div>
              ))}

              <div className="p-4 bg-purple-950/20 border border-[#baa5e8]/20 rounded-xl">
                <div className="text-xs font-mono text-[#baa5e8] mb-1">THE WHISPER</div>
                <div className="text-white font-bold">The idea, precisely formed — slipped into the mind like a half-remembered dream.</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── OUTCOMES ── */}
      <section className="py-24 bg-[#050810] border-y border-gray-900">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-xs font-mono text-[#baa5e8] tracking-widest uppercase">Terminal Outcomes</span>
            <h2 className="text-4xl font-bold text-white mt-4 mb-4">The archive records everything.</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              At the end of a Lockwood run, the Mandate Terminal closes the record. What it says depends entirely on the quality of reasoning that produced it.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl border border-[#baa5e8]/20 bg-purple-950/10"
            >
              <div className="text-xs font-mono text-[#baa5e8] mb-3">VICTORY — TERMINAL RECORD</div>
              <p className="text-gray-300 text-sm leading-relaxed italic">
                "Terminal record closes. The chapter sequence is complete. The Lockwood timeline produced a measurable divergence from the historical record at multiple crux points. The archive logs this as a viable alternative thread. The reasoning quality that produced it is documented here."
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl border border-red-500/20 bg-red-950/10"
            >
              <div className="text-xs font-mono text-red-400 mb-3">COLLAPSE — TERMINAL RECORD</div>
              <p className="text-gray-300 text-sm leading-relaxed italic">
                "Terminal record closes. A stat reached zero. The Lockwood timeline collapsed at this point — not because the decisions were unintelligent, but because the reasoning was consistently insufficient at the moments that counted. The archive stores this as a reference case. Future operators will read it."
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── SIGNUP ── */}
      <section id="signup" className="py-24 bg-gray-950 border-t border-gray-900">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <span className="text-xs font-mono text-[#baa5e8] tracking-widest uppercase">Join the Sequence</span>
            <h2 className="text-4xl font-bold text-white mt-4 mb-4">Get early access.</h2>
            <p className="text-gray-400">Playtest invitations, development updates, and first access to the Lockwood timeline.</p>
          </motion.div>
          <LeadForm interest="lockwood" accentColor="purple" />
        </div>
      </section>
    </div>
  );
}
