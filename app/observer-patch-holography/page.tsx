import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Observer Patch Holography and Last Prompt",
  description:
    "How Bernhard Mueller's Observer Patch Holography maps to the Last Prompt decision intelligence engine — a practical application of OPH's core insights about limited observers, consistency enforcement, and emergent reality.",
  openGraph: {
    title: "Observer Patch Holography and Last Prompt",
    description:
      "How OPH's core insight — reality emerges from overlapping limited observers — maps to the mechanics of the Last Prompt decision engine.",
    url: "https://last-prompt.com/observer-patch-holography",
  },
};

const TABLE_ROWS = [
  {
    concept: "Finite Observer + Limited Patch",
    implementation:
      "You (the Traveller) arrive with no god's-eye view. You receive one advisor's perspective per cycle plus a seed event description. Information is deliberately incomplete and locally framed.",
    strength: "Perfect",
    strengthColor: "text-green-400",
  },
  {
    concept: "Multiple Overlapping Observer Patches",
    implementation:
      "The advisor archetypes (Spark, Wanderer, Sovereign, Weaver, Questioner, Survivor) each represent a distinct limited patch with their own bias vector, core fear, and domain weighting. No single advisor sees the whole picture.",
    strength: "Excellent",
    strengthColor: "text-green-400",
  },
  {
    concept: "Consistency Enforcement Across Patches",
    implementation:
      "The neutral AI evaluator scores your free-text plan against six rubric criteria. Failure to integrate the patches — or internal inconsistency in your reasoning — produces a lower score and worse simulation deltas.",
    strength: "Core mechanic",
    strengthColor: "text-cyan-400",
  },
  {
    concept: "Holographic Encoding / Emergence",
    implementation:
      "Outcomes, narratives, stat deltas, and journal entries emerge from the quality of your reasoning trace rather than pre-scripted paths. The reality of the Lockwood timeline is reconstructed from your patch synthesis.",
    strength: "Very strong",
    strengthColor: "text-green-400",
  },
  {
    concept: "No Objective God's-Eye Blueprint",
    implementation:
      'Explicit in the lore: "The Mandate will never tell you how close your branch came to the real record." History is the anchor, but your reasoning creates the divergent thread.',
    strength: "Explicit in lore",
    strengthColor: "text-violet-400",
  },
  {
    concept: "Partial Perspective as a Feature, Not a Limitation",
    implementation:
      "Advisors are designed with intentional domain weighting and core fears. The system trains you to recognise, integrate, or consciously override incomplete patches — not because advisors are wrong, but because every genuine expert sees from somewhere.",
    strength: "Core training goal",
    strengthColor: "text-cyan-400",
  },
  {
    concept: "Second-Order / Multi-Step / Temporal Reasoning",
    implementation:
      "The evaluation rubric explicitly rewards risk anticipation, multi-step planning, temporal sequencing, and communication designed for multiple audiences with different stakes.",
    strength: "Direct match",
    strengthColor: "text-green-400",
  },
  {
    concept: "Observer's Reasoning Trace as Fundamental",
    implementation:
      "The journal system — opening entries, decision records, closing entries, rubric feedback, and Multiverse Weave alternate projections — records how you reasoned, not just what happened. This is the holographic screen.",
    strength: "Beautiful match",
    strengthColor: "text-violet-400",
  },
];

const SCHEMA_ARTICLE = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Observer Patch Holography and Last Prompt",
  "description":
    "How Bernhard Mueller's Observer Patch Holography maps to the Last Prompt decision intelligence engine — a practical application of OPH's core insights about limited observers, consistency enforcement, and emergent reality.",
  "url": "https://last-prompt.com/observer-patch-holography",
  "author": {
    "@type": "Organization",
    "name": "Last Prompt",
    "url": "https://last-prompt.com",
  },
  "publisher": {
    "@type": "Organization",
    "name": "Last Prompt",
    "url": "https://last-prompt.com",
  },
  "about": [
    {
      "@type": "Thing",
      "name": "Observer Patch Holography",
      "url": "https://github.com/FloatingPragma/observer-patch-holography",
    },
    {
      "@type": "Thing",
      "name": "Decision Intelligence",
    },
  ],
  "mentions": {
    "@type": "Person",
    "name": "Bernhard Mueller",
    "knowsAbout": "Observer Patch Holography",
  },
};

export default function OPHPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-gray-300">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA_ARTICLE) }}
      />
      {/* Top nav */}
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
          <p className="text-xs font-mono text-cyan-400 tracking-widest mb-4 uppercase">
            Theoretical Foundations
          </p>
          <h1 className="font-satoshi text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
            Observer Patch Holography<br />
            <span className="text-[#C9A66B]">
              and the Last Prompt Engine
            </span>
          </h1>
          <p className="text-gray-500 text-base leading-relaxed max-w-2xl">
            Bernhard Mueller&apos;s Observer Patch Holography (OPH) proposes something deceptively simple:
            there is no single objective view from nowhere. Reality emerges from many limited observers —
            each with their own finite patch of knowledge — who must stay consistent wherever their patches overlap.
          </p>
        </header>

        {/* Section 1 — The framework */}
        <section className="py-12 border-b border-gray-800 space-y-5">
          <h2 className="font-satoshi text-2xl font-bold text-white">The core claim</h2>
          <p className="leading-relaxed">
            No pre-existing, God&apos;s-eye universe. No single script. Just overlapping perspectives
            synchronising into the stable story we call physics, spacetime, quantum mechanics, and the
            world we inhabit. Where two observer patches overlap, their descriptions of reality must agree —
            and it is that enforced consistency, rather than any external ground truth, that produces the
            stable structures we observe.
          </p>
          <p className="leading-relaxed">
            The full framework is developed in Mueller&apos;s open book{" "}
            <a
              href="https://oph-book.floatingpragma.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-1 transition-colors"
            >
              Reverse Engineering Reality <ExternalLink className="w-3 h-3" />
            </a>{" "}
            and the{" "}
            <a
              href="https://github.com/FloatingPragma/observer-patch-holography"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-1 transition-colors"
            >
              OPH GitHub repository <ExternalLink className="w-3 h-3" />
            </a>.
          </p>
        </section>

        {/* Section 2 — The connection */}
        <section className="py-12 border-b border-gray-800 space-y-5">
          <h2 className="font-satoshi text-2xl font-bold text-white">Why this lands for us</h2>
          <p className="leading-relaxed">
            OPH describes with unusual precision the problem Last Prompt was built to address — not in
            physics, but in decision-making under genuine uncertainty.
          </p>
          <p className="leading-relaxed">
            In Last Prompt, you never receive the full picture. You receive input from a small group of
            advisors, each operating from a genuinely different domain, expertise, and set of priorities.
            Their perspectives are honest and partial — not because they are withholding anything, but
            because deep expertise naturally produces a limited patch. The security advisor sees the
            perimeter. The medic sees the sick. The strategist sees the long arc. All are right. None
            is complete.
          </p>
          <p className="leading-relaxed">
            Your task is to write a plan that synthesises those patches into a coherent action. A neutral
            AI evaluator then scores how well you did it — measuring the internal consistency of your
            reasoning across six criteria that map directly to OPH&apos;s consistency enforcement logic.
          </p>
          <p className="leading-relaxed">
            The simulation resolves accordingly. Not because it is pre-scripted, but because the quality
            of your patch integration determines what emerges.
          </p>
        </section>

        {/* Section 3 — The journal / holographic screen */}
        <section className="py-12 border-b border-gray-800 space-y-5">
          <h2 className="font-satoshi text-2xl font-bold text-white">The journal as holographic screen</h2>
          <p className="leading-relaxed">
            The most structurally precise parallel is the journal system — and it is worth dwelling on
            because it inverts the usual way people think about records.
          </p>
          <p className="leading-relaxed">
            In OPH, the holographic screen is not the &ldquo;real&rdquo; substrate. It is the record of
            observer interactions from which the three-dimensional reality is reconstructed. The screen is
            more fundamental than the space it encodes.
          </p>
          <p className="leading-relaxed">
            In Last Prompt — specifically in the Lockwood skin — the journal is not a summary of what
            happened. It is the record of how you reasoned: your plan in free text, the rubric evaluation
            of its internal consistency, the narrative consequence, and in the Multiverse Weave,
            alternate timeline projections derived from different quality bands of reasoning. The
            &ldquo;reality&rdquo; of the Lockwood timeline is reconstructed from your reasoning trace.
            Not the other way around.
          </p>
          <p className="leading-relaxed">
            The Mandate — the AI terminal at the centre of Lockwood&apos;s lore — will never tell you how
            close your branch came to the historical record. The record exists as an anchor, but the
            timeline that actually plays out is co-created through the quality of your observer synthesis.
            That is OPH&apos;s consistency enforcement made playable.
          </p>
        </section>

        {/* Section 4 — Why Lockwood */}
        <section className="py-12 border-b border-gray-800 space-y-5">
          <h2 className="font-satoshi text-2xl font-bold text-white">Lockwood as the reference implementation</h2>
          <p className="leading-relaxed">
            The Last Prompt engine runs across multiple skins — Colony, Corporate Reckoning, Lockwood —
            and the OPH mapping applies to all of them at the mechanical level. But Lockwood is the skin
            where the philosophical architecture is most explicit in the lore itself.
          </p>
          <p className="leading-relaxed">
            Lockwood places you at crux points in the history of computing and machine intelligence.
            Each chapter opens at a real historical moment — the seed from which your personal timeline
            grows. You are the Traveller — a silent operative with no god&apos;s-eye view, arriving
            at the points where one different thought might have pulled things in another direction. The advisor archetypes (Spark, Wanderer,
            Sovereign, Weaver, Questioner, Survivor) are each built around a different cognitive and
            epistemic orientation, not just a domain. Each represents a fundamentally different way of
            constructing a patch.
          </p>
          <p className="leading-relaxed">
            The table below uses Lockwood as the reference implementation, but the engine logic it
            describes is consistent across all skins.
          </p>
        </section>

        {/* Section 5 — Observer patches visualised */}
        <section className="py-12 border-b border-gray-800">
          <Image
            src="/applied-observer-patch-holography.jpg"
            alt="Observer Patch Holography visualised through Last Prompt Lockwood: three stages from separate advisor observer patches, through first overlaps, to complex synthesis emerging from the Traveller's reasoning"
            width={1200}
            height={600}
            className="w-full rounded-xl border border-gray-800"
            priority={false}
          />
          <div className="mt-8 space-y-4">
            <p className="leading-relaxed text-gray-400">
              In Observer Patch Holography, reality is not handed down as one perfect view. It emerges
              from limited observers — each seeing only part of the picture — and the quality of the
              synthesis they create where their patches overlap.
            </p>
            <p className="leading-relaxed text-gray-400">
              The graphic above shows this process. On the left, the advisors exist as separate patches
              with their own focused expertise and perspective. As you engage with them, the overlaps
              begin to form. The more coherently you reason, the richer and more complex those
              interconnections become. What appears in the final image is your unique synthesis — every
              Traveller builds different relationships with the advisors, shaped by the questions you ask
              and the patterns you notice.
            </p>
            <hr className="border-gray-800 my-6" />
            <p className="leading-relaxed text-gray-600 text-sm italic">
              The situations themselves are never chosen at random. Each chapter opens with the real
              historical moment, after which the Mandate quietly selects what comes next by sensing the
              pressures in the current environment and the shape your recent decisions are giving the
              thread. The influence is subtle — more like a slow current than an obvious hand. The more
              open you remain to the connections between events, the more clearly you feel the thread
              responding.
            </p>
          </div>
        </section>

        {/* Section 6 — Mapping table (renumbered) */}
        <section className="py-12 border-b border-gray-800">
          <h2 className="text-2xl font-bold text-white mb-2">The mapping</h2>
          <p className="text-gray-500 text-sm mb-8">
            OPH concept → Last Prompt implementation (Lockwood as reference). Strength assessments
            reflect our own analysis; we welcome challenge on any of them.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="text-left py-3 pr-6 text-xs font-mono text-gray-500 tracking-widest w-[28%]">
                    OPH CONCEPT
                  </th>
                  <th className="text-left py-3 pr-6 text-xs font-mono text-gray-500 tracking-widest">
                    LAST PROMPT IMPLEMENTATION
                  </th>
                  <th className="text-left py-3 text-xs font-mono text-gray-500 tracking-widest w-[14%]">
                    STRENGTH
                  </th>
                </tr>
              </thead>
              <tbody>
                {TABLE_ROWS.map((row, i) => (
                  <tr
                    key={i}
                    className="border-b border-gray-800/60 hover:bg-gray-900/30 transition-colors"
                  >
                    <td className="py-4 pr-6 text-white font-medium align-top leading-relaxed">
                      {row.concept}
                    </td>
                    <td className="py-4 pr-6 text-gray-400 align-top leading-relaxed">
                      {row.implementation}
                    </td>
                    <td className={`py-4 align-top font-mono text-xs ${row.strengthColor}`}>
                      {row.strength}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 7 — The practical conclusion */}
        <section className="py-12 border-b border-gray-800 space-y-5">
          <h2 className="font-satoshi text-2xl font-bold text-white">From fundamental physics to practical judgment</h2>
          <p className="leading-relaxed">
            What draws us to OPH is the intuition at its core: if reality itself is built from partial
            knowledge and enforced agreement, then the most valuable skill in our time isn&apos;t memorising
            more facts or repeating old patterns. It is learning to think clearly, communicate intent,
            and synchronise effectively when information is always incomplete and perspectives inevitably differ.
          </p>
          <p className="leading-relaxed">
            That is the muscle Last Prompt is designed to strengthen — through repeated, private,
            consequence-bearing practice at patch synthesis under uncertainty.
          </p>
          <p className="leading-relaxed">
            We will continue to explore OPH as the framework develops — its axioms, the holographic
            screen concept, and how overlap consistency generates the structures of quantum mechanics
            and relativity. We will share more here as those connections clarify.
          </p>
        </section>

        {/* Section 8 — Resources + CTA */}
        <section className="py-12 space-y-8">
          <div>
            <h2 className="text-xl font-bold text-white mb-4">Start with OPH</h2>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://oph-book.floatingpragma.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  Reverse Engineering Reality — the book{" "}
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <p className="text-gray-600 text-sm mt-0.5 ml-0">
                  Bernhard Mueller&apos;s open book developing the full OPH framework.
                </p>
              </li>
              <li>
                <a
                  href="https://github.com/FloatingPragma/observer-patch-holography"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  Observer Patch Holography — GitHub{" "}
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <p className="text-gray-600 text-sm mt-0.5">
                  The formal repository for the OPH project under FloatingPragma.
                </p>
              </li>
            </ul>
          </div>

          <div className="p-6 border border-gray-800 rounded-xl bg-gray-900/30">
            <p className="text-xs font-mono text-cyan-400 tracking-widest mb-3">TRY THE ENGINE</p>
            <p className="text-gray-400 leading-relaxed mb-4 text-sm">
              If the OPH framing resonates — and you want to experience what patch synthesis under
              uncertainty actually feels like as a practice — all three skins are currently in testing.
              Apply for beta access and we will reach out directly.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#C9A66B] hover:bg-[#D4AF77] text-black font-bold rounded-lg transition-colors text-sm tracking-wide"
            >
              Register interest
            </Link>
          </div>

          <p className="text-gray-600 text-sm leading-relaxed">
            We would be genuinely interested in your thoughts — particularly if you are working
            with OPH directly and see tensions or inaccuracies in the mapping above.
            The analysis here is our own and we hold it lightly.
          </p>
        </section>
      </main>
    </div>
  );
}
