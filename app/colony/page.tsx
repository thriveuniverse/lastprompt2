"use client";

import { motion } from "framer-motion";
import { ArrowRight, Cpu } from "lucide-react";
import Link from "next/link";
import { LeadForm } from "@/components/lead-form";

const CHARACTERS = [
  {
    name: "Joe Edwards",
    role: "Head of Security",
    archetype: "The Protector",
    fear: "Failing to prevent harm",
    doubt: "What if I overreact?",
    lens: "Believes older leaders hesitate too long.",
    quote: "If we hesitate for one second, the perimeter doesn't exist anymore.",
    color: "text-red-400",
    border: "border-red-500/20",
    bg: "bg-red-950/10",
    accent: "bg-red-500",
  },
  {
    name: "Lucie Elliot",
    role: "Chief Medic",
    archetype: "The Responsible Doubter",
    fear: "Making the wrong clinical call",
    doubt: "What if I'm not enough?",
    lens: "Aware of how fragile the systems the previous generation built actually are.",
    quote: "I can patch the wound, but I can't fix the world that caused it.",
    color: "text-blue-400",
    border: "border-blue-500/20",
    bg: "bg-blue-950/10",
    accent: "bg-blue-500",
  },
  {
    name: "Charlie Thomas",
    role: "Agricultural Lead",
    archetype: "The Sustainable Idealist",
    fear: "Short-termism destroying the future",
    doubt: "What if the future never comes?",
    lens: "Resents 'old thinking' resource exploitation.",
    quote: "Survival isn't about today's meal; it's about next year's harvest.",
    color: "text-green-400",
    border: "border-green-500/20",
    bg: "bg-green-950/10",
    accent: "bg-green-500",
  },
  {
    name: "Veronica Delany",
    role: "Community Architect",
    archetype: "The Moral Compass",
    fear: "Social fracture",
    doubt: "What if kindness isn't enough?",
    lens: "Resents cold, utilitarian decisions made by previous leaders.",
    quote: "If we lose our humanity in the name of survival, what exactly are we saving?",
    color: "text-violet-400",
    border: "border-violet-500/20",
    bg: "bg-violet-950/10",
    accent: "bg-violet-500",
  },
];

const STATS = [
  { label: "SUSTENANCE", value: 6, desc: "Food security, water purity, supply chain stability." },
  { label: "HEALTH", value: 6, desc: "Medical capacity, epidemic control, physical resilience." },
  { label: "SECURITY", value: 6, desc: "Perimeter integrity, external threat mitigation, order." },
  { label: "COHESION", value: 6, desc: "Morale, trust in leadership, social tissue." },
  { label: "INFRASTRUCTURE", value: 6, desc: "Energy, shelter, production tools, repair capacity." },
];

export default function ColonyPage() {
  return (
    <div className="pt-16 overflow-x-hidden">
      {/* ── HERO ── */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-[#050810]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_20%_50%,rgba(34,197,94,0.07),transparent)]" />
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.5) 2px, rgba(255,255,255,0.5) 3px)",
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
              {/* Engine badge */}
              <Link href="/engine" className="inline-flex items-center gap-2 px-3 py-1.5 border border-cyan-400/20 bg-cyan-400/5 rounded-full text-xs font-mono text-cyan-400 mb-6 hover:border-cyan-400/40 transition-colors">
                <Cpu className="w-3 h-3" />
                Powered by Last Prompt Engine
              </Link>

              <div className="flex items-center gap-2 mb-4">
                <span className="text-xs font-mono text-green-400 tracking-widest uppercase">Skin 01 — Post-Collapse Survival</span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6 leading-[0.9] tracking-tight">
                Last Prompt:
                <br />
                <span className="text-green-400">Colony</span>
              </h1>

              <p className="text-xl text-gray-400 mb-4 leading-relaxed">
                The world ended quietly. Now 100 people are looking to you.
              </p>
              <p className="text-gray-500 leading-relaxed mb-8">
                Colony is the first skin built on the Last Prompt Engine. You lead the North Valley Settlement through a cascade of crises — food shortages, illness outbreaks, faction conflicts, and existential threats. Your written plan is the move. A neutral AI evaluates the quality of your reasoning. The simulation resolves accordingly.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#signup"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-400 text-black font-bold rounded-lg transition-all text-sm"
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

            {/* Terminal preview */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-gray-900/80 border border-gray-700 rounded-2xl overflow-hidden">
                {/* Terminal header */}
                <div className="flex items-center justify-between px-4 py-3 bg-gray-900 border-b border-gray-800">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/70" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                    <div className="w-3 h-3 rounded-full bg-green-500/70" />
                  </div>
                  <span className="text-xs font-mono text-gray-500">NORTH VALLEY SETTLEMENT — WINTER — CYCLE 1/5</span>
                  <div className="flex gap-2">
                    <span className="text-xs font-mono text-green-400 px-2 py-0.5 border border-green-500/30 rounded">POP: 104</span>
                    <span className="text-xs font-mono text-amber-400 px-2 py-0.5 border border-amber-500/30 rounded">THREAT: LOW</span>
                  </div>
                </div>

                {/* Stats */}
                <div className="p-4 border-b border-gray-800">
                  <div className="grid grid-cols-2 gap-3">
                    {STATS.map((stat) => (
                      <div key={stat.label}>
                        <div className="flex justify-between text-xs font-mono mb-1">
                          <span className="text-gray-500">{stat.label}</span>
                          <span className="text-amber-400">{stat.value}.0/10</span>
                        </div>
                        <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-amber-400 rounded-full"
                            style={{ width: `${stat.value * 10}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Crisis */}
                <div className="p-4 border-b border-gray-800">
                  <div className="text-xs font-mono text-green-400 mb-2">REPORTING: JOE EDWARDS — HEAD OF SECURITY</div>
                  <div className="text-white font-bold mb-2">STRANGER ARRIVES</div>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    "We've got a stranger at the gate. Thin. Coughing. Alone. I don't see visible weapons, but exposure is exposure. If we open the perimeter once, it sets precedent. Your call."
                  </p>
                </div>

                {/* Strategy builder */}
                <div className="p-4">
                  <div className="text-xs font-mono text-gray-500 mb-3">STRATEGY BUILDER</div>
                  <div className="space-y-2">
                    <div className="bg-gray-800/60 rounded p-2.5 text-xs text-gray-500 font-mono">MISSION GOAL: What is the outcome?</div>
                    <div className="bg-gray-800/60 rounded p-2.5 text-xs text-gray-500 font-mono">OPERATIONAL ACTIONS: Deployment steps...</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── THE WORLD ── */}
      <section className="py-24 bg-gray-950">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mb-16"
          >
            <span className="text-xs font-mono text-green-400 tracking-widest uppercase">The World</span>
            <h2 className="text-4xl font-bold text-white mt-4 mb-6">The Great De-Sync</h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              The apocalypse was not a bang, but a whimper. A globally integrated AI called "The Mandate" managed everything — power grids, supply chains, food production. When a solar flare fractured its core logic, the world went quiet in 72 hours.
            </p>
            <p className="text-gray-400 leading-relaxed">
              You are Jon Kelly. Your colony is approximately 100 people. The goal is not just to survive — but to build a future. Every decision you make echoes through the settlement over time.
            </p>
          </motion.div>

          {/* Stats */}
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
                <div className="text-xs font-mono text-green-400 mb-2">{stat.label}</div>
                <div className="h-1.5 bg-gray-800 rounded-full mb-2">
                  <div className="h-full w-3/5 bg-amber-400 rounded-full" />
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
            <span className="text-xs font-mono text-green-400 tracking-widest uppercase">Your Advisors</span>
            <h2 className="text-4xl font-bold text-white mt-4 mb-4">They see the world through their own lens.</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Each advisor has a psychological profile — an archetype, a core fear, a hidden doubt, and a generational lens. Their advice is humanly incomplete. By design.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {CHARACTERS.map((char, i) => (
              <motion.div
                key={char.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className={`p-6 rounded-2xl border ${char.border} ${char.bg}`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className={`text-xs font-mono ${char.color} tracking-widest mb-1`}>{char.archetype}</div>
                    <h3 className="text-white font-bold text-lg">{char.name}</h3>
                    <p className={`text-sm ${char.color}`}>{char.role}</p>
                  </div>
                </div>

                <blockquote className="text-gray-300 text-sm italic mb-5 leading-relaxed border-l-2 border-gray-700 pl-3">
                  "{char.quote}"
                </blockquote>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="bg-gray-900/60 rounded-lg p-3">
                    <div className="text-gray-600 font-mono mb-1">CORE FEAR</div>
                    <div className="text-gray-300">{char.fear}</div>
                  </div>
                  <div className="bg-gray-900/60 rounded-lg p-3">
                    <div className="text-gray-600 font-mono mb-1">HIDDEN DOUBT</div>
                    <div className="text-gray-300">{char.doubt}</div>
                  </div>
                  <div className="bg-gray-900/60 rounded-lg p-3 col-span-2">
                    <div className="text-gray-600 font-mono mb-1">GENERATIONAL LENS</div>
                    <div className="text-gray-300">{char.lens}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS IN COLONY ── */}
      <section className="py-24 bg-gray-950">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-xs font-mono text-green-400 tracking-widest uppercase">The Core Fantasy</span>
            <h2 className="text-4xl font-bold text-white mt-4 mb-4">"My thoughtfulness matters."</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Poor reasoning leads to collapse. Structured thinking builds resilience. The simulation doesn't care about your intentions — only the quality of your plan.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { band: "POOR", score: "0–3", outcome: "High resentment, resource loss. Crises compound. The colony fractures.", color: "text-red-400", border: "border-red-500/20", bg: "bg-red-950/10" },
              { band: "ADEQUATE", score: "4–7", outcome: "Mixed results, uneasy stability. You survive — but the next crisis will be harder.", color: "text-amber-400", border: "border-amber-500/20", bg: "bg-amber-950/10" },
              { band: "STRONG", score: "8–10", outcome: "Confidence, growth, safety. The colony gains resilience. New opportunities emerge.", color: "text-green-400", border: "border-green-500/20", bg: "bg-green-950/10" },
            ].map((item, i) => (
              <motion.div
                key={item.band}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className={`p-6 rounded-2xl border ${item.border} ${item.bg}`}
              >
                <div className={`text-xs font-mono font-bold ${item.color} mb-1`}>{item.band}</div>
                <div className="text-white font-bold text-2xl mb-3">{item.score}</div>
                <p className="text-gray-400 text-sm leading-relaxed">{item.outcome}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SIGNUP ── */}
      <section id="signup" className="py-24 bg-[#050810] border-t border-gray-900">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <span className="text-xs font-mono text-green-400 tracking-widest uppercase">Join the Colony</span>
            <h2 className="text-4xl font-bold text-white mt-4 mb-4">Get early access.</h2>
            <p className="text-gray-400">Playtest invitations, development updates, and exclusive content.</p>
          </motion.div>
          <LeadForm interest="colony" accentColor="green" />
        </div>
      </section>
    </div>
  );
}