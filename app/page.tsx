"use client";

import { motion, useInView } from "framer-motion";
import { Brain, Cpu, Layers, ChevronDown, ArrowRight, Zap, Shield, Users, Globe, Lock } from "lucide-react";
import Link from "next/link";
import { useRef, useState } from "react";
import { LeadForm } from "@/components/lead-form";

const LOOP_STEPS = [
  {
    number: "01",
    label: "CRISIS EMERGES",
    description: "A dynamic event surfaces — shaped by your previous decisions and the current state of your world. No two crises are identical.",
    color: "text-amber-400",
    border: "border-amber-400/30",
    bg: "bg-amber-400/5",
  },
  {
    number: "02",
    label: "CONSULT ADVISORS",
    description: "Query your team — but they're human. Each advisor sees the world through their own bias, fear, and generational lens. Their advice is incomplete by design.",
    color: "text-cyan-400",
    border: "border-cyan-400/30",
    bg: "bg-cyan-400/5",
  },
  {
    number: "03",
    label: "WRITE YOUR PLAN",
    description: "No menus. No options. You write a free-form strategy: your goal, your actions, your contingencies, your communication. Your reasoning is the move.",
    color: "text-violet-400",
    border: "border-violet-400/30",
    bg: "bg-violet-400/5",
  },
  {
    number: "04",
    label: "AI EVALUATES",
    description: "A neutral AI evaluator scores your reasoning quality — not your choices. It cannot be gamed. It has no pity. It rewards structured thinking.",
    color: "text-orange-400",
    border: "border-orange-400/30",
    bg: "bg-orange-400/5",
  },
  {
    number: "05",
    label: "CONSEQUENCES RESOLVE",
    description: "The simulation applies outcomes based on how well you reasoned — not what you chose. Poor thinking compounds. Strong thinking builds resilience.",
    color: "text-green-400",
    border: "border-green-400/30",
    bg: "bg-green-400/5",
  },
];

const SKINS = [
  {
    id: "colony",
    label: "SKIN 01",
    title: "Colony",
    subtitle: "Post-Collapse Survival",
    description: "Lead 100 survivors through the collapse of civilisation. Every week brings a new crisis. Your reasoning determines whether they thrive — or fall.",
    stats: ["Sustenance", "Health", "Security", "Cohesion", "Infrastructure"],
    color: "green",
    accent: "text-green-400",
    border: "border-green-500/30",
    hover: "hover:border-green-500/60 hover:shadow-green-500/10",
    bg: "from-green-950/40",
    href: "/colony",
    status: "In Development",
  },
  {
    id: "corporate",
    label: "SKIN 02",
    title: "Corporate Reckoning",
    subtitle: "Executive Crisis Simulation",
    description: "Navigate a corporate crisis as a senior leader. Advisors with competing agendas, a board watching every move, and a neutral AI judging the quality of your thinking.",
    stats: ["Cash Flow", "Employee Well-Being", "Regulatory Compliance", "Team Engagement", "Operational Infrastructure"],
    color: "orange",
    accent: "text-orange-400",
    border: "border-orange-500/30",
    hover: "hover:border-orange-500/60 hover:shadow-orange-500/10",
    bg: "from-orange-950/40",
    href: "/corporate-crisis",
    status: "In Development",
  },
  {
    id: "frontier",
    label: "SKIN 03",
    title: "New Frontier",
    subtitle: "Off-World Colony",
    description: "Build humanity's first permanent settlement on another world. Resource scarcity, isolation, and the psychological weight of being the last hope.",
    stats: ["Life Support", "Morale", "Power", "Research", "Comms"],
    color: "blue",
    accent: "text-blue-400",
    border: "border-blue-500/30",
    hover: "hover:border-blue-500/60 hover:shadow-blue-500/10",
    bg: "from-blue-950/40",
    href: "#",
    status: "Concept",
  },
  {
    id: "unrest",
    label: "SKIN 04",
    title: "Civil Unrest",
    subtitle: "Social Crisis Simulation",
    description: "Govern a city on the edge. Polarised factions, failing institutions, and a population that has stopped trusting its leaders. Can you reason your way back?",
    stats: ["Public Trust", "Order", "Economy", "Media", "Diplomacy"],
    color: "red",
    accent: "text-red-400",
    border: "border-red-500/30",
    hover: "hover:border-red-500/60 hover:shadow-red-500/10",
    bg: "from-red-950/40",
    href: "#",
    status: "Concept",
  },
];

const RUBRIC = [
  { label: "Variable Awareness", desc: "Does the plan acknowledge the key constraints and trade-offs?" },
  { label: "Resource Allocation", desc: "Are people, time, and resources specifically assigned?" },
  { label: "Risk Anticipation", desc: "Are second-order effects and contingencies addressed?" },
  { label: "Communication Clarity", desc: "Is there a clear strategy for informing those affected?" },
  { label: "Multi-Step Planning", desc: "Is there a logical sequence with fallback positions?" },
];

export default function HomePage() {
  const loopRef = useRef(null);
  const loopInView = useInView(loopRef, { once: true });
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="relative overflow-x-hidden">
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background layers */}
        <div className="absolute inset-0 bg-[#050810]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(6,182,212,0.08),transparent)]" />
        {/* Scanline effect */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.5) 2px, rgba(255,255,255,0.5) 3px)",
            backgroundSize: "100% 3px",
          }}
        />
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "linear-gradient(rgba(6,182,212,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 py-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            {/* System tag */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 px-4 py-2 border border-cyan-400/20 bg-cyan-400/5 rounded-full text-xs font-mono text-cyan-400 mb-8 tracking-widest"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              LAST PROMPT ENGINE — DECISION INTELLIGENCE SYSTEM
            </motion.div>

            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black text-white mb-6 leading-[0.9] tracking-tight">
              The engine that
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-500">
                evaluates how you think
              </span>
            </h1>

            <p className="text-xl sm:text-2xl text-gray-400 max-w-3xl mx-auto mb-4 leading-relaxed font-light">
              Not what you choose. <span className="text-white font-medium">How you reason.</span>
            </p>
            <p className="text-base text-gray-500 max-w-2xl mx-auto mb-12 leading-relaxed">
              Last Prompt is a decision-intelligence engine that places you inside a crisis, gives you biased advisors with hidden agendas, and asks you to write your plan in free text. A neutral AI then evaluates the quality of your thinking — and the simulation resolves accordingly.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <Link
                href="/engine"
                className="inline-flex items-center gap-2 px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-black font-bold rounded-lg transition-all duration-200 text-sm tracking-wide"
              >
                <Cpu className="w-4 h-4" />
                HOW THE ENGINE WORKS
              </Link>
              <Link
                href="#worlds"
                className="inline-flex items-center gap-2 px-8 py-4 border border-gray-700 hover:border-gray-500 text-gray-300 hover:text-white font-medium rounded-lg transition-all duration-200 text-sm"
              >
                EXPLORE THE WORLDS
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Stat preview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="max-w-2xl mx-auto bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-xl p-4 font-mono text-xs text-left"
            >
              <div className="flex items-center gap-2 mb-3 pb-3 border-b border-gray-800">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                </div>
                <span className="text-gray-500">LAST_PROMPT_ENGINE — EVALUATION_RESULT.json</span>
              </div>
              <div className="space-y-1 text-gray-400">
                <div><span className="text-cyan-400">"quality_band"</span>: <span className="text-amber-400">"STRONG"</span>,</div>
                <div><span className="text-cyan-400">"total_score"</span>: <span className="text-green-400">9</span><span className="text-gray-600"> / 10</span>,</div>
                <div><span className="text-cyan-400">"variable_awareness"</span>: <span className="text-green-400">2</span><span className="text-gray-600"> — "Acknowledged all five constraints and their interdependencies."</span></div>
                <div><span className="text-cyan-400">"risk_anticipation"</span>: <span className="text-green-400">2</span><span className="text-gray-600"> — "Contingencies for both hostile and sick scenarios are explicit."</span></div>
                <div><span className="text-cyan-400">"narrative_outcome"</span>: <span className="text-gray-300">"The colony gains an asset. Morale improves."</span></div>
              </div>
            </motion.div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <ChevronDown className="w-5 h-5 text-gray-600 animate-bounce" />
          </motion.div>
        </div>
      </section>

      {/* ── THE CORE IDEA ── */}
      <section className="py-24 bg-gray-950">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase">The Core Idea</span>
              <h2 className="text-4xl sm:text-5xl font-bold text-white mt-4 mb-6 leading-tight">
                AI-mediated complexity has made{" "}
                <span className="text-cyan-400">structured reasoning</span> the scarcest skill.
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                The world doesn't lack information. It lacks people who can reason clearly under uncertainty — who can identify trade-offs, anticipate second-order effects, and communicate intent when everything is on fire.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                Last Prompt is a decision-intelligence engine built to develop exactly that skill. It doesn't reward the right answer. It rewards the quality of your thinking.
              </p>
              <Link
                href="/engine"
                className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
              >
                Read the engine spec <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 gap-4"
            >
              {[
                { icon: Brain, title: "One engine. Infinite worlds.", desc: "The Last Prompt Engine is content-agnostic. The same evaluation logic powers a post-collapse colony, a corporate crisis, and an off-world settlement. Swap the skin, keep the intelligence.", color: "text-cyan-400" },
                { icon: Lock, title: "The AI cannot be gamed.", desc: "The evaluator runs at temperature 0. It has no pity. It penalises short plans, vague contingencies, and ignored constraints. You cannot ask it for full marks.", color: "text-amber-400" },
                { icon: Users, title: "Advisors with real psychology.", desc: "Every character has an archetype, a core fear, a hidden doubt, and a generational lens. Their advice is humanly incomplete — by design.", color: "text-violet-400" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-4 p-5 bg-gray-900/60 border border-gray-800 rounded-xl hover:border-gray-700 transition-colors"
                >
                  <div className="shrink-0 w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center">
                    <item.icon className={`w-5 h-5 ${item.color}`} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── THE LOOP ── */}
      <section ref={loopRef} className="py-24 bg-[#050810] border-y border-gray-900">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase">The Decision Loop</span>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mt-4 mb-4">Five steps. Every cycle.</h2>
            <p className="text-gray-400 max-w-xl mx-auto">The same loop runs in every skin. The context changes. The engine doesn't.</p>
          </motion.div>

          {/* Desktop: horizontal stepper */}
          <div className="hidden lg:flex items-stretch gap-0 mb-12">
            {LOOP_STEPS.map((step, i) => (
              <motion.button
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                onClick={() => setActiveStep(i)}
                className={`flex-1 p-6 border-t-2 transition-all duration-300 text-left cursor-pointer ${
                  activeStep === i
                    ? `border-t-2 ${step.border.replace("/30", "")} ${step.bg} border-b border-x border-gray-800`
                    : "border-t-gray-800 border-b border-x border-gray-900 hover:bg-gray-900/40"
                }`}
              >
                <div className={`text-xs font-mono mb-2 ${activeStep === i ? step.color : "text-gray-600"}`}>
                  {step.number}
                </div>
                <div className={`text-sm font-bold tracking-wide ${activeStep === i ? "text-white" : "text-gray-500"}`}>
                  {step.label}
                </div>
              </motion.button>
            ))}
          </div>

          {/* Step detail (desktop) */}
          <div className="hidden lg:block">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`p-8 rounded-xl border ${LOOP_STEPS[activeStep].border} ${LOOP_STEPS[activeStep].bg}`}
            >
              <div className={`text-xs font-mono mb-2 ${LOOP_STEPS[activeStep].color}`}>
                STEP {LOOP_STEPS[activeStep].number}
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">{LOOP_STEPS[activeStep].label}</h3>
              <p className="text-gray-300 text-lg leading-relaxed max-w-3xl">{LOOP_STEPS[activeStep].description}</p>
            </motion.div>
          </div>

          {/* Mobile: vertical list */}
          <div className="lg:hidden space-y-4">
            {LOOP_STEPS.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className={`p-5 rounded-xl border ${step.border} ${step.bg}`}
              >
                <div className={`text-xs font-mono mb-1 ${step.color}`}>{step.number}</div>
                <h3 className={`font-bold mb-2 ${step.color}`}>{step.label}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── THE RUBRIC ── */}
      <section className="py-24 bg-gray-950">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-xs font-mono text-amber-400 tracking-widest uppercase">The Evaluation Rubric</span>
              <h2 className="text-4xl font-bold text-white mt-4 mb-6">
                Five criteria. Zero mercy.
              </h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                The AI Evaluator scores your plan against five criteria, each rated 0–2. The total score (0–10) determines your quality band — and the quality band determines what happens next in the simulation.
              </p>
              <p className="text-gray-400 leading-relaxed mb-8">
                A Poor score compounds. A Strong score builds resilience. The simulation doesn't care about your intentions — only the quality of your reasoning.
              </p>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { band: "POOR", range: "0–3", color: "text-red-400", border: "border-red-500/30", bg: "bg-red-950/20" },
                  { band: "ADEQUATE", range: "4–7", color: "text-amber-400", border: "border-amber-500/30", bg: "bg-amber-950/20" },
                  { band: "STRONG", range: "8–10", color: "text-green-400", border: "border-green-500/30", bg: "bg-green-950/20" },
                ].map((b) => (
                  <div key={b.band} className={`p-4 rounded-lg border ${b.border} ${b.bg} text-center`}>
                    <div className={`text-xs font-mono font-bold ${b.color} mb-1`}>{b.band}</div>
                    <div className="text-white font-bold text-lg">{b.range}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-3"
            >
              {RUBRIC.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4 p-4 bg-gray-900/60 border border-gray-800 rounded-xl"
                >
                  <div className="shrink-0 w-8 h-8 rounded-md bg-gray-800 border border-gray-700 flex items-center justify-center">
                    <span className="text-xs font-mono text-gray-400">0–2</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm mb-0.5">{item.label}</div>
                    <div className="text-gray-500 text-sm">{item.desc}</div>
                  </div>
                </motion.div>
              ))}
              <div className="p-4 bg-cyan-950/20 border border-cyan-500/20 rounded-xl">
                <div className="text-xs font-mono text-cyan-400 mb-1">TOTAL SCORE</div>
                <div className="text-white font-bold">Sum of all five criteria — 0 to 10</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── WORLDS / SKINS ── */}
      <section id="worlds" className="py-24 bg-[#050810] border-y border-gray-900">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase">One Engine. Infinite Worlds.</span>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mt-4 mb-4">The Skins</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Each skin is a different world running on the same engine. The characters, crises, and stats change. The evaluation logic doesn't.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SKINS.map((skin, i) => (
              <motion.div
                key={skin.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <Link
                  href={skin.href}
                  className={`group block relative overflow-hidden rounded-2xl bg-gradient-to-br ${skin.bg} to-gray-900/80 border ${skin.border} ${skin.hover} hover:shadow-2xl transition-all duration-500 p-7 h-full`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <span className={`text-xs font-mono ${skin.accent} tracking-widest`}>{skin.label}</span>
                      <h3 className="text-2xl font-bold text-white mt-1">{skin.title}</h3>
                      <p className={`text-sm ${skin.accent} font-medium`}>{skin.subtitle}</p>
                    </div>
                    <span className={`text-xs px-2.5 py-1 rounded-full border ${skin.border} ${skin.accent} font-mono`}>
                      {skin.status}
                    </span>
                  </div>

                  <p className="text-gray-400 text-sm leading-relaxed mb-5">{skin.description}</p>

                  <div className="mb-5">
                    <div className="text-xs font-mono text-gray-600 mb-2 tracking-wider">ACTIVE VARIABLES</div>
                    <div className="flex flex-wrap gap-2">
                      {skin.stats.map((stat) => (
                        <span key={stat} className="text-xs px-2 py-1 bg-gray-800/80 border border-gray-700 rounded text-gray-400 font-mono">
                          {stat.toUpperCase()}
                        </span>
                      ))}
                    </div>
                  </div>

                  {skin.href !== "#" && (
                    <span className={`inline-flex items-center gap-2 text-sm font-medium ${skin.accent} group-hover:gap-3 transition-all`}>
                      Explore {skin.title} <ArrowRight className="w-4 h-4" />
                    </span>
                  )}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHO IS THIS FOR ── */}
      <section className="py-24 bg-gray-950">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase">Who Is This For</span>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mt-4 mb-4">Three audiences. One engine.</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Zap,
                label: "PLAYERS",
                title: "Strategy gamers who want to think, not click.",
                desc: "If you're frustrated by games that reward memorisation over reasoning, Last Prompt was built for you. Your plan is the move. Your thinking is the mechanic.",
                color: "text-green-400",
                border: "border-green-500/20",
                bg: "bg-green-950/10",
                cta: "Explore Colony",
                href: "/colony",
              },
              {
                icon: Globe,
                label: "ORGANISATIONS",
                title: "Leadership development that isn't a PowerPoint.",
                desc: "Deploy Corporate Reckoning as a training tool for senior leaders. The AI evaluator provides 1:1 feedback on reasoning quality — not personality types or team roles.",
                color: "text-orange-400",
                border: "border-orange-500/20",
                bg: "bg-orange-950/10",
                cta: "Explore Corporate",
                href: "/corporate-crisis",
              },
              {
                icon: Layers,
                label: "COLLABORATORS",
                title: "Build a skin for your world.",
                desc: "The engine is modular. If you have a domain — medicine, diplomacy, urban planning, education — and you're frustrated by polarised thinking, let's talk about building a skin together.",
                color: "text-violet-400",
                border: "border-violet-500/20",
                bg: "bg-violet-950/10",
                cta: "Get in touch",
                href: "#contact",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className={`p-7 rounded-2xl border ${item.border} ${item.bg} flex flex-col`}
              >
                <div className={`w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center mb-4`}>
                  <item.icon className={`w-5 h-5 ${item.color}`} />
                </div>
                <div className={`text-xs font-mono ${item.color} tracking-widest mb-2`}>{item.label}</div>
                <h3 className="text-white font-bold text-lg mb-3 leading-snug">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-6">{item.desc}</p>
                <Link
                  href={item.href}
                  className={`inline-flex items-center gap-2 text-sm font-medium ${item.color} hover:opacity-80 transition-opacity`}
                >
                  {item.cta} <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section id="contact" className="py-24 bg-[#050810] border-t border-gray-900">
        <div className="max-w-[900px] mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase">Join the Network</span>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mt-4 mb-4">
              Be part of what comes next.
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Whether you're a player, an organisation, or a potential collaborator — register your interest and we'll reach out when the time is right.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <LeadForm interest="both" accentColor="cyan" />
          </motion.div>
        </div>
      </section>
    </div>
  );
}