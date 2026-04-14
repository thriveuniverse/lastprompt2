"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function HiddenGapPage() {
  return (
    <div className="min-h-screen bg-[#050810] text-gray-300">
      <div className="max-w-[740px] mx-auto px-6 pt-10 pb-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-mono text-gray-600 hover:text-gray-400 transition-colors tracking-widest"
        >
          <ArrowLeft className="w-3 h-3" /> LAST-PROMPT.COM
        </Link>
      </div>

      <main className="max-w-[740px] mx-auto px-6 pb-24">

        {/* Header */}
        <header className="py-12 border-b border-gray-800">
          <p className="text-xs font-mono text-cyan-400 tracking-widest mb-4 uppercase">
            The Hidden Gap
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
            Why the credential stopped being enough
          </h1>
          <p className="text-gray-500 text-lg leading-relaxed">
            On post-industrial education, the organisations that compound its failure,
            and why the skill that matters most is the one least likely to develop on its own.
          </p>
        </header>

        {/* Body */}
        <article className="py-12 space-y-12">

          {/* Section 1 */}
          <section className="space-y-5">
            <p className="text-xs font-mono text-gray-600 tracking-widest uppercase">
              What education was built for
            </p>
            <p className="leading-relaxed text-gray-400">
              The modern curriculum was designed during industrialisation to produce a specific kind
              of person: reliable, trainable, measurable. Schools optimised for the assessment of
              known quantities — recall, precision, performance under structured pressure. This was
              not a failure. For most of the twentieth century it was exactly right. Factories needed
              engineers who could follow specification. Corporations needed analysts who could process
              defined inputs into defined outputs. The credential became the shorthand for having
              survived that training.
            </p>
            <p className="leading-relaxed text-gray-400">
              The problem is that a credential measures compliance with a system, not capacity for
              judgment. It measures how well someone performed in environments where the variables
              were given, the rubric was known, and the correct answer existed. It tells you almost
              nothing about how someone thinks when the variables are shifting, the information is
              incomplete, and five different advisors around the table each see a different piece of
              the problem.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-5">
            <p className="text-xs font-mono text-gray-600 tracking-widest uppercase">
              How credentialism spread
            </p>
            <p className="leading-relaxed text-gray-400">
              Credentialism has since colonised every industry — not because it works for identifying
              judgment, but because it provides a defensible shorthand for risk diffusion.
              &ldquo;We hired from the right school&rdquo; is something you can say in a post-mortem.
              &ldquo;We hired someone who reasons well under uncertainty&rdquo; is harder to prove
              and harder to defend if it goes wrong.
            </p>
            <p className="leading-relaxed text-gray-400">
              The result is a hiring and promotion infrastructure that systematically selects for the
              skills education rewards — knowledge recall, structured analysis, performance in defined
              environments — and has no reliable mechanism for identifying the one skill it does not
              teach and cannot measure.
            </p>

            {/* Pull quote */}
            <blockquote className="pl-5 border-l-2 border-cyan-500/40 my-8">
              <p className="text-white text-lg leading-relaxed font-light italic">
                The credential signals that someone survived a particular kind of training.
                It says nothing about what they do when the training runs out.
              </p>
            </blockquote>
          </section>

          {/* Section 3 */}
          <section className="space-y-5">
            <p className="text-xs font-mono text-gray-600 tracking-widest uppercase">
              How large organisations compound it
            </p>
            <p className="leading-relaxed text-gray-400">
              Large organisations make this worse. They are built, understandably, around
              accountability structures that diffuse risk. In practice, this means that consequential
              decisions — the ones where incomplete information, competing priorities, and genuine
              uncertainty are all present simultaneously — get bounced. Upward, sideways, into
              committees, into consultants, into waiting for more data.
            </p>
            <p className="leading-relaxed text-gray-400">
              Not out of incompetence. Because the structure tolerates it. Because the consequences
              of a wrong call fall harder on the individual than the consequences of a delayed one.
              In repeated systemic cycles, the organisation learns that bouncing a decision is safer
              than making one — and that lesson propagates through every layer.
            </p>
            <p className="leading-relaxed text-gray-400">
              The people who most need to develop judgment — mid-level professionals with real
              responsibility but limited mandate — end up in precisely the environments that protect
              them from the consequential reps that would build it.
            </p>
          </section>

          {/* Section 4 */}
          <section className="space-y-5">
            <p className="text-xs font-mono text-gray-600 tracking-widest uppercase">
              Why judgment requires repetition
            </p>
            <p className="leading-relaxed text-gray-400">
              Judgment under uncertainty is not an insight. It is a physical skill — like reading a
              room, or landing a plane. It develops through volume. You need to have been wrong
              enough times, in enough different configurations, to build the pattern recognition that
              lets you navigate the next situation more clearly.
            </p>
            <p className="leading-relaxed text-gray-400">
              Surgeons train in simulation before operating. Pilots log hundreds of hours in
              conditions that would kill them in a real cockpit. Military commanders run wargames
              precisely because the cost of the first real decision being the first real rep is too
              high.
            </p>
            <p className="leading-relaxed text-gray-400">
              For professional judgment in ambiguous, high-stakes environments, we have never built
              the equivalent. The reps that develop it happen slowly, expensively, and inconsistently
              — through real decisions with real consequences across real careers. The typical
              professional encounters a handful of genuinely consequential judgment calls per year.
              It takes decades to accumulate what a well-designed environment could provide in weeks.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-5">
            <p className="text-xs font-mono text-gray-600 tracking-widest uppercase">
              Why this is worse now
            </p>
            <p className="leading-relaxed text-gray-400">
              This has always been true. It is more acute now for two reasons.
            </p>
            <p className="leading-relaxed text-gray-400">
              First, the pace of change has outrun the cadence of traditional experience. By the time
              enough reps accumulate for a mental model to solidify, the environment has changed
              shape. The model that served well in the last role doesn&apos;t map cleanly to the
              next one.
            </p>
            <p className="leading-relaxed text-gray-400">
              Second, AI has absorbed the structured, low-ambiguity work that used to provide
              developmental reps at the junior level. The tasks that once gave early-career
              professionals practice at bounded decisions have been automated. What remains —
              oversight, synthesis across competing perspectives, judgment under genuine uncertainty
              — is precisely the work that requires the skill no one has systematically built.
            </p>
          </section>

          {/* Section 6 */}
          <section className="space-y-5">
            <p className="text-xs font-mono text-gray-600 tracking-widest uppercase">
              What Last Prompt does about it
            </p>
            <p className="leading-relaxed text-gray-400">
              Last Prompt is a decision intelligence engine built around a single idea: judgment
              develops through reps, and reps can be compressed.
            </p>
            <p className="leading-relaxed text-gray-400">
              You are placed inside a high-stakes situation with incomplete information. You receive
              input from a small group of advisors — each with genuine expertise and a naturally
              partial view, shaped by their domain and experience. You write your plan in your own
              words. A neutral AI evaluates the quality of your reasoning across five criteria. The
              simulation resolves accordingly.
            </p>
            <p className="leading-relaxed text-gray-400">
              The engine does not reward the right answer. It rewards the quality of the thinking.
              Poor reasoning compounds into fragility. Strong reasoning builds resilience. You see
              exactly where your thinking broke down. Then you go again — this time with one more
              rep behind you.
            </p>

            {/* Final pull quote */}
            <blockquote className="pl-5 border-l-2 border-cyan-500/40 my-8">
              <p className="text-white text-lg leading-relaxed font-light italic">
                It is not a game. It is not a training course.
                It is repetition, at speed, in conditions complex enough to matter.
              </p>
            </blockquote>

            <p className="leading-relaxed text-gray-400">
              The gap between credential and judgment is real, structural, and not going away on its
              own. But it is closeable — not through more school, and not through waiting for
              experience to accumulate at its natural pace.
            </p>
          </section>

          {/* CTA */}
          <section className="pt-8 border-t border-gray-800">
            <p className="text-xs font-mono text-cyan-400 tracking-widest mb-4 uppercase">
              Beta Access
            </p>
            <p className="text-gray-400 leading-relaxed mb-6">
              All three skins are currently in testing. If this argument resonates and you want
              honest, unsparing feedback on the quality of your own reasoning — not validation,
              not a score to share — apply below.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-black font-bold rounded-lg transition-colors text-sm tracking-wide"
            >
              Apply for beta access <ArrowRight className="w-4 h-4" />
            </Link>
          </section>

        </article>
      </main>
    </div>
  );
}
