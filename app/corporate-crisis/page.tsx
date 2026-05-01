"use client";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { LeadForm } from "@/components/lead-form";

const ADVISORS = [
  {
    name: "Kenny",
    role: "Chief Information Security Officer",
    quote: "Trust is not a strategy. Verification is.",
    worldview: "In business as in code: one unpatched flaw and the whole system collapses.",
  },
  {
    name: "Stéphane",
    role: "Head of Learning & Talent Enablement",
    quote: "You don't rise to the level of the crisis; you fall to the level of your training.",
    worldview: "A company's greatest asset is not its technology — it's the people who can adapt when everything else fails.",
  },
  {
    name: "Sophia",
    role: "Head of Market Analysis",
    quote: "In crisis, the best deals hide in the chaos — find them, or watch competitors feast.",
    worldview: "Markets don't crash — they evolve. The winners spot the signals in the noise and bet early.",
  },
];

const STATS = ["Cash Flow", "Employee Well-Being", "Regulatory Compliance", "Team Engagement", "Operational Infrastructure"];

export default function CorporateCrisisPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-gray-300">
      <div className="max-w-[800px] mx-auto px-6 pt-10 pb-4">
        <Link
          href="/skins"
          className="inline-flex items-center gap-2 text-xs font-mono text-gray-600 hover:text-gray-400 transition-colors tracking-widest"
        >
          <ArrowLeft className="w-3 h-3" /> SKINS
        </Link>
      </div>

      <main className="max-w-[800px] mx-auto px-6 pb-24">

        {/* Header */}
        <header className="pt-8 pb-12 border-b border-gray-800">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-xs font-mono text-[#3498DB] tracking-widest mb-4 uppercase"
          >
            Executive Crisis Simulation
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="font-satoshi text-4xl sm:text-5xl font-bold text-white leading-tight mb-5"
          >
            Corporate Reckoning
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-gray-400 text-lg leading-relaxed"
          >
            Jon Roddy&apos;s job is not to be liked. It is to deliver.
          </motion.p>
        </header>

        {/* Scenario */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="py-12 border-b border-gray-800 space-y-5"
        >
          <p className="leading-relaxed text-gray-400">
            You are Jon Roddy, Interim CEO of MegaCorp Global. The era of guaranteed growth is over.
            What remains is a fractured empire struggling to breathe under the weight it once carried
            so easily. The restructuring isn&apos;t just about spreadsheets — it&apos;s about the 5,000
            employees who still depend on this organisation, and the global network that still relies
            on its infrastructure.
          </p>
          <p className="leading-relaxed text-gray-400">
            Your appointment by the board was not a vote of confidence. It was an act of desperation.
            They need someone who can cut through the fog of middle-management paralysis and make the
            decisions that preserve the core enterprise.
          </p>
          <p className="leading-relaxed text-gray-300">
            Your legacy will be measured not by intent, but by outcome: the architect of a leaner,
            wiser company — or the final steward of its dissolution.
          </p>
        </motion.section>

        {/* Opening event screenshot */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="py-12 border-b border-gray-800 space-y-4"
        >
          <p className="text-xs font-mono text-gray-600 tracking-widest uppercase">What you receive</p>
          <Image
            src="/images/opening_event_corp.png"
            alt="Corporate Reckoning — Thomas surfaces a supply chain crisis. Jon Roddy must act."
            width={800}
            height={500}
            className="w-full rounded-xl border border-gray-800"
          />
          <p className="text-gray-600 text-sm leading-relaxed italic">
            Department heads surface critical failures filtered through their own operational biases.
            Jon may issue one direct inquiry before finalizing his response.
          </p>
        </motion.section>

        {/* Dual layer */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="py-12 border-b border-gray-800"
        >
          <div className="p-6 border border-[#3498DB]/20 rounded-xl bg-[#3498DB]/5 space-y-3">
            <p className="text-xs font-mono text-[#3498DB] tracking-widest uppercase">The Mandate</p>
            <p className="text-gray-300 leading-relaxed">
              An AI-driven Executive Dashboard aggregates the ground truth from Jon&apos;s department
              heads and models the trajectory of every directive he authorises. It validates strategic
              logic and records consequences. Jon authorises each decision. He does not see the
              evaluation. The Dashboard, as the manual notes, is not a shield. Ultimate accountability
              remains his alone.
            </p>
          </div>
        </motion.section>

        {/* Advisor cards */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="py-12 border-b border-gray-800 space-y-6"
        >
          <div>
            <p className="text-xs font-mono text-gray-600 tracking-widest uppercase mb-2">The advisors</p>
            <p className="text-gray-500 text-sm leading-relaxed">
              Five department heads. Each one sees the crisis through a different lens. The quote and
              worldview are all you have to work with.
            </p>
          </div>
          <div className="space-y-4">
            {ADVISORS.map((advisor) => (
              <div key={advisor.name} className="p-5 border border-gray-800 rounded-xl bg-gray-900/20">
                <div className="flex items-baseline justify-between gap-4 mb-4">
                  <p className="font-satoshi font-medium text-white">{advisor.name}</p>
                  <p className="text-xs font-mono text-gray-600 shrink-0">{advisor.role}</p>
                </div>
                <blockquote className="text-gray-300 italic mb-3 leading-relaxed border-l-2 border-[#3498DB]/40 pl-4">
                  &ldquo;{advisor.quote}&rdquo;
                </blockquote>
                <p className="text-gray-500 text-sm leading-relaxed">{advisor.worldview}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Evaluation screenshot */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="py-12 border-b border-gray-800 space-y-4"
        >
          <p className="text-xs font-mono text-gray-600 tracking-widest uppercase">What The Mandate sees</p>
          <Image
            src="/images/cycle_evaluation_corp.png"
            alt="Corporate Reckoning cycle evaluation — STRONG 10/12 with criterion breakdown"
            width={800}
            height={500}
            className="w-full rounded-xl border border-gray-800"
          />
          <p className="text-gray-600 text-sm leading-relaxed italic">
            Jon Roddy does not see this. You do.
          </p>
        </motion.section>

        {/* Stats */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="py-12 border-b border-gray-800 space-y-4"
        >
          <p className="text-xs font-mono text-gray-600 tracking-widest uppercase">Five Stats</p>
          <div className="flex flex-wrap gap-3">
            {STATS.map((stat) => (
              <span
                key={stat}
                className="px-3 py-1.5 border border-[#3498DB]/30 rounded-lg text-sm text-[#3498DB] font-mono tracking-wide"
              >
                {stat}
              </span>
            ))}
          </div>
        </motion.section>

        {/* CTA */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="py-12 space-y-4"
        >
          <p className="text-xs font-mono text-[#C9A66B] tracking-widest uppercase">Beta Access</p>
          <p className="text-gray-400 leading-relaxed mb-6">
            Corporate Reckoning is currently in testing. Apply for access below — we will reach out directly.
          </p>
          <LeadForm interest="corporate" accentColor="blue" />
        </motion.section>

      </main>
    </div>
  );
}
