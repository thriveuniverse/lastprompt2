"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { LeadForm } from "@/components/lead-form";

const SKINS = [
  {
    id: "colony",
    label: "SKIN 01",
    title: "Colony",
    subtitle: "Post-Collapse Survival",
    description: "Lead 100 survivors through the collapse of civilisation. Each cycle, Jon Kelly faces a new crisis. You write the plan he records into the terminal — the reasoning a neutral AI then evaluates. He lives the consequences. Only you see why they fell as they did.",
    accent: "text-[#D0633A]",
    border: "border-[#D0633A]/30",
    hover: "hover:border-[#D0633A]/50 hover:shadow-[#D0633A]/5",
    bg: "from-[#D0633A]/10",
    href: "/colony",
  },
  {
    id: "corporate",
    label: "SKIN 02",
    title: "Corporate Reckoning",
    subtitle: "Executive Crisis Practice",
    description: "Navigate a corporate crisis as a senior leader. Advisors with competing agendas, a board watching every move, and a neutral AI judging the quality of your thinking.",
    accent: "text-[#3498DB]",
    border: "border-[#3498DB]/30",
    hover: "hover:border-[#3498DB]/50 hover:shadow-[#3498DB]/5",
    bg: "from-[#3498DB]/10",
    href: "/corporate-crisis",
  },
  {
    id: "lockwood",
    label: "SKIN 03",
    title: "Lockwood",
    subtitle: "Historical Decision Practice",
    description: "Six crux points in the history of computing and machine intelligence. You are The Traveller — a silent operative reasoning at the moments that shaped the next century.",
    accent: "text-[#BAA5E8]",
    border: "border-[#BAA5E8]/30",
    hover: "hover:border-[#BAA5E8]/50 hover:shadow-[#BAA5E8]/5",
    bg: "from-[#BAA5E8]/10",
    href: "/lockwood",
  },
];

export default function HomePage() {
  return (
    <div className="relative overflow-x-hidden bg-[#0A0A0A]">

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[#0A0A0A]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(201,166,107,0.07),transparent)]" />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(201,166,107,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(201,166,107,0.3) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        <div className="relative z-10 max-w-[860px] mx-auto px-6 py-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="inline-flex items-center gap-2 px-4 py-2 border border-cyan-400/20 bg-cyan-400/5 rounded-full text-xs font-mono text-cyan-400 mb-12 tracking-widest"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              THE MANDATE — POWERED BY LAST PROMPT
            </motion.div>

            <h1 className="font-satoshi text-4xl sm:text-5xl 2xl:text-6xl font-bold text-white mb-8 leading-[1.1] tracking-tight">
              You make decisions every day. Here you see what you actually set in motion.
            </h1>

            <p className="text-lg sm:text-xl text-gray-400 max-w-lg mx-auto mb-14 leading-relaxed font-light">
              Last Prompt forces you to externalise your reasoning, then makes you live inside the world that reasoning creates — repeatedly, personally, and without mercy.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/colony"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#C9A66B] hover:bg-[#D4AF77] text-black font-bold rounded-lg transition-all duration-200 text-sm tracking-wide font-satoshi"
              >
                Begin Command in the Colony
              </Link>
              <Link
                href="/engine"
                className="inline-flex items-center gap-2 px-8 py-4 border border-gray-700 hover:border-gray-500 text-gray-300 hover:text-white font-medium rounded-lg transition-all duration-200 text-sm"
              >
                How the engine works <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── THE DEEPER GAME ── */}
      <section className="py-24 bg-[#0A0A0A] border-t border-gray-900">
        <div className="max-w-[640px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <span className="text-xs font-mono text-[#C9A66B] tracking-widest uppercase">The Deeper Game</span>

            <p className="font-satoshi text-xl sm:text-2xl text-gray-400 mt-8 mb-4 leading-relaxed">
              Most decision tools train you to pick from options.{" "}
              <span className="text-white font-medium">The Mandate trains you to close the gap between what you think you decided and what actually happens.</span>
            </p>

            <p className="text-lg text-gray-500 mt-8 mb-3 leading-relaxed">
              There is a hidden gap in how humans reason and communicate under pressure.
            </p>
            <p className="text-lg text-gray-500 mb-8 leading-relaxed">
              It is almost impossible to see from the inside — yet it quietly shapes entire environments, companies, and outcomes.
            </p>

            <Link
              href="/the-hidden-gap"
              className="inline-flex items-center gap-2 text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              Read: The Hidden Gap <ArrowRight className="w-4 h-4" />
            </Link>

            <p className="font-satoshi text-lg text-gray-400 leading-relaxed mt-12">
              This is why we built The Mandate — not as another simulation, but as a serious tool for closing the gap between perceived and actual decision quality.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── THE EXPERIENCE ── */}
      <section className="py-32 bg-[#0A0A0A] border-t border-gray-900">
        <div className="max-w-[680px] mx-auto px-6">
          <div className="space-y-7 text-center">
            {[
              { text: "You write the plan in plain English.", style: "text-xl sm:text-2xl text-gray-400 font-light" },
              { text: "Every decision shapes the world that answers back.", style: "text-2xl sm:text-3xl text-white font-medium" },
              { text: "The ripples of your decisions become the ground you stand on.", style: "text-xl sm:text-2xl text-gray-400 font-light" },
              { text: "There is no undo.", style: "text-2xl sm:text-3xl text-[#C9A66B] font-bold" },
            ].map((line, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15, duration: 0.7 }}
                viewport={{ once: true }}
                className={`font-satoshi leading-snug ${line.style}`}
              >
                {line.text}
              </motion.p>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-20 pt-16 border-t border-gray-800/60 text-center"
          >
            <p className="font-satoshi text-3xl sm:text-4xl text-gray-500 font-light">
              Not what you choose.{" "}
              <span className="text-white font-semibold">How you reason.</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── LAST PROMPT — WHAT IT ACTUALLY IS ── */}
      <section className="py-24 bg-gray-950 border-y border-gray-900">
        <div className="max-w-[720px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="prose prose-invert prose-lg max-w-none text-center"
          >
            <p className="font-satoshi text-2xl text-white leading-tight mb-10">
              Last Prompt is a machine that forces you to externalise your reasoning, then makes you live inside the world that reasoning creates — repeatedly, personally, and without mercy.
            </p>

            <div className="space-y-8 text-lg text-gray-400">
              <p>What if every decision you made literally built the next crisis you faced?</p>
              <p>What if there were no multiple-choice answers — only the plan you were willing to write and defend?</p>
              <p>What if an impartial archive watched not whether you “won”, but how clearly you thought when the stakes were real and time was short?</p>

              <p className="text-white font-medium">Last Prompt doesn’t simulate a story.<br />It simulates <span className="text-[#C9A66B]">you</span>.</p>

              <p>Your choices shape the environment.<br />
                 The environment shapes the next choice.<br />
                 Each run is unrepeatable because it is built from your reasoning, your blind spots, your evolving relationship with consequence.</p>

              <p className="text-white">You can play it unlimited times. Most people do.</p>
              <p className="text-white">Not to get a higher score.<br />But to finally see what kind of world they keep creating — and whether they can learn to create a different one.</p>
            </div>

            <Link
              href="/engine"
              className="inline-flex items-center gap-2 text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors mt-12"
            >
              Understand the engine <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── SKINS ── */}
      <section className="py-28 bg-[#0A0A0A]">
        <div className="max-w-[1100px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="text-xs font-mono text-[#C9A66B] tracking-widest uppercase">One Engine. Any World.</span>
            <h2 className="font-satoshi text-4xl sm:text-5xl font-bold text-white mt-4 mb-4">The Skins</h2>
            <p className="text-gray-400 max-w-lg mx-auto">
              Colony is where you begin. Other skins are available on request.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {SKINS.map((skin, i) => (
              <motion.div
                key={skin.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Link
                  href={skin.href}
                  className={`group block relative overflow-hidden rounded-2xl bg-gradient-to-b ${skin.bg} to-gray-900/50 border ${skin.border} ${skin.hover} hover:shadow-xl transition-all duration-500 p-6 h-full`}
                >
                  <span className={`text-xs font-mono ${skin.accent} tracking-widest`}>{skin.label}</span>
                  <h3 className="font-satoshi text-xl font-bold text-white mt-2 mb-1">{skin.title}</h3>
                  <p className={`text-sm ${skin.accent} font-medium mb-4`}>{skin.subtitle}</p>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">{skin.description}</p>
                  <span className={`inline-flex items-center gap-2 text-sm font-medium ${skin.accent} group-hover:gap-3 transition-all`}>
                    Explore <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-8 text-center"
          >
            <Link href="/engine" className="text-sm text-gray-600 hover:text-gray-400 transition-colors">
              About the engine and all skins →
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── FEEDBACK ── */}
      <section className="py-24 bg-[#0A0A0A] border-t border-gray-900">
        <div className="max-w-[640px] mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-xs font-mono text-[#C9A66B] tracking-widest uppercase">Favourite feedback so far</span>
            <blockquote className="mt-8 mb-7">
              <p className="font-satoshi text-2xl sm:text-3xl text-white font-light leading-snug">
                &ldquo;Everyone is building AI that thinks for you. You&rsquo;re building something that makes the human think better.&rdquo;
              </p>
            </blockquote>
            <a
              href="https://x.com/Faysalfateh1/status/2056245834510168121"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-300 transition-colors text-sm"
            >
              — Faysal Fateh · <span className="text-[#C9A66B]">@Faysalfateh1</span>
            </a>
            <div className="mt-10">
              <a
                href="https://x.com/mirrie_kelly"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-white transition-colors"
              >
                Follow the conversation on X <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section id="contact" className="py-28 bg-gray-950 border-t border-gray-900">
        <div className="max-w-[680px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-xs font-mono text-[#C9A66B] tracking-widest uppercase">Research Participation</span>
            <h2 className="font-satoshi text-4xl sm:text-5xl font-bold text-white mt-4 mb-5">
              Decision Analysis Participants wanted.
            </h2>
            <p className="text-gray-400 max-w-md mx-auto leading-relaxed">
              Senior decision-makers under uncertainty (or ambitious juniors who see the stakes). We analyse your decisions via The Mandate, deliver the Intelligence Report, and debrief honestly.
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
