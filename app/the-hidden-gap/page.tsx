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
            className="text-xs font-mono text-purple-400 tracking-widest mb-6 uppercase"
          >
            The Hidden Gap
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-satoshi text-3xl sm:text-4xl font-bold text-white leading-tight mb-6"
          >
            The word <em>decision</em> appears frequently in organisational life.
            The act of deciding appears considerably less often.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-gray-400 text-lg leading-relaxed"
          >
            That is a different thing. The gap between them has widened — not through
            negligence or failure of character, but through a sequence of entirely rational
            design decisions that have quietly removed the conditions under which consequential
            decision-making capacity develops.
          </motion.p>
        </header>

        <article className="py-12 space-y-16">

          {/* Section 1 — Bounce Culture */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            <p className="text-xs font-mono text-gray-600 tracking-widest uppercase">The language of governance</p>
            <p className="leading-relaxed text-gray-400">
              Listen to how decisions move through most organisations and a pattern emerges.
              A problem arrives. It is acknowledged. It is reframed as requiring further input,
              broader consensus, more data, or a higher authority — and is passed onward.
              The problem has been handled. Nothing has been decided.
            </p>
            <p className="leading-relaxed text-gray-400">
              The language that surrounds this process is indistinguishable, on the surface,
              from the language of good governance:
            </p>
            <blockquote className="pl-5 border-l-2 border-gray-700 my-6">
              <p className="text-gray-500 italic leading-relaxed space-y-1">
                I have raised this with the relevant stakeholders.<br />
                I have passed this to customer service and am awaiting their response.<br />
                I have flagged this for the next leadership review.<br />
                I have ensured the appropriate people are informed.
              </p>
            </blockquote>
            <p className="leading-relaxed text-gray-200 font-medium">
              Each sentence describes an action taken. None describes a decision made.
            </p>
            <p className="leading-relaxed text-gray-400">
              The person who said these things has been busy, conscientious, and entirely
              unaccountable for what happens next. And in most organisational structures,
              that is the rational position.
            </p>
          </motion.section>

          {/* Section 2 — Why it is rational, not moral failure */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            <p className="text-xs font-mono text-gray-600 tracking-widest uppercase">A rational response to an asymmetric incentive</p>
            <p className="leading-relaxed text-gray-400">
              In most organisations, the consequences of a visible wrong decision fall harder
              on the individual who made it than the consequences of a decision that was
              delayed, diffused, or never formally made at all. The manager who commits to
              a course of action that fails can be identified, reviewed, and held accountable.
              The manager who convened a committee, gathered additional perspectives,
              escalated to senior leadership, and waited for consensus cannot.
            </p>
            <p className="leading-relaxed text-gray-400">
              The outcome may be identical — or worse, because the delay compounded
              the problem — but the attribution is diffuse.
            </p>
            <p className="leading-relaxed text-white font-medium text-lg">
              No one decided. Therefore no one failed.
            </p>
            <p className="leading-relaxed text-gray-400">
              This is not a criticism of the people inside this structure. It is a
              description of the structure. The behaviour that looks like risk-aversion or
              lack of ownership is the predictable output of an incentive architecture that
              makes commitment more costly than deferral. The structure is not broken.
              It is working exactly as it was designed. And it is producing a capability
              deficit that compounds silently across every level of the organisation.
            </p>
          </motion.section>

          {/* Section 3 — KPI Tunnel */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            <p className="text-xs font-mono text-gray-600 tracking-widest uppercase">The measurement architecture</p>
            <p className="leading-relaxed text-gray-400">
              KPI architectures emerged as a rational response to scale. When direct
              observation of individual judgment becomes impossible across hundreds or
              thousands of professionals, some proxy is required to convert contextual
              performance into manageable signals. Management by Objectives and its
              descendants supplied that proxy. The intention was never to narrow attention.
              It was to make performance legible at a distance.
            </p>
            <p className="leading-relaxed text-gray-400">
              The unintended consequence takes longer to become visible. When performance
              is defined by a specific set of metrics, the rational professional learns —
              usually without being taught explicitly — to attend to what is measured and
              to treat what falls outside that frame as background. Once the measure becomes
              the primary visible signal of value, behaviour organises around it with
              remarkable efficiency. The domain of the KPI becomes the domain of professional
              concern.
            </p>
            <p className="leading-relaxed text-gray-200 font-medium">
              What falls outside it falls outside the frame. Not out of negligence.
              Because in a career shaped by that architecture, what sits beyond the
              measures has never once come back as your problem.
            </p>
            <p className="leading-relaxed text-gray-400">
              This is the KPI tunnel. It is not a personality trait. It is not a
              generational attitude. It is the cognitive consequence of living inside
              a system that defines what counts as your problem — and has designed
              everything else out of view.
            </p>
          </motion.section>

          {/* Section 4 — The Succession Problem — THE AHA */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            <p className="text-xs font-mono text-gray-600 tracking-widest uppercase">The succession problem</p>
            <p className="leading-relaxed text-gray-400">
              The senior manager who notices a declining environmental factor while handling
              the immediate crisis — who sees the adjacent problem no one reported, who
              recognises the decision that has crossed the perimeter of their defined role
              and owns it anyway — did not acquire that capacity through superior character
              or training. They acquired it through exposure.
            </p>
            <p className="leading-relaxed text-gray-400">
              Earlier in their career, the boundary between "my problem" and "someone else's
              problem" was still established by visible consequence rather than by job
              description and metric ownership. Something that was technically outside their
              remit became catastrophically their problem anyway. They learned. They went again.
              That experience is the origin of the environmental awareness the role now requires.
            </p>
            <p className="leading-relaxed text-gray-400">
              The structures that now protect high-potential talent from exactly those
              experiences were, in many cases, put in place by the same generation that
              developed the capacity by living them. The intention was sound: protect junior
              professionals from outcomes that could damage their confidence and the
              organisation simultaneously. The effect, over time, has been to accelerate
              the progression of people who have most successfully navigated structures
              designed to prevent errors from landing — toward the roles where that experience
              would have been most valuable.
            </p>

            <div className="p-6 sm:p-8 border border-purple-400/20 rounded-xl bg-purple-400/5 my-8">
              <p className="text-white leading-relaxed text-lg font-light italic">
                The senior manager who observes that younger colleagues fail to see the bigger
                picture, or treat adjacent problems as someone else&apos;s responsibility, is
                frequently diagnosing the output of their own organisation&apos;s measurement
                design. The younger manager is not disengaged. They are doing exactly what
                the structure trained them to do.
              </p>
            </div>

            <p className="leading-relaxed text-gray-400">
              The system is not hypocritical. It is self-undermining at the level of
              capability development. The talent pool, almost by definition, is composed
              of people who have most successfully navigated the structures designed to
              prevent errors from landing. They arrive at senior positions having been
              selected, in part, for the very quality the role now most urgently requires
              them not to have: an unblemished relationship with consequential failure.
            </p>
            <p className="leading-relaxed text-gray-400">
              This gap accumulates quietly, across hierarchies, in ways that only become
              visible at moments of genuine crisis — when the decision cannot be bounced,
              the KPI offers no guidance, and there is no committee to convene because
              the deadline is now.
            </p>
          </motion.section>

          {/* Section 5 — Translation Gap */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            <p className="text-xs font-mono text-gray-600 tracking-widest uppercase">After the decision</p>
            <p className="leading-relaxed text-gray-400">
              The three preceding patterns describe conditions that prevent a decision from
              being made. There is a fourth gap. It occurs after.
            </p>
            <p className="leading-relaxed text-gray-400">
              A decision has been reached. The commitment is genuine. The environmental
              awareness is present. The person at the desk knows what needs to happen.
              The gap that remains is the distance between the clarity of that knowledge
              and the precision with which it can be expressed in a form that others
              can act on.
            </p>
            <p className="leading-relaxed text-gray-400">
              This gap is almost impossible to see from the inside. Every unstated
              assumption, every piece of context that did not make it onto the page,
              every ambiguity in the instruction — the decision-maker fills these in
              automatically, because they were present for the thinking that produced them.
              The plan reads clearly to its author. It reads differently to everyone
              who was not in the room.
            </p>
            <p className="leading-relaxed text-gray-200 font-medium">
              The simplest test: could someone who just walked in — knowing nothing
              about the situation, the history, or what was meant — read what was
              written and know exactly what to do first, without asking?
            </p>
            <p className="leading-relaxed text-gray-400">
              A slightly vague plan gets executed slightly differently than intended.
              Slightly different execution produces slightly different conditions. The
              gap compounds. The organisation that appears to be executing a coherent
              strategy is frequently executing several slightly different interpretations
              of it simultaneously — none of which is quite what anyone decided.
            </p>
          </motion.section>

          {/* Section 6 — What closes it */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            <p className="text-xs font-mono text-gray-600 tracking-widest uppercase">What closes the gap</p>
            <p className="leading-relaxed text-gray-400">
              None of these gaps close through credentials. More school adds more theory
              to a deficit that is not theoretical. More process adds more structure to a
              problem that is structural.
            </p>
            <p className="leading-relaxed text-gray-400">
              What closes all four is the same thing: volume, honest feedback, and
              conditions complex enough to matter. The accumulated experience of committing
              under genuine uncertainty — being scored on the quality of the reasoning,
              not the outcome, not the intention — watching the environmental consequences
              of that reasoning move in a world that does not absorb them, and going again.
            </p>
            <p className="leading-relaxed text-gray-400">
              What the bounce culture and the KPI tunnel have removed is precisely the
              condition under which environmental awareness develops: the repeated experience
              of consequences that cross the measured perimeter and therefore cannot be
              ignored. Last Prompt restores that condition inside a safe but consequence-bearing
              environment — making the environmental dimensions an independent accountability
              layer that moves in response to every decision, whether or not the practitioner
              was attending to them.
            </p>
            <p className="leading-relaxed text-white font-medium text-lg">
              The Mandate does not teach what good reasoning looks like.
              It shows you what your reasoning produced.
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
              If this resonates — not as theory, but as a recognisable description of
              something you have watched happen in your own organisation — the platform
              is in closed beta. Register your interest below.
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
