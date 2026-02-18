"use client";

import { motion } from "framer-motion";
import { ArrowRight, Cpu, BarChart3, Users, Shield } from "lucide-react";
import Link from "next/link";
import { LeadForm } from "@/components/lead-form";

const CHARACTERS = [
  {
    name: "Kenny",
    role: "Chief Information Security Officer",
    archetype: "The Digital Fortress Guardian",
    fear: "A single vulnerability bringing down the entire enterprise",
    doubt: "What if the next threat is already inside our defenses?",
    lens: "Sees younger leaders' reliance on cloud/AI as dangerously optimistic.",
    quote: "Trust is not a strategy. Verification is.",
    color: "text-red-400",
    border: "border-red-500/20",
    bg: "bg-red-950/10",
  },
  {
    name: "Stéphane",
    role: "Head of Learning & Talent Enablement",
    archetype: "The Capability Architect",
    fear: "A team crumbling under pressure it was never trained to handle",
    doubt: "What if our qualification programs can't keep pace with real crises?",
    lens: "Values deep experience over speed; believes resilience is earned, not assumed.",
    quote: "You don't rise to the level of the crisis; you fall to the level of your training.",
    color: "text-blue-400",
    border: "border-blue-500/20",
    bg: "bg-blue-950/10",
  },
  {
    name: "Thomas",
    role: "Head of Category & Supply Strategy",
    archetype: "The Resource Orchestrator",
    fear: "Supply lines collapsing due to poor forecasting or weak partnerships",
    doubt: "What if the next negotiation leaves us short when it matters most?",
    lens: "Prefers data-driven agility over legacy processes.",
    quote: "Every crisis is a negotiation waiting to happen — get the terms right, or pay the price later.",
    color: "text-amber-400",
    border: "border-amber-500/20",
    bg: "bg-amber-950/10",
  },
  {
    name: "Sophia",
    role: "Head of Market Analysis",
    archetype: "The Opportunity Oracle",
    fear: "Missing the next big pivot while chasing yesterday's winners",
    doubt: "What if my trend-spotting instincts fail in a true downturn?",
    lens: "Sees boomers as risk-averse dinosaurs; mentors Gen Z on bold bets.",
    quote: "In crisis, the best deals hide in the chaos — find them, or watch competitors feast.",
    color: "text-green-400",
    border: "border-green-500/20",
    bg: "bg-green-950/10",
  },
];

const STATS = [
  { label: "CASH_FLOW", desc: "Liquidity, revenue stability, and financial runway." },
  { label: "EMPLOYEE_WELL_BEING", desc: "Burnout, morale, and psychological safety across the organisation." },
  { label: "REGULATORY_COMPLIANCE", desc: "Legal exposure, audit risk, and governance integrity." },
  { label: "TEAM_ENGAGEMENT", desc: "Alignment, discretionary effort, and retention risk." },
  { label: "OPERATIONAL_INFRASTRUCTURE", desc: "Systems, processes, and the organisation's capacity to execute." },
];

const B2B_OUTCOMES = [
  {
    icon: BarChart3,
    title: "Measurable reasoning quality",
    desc: "The AI evaluator scores every decision against a 5-criterion rubric. You get a data trail of how leaders think under pressure — not just what they chose.",
    color: "text-orange-400",
  },
  {
    icon: Users,
    title: "No two sessions are identical",
    desc: "The simulation responds to each player's decisions. Advisors with competing agendas, cascading consequences, and a neutral AI that cannot be charmed.",
    color: "text-orange-400",
  },
  {
    icon: Shield,
    title: "Substantial anti-gaming guardrails",
    desc: "Players cannot ask the AI for full marks, cannot game the rubric, and cannot rely on memorised responses. The evaluator runs at temperature 0.",
    color: "text-orange-400",
  },
];

export default function CorporateCrisisPage() {
  return (
    <div className="pt-16 overflow-x-hidden">
      {/* ── HERO ── */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-[#050810]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_80%_50%,rgba(249,115,22,0.07),transparent)]" />
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
                <span className="text-xs font-mono text-orange-400 tracking-widest uppercase">Skin 02 — Executive Crisis Simulation</span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6 leading-[0.9] tracking-tight">
                Last Prompt:
                <br />
                <span className="text-orange-400">Corporate</span>
                <br />
                <span className="text-orange-400">Reckoning</span>
              </h1>

              <p className="text-xl text-gray-400 mb-4 leading-relaxed">
                This isn't a team-building exercise. It's a decision-intelligence simulation.
              </p>
              <p className="text-gray-500 leading-relaxed mb-8">
                Corporate Reckoning places leaders inside a cascading corporate crisis. Advisors with competing agendas, a board watching every move, and a neutral AI that evaluates the quality of their reasoning — not their personality type.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#enquire"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500 hover:bg-orange-400 text-black font-bold rounded-lg transition-all text-sm"
                >
                  Enquire About Deployment <ArrowRight className="w-4 h-4" />
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
                <div className="flex items-center justify-between px-4 py-3 bg-gray-900 border-b border-gray-800">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/70" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                    <div className="w-3 h-3 rounded-full bg-green-500/70" />
                  </div>
                  <span className="text-xs font-mono text-gray-500">MEGACORP GLOBAL — Q1 BUDGET CRUNCH — CYCLE 1/5</span>
                  <div className="flex gap-2">
                    <span className="text-xs font-mono text-green-400 px-2 py-0.5 border border-green-500/30 rounded">POP: 5000</span>
                    <span className="text-xs font-mono text-amber-400 px-2 py-0.5 border border-amber-500/30 rounded">THREAT: LOW</span>
                  </div>
                </div>

                <div className="p-4 border-b border-gray-800">
                  <div className="grid grid-cols-2 gap-3">
                    {STATS.map((stat) => (
                      <div key={stat.label}>
                        <div className="flex justify-between text-xs font-mono mb-1">
                          <span className="text-gray-500">{stat.label}</span>
                          <span className="text-amber-400">6.0/10</span>
                        </div>
                        <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden">
                          <div className="h-full w-3/5 bg-amber-400 rounded-full" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-4 border-b border-gray-800">
                  <div className="text-xs font-mono text-orange-400 mb-2">REPORTING: THOMAS — HEAD OF CATEGORY & SUPPLY STRATEGY</div>
                  <div className="text-white font-bold mb-2">STRATEGY CONSULTANTS ARRIVE</div>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    "A top-tier strategy firm has arrived for the emergency audit. They're sharp, expensive, and demanding full access. Their recommendations will carry weight with the board. How do you manage this?"
                  </p>
                </div>

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

      {/* ── WHY THIS ISN'T A STANDARD TOOL ── */}
      <section className="py-24 bg-gray-950">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-xs font-mono text-orange-400 tracking-widest uppercase">Why This Is Different</span>
            <h2 className="text-4xl font-bold text-white mt-4 mb-4">Not another assessment tool.</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Corporate Reckoning doesn't measure personality types or team roles. It measures the quality of structured reasoning under pressure — and it's gameable only by thinking better.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {B2B_OUTCOMES.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-gray-900/60 border border-gray-800 rounded-2xl"
              >
                <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center mb-4">
                  <item.icon className={`w-5 h-5 ${item.color}`} />
                </div>
                <h3 className="text-white font-bold mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
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
            <span className="text-xs font-mono text-orange-400 tracking-widest uppercase">Your Leadership Team</span>
            <h2 className="text-4xl font-bold text-white mt-4 mb-4">Advisors with real psychology.</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Each advisor has an archetype, a core fear, a hidden doubt, and a generational lens. Their advice is humanly incomplete — and deliberately biased. You must reason through the noise.
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
                <div className="mb-4">
                  <div className={`text-xs font-mono ${char.color} tracking-widest mb-1`}>{char.archetype}</div>
                  <h3 className="text-white font-bold text-lg">{char.name}</h3>
                  <p className={`text-sm ${char.color}`}>{char.role}</p>
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

      {/* ── B2B CTA ── */}
      <section id="enquire" className="py-24 bg-gray-950">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-xs font-mono text-orange-400 tracking-widest uppercase">For Organisations</span>
              <h2 className="text-4xl font-bold text-white mt-4 mb-6">
                Deploy Corporate Reckoning for your leadership team.
              </h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                Whether you're an L&D director, an HR leader, or a leadership coach — Corporate Reckoning can be deployed as a standalone training module or integrated into a wider development programme.
              </p>
              <p className="text-gray-400 leading-relaxed mb-8">
                The engine is modular. We can adapt the skin to your industry, your specific crisis scenarios, and your organisation's language.
              </p>
              <div className="space-y-3">
                {[
                  "Measurable reasoning quality scores per participant",
                  "Debrief data: which criteria leaders consistently miss",
                  "Adaptable to your industry and crisis scenarios",
                  "No personality tests. No right answers. Just better thinking.",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-gray-300 text-sm">
                    <div className="w-5 h-5 rounded-full bg-orange-500/20 border border-orange-500/30 flex items-center justify-center shrink-0">
                      <div className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                    </div>
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <LeadForm interest="corporate" accentColor="orange" />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}