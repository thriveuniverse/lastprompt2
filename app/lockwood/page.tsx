"use client";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { LeadForm } from "@/components/lead-form";

const ARCHETYPES = [
  {
    name: "The Sovereign",
    role: "Power & Governance",
    quote: "A decree that works today and fails in thirty years is not a solution. It is a deferred catastrophe with my name on it.",
    worldview: "Power is not the problem. Unaccountable power is. The question is not whether to govern but what the governing costs when the generation that designed it is gone.",
  },
  {
    name: "The Questioner",
    role: "Ethics & Philosophy",
    quote: "The problem with an elegant solution is that it makes the next problem harder to see.",
    worldview: "Capability without constraint is acceleration toward an unknown destination. The ethical question is not a brake on progress. It is the question of which direction progress should go.",
  },
  {
    name: "The Survivor",
    role: "Resilience & Adaptation",
    quote: "Resilience is not the same as endurance. You can endure something that is destroying you. Resilience requires knowing the difference.",
    worldview: "Every system produces survivors. The question is what they carry forward. Knowledge that outlives the context that made it valuable is worse than no knowledge — it is a map with no legend.",
  },
];

const STATS = ["Cognitive", "Moral", "Perceptual", "Collective", "Temporal"];

export default function LockwoodPage() {
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
            className="text-xs font-mono text-[#BAA5E8] tracking-widest mb-4 uppercase"
          >
            Historical Decision Practice
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="font-satoshi text-4xl sm:text-5xl font-bold text-white leading-tight mb-5"
          >
            Lockwood
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-gray-400 text-lg leading-relaxed"
          >
            History is not a record of inevitabilities. It is a record of decisions made under
            pressure by people who saw only part of the picture.
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
            You are the Traveller. You arrive at the thinnest points in the timeline — moments when
            one different thought might have pulled things in another direction. Each chapter opens
            at a specific real moment in the history of computing and machine intelligence. The events
            that follow are drawn from across human history — and potentially beyond it — placed by
            the circumstances your decisions created.
          </p>
          <p className="leading-relaxed text-gray-400">
            The people around you never know you are there. Your voice is not a shout or a command.
            It is a quiet, unignorable idea that slips into a mind like a half-remembered dream. The
            recipient may brush it aside in the press of the moment. Or they may let it linger, weigh
            it in silence, and allow it to bend the course they were on.
          </p>
          <p className="leading-relaxed text-gray-300">
            The Mandate will never tell you how close your branch came to the real record. It only
            documents the quality of the thinking that forged it.
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
            src="/images/survivor_last_harvest_lockwood.png"
            alt="Lockwood — The Survivor presents a crux point. The Traveller must decide."
            width={800}
            height={500}
            className="w-full rounded-xl border border-gray-800"
          />
          <p className="text-gray-600 text-sm leading-relaxed italic">
            Six archetypes surface each crux through the lens of their own orientation. Their framing
            tells you as much about their biases as the facts themselves. One clarifying question.
            Then the Traveller must whisper.
          </p>
        </motion.section>

        {/* Dual layer */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="py-12 border-b border-gray-800"
        >
          <div className="p-6 border border-[#BAA5E8]/20 rounded-xl bg-[#BAA5E8]/5 space-y-3">
            <p className="text-xs font-mono text-[#BAA5E8] tracking-widest uppercase">The Mandate</p>
            <p className="text-gray-300 leading-relaxed">
              The Traveller does not act. The Traveller makes it harder for the right person not to.
              The historical figure still decides. The Mandate records only the structure of what was
              whispered — never the intentions behind it. The archive is not a record of what happened.
              It is a record of the logic that made it happen.
            </p>
          </div>
        </motion.section>

        {/* Archetype cards */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="py-12 border-b border-gray-800 space-y-6"
        >
          <div>
            <p className="text-xs font-mono text-gray-600 tracking-widest uppercase mb-2">The archetypes</p>
            <p className="text-gray-500 text-sm leading-relaxed">
              Six distinct epistemic orientations — not domains, but fundamentally different ways
              of constructing a patch. The quote and worldview are all you have to work with.
            </p>
          </div>
          <div className="space-y-4">
            {ARCHETYPES.map((archetype) => (
              <div key={archetype.name} className="p-5 border border-gray-800 rounded-xl bg-gray-900/20">
                <div className="flex items-baseline justify-between gap-4 mb-4">
                  <p className="font-satoshi font-medium text-white">{archetype.name}</p>
                  <p className="text-xs font-mono text-gray-600 shrink-0">{archetype.role}</p>
                </div>
                <blockquote className="text-gray-300 italic mb-3 leading-relaxed border-l-2 border-[#BAA5E8]/40 pl-4">
                  &ldquo;{archetype.quote}&rdquo;
                </blockquote>
                <p className="text-gray-500 text-sm leading-relaxed">{archetype.worldview}</p>
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
            src="/images/cycle_evaluation_lockwood.png"
            alt="Lockwood cycle evaluation — ADEQUATE 7/12 with criterion breakdown"
            width={800}
            height={500}
            className="w-full rounded-xl border border-gray-800"
          />
          <p className="text-gray-600 text-sm leading-relaxed italic">
            The Traveller does not see this. You do.
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
                className="px-3 py-1.5 border border-[#BAA5E8]/30 rounded-lg text-sm text-[#BAA5E8] font-mono tracking-wide"
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
          <p className="text-xs font-mono text-[#C9A66B] tracking-widest uppercase">Research Participation</p>
          <p className="text-gray-400 leading-relaxed mb-6">
            Lockwood is currently in testing. Submit below if you would like to participate as a Decision Analysis Participant.
          </p>
          <LeadForm interest="lockwood" accentColor="purple" />
        </motion.section>

      </main>
    </div>
  );
}
