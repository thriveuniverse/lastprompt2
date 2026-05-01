"use client";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { LeadForm } from "@/components/lead-form";

const ADVISORS = [
  {
    name: "Joe Edwards",
    role: "Head of Security",
    quote: "If we hesitate for one second, the perimeter doesn't exist anymore.",
    worldview: "The world outside is a hungry void; survival requires a wall that never blinks.",
  },
  {
    name: "Veronica Delany",
    role: "Community Architect",
    quote: "If we lose our humanity in the name of survival, what exactly are we saving?",
    worldview: "A colony isn't a collection of assets; it's a promise to one another.",
  },
  {
    name: "Peter Michael",
    role: "Systems Engineer",
    quote: "Entropy is the only law that never fails. Everything else is a temporary fix.",
    worldview: "The collapse wasn't an event; it's a process. We are just slowing the leak.",
  },
];

const STATS = ["Sustenance", "Health", "Security", "Cohesion", "Infrastructure"];

export default function ColonyPage() {
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
            className="text-xs font-mono text-[#D0633A] tracking-widest mb-4 uppercase"
          >
            Post-Collapse Survival
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="font-satoshi text-4xl sm:text-5xl font-bold text-white leading-tight mb-5"
          >
            Colony
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-gray-400 text-lg leading-relaxed"
          >
            Jon Kelly&apos;s job is not to be right. It is to decide.
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
            The apocalypse was not what anyone expected. Not an explosion. No zombies. No plague.
            A cascade of quiet failures that stripped away the automated world in seventy-two silent hours.
          </p>
          <p className="leading-relaxed text-gray-400">
            North Valley Settlement survived. Around a hundred people live in the valley now. They have
            found roles shaped by necessity and personality alike. They look to Jon Kelly for quiet
            leadership. He listens. He asks. He thinks. And when the time comes, he decides.
          </p>
          <p className="leading-relaxed text-gray-300">
            He recovered a terminal. It blinks when it receives his words. He records his critical
            decisions into the machine, but it does not respond. His words may be heading into the void.
            Or they may one day help others rebuild with greater wisdom.
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
            src="/images/opening_event_colony.png"
            alt="Colony — Joe Edwards presents a security crisis. Jon Kelly must decide."
            width={800}
            height={500}
            className="w-full rounded-xl border border-gray-800"
          />
          <p className="text-gray-600 text-sm leading-relaxed italic">
            Unit leaders bring Jon problems shaped by their expertise and their bias. He may ask one
            clarifying question. Then he must decide.
          </p>
        </motion.section>

        {/* Dual layer */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="py-12 border-b border-gray-800"
        >
          <div className="p-6 border border-[#D0633A]/20 rounded-xl bg-[#D0633A]/5 space-y-3">
            <p className="text-xs font-mono text-[#D0633A] tracking-widest uppercase">The Mandate</p>
            <p className="text-gray-300 leading-relaxed">
              After Jon records his strategy, the Mandate evaluates it. Unknown to him, it assesses
              the structure of his reasoning and the likely impact on the colony&apos;s trajectory.
              His advisors bring what they know, shaped by what they fear. Jon sees their reports.
              He does not see the verdict.
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
              Six people. Each one sees a different version of the same problem. The quote and
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
                <blockquote className="text-gray-300 italic mb-3 leading-relaxed border-l-2 border-[#D0633A]/40 pl-4">
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
            src="/images/cycle_evaluation_colony.png"
            alt="Colony cycle evaluation — ADEQUATE 7/12 with criterion breakdown"
            width={800}
            height={500}
            className="w-full rounded-xl border border-gray-800"
          />
          <p className="text-gray-600 text-sm leading-relaxed italic">
            Jon Kelly does not see this. You do.
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
                className="px-3 py-1.5 border border-[#D0633A]/30 rounded-lg text-sm text-[#D0633A] font-mono tracking-wide"
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
            Colony is currently in testing. Apply for access below — we will reach out directly.
          </p>
          <LeadForm interest="colony" accentColor="orange" />
        </motion.section>

      </main>
    </div>
  );
}
