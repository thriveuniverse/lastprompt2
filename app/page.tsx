"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { LeadForm } from "@/components/lead-form";

const SKINS = [
  {
    id: "colony",
    label: "SKIN 01",
    title: "Colony",
    subtitle: "What we know.",
    description: "The world is legible — the difficulty is choosing well between truths you already understand. Lead 100 survivors through the collapse of civilisation. Each cycle, Jon Kelly faces a new crisis. You write the plan he records into the terminal — the reasoning a neutral AI then evaluates. He lives the consequences. Only you see why they fell as they did.",
    accent: "text-[#D0633A]",
    border: "border-[#D0633A]/30",
    hover: "hover:border-[#D0633A]/50 hover:shadow-[#D0633A]/5",
    bg: "from-[#D0633A]/10",
    href: "/colony",
    image: "/images/jon-kelly.png",
  },
  {
    id: "corporate",
    label: "SKIN 02",
    title: "Corporate Reckoning",
    subtitle: "What we don't know.",
    description: "You will never understand every function you're responsible for governing. The practice is deciding well anyway. Advisors here are modelled on real experts, with real, earned bias — and if a term is unfamiliar, you get exactly one question to ask them directly. That answer is never scored. Only what you do with it is.",
    accent: "text-[#3498DB]",
    border: "border-[#3498DB]/30",
    hover: "hover:border-[#3498DB]/50 hover:shadow-[#3498DB]/5",
    bg: "from-[#3498DB]/10",
    href: "/corporate-crisis",
    image: "/images/jon-roddy.png",
  },
  {
    id: "lockwood",
    label: "SKIN 03",
    title: "Lockwood",
    subtitle: "What we cannot know.",
    description: "Every chapter opens on a real historical moment. Then your own decisions diverge the timeline from the one history actually recorded. Hindsight stops being available. Only reasoning is left.",
    accent: "text-[#BAA5E8]",
    border: "border-[#BAA5E8]/30",
    hover: "hover:border-[#BAA5E8]/50 hover:shadow-[#BAA5E8]/5",
    bg: "from-[#BAA5E8]/10",
    href: "/lockwood",
    image: "/images/the_traveller.png",
  },
];

export default function HomePage() {
  const [showCustomForm, setShowCustomForm] = useState(false);

  return (
    <div className="relative overflow-x-hidden bg-[#0A0A0A]">

      {/* ── HERO ── */}
      <section className="relative h-[85vh] min-h-[620px] max-h-[920px] hidden md:flex items-center overflow-hidden">
        <Image
          src="/images/survivor-remaining-viable.jpg"
          alt="A woman stands in a devastated, overgrown city street, looking down its length."
          fill
          priority
          className="object-cover object-[70%_32%] scale-125"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, #0A0A0A 0%, #0A0A0A 28%, rgba(10,10,10,0.55) 42%, rgba(10,10,10,0) 62%)",
          }}
        />

        <div className="relative z-10 w-full px-6 md:pl-12 lg:pl-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-[460px] text-left"
          >
            <h1 className="font-satoshi text-2xl sm:text-3xl 2xl:text-4xl font-bold text-white mb-5 leading-[1.25] tracking-tight">
              &ldquo;The purpose of reasoning is not to control the future. It is to remain viable when the future refuses to cooperate.&rdquo;
            </h1>

            <p className="text-xs font-mono text-[#C9A66B]/80 tracking-[0.2em] uppercase mb-10">— Last Prompt</p>

            <div className="flex flex-col sm:flex-row items-start gap-4">
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#C9A66B] hover:bg-[#D4AF77] text-black font-bold rounded-lg transition-all duration-200 text-sm tracking-wide font-satoshi"
              >
                Request trial access
              </Link>
              <Link
                href="#contact"
                onClick={() => setShowCustomForm(true)}
                className="inline-flex items-center gap-2 px-8 py-4 border border-gray-600 hover:border-gray-400 bg-[#0A0A0A]/70 backdrop-blur-sm text-gray-200 hover:text-white font-medium rounded-lg transition-all duration-200 text-sm"
              >
                Discuss a custom skin
              </Link>
            </div>

            <p className="mt-10 text-xs text-gray-500 max-w-md leading-relaxed">
              &ldquo;The Mandate&rdquo; is what the product calls its evaluator — the same intelligence, whichever world you&rsquo;re reasoning inside.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] font-mono text-cyan-400/60 tracking-[0.3em]">CONTINUE</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="w-4 h-4 text-cyan-400/60" />
          </motion.div>
        </motion.div>
      </section>

      {/* ── HERO (mobile) ── */}
      <section className="relative flex md:hidden flex-col overflow-hidden">
        <div className="relative h-[46vh] min-h-[320px] w-full">
          <Image
            src="/images/survivor-remaining-viable.jpg"
            alt="A woman stands in a devastated, overgrown city street, looking down its length."
            fill
            priority
            className="object-cover object-[35%_15%]"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(10,10,10,0) 55%, #0A0A0A 98%)",
            }}
          />
        </div>

        <div className="relative z-10 bg-[#0A0A0A] px-6 pt-8 pb-14">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h1 className="font-satoshi text-2xl font-bold text-white mb-5 leading-[1.25] tracking-tight">
              &ldquo;The purpose of reasoning is not to control the future. It is to remain viable when the future refuses to cooperate.&rdquo;
            </h1>

            <p className="text-xs font-mono text-[#C9A66B]/80 tracking-[0.2em] uppercase mb-8">— Last Prompt</p>

            <div className="flex flex-col gap-4">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#C9A66B] hover:bg-[#D4AF77] text-black font-bold rounded-lg transition-all duration-200 text-sm tracking-wide font-satoshi"
              >
                Request trial access
              </Link>
              <Link
                href="#contact"
                onClick={() => setShowCustomForm(true)}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-gray-700 hover:border-gray-500 text-gray-300 hover:text-white font-medium rounded-lg transition-all duration-200 text-sm"
              >
                Discuss a custom skin
              </Link>
            </div>

            <p className="mt-8 text-xs text-gray-500 leading-relaxed">
              &ldquo;The Mandate&rdquo; is what the product calls its evaluator — the same intelligence, whichever world you&rsquo;re reasoning inside.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── DIAGNOSIS ── */}
      <section className="py-20 bg-[#0A0A0A] border-t border-gray-900">
        <div className="max-w-[680px] mx-auto px-6">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg sm:text-xl text-gray-400 leading-relaxed text-center font-light"
          >
            Most decision tools assume good reasoning produces the right outcome. It doesn&rsquo;t — not reliably, and not when the stakes are real. What good reasoning produces is a decision-maker who can absorb the outcome regardless of which way it breaks, and keep going. Last Prompt is built to develop that: real consequences that don&rsquo;t reverse, judged on the quality of the thinking behind them, not on whether things happened to work out.
          </motion.p>
        </div>
      </section>

      {/* ── ONBOARDING SCREEN ── */}
      <section className="py-20 bg-[#0A0A0A] border-t border-gray-900">
        <div className="max-w-[900px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="rounded-xl overflow-hidden border border-gray-800 shadow-2xl shadow-black/40">
              <Image
                src="/images/where-am-i-loadscreen.png"
                alt="The Last Prompt world-select screen — WHERE AM I, WHO AM I, TAKE COMMAND"
                width={1886}
                height={1079}
                className="w-full h-auto"
              />
            </div>
            <p className="text-center text-xs font-mono text-gray-600 tracking-widest uppercase mt-4">
              Every session starts here.
            </p>
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
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <span className={`text-xs font-mono ${skin.accent} tracking-widest`}>{skin.label}</span>
                      <h3 className="font-satoshi text-xl font-bold text-white mt-2 mb-1">{skin.title}</h3>
                      <p className={`text-sm ${skin.accent} font-medium`}>{skin.subtitle}</p>
                    </div>
                    <div className={`shrink-0 w-14 h-14 rounded-full overflow-hidden border ${skin.border} bg-gray-900`}>
                      <Image
                        src={skin.image}
                        alt=""
                        width={56}
                        height={56}
                        className="w-full h-full object-cover grayscale-[30%]"
                      />
                    </div>
                  </div>
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

      {/* ── CTA: TWO DOORS ── */}
      <section id="contact" className="py-28 bg-gray-950 border-t border-gray-900">
        <div className="max-w-[960px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="text-xs font-mono text-[#C9A66B] tracking-widest uppercase">Get Involved</span>
            <h2 className="font-satoshi text-4xl sm:text-5xl font-bold text-white mt-4">
              Two ways in.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            {/* Door 1 — Trial Access */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl border border-gray-800 bg-gray-900/40 h-full"
            >
              <h3 className="font-satoshi text-2xl font-bold text-white mb-3">Trial Access</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Start in Colony, where the reasoning is put to work in a world you already understand.
              </p>
              <LeadForm variant="trial" interest="colony" accentColor="cyan" />
            </motion.div>

            {/* Door 2 — Discuss a Custom Skin */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl border border-[#C9A66B]/30 bg-[#C9A66B]/5 h-full"
            >
              <h3 className="font-satoshi text-2xl font-bold text-white mb-3">Discuss a Custom Skin</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Any domain can become a skin. If you want Last Prompt built around your organisation&rsquo;s actual reality, reach out directly.
              </p>
              {showCustomForm ? (
                <LeadForm interest="both" accentColor="cyan" />
              ) : (
                <button
                  onClick={() => setShowCustomForm(true)}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#C9A66B] hover:bg-[#D4AF77] text-black font-bold rounded-lg transition-colors text-sm tracking-wide font-satoshi"
                >
                  Discuss a custom skin <ArrowRight className="w-4 h-4" />
                </button>
              )}
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
}
