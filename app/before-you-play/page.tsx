"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function BeforeYouPlayPage() {
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
            className="text-xs font-mono text-[#C9A66B] tracking-widest mb-6 uppercase"
          >
            Before You Play
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-satoshi text-3xl sm:text-4xl font-bold text-white leading-tight mb-6"
          >
            People don&rsquo;t fear decisions because they lack intelligence.
            They fear decisions because decisions create consequences.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-gray-400 text-lg leading-relaxed"
          >
            And consequences create responsibility.
          </motion.p>
        </header>

        <article className="py-12 space-y-16">

          {/* Section 1 — Where you are right now */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            <p className="text-xs font-mono text-gray-600 tracking-widest uppercase">Start here</p>
            <p className="leading-relaxed text-gray-400">
              Think about where you are right now. There are probably parts of your life
              that you&rsquo;re pleased with and parts you would like to change. Most of us
              can immediately identify something we would improve if we could. A move we
              would make. A conversation we should have. A project we would start.
              A habit we would stop.
            </p>
            <p className="leading-relaxed text-gray-200 font-medium">
              There is usually a reason we haven&rsquo;t done it.
            </p>
            <blockquote className="pl-5 border-l-2 border-gray-700 my-6">
              <p className="text-gray-500 italic leading-relaxed space-y-1">
                Perhaps we don&rsquo;t have enough information.<br />
                Perhaps we are waiting for somebody else&rsquo;s agreement.<br />
                Perhaps the timing isn&rsquo;t right.<br />
                Or perhaps we are simply uncertain about what happens next.
              </p>
            </blockquote>
            <p className="leading-relaxed text-gray-400">
              All of those reasons are understandable.
            </p>
          </motion.section>

          {/* Section 2 — Push the thought further */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            <p className="text-xs font-mono text-gray-600 tracking-widest uppercase">Now push the thought one step further</p>
            <p className="leading-relaxed text-gray-400">
              Imagine the decision could not be delayed. Imagine you had to decide today.
              Not because you were certain. Not because you had perfect information.
              Simply because the situation required a decision.
            </p>
            <p className="leading-relaxed text-white font-medium text-lg">
              What would concern you most?
            </p>
            <p className="leading-relaxed text-gray-400">
              For many people it isn&rsquo;t making the decision itself. It&rsquo;s living
              with the consequences. Explaining the decision to people who may disagree.
              Accepting responsibility if parts of the plan fail. Managing the unexpected
              outcomes that appear after the choice has been made.
            </p>

            <div className="p-6 sm:p-8 border border-[#C9A66B]/20 rounded-xl bg-[#C9A66B]/5 my-8">
              <p className="text-white leading-relaxed text-lg font-light italic">
                In other words, the difficult part isn&rsquo;t choosing.
                The difficult part is owning what the choice creates.
              </p>
            </div>
          </motion.section>

          {/* Section 3 — How life actually works */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            <p className="text-xs font-mono text-gray-600 tracking-widest uppercase">And yet that is how life works</p>
            <p className="leading-relaxed text-gray-400">
              We rarely get certainty before acting. We make the best decision we can with
              the information available and then adapt to the world that decision creates.
              The next decision is made inside the consequences of the previous one.
            </p>
            <p className="leading-relaxed text-gray-200 font-medium">
              That is true of relationships. It is true of careers. It is true of
              leadership. It is true of life itself.
            </p>
          </motion.section>

          {/* Section 4 — What Last Prompt does */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            <p className="text-xs font-mono text-gray-600 tracking-widest uppercase">Last Prompt is built around that idea</p>
            <p className="leading-relaxed text-gray-400">
              You will face situations that require a decision. You will not have perfect
              information. You will not have unlimited time. You may not even have a
              particularly good answer.
            </p>
            <p className="leading-relaxed text-[#C9A66B] font-bold text-xl">
              But you must decide.
            </p>
            <p className="leading-relaxed text-gray-400">
              The world around you will then respond to what you chose. Trust may grow.
              Resources may shrink. New opportunities may appear. Unexpected problems
              may emerge.
            </p>
            <p className="leading-relaxed text-gray-400">
              You cannot return to the earlier moment and choose again. Life doesn&rsquo;t
              work that way.
            </p>
            <p className="leading-relaxed text-white font-medium text-lg">
              Neither does Last Prompt.
            </p>
            <p className="leading-relaxed text-gray-400">
              What you can do is learn from the consequences, adapt, and make the next
              decision in the world your previous decision created.
            </p>
          </motion.section>

          {/* Closing statement */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="pt-4"
          >
            <p className="font-satoshi text-2xl sm:text-3xl text-white leading-snug text-center">
              Judgement is not the ability to predict the future.<br />
              <span className="text-[#C9A66B]">It is the ability to remain viable when the future refuses to cooperate.</span>
            </p>
          </motion.section>

          {/* CTA */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="pt-8 border-t border-gray-800 text-center"
          >
            <p className="text-xs font-mono text-[#C9A66B] tracking-widest mb-4 uppercase">
              The Decision Is Real
            </p>
            <p className="text-gray-400 leading-relaxed mb-6">
              You&rsquo;ve read why. What happens next is yours to decide.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#C9A66B] hover:bg-[#D4AF77] text-black font-bold rounded-lg transition-colors text-sm tracking-wide font-satoshi"
            >
              Request trial access <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.section>

        </article>
      </main>
    </div>
  );
}
