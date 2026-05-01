"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const SKINS = [
  {
    name: "Colony",
    subtitle: "Post-Collapse Survival",
    color: "#D0633A",
    href: "/colony",
    description:
      "Lead 100 survivors through the collapse of civilisation. Resources are finite. Trust is fragile. Every decision about food, security, and shelter shapes the conditions for the next one.",
    stats: ["Sustenance", "Health", "Security", "Cohesion", "Infrastructure"],
    advisors: [
      { name: "Joe Edwards", domain: "Security" },
      { name: "Lucie Elliot", domain: "Medical" },
      { name: "Charlie Thomas", domain: "Agriculture" },
      { name: "Lola Renan", domain: "Infrastructure" },
      { name: "Peter Michael", domain: "Systems" },
      { name: "Veronica Delany", domain: "Community" },
    ],
    status: "In Testing",
  },
  {
    name: "Corporate Reckoning",
    subtitle: "Executive Crisis Simulation",
    color: "#3498DB",
    href: "/corporate-crisis",
    description:
      "Navigate a corporate crisis as a senior leader with competing advisors and a board tracking every move. Financial pressure, regulatory exposure, and team cohesion do not move in the same direction.",
    stats: [
      "Cash Flow",
      "Employee Well-Being",
      "Regulatory Compliance",
      "Team Engagement",
      "Operational Infrastructure",
    ],
    advisors: [
      { name: "Kenny", domain: "Security" },
      { name: "Stéphane", domain: "Talent & Training" },
      { name: "Thomas", domain: "Supply & Strategy" },
      { name: "Laurent", domain: "Transformation" },
      { name: "Sophia", domain: "Market Analysis" },
    ],
    status: "In Testing",
  },
  {
    name: "Lockwood",
    subtitle: "Historical Decision Simulation",
    color: "#BAA5E8",
    href: "/lockwood",
    description:
      "Each chapter opens at a real moment in the history of computing and machine intelligence. The events that follow are drawn from across human history — placed by the circumstances your decisions created. You are the Traveller — arriving at the points where one different thought might have pulled things in another direction.",
    stats: ["Cognitive", "Moral", "Perceptual", "Collective", "Temporal"],
    advisors: [
      { name: "Spark", domain: "Innovation" },
      { name: "Wanderer", domain: "Systems" },
      { name: "Sovereign", domain: "Power" },
      { name: "Weaver", domain: "Connection" },
      { name: "Questioner", domain: "Integrity" },
      { name: "Survivor", domain: "Resilience" },
    ],
    status: "In Testing",
  },
];

export default function SkinsPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-gray-300">
      <div className="max-w-[860px] mx-auto px-6 pt-10 pb-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-mono text-gray-600 hover:text-gray-400 transition-colors tracking-widest"
        >
          <ArrowLeft className="w-3 h-3" /> THE MANDATE
        </Link>
      </div>

      <main className="max-w-[860px] mx-auto px-6 pb-24">

        {/* Header */}
        <header className="py-12 border-b border-gray-800">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-xs font-mono text-cyan-400 tracking-widest mb-6 uppercase"
          >
            The Last Prompt Engine
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-satoshi text-3xl sm:text-4xl font-bold text-white leading-tight mb-6"
          >
            One engine. Any scenario.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-gray-400 leading-relaxed max-w-2xl"
          >
            The Last Prompt Engine is content-agnostic. The evaluation logic — how it scores reasoning,
            tracks consequences, and generates outcomes from your plan — is identical regardless of
            the scenario. What changes is the skin: the world, the advisors, the stakes.
          </motion.p>
        </header>

        {/* Engine / Skin distinction */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="py-12 border-b border-gray-800"
        >
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="p-6 border border-cyan-400/20 rounded-xl bg-cyan-400/5">
              <p className="text-xs font-mono text-cyan-400 tracking-widest mb-3 uppercase">The Engine</p>
              <p className="text-white font-satoshi font-medium mb-2">Last Prompt Engine</p>
              <p className="text-gray-400 text-sm leading-relaxed">
                The evaluation and consequence system. Scores reasoning quality across six criteria.
                Generates outcomes from that score. Tracks how decisions compound forward.
                Never changes between skins.
              </p>
            </div>
            <div className="p-6 border border-gray-700/40 rounded-xl bg-gray-800/20">
              <p className="text-xs font-mono text-gray-500 tracking-widest mb-3 uppercase">The Skin</p>
              <p className="text-white font-satoshi font-medium mb-2">Scenario Context</p>
              <p className="text-gray-400 text-sm leading-relaxed">
                The world, the advisors, the five stats, and the stakes. A different domain,
                designed to surface different dimensions of reasoning. The engine runs underneath —
                unchanged.
              </p>
            </div>
          </div>
          <p className="text-gray-600 text-sm mt-6 leading-relaxed">
            People sometimes assume the skins are different difficulty levels or game modes.
            They are not. They are different windows onto the same underlying evaluation — each one
            designed to pressure a different set of decisions.
          </p>
        </motion.section>

        {/* Skins */}
        <section className="py-12 space-y-16">
          <p className="text-xs font-mono text-gray-600 tracking-widest uppercase">Current Skins</p>

          {SKINS.map((skin, i) => (
            <motion.article
              key={skin.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="space-y-6"
            >
              {/* Skin header */}
              <div className="flex items-start justify-between gap-4 pb-5 border-b border-gray-800">
                <div>
                  <p className="text-xs font-mono tracking-widest mb-1 uppercase" style={{ color: skin.color }}>
                    {skin.subtitle}
                  </p>
                  <h2 className="font-satoshi text-2xl font-bold text-white">{skin.name}</h2>
                </div>
                <span className="shrink-0 text-xs font-mono text-gray-600 tracking-widest pt-1">
                  {skin.status}
                </span>
              </div>

              {/* Description */}
              <p className="text-gray-400 leading-relaxed">{skin.description}</p>

              {/* Stats + Advisors */}
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <p className="text-xs font-mono text-gray-600 tracking-widest mb-3 uppercase">Five Stats</p>
                  <ul className="space-y-1">
                    {skin.stats.map((stat) => (
                      <li key={stat} className="text-sm text-gray-400 flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full inline-block shrink-0" style={{ backgroundColor: skin.color }} />
                        {stat}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-mono text-gray-600 tracking-widest mb-3 uppercase">Advisors</p>
                  <ul className="space-y-1">
                    {skin.advisors.map((advisor) => (
                      <li key={advisor.name} className="text-sm text-gray-400 flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full inline-block shrink-0" style={{ backgroundColor: skin.color }} />
                        <span className="text-gray-300">{advisor.name}</span>
                        <span className="text-gray-600">— {advisor.domain}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Link */}
              <Link
                href={skin.href}
                className="inline-flex items-center gap-2 text-sm font-mono transition-colors"
                style={{ color: skin.color }}
              >
                Read about {skin.name} <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </motion.article>
          ))}
        </section>

        {/* Custom skins */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="py-12 border-t border-gray-800 space-y-5"
        >
          <p className="text-xs font-mono text-[#C9A66B] tracking-widest uppercase">Custom Skins</p>
          <h2 className="font-satoshi text-xl font-bold text-white">Any domain can become a skin.</h2>
          <p className="text-gray-400 leading-relaxed">
            The Last Prompt Engine has no dependency on a particular scenario. Military command,
            healthcare triage, infrastructure failure, geopolitical crisis — the evaluation logic
            applies to any high-stakes decision environment with incomplete information and competing
            priorities. If you are interested in a custom skin for your organisation, reach out directly.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#C9A66B] hover:bg-[#D4AF77] text-black font-bold rounded-lg transition-colors text-sm tracking-wide font-satoshi"
          >
            Discuss a custom skin <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.section>

      </main>
    </div>
  );
}
