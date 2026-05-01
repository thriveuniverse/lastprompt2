"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function HiddenGapPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-gray-300">
      <div className="max-w-[740px] mx-auto px-6 pt-10 pb-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-mono text-gray-600 hover:text-gray-400 transition-colors tracking-widest"
        >
          <ArrowLeft className="w-3 h-3" /> THE MANDATE
        </Link>
      </div>

      <main className="max-w-[740px] mx-auto px-6 pb-24">

        {/* Header */}
        <header className="py-12 border-b border-gray-800">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-xs font-mono text-cyan-400 tracking-widest mb-6 uppercase"
          >
            The Hidden Gap
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-satoshi text-xl sm:text-2xl font-normal text-white leading-relaxed mb-10"
          >
            There is a gap between what you think you decided and what you actually did.
            There is another gap between what your credentials say you can do and what
            you have ever truly been tested to do.
          </motion.h1>
        </header>

        {/* Body */}
        <article className="py-12 space-y-16">

          {/* Section 1 — The Translation Gap */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            <p className="text-xs font-mono text-gray-600 tracking-widest uppercase">
              The first gap
            </p>
            <p className="leading-relaxed text-gray-400">
              The plan that seemed complete when you wrote it. The decision that felt made
              but left the people around you working from a different picture. The briefing
              that was clear in your mind and produced three different interpretations in
              the room.
            </p>
            <p className="leading-relaxed text-gray-400">
              This gap is almost impossible to see from the inside. You know what you
              meant — so the plan reads clearly to you. Every piece of context you did not
              write down, you fill in automatically. The gap only becomes visible in what
              happens when other people try to act on what you actually put on the page.
            </p>
            <p className="leading-relaxed text-gray-400">
              It is not a gap in intelligence. It is the distance between the clarity of
              intent and the precision of its expression. And it compounds. A slightly vague
              plan gets executed slightly wrong. Slightly wrong execution creates slightly
              worse conditions. The next decision is harder, and made with less room than
              the last one.
            </p>
            <p className="leading-relaxed text-gray-300 font-medium">
              The simplest test: could someone who just walked in read what you wrote and
              know exactly what to do first — without asking you what you meant?
            </p>
          </motion.section>

          {/* Section 2 — The Credential Gap */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            <p className="text-xs font-mono text-gray-600 tracking-widest uppercase">
              The second gap
            </p>
            <p className="leading-relaxed text-gray-400">
              The second gap is the one people rarely admit to. The qualifications are
              there. The theoretical understanding is evident. The years in the room are
              real. But the specific reps — making a real call under real pressure, being
              wrong in a way that taught you something, surviving it, and going again —
              those are rarer than the credential implies.
            </p>
            <p className="leading-relaxed text-gray-400">
              A credential signals that you survived a particular kind of training. It tells
              you almost nothing about what happens when the training runs out and there is
              no rubric, no right answer, and no one to defer to.
            </p>

            <blockquote className="pl-5 border-l-2 border-[#C9A66B]/40 my-8">
              <p className="text-white text-lg leading-relaxed font-light italic">
                The credential signals that someone survived a particular kind of training.
                It says nothing about what they do when the training runs out.
              </p>
            </blockquote>

            <p className="leading-relaxed text-gray-400">
              Most organisations compound this. Consequential decisions — the ones where
              information is genuinely incomplete, priorities genuinely conflict, and the
              outcome is genuinely uncertain — get bounced. Upward. Into committees. Into
              more data. Into meetings about meetings. Not out of incompetence. Because the
              structure tolerates it. Because the consequences of a wrong call fall harder
              on the individual than the consequences of a delayed one.
            </p>
            <p className="leading-relaxed text-gray-400">
              The people who most need the reps end up in precisely the environments that
              protect them from getting them.
            </p>
          </motion.section>

          {/* Section 3 — The Feedback Problem */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            <p className="text-xs font-mono text-gray-600 tracking-widest uppercase">
              Why both gaps stay hidden
            </p>
            <p className="leading-relaxed text-gray-400">
              The translation gap is invisible to the person who has it. The credential gap
              is visible — but rarely admitted, because the credential is supposed to mean
              you are ready. Admitting otherwise feels like undermining everything that got
              you here.
            </p>
            <p className="leading-relaxed text-gray-400">
              The higher the credential and the more senior the role, the less honest
              feedback tends to arrive. The people around you defer. The post-mortem finds
              systemic causes. The cycle closes without the information that would break it.
            </p>
            <p className="leading-relaxed text-gray-300">
              Most people have said some version of{" "}
              <span className="italic">"I actually knew what it was"</span> — after the
              fact, when it no longer mattered. The diagnosis was there. It never had
              anywhere to go.
            </p>
          </motion.section>

          {/* Section 4 — What closes it */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            <p className="text-xs font-mono text-gray-600 tracking-widest uppercase">
              What closes both
            </p>
            <p className="leading-relaxed text-gray-400">
              Neither gap closes through more credentials. More school adds more theory to
              a deficit that is not theoretical.
            </p>
            <p className="leading-relaxed text-gray-400">
              What closes both is the same thing: volume, honest feedback, and conditions
              complex enough to matter. Writing a plan under real pressure. Being scored on
              the quality of the reasoning — not the outcome, not the credential, not the
              intention. Being wrong in a way that is specific, clear, and immediately
              actionable. Going again.
            </p>
            <p className="leading-relaxed text-gray-400">
              The reps need to be real enough to feel consequential. The feedback needs to
              be honest enough to actually reveal the gap. And both need to arrive fast
              enough to be useful — not accumulated slowly across a career at one or two
              consequential decisions a year.
            </p>
            <p className="leading-relaxed text-white font-medium">
              That is what The Mandate was built to provide.
            </p>
          </motion.section>

          {/* OPH bridge */}
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="space-y-3"
          >
            <p className="leading-relaxed text-gray-600 text-sm italic">
              The compounding-consequence structure at the heart of The Mandate has a
              striking parallel in theoretical physics. If you are curious about why partial
              perspectives and synthesis under uncertainty turn out to be foundational —
              not just to good decisions, but to how reality itself appears to work —
              that thread continues{" "}
              <Link
                href="/observer-patch-holography"
                className="text-cyan-600 hover:text-cyan-400 transition-colors underline underline-offset-2"
              >
                here
              </Link>.
            </p>
          </motion.section>

          {/* CTA */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="pt-8 border-t border-gray-800"
          >
            <p className="text-xs font-mono text-[#C9A66B] tracking-widest mb-4 uppercase">
              Beta Access
            </p>
            <p className="text-gray-400 leading-relaxed mb-6">
              All three skins are currently in testing. If this resonates and you want
              honest feedback on the quality of your own reasoning — apply below.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#C9A66B] hover:bg-[#D4AF77] text-black font-bold rounded-lg transition-colors text-sm tracking-wide font-satoshi"
            >
              Apply for beta access <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.section>

        </article>
      </main>
    </div>
  );
}
