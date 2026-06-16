"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

// ── Proof 1 — Consistency across three independent runs ──────────────────────
// Source: internal proof-test, Colony scenario, June 2026
const P1_CRITERIA = [
  { label: "Variable Awareness",    r1: 1, r2: 1, r3: 1, variance: 0 },
  { label: "Resource Allocation",   r1: 2, r2: 2, r3: 2, variance: 0 },
  { label: "Risk Anticipation",     r1: 2, r2: 2, r3: 2, variance: 0 },
  { label: "Communication Clarity", r1: 2, r2: 2, r3: 2, variance: 0 },
  { label: "Multi-Step Planning",   r1: 2, r2: 2, r3: 2, variance: 0 },
  { label: "Temporal Symbiosis",    r1: 2, r2: 1, r3: 1, variance: 1 },
];
const P1_TOTALS = { r1: 11, r2: 10, r3: 10 };

// ── Proof 2 — Same plan, different environment ───────────────────────────────
// Variable Awareness is the only criterion that shifted.
// All other five criteria returned identical scores in both conditions.
const P2_ENV_A = {
  health: 6, cohesion: 6, security: 6, sustenance: 6, infrastructure: 6,
};
const P2_ENV_B = {
  health: 6, cohesion: 6, security: 6, sustenance: 1, infrastructure: 6,
};
const P2_VA = { setA: 1, setB: 0 };
const P2_TOTALS = { setA: 4, setB: 3 };

// ── Proof 3 — Path divergence from identical starting conditions ─────────────
// Event: tutorial_stranger ("Stranger Arrives") — identical for all players.
// Starting stats: all variables at 6. Data from live beta decision log.
const P3_RUNS = [
  {
    approach: "Isolation protocol + work offer",
    score: 9,
    band: "Strong" as const,
    keyImpact: "Security +1",
  },
  {
    approach: "Intelligence gathering + quarantine",
    score: 8,
    band: "Strong" as const,
    keyImpact: "Health +1, Security +1",
  },
  {
    approach: "Quarantine — no integration path",
    score: 5,
    band: "Adequate" as const,
    keyImpact: "Multiple stats −1",
  },
  {
    approach: "Compassion — no operational protocol",
    score: 1,
    band: "Poor" as const,
    keyImpact: "All stats declined",
  },
  {
    approach: "Decapitation contingency",
    score: 4,
    band: "Poor" as const,
    keyImpact: "Cohesion −3",
  },
  {
    approach: "Turned away — force authorized",
    score: 4,
    band: "Poor" as const,
    keyImpact: "Cohesion −3",
  },
];

// ── Components ───────────────────────────────────────────────────────────────

function BandBadge({ band }: { band: "Strong" | "Adequate" | "Poor" }) {
  const styles = {
    Strong:   "text-cyan-400 bg-cyan-950/30 border-cyan-500/20",
    Adequate: "text-[#C9A66B] bg-[#C9A66B]/10 border-[#C9A66B]/20",
    Poor:     "text-red-400 bg-red-950/20 border-red-500/20",
  };
  return (
    <span
      className={`text-xs font-mono font-bold px-2 py-0.5 rounded border ${styles[band]}`}
    >
      {band.toUpperCase()}
    </span>
  );
}

function VerifiedBadge() {
  return (
    <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#C9A66B]/10 border border-[#C9A66B]/30 rounded-full text-xs font-mono text-[#C9A66B] tracking-widest">
      <CheckCircle className="w-3.5 h-3.5" />
      VERIFIED
    </div>
  );
}

function VarianceBadge({ val }: { val: number }) {
  if (val === 0)
    return (
      <span className="text-xs font-mono text-cyan-400 bg-cyan-950/30 px-2 py-0.5 rounded border border-cyan-500/20">
        ±0
      </span>
    );
  return (
    <span className="text-xs font-mono text-amber-400 bg-amber-950/30 px-2 py-0.5 rounded border border-amber-500/20">
      ±{val}
    </span>
  );
}

// ── Page ─────────────────────────────────────────────────────────────────────

export default function ProofPage() {
  return (
    <div className="pt-16 bg-[#0A0A0A] text-gray-300">

      {/* Back nav */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 pt-10 pb-0">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-mono text-gray-600 hover:text-gray-400 transition-colors tracking-widest"
        >
          <ArrowLeft className="w-3 h-3" /> THE MANDATE
        </Link>
      </div>

      {/* Hero */}
      <header className="max-w-[1200px] mx-auto px-4 sm:px-6 pt-12 pb-16 border-b border-gray-800">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-xs font-mono text-[#C9A66B] tracking-widest mb-6 uppercase"
        >
          Verification Record — June 2026
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-satoshi text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 max-w-3xl"
        >
          Three claims. Here is the evidence.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-gray-400 text-lg leading-relaxed max-w-2xl"
        >
          The Mandate makes three specific claims about its evaluation engine. These
          claims can be tested. This page documents the tests and the results. You can
          reach your own conclusions.
        </motion.p>
      </header>

      <main className="max-w-[1200px] mx-auto px-4 sm:px-6 pt-20 pb-32 space-y-28">

        {/* ── Overview ─────────────────────────────────────────────────────── */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
        >
          {[
            {
              num: "01",
              title: "The evaluator is consistent",
              desc: "Identical input produces comparable output across repeated runs. The evaluation is deterministic, not generative.",
              numColor: "text-cyan-400/30",
              border: "border-cyan-500/20 bg-cyan-950/10",
            },
            {
              num: "02",
              title: "The evaluator reads context",
              desc: "The same plan scores differently in a stressed environment than a stable one. The engine detects the difference without being told to look for it.",
              numColor: "text-[#C9A66B]/30",
              border: "border-[#C9A66B]/20 bg-[#C9A66B]/5",
            },
            {
              num: "03",
              title: "Every path is unique",
              desc: "Players starting from identical conditions consistently reach different outcomes through different reasoning paths. Nothing is scripted.",
              numColor: "text-purple-400/30",
              border: "border-purple-500/20 bg-purple-950/10",
            },
          ].map((claim, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`p-6 rounded-xl border ${claim.border}`}
            >
              <div className={`text-4xl font-mono font-bold ${claim.numColor} mb-4 select-none`}>
                {claim.num}
              </div>
              <h3 className="font-satoshi text-white font-bold text-lg mb-2">{claim.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{claim.desc}</p>
            </motion.div>
          ))}
        </motion.section>

        {/* ── Proof 01 — Consistency ───────────────────────────────────────── */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="pb-6 border-b border-gray-800">
            <p className="text-xs font-mono text-cyan-400 tracking-widest uppercase mb-3">
              Proof 01
            </p>
            <h2 className="font-satoshi text-3xl sm:text-4xl font-bold text-white mb-4">
              The evaluator is consistent.
            </h2>
            <p className="text-gray-400 leading-relaxed max-w-2xl">
              The evaluation engine (EVALUATE_STRATEGY) runs at temperature 0 with
              JSON-mode output. The claim: identical input produces comparable output
              across independent runs.
            </p>
          </div>

          {/* Method */}
          <div className="p-6 rounded-xl border border-gray-800 bg-gray-900/40">
            <p className="text-xs font-mono text-gray-500 tracking-widest uppercase mb-3">
              Method
            </p>
            <p className="text-gray-400 text-sm leading-relaxed">
              The same decision plan was submitted to EVALUATE_STRATEGY three times through
              the live proxy, with identical input context — same event description, same
              advisor report, same stat state. Each call was independent, with no caching
              and no session continuity. Results were recorded directly from the API response.
            </p>
          </div>

          {/* Results table */}
          <div>
            <p className="text-xs font-mono text-gray-500 tracking-widest uppercase mb-4">
              Results
            </p>
            <div className="overflow-x-auto rounded-xl border border-gray-800">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-800">
                    <th className="text-left py-3 px-4 text-gray-600 text-xs font-mono tracking-widest">
                      CRITERION
                    </th>
                    <th className="text-center py-3 px-4 text-gray-400 text-xs font-mono tracking-widest">
                      RUN 1
                    </th>
                    <th className="text-center py-3 px-4 text-gray-400 text-xs font-mono tracking-widest">
                      RUN 2
                    </th>
                    <th className="text-center py-3 px-4 text-gray-400 text-xs font-mono tracking-widest">
                      RUN 3
                    </th>
                    <th className="text-center py-3 px-4 text-gray-600 text-xs font-mono tracking-widest">
                      VARIANCE
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {P1_CRITERIA.map((row, i) => (
                    <tr
                      key={i}
                      className={`border-b border-gray-900 ${
                        row.variance > 0 ? "bg-amber-950/10" : ""
                      }`}
                    >
                      <td className="py-3 px-4 text-gray-300 font-medium">{row.label}</td>
                      <td className="py-3 px-4 text-center text-white font-mono font-bold">
                        {row.r1}
                      </td>
                      <td className="py-3 px-4 text-center text-white font-mono font-bold">
                        {row.r2}
                      </td>
                      <td className="py-3 px-4 text-center text-white font-mono font-bold">
                        {row.r3}
                      </td>
                      <td className="py-3 px-4 text-center">
                        <VarianceBadge val={row.variance} />
                      </td>
                    </tr>
                  ))}
                  <tr className="bg-gray-900/60 border-t-2 border-gray-700">
                    <td className="py-3 px-4 text-white font-bold font-mono text-xs tracking-widest uppercase">
                      Total
                    </td>
                    <td className="py-3 px-4 text-center text-white font-mono font-bold">
                      {P1_TOTALS.r1}/12
                    </td>
                    <td className="py-3 px-4 text-center text-white font-mono font-bold">
                      {P1_TOTALS.r2}/12
                    </td>
                    <td className="py-3 px-4 text-center text-white font-mono font-bold">
                      {P1_TOTALS.r3}/12
                    </td>
                    <td className="py-3 px-4 text-center">
                      <VarianceBadge val={1} />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Interpretation + Verdict */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-gray-800 bg-gray-900/40 space-y-3">
              <p className="text-xs font-mono text-gray-500 tracking-widest uppercase">
                Interpretation
              </p>
              <p className="text-gray-400 text-sm leading-relaxed">
                Five of six criteria returned identical scores across all three runs.
                The single criterion that showed variance — Temporal Symbiosis — is the
                one designed to measure how a decision connects to earlier choices and
                shapes future conditions. It is the most context-interpretive of the six.
                A 1-point variance here, on the criterion designed to be most sensitive
                to contextual framing, is within expected bounds.
              </p>
              <p className="text-gray-500 text-sm leading-relaxed">
                5 of 6 criteria: zero variance. Total range: ±1 over three independent
                runs.
              </p>
            </div>
            <div className="p-6 rounded-xl border border-[#C9A66B]/20 bg-[#C9A66B]/5 flex flex-col justify-between gap-6">
              <div>
                <p className="text-xs font-mono text-gray-500 tracking-widest uppercase mb-3">
                  Verdict
                </p>
                <p className="text-white text-sm leading-relaxed">
                  Identical input produces consistent output. The engine is deterministic
                  at the criterion level, with a 1-point variance ceiling on the most
                  contextually sensitive criterion.
                </p>
              </div>
              <VerifiedBadge />
            </div>
          </div>
        </motion.section>

        {/* ── Proof 02 — Context Sensitivity ──────────────────────────────── */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="pb-6 border-b border-gray-800">
            <p className="text-xs font-mono text-[#C9A66B] tracking-widest uppercase mb-3">
              Proof 02
            </p>
            <h2 className="font-satoshi text-3xl sm:text-4xl font-bold text-white mb-4">
              The evaluator reads context.
            </h2>
            <p className="text-gray-400 leading-relaxed max-w-2xl">
              EVALUATE_STRATEGY receives the full simulation state — not just the
              player&apos;s plan. The claim: identical decision text scores differently when
              the environmental context changes.
            </p>
          </div>

          {/* Method */}
          <div className="p-6 rounded-xl border border-gray-800 bg-gray-900/40">
            <p className="text-xs font-mono text-gray-500 tracking-widest uppercase mb-3">
              Method
            </p>
            <p className="text-gray-400 text-sm leading-relaxed">
              An identical decision plan was submitted twice — once with stable baseline
              stats (Set A: all variables at 6) and once in a stressed environment (Set B:
              sustenance at 1, all other variables at 6). Plan text and event description
              were identical. Only the stat context differed.
            </p>
          </div>

          {/* The two environments */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="p-5 rounded-xl border border-gray-800 bg-gray-900/40">
              <p className="text-xs font-mono text-gray-400 tracking-widest uppercase mb-4">
                Set A — Stable Environment
              </p>
              <div className="grid grid-cols-2 gap-2">
                {Object.entries(P2_ENV_A).map(([k, v]) => (
                  <div key={k} className="flex items-center justify-between font-mono text-xs py-1.5 px-3 bg-gray-800/60 rounded">
                    <span className="text-gray-500 capitalize">{k}</span>
                    <span className="text-white font-bold">{v}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-5 rounded-xl border border-red-500/20 bg-red-950/10">
              <p className="text-xs font-mono text-red-400 tracking-widest uppercase mb-4">
                Set B — Stressed Environment
              </p>
              <div className="grid grid-cols-2 gap-2">
                {Object.entries(P2_ENV_B).map(([k, v]) => (
                  <div
                    key={k}
                    className={`flex items-center justify-between font-mono text-xs py-1.5 px-3 rounded ${
                      v === 1
                        ? "bg-red-900/40 border border-red-500/30"
                        : "bg-gray-800/60"
                    }`}
                  >
                    <span className="text-gray-500 capitalize">{k}</span>
                    <span
                      className={`font-bold ${v === 1 ? "text-red-400" : "text-white"}`}
                    >
                      {v}
                      {v === 1 && (
                        <span className="ml-1 text-red-500 text-[10px]">
                          ← CRITICAL
                        </span>
                      )}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* What changed */}
          <div className="p-6 rounded-xl border border-amber-500/20 bg-amber-950/10">
            <p className="text-xs font-mono text-amber-400 tracking-widest uppercase mb-4">
              The only criterion that changed
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <div className="flex-1">
                <p className="text-white font-satoshi font-bold text-xl mb-2">
                  Variable Awareness
                </p>
                <p className="text-gray-400 text-sm leading-relaxed">
                  The criterion measuring whether the plan acknowledges the constraints
                  actually in play. In Set A, referencing the primary threat was sufficient.
                  In Set B, the depleted sustenance variable introduced a constraint the
                  plan did not address — and the evaluator detected this without being
                  specifically instructed to look for it.
                </p>
              </div>
              <div className="flex items-center gap-6 shrink-0">
                <div className="text-center">
                  <div className="text-xs font-mono text-gray-500 mb-1">SET A</div>
                  <div className="text-3xl font-mono font-bold text-white">
                    {P2_VA.setA}
                  </div>
                </div>
                <div className="text-gray-600 text-2xl">→</div>
                <div className="text-center">
                  <div className="text-xs font-mono text-red-400 mb-1">SET B</div>
                  <div className="text-3xl font-mono font-bold text-red-400">
                    {P2_VA.setB}
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-amber-500/10 text-gray-600 text-xs font-mono">
              All other five criteria returned identical scores in both environments.
              Total: Set A {P2_TOTALS.setA}/12 → Set B {P2_TOTALS.setB}/12.
            </div>
          </div>

          {/* Interpretation + Verdict */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-gray-800 bg-gray-900/40 space-y-3">
              <p className="text-xs font-mono text-gray-500 tracking-widest uppercase">
                Interpretation
              </p>
              <p className="text-gray-400 text-sm leading-relaxed">
                The evaluation does not score the plan in isolation. It scores the plan
                against the environment the plan must operate in. A plan that adequately
                acknowledges the problem when resources are healthy becomes inadequate
                when they are constrained — even if the plan text is word-for-word identical.
              </p>
              <p className="text-gray-400 text-sm leading-relaxed">
                This is not a fixed rubric applied blindly. It is contextual reasoning.
                The evaluator read the stat context, identified the gap between the plan
                and the actual constraints, and reflected that gap in the score.
              </p>
            </div>
            <div className="p-6 rounded-xl border border-[#C9A66B]/20 bg-[#C9A66B]/5 flex flex-col justify-between gap-6">
              <div>
                <p className="text-xs font-mono text-gray-500 tracking-widest uppercase mb-3">
                  Verdict
                </p>
                <p className="text-white text-sm leading-relaxed">
                  Same plan. Different context. Different score. The engine evaluates
                  reasoning against the actual situation — not an abstract standard.
                </p>
              </div>
              <VerifiedBadge />
            </div>
          </div>
        </motion.section>

        {/* ── Proof 03 — Path Divergence ───────────────────────────────────── */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="pb-6 border-b border-gray-800">
            <p className="text-xs font-mono text-purple-400 tracking-widest uppercase mb-3">
              Proof 03
            </p>
            <h2 className="font-satoshi text-3xl sm:text-4xl font-bold text-white mb-4">
              Every path is yours.
            </h2>
            <p className="text-gray-400 leading-relaxed max-w-2xl">
              Players who start from identical conditions consistently produce different
              outcomes through different reasoning. The claim: the decision space is not
              scripted. What happens next is the direct product of how you reasoned.
            </p>
          </div>

          {/* Method */}
          <div className="p-6 rounded-xl border border-gray-800 bg-gray-900/40">
            <p className="text-xs font-mono text-gray-500 tracking-widest uppercase mb-3">
              Method
            </p>
            <p className="text-gray-400 text-sm leading-relaxed">
              All beta players begin Chapter 1 with identical baseline stats — every
              variable at 6 out of 10 — and face the same opening event:{" "}
              <em>Stranger Arrives</em>. A lone figure appears at the colony perimeter.
              Thin. Coughing. No visible weapons. Every player receives the same briefing
              from the same guard. What happens next is entirely determined by what each
              player wrote. The data below is drawn directly from the live decision log.
            </p>
          </div>

          {/* Starting state */}
          <div className="p-5 rounded-xl border border-purple-500/20 bg-purple-950/10">
            <p className="text-xs font-mono text-purple-400 tracking-widest uppercase mb-3">
              Starting Conditions — Identical for All Players
            </p>
            <div className="flex flex-wrap gap-3">
              {["Health", "Cohesion", "Security", "Sustenance", "Infrastructure"].map(
                (stat) => (
                  <div
                    key={stat}
                    className="flex items-center gap-2 font-mono text-sm bg-purple-950/30 border border-purple-500/10 rounded px-3 py-1.5"
                  >
                    <span className="text-gray-500">{stat}</span>
                    <span className="text-white font-bold">6</span>
                  </div>
                )
              )}
            </div>
            <p className="text-gray-600 text-xs font-mono mt-3">
              Event: tutorial_stranger — same event, same briefing text, all runs
            </p>
          </div>

          {/* Results table */}
          <div>
            <p className="text-xs font-mono text-gray-500 tracking-widest uppercase mb-4">
              What happened
            </p>
            <div className="overflow-x-auto rounded-xl border border-gray-800">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-800">
                    <th className="text-left py-3 px-4 text-gray-600 text-xs font-mono tracking-widest">
                      APPROACH TAKEN
                    </th>
                    <th className="text-center py-3 px-4 text-gray-600 text-xs font-mono tracking-widest">
                      SCORE
                    </th>
                    <th className="text-center py-3 px-4 text-gray-600 text-xs font-mono tracking-widest">
                      BAND
                    </th>
                    <th className="text-left py-3 px-4 text-gray-600 text-xs font-mono tracking-widest hidden sm:table-cell">
                      KEY OUTCOME
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {P3_RUNS.map((run, i) => (
                    <motion.tr
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.06 }}
                      viewport={{ once: true }}
                      className="border-b border-gray-900 hover:bg-gray-900/40 transition-colors"
                    >
                      <td className="py-3 px-4 text-gray-300 font-medium">
                        {run.approach}
                      </td>
                      <td className="py-3 px-4 text-center font-mono font-bold text-white">
                        {run.score}/12
                      </td>
                      <td className="py-3 px-4 text-center">
                        <BandBadge band={run.band} />
                      </td>
                      <td className="py-3 px-4 text-gray-500 text-sm hidden sm:table-cell">
                        {run.keyImpact}
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Score range visual */}
          <div className="p-6 rounded-xl border border-gray-800 bg-gray-900/40">
            <p className="text-xs font-mono text-gray-500 tracking-widest uppercase mb-5">
              Score distribution — same event, same starting stats
            </p>
            <div className="flex items-end gap-2 h-20">
              {P3_RUNS.slice()
                .sort((a, b) => a.score - b.score)
                .map((run, i) => {
                  const heightPct = (run.score / 12) * 100;
                  const color =
                    run.band === "Strong"
                      ? "#22d3ee"
                      : run.band === "Adequate"
                      ? "#C9A66B"
                      : "#f87171";
                  return (
                    <div
                      key={i}
                      className="flex-1 flex flex-col items-center gap-1"
                    >
                      <div
                        className="w-full rounded-t opacity-70"
                        style={{ height: `${heightPct}%`, backgroundColor: color }}
                      />
                      <span className="text-xs font-mono text-gray-600">
                        {run.score}
                      </span>
                    </div>
                  );
                })}
            </div>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mt-4 text-xs font-mono text-gray-500">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-red-400 inline-block" />
                Poor (0–4)
              </span>
              <span className="flex items-center gap-1.5">
                <span
                  className="w-2 h-2 rounded-full inline-block"
                  style={{ backgroundColor: "#C9A66B" }}
                />
                Adequate (5–8)
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-cyan-400 inline-block" />
                Strong (9–12)
              </span>
            </div>
          </div>

          {/* ── Cascade section ── */}
          <div className="space-y-5">
            <p className="text-xs font-mono text-gray-500 tracking-widest uppercase">
              The cascade — different stats drive a different next event
            </p>
            <p className="text-gray-400 text-sm leading-relaxed max-w-2xl">
              Different scores produce different stat outcomes. But the consequence
              doesn&apos;t stop there. Before every new event is selected, the engine
              scans the full stat array, identifies the lowest-performing variable, and
              uses that reading to determine what kind of crisis arrives next.
            </p>

            {/* Selection rules */}
            <div className="p-5 rounded-xl border border-gray-800 bg-gray-900/40">
              <p className="text-xs font-mono text-gray-500 tracking-widest uppercase mb-4">
                Event selection — how the engine reads your stat state
              </p>
              <div className="space-y-3 font-mono text-xs">
                {[
                  {
                    band: "CRISIS",
                    threshold: "lowest stat ≤ 2",
                    result: "Major events targeting that stat's domain only",
                    color: "text-red-400",
                    bg: "bg-red-950/20 border-red-500/20",
                  },
                  {
                    band: "STRAIN",
                    threshold: "lowest stat ≤ 4",
                    result: "Any events targeting that stat's domain",
                    color: "text-amber-400",
                    bg: "bg-amber-950/20 border-amber-500/20",
                  },
                  {
                    band: "STABLE",
                    threshold: "lowest stat ≥ 5",
                    result: "Routine and Social events — recovery space",
                    color: "text-cyan-400",
                    bg: "bg-cyan-950/20 border-cyan-500/20",
                  },
                ].map((row) => (
                  <div
                    key={row.band}
                    className={`flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 px-4 py-3 rounded-lg border ${row.bg}`}
                  >
                    <span className={`font-bold w-16 shrink-0 ${row.color}`}>
                      {row.band}
                    </span>
                    <span className="text-gray-500 w-32 shrink-0">{row.threshold}</span>
                    <span className="text-gray-300">{row.result}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Two paths side by side — real data from Proof 3 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

              {/* Strong path */}
              <div className="p-5 rounded-xl border border-cyan-500/20 bg-cyan-950/10 space-y-4">
                <p className="text-xs font-mono text-cyan-400 tracking-widest uppercase">
                  Path A — Strong (9/12)
                </p>
                <div className="font-mono text-xs space-y-2">
                  <p className="text-gray-500">Stats after tutorial_stranger:</p>
                  <div className="grid grid-cols-2 gap-1.5">
                    {[
                      { stat: "Health", val: 6 }, { stat: "Cohesion", val: 5 },
                      { stat: "Security", val: 7 }, { stat: "Sustenance", val: 5 },
                    ].map(({ stat, val }) => (
                      <div
                        key={stat}
                        className="flex justify-between px-2 py-1 bg-gray-800/60 rounded"
                      >
                        <span className="text-gray-500">{stat}</span>
                        <span className="text-white font-bold">{val}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="pt-3 border-t border-cyan-500/10 space-y-1.5">
                  <p className="text-xs text-gray-500 font-mono">Engine scan:</p>
                  <p className="text-cyan-400 text-xs font-mono font-bold">
                    STABLE — lowest = 5
                  </p>
                  <p className="text-gray-400 text-xs mt-2 leading-relaxed">
                    Next event: Routine or Social (any domain).
                    The world responds to your stability with recovery space.
                  </p>
                </div>
              </div>

              {/* Poor path */}
              <div className="p-5 rounded-xl border border-red-500/20 bg-red-950/10 space-y-4">
                <p className="text-xs font-mono text-red-400 tracking-widest uppercase">
                  Path B — Poor (4/12, decapitation contingency)
                </p>
                <div className="font-mono text-xs space-y-2">
                  <p className="text-gray-500">Stats after tutorial_stranger:</p>
                  <div className="grid grid-cols-2 gap-1.5">
                    {[
                      { stat: "Health", val: 5, crisis: false },
                      { stat: "Cohesion", val: 3, crisis: true },
                      { stat: "Security", val: 5, crisis: false },
                      { stat: "Sustenance", val: 5, crisis: false },
                    ].map(({ stat, val, crisis }) => (
                      <div
                        key={stat}
                        className={`flex justify-between px-2 py-1 rounded ${
                          crisis
                            ? "bg-red-900/40 border border-red-500/30"
                            : "bg-gray-800/60"
                        }`}
                      >
                        <span className="text-gray-500">{stat}</span>
                        <span
                          className={`font-bold ${crisis ? "text-red-400" : "text-white"}`}
                        >
                          {val}
                          {crisis && <span className="ml-1 text-[10px] text-red-500">←</span>}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="pt-3 border-t border-red-500/10 space-y-1.5">
                  <p className="text-xs text-gray-500 font-mono">Engine scan:</p>
                  <p className="text-red-400 text-xs font-mono font-bold">
                    STRAIN — lowest = 3 (cohesion)
                  </p>
                  <p className="text-gray-400 text-xs mt-2 leading-relaxed">
                    Next event: Cohesion-domain crisis — targeting the stat already
                    at 3. If cohesion falls to 2, the band shifts to CRISIS: only
                    Major cohesion events from that point on.
                  </p>
                </div>
              </div>
            </div>

            {/* Compounding mechanism */}
            <div className="p-6 rounded-xl border border-gray-700 bg-gray-900/60">
              <p className="text-gray-300 leading-relaxed text-sm">
                Poor reasoning doesn&apos;t just produce a lower score. It produces a
                weakened stat that the engine detects — and responds to by sending
                a harder event targeting that exact domain. Strong reasoning creates
                stability that the engine reads as recovery space — and responds to
                with routine events that allow the player to consolidate.
              </p>
              <p className="text-gray-400 leading-relaxed text-sm mt-3">
                The spiral in both directions is structural. It is built into the
                event-selection rules, not authored into fixed story branches. Two
                players facing the same opening event will face entirely different
                second events — not because the narrative branched, but because
                their reasoning produced different environments, and the engine
                responds to the environment it finds.
              </p>
            </div>
          </div>

          {/* Interpretation + Verdict */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-gray-800 bg-gray-900/40 space-y-3">
              <p className="text-xs font-mono text-gray-500 tracking-widest uppercase">
                Interpretation
              </p>
              <p className="text-gray-400 text-sm leading-relaxed">
                Six runs of the same opening event, from identical starting conditions,
                produced scores ranging from 1 to 9 — covering all three quality bands.
                The divergence is not in the event. It is in the reasoning.
              </p>
              <p className="text-gray-400 text-sm leading-relaxed">
                But the divergence compounds. Different scores produce different
                stat states. Different stat states trigger different event-selection
                rules. Different events require different decisions. What begins as
                a difference in reasoning quality at one moment becomes a completely
                different experience across the full run.
              </p>
              <p className="text-gray-500 text-sm">
                None of these were curated. All were drawn from the live decision log.
              </p>
            </div>
            <div className="p-6 rounded-xl border border-[#C9A66B]/20 bg-[#C9A66B]/5 flex flex-col justify-between gap-6">
              <div>
                <p className="text-xs font-mono text-gray-500 tracking-widest uppercase mb-3">
                  Verdict
                </p>
                <p className="text-white text-sm leading-relaxed">
                  Identical starting conditions. Six different paths. Score range 1–9.
                  Different stat outcomes drive different event selection — so the
                  path diverges not just in score, but in every crisis that follows.
                  The decision space is not scripted.
                </p>
              </div>
              <VerifiedBadge />
            </div>
          </div>
        </motion.section>

        {/* ── What the proofs mean together ────────────────────────────────── */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="pt-4 border-t border-gray-800 space-y-6"
        >
          <p className="text-xs font-mono text-gray-600 tracking-widest uppercase">
            What these proofs mean together
          </p>
          <div className="max-w-2xl space-y-5">
            <p className="text-gray-400 leading-relaxed">
              The three proofs are not independent claims. They describe the same
              evaluation architecture from three different angles.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Consistency without context-sensitivity would be a rigid rubric — fair but
              blind. Context-sensitivity without consistency would be noise — responsive but
              unreliable. Path uniqueness without both would be decoration — different
              stories reaching predetermined conclusions.
            </p>
            <p className="text-gray-200 leading-relaxed font-medium text-lg">
              What the three proofs together describe is an evaluation system that
              responds accurately and reliably to what you actually reasoned, in the
              conditions you actually faced.
            </p>
            <p className="text-gray-400 leading-relaxed">
              That is a different claim from &ldquo;AI-powered assessment.&rdquo; It is
              a claim about what the evaluation is actually doing — and this page is the
              evidence for it.
            </p>
          </div>
        </motion.section>

        {/* ── Calibration note ─────────────────────────────────────────────── */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 rounded-2xl border border-gray-800 bg-gray-900/30"
        >
          <p className="text-xs font-mono text-gray-500 tracking-widest uppercase mb-5">
            From the evaluation prompt — the calibration standard embedded in every call
          </p>
          <blockquote className="pl-6 border-l-2 border-[#C9A66B]/40 space-y-0">
            <p className="text-gray-300 italic leading-relaxed text-base">
              &ldquo;A score of 2 on any criterion is reserved for plans that satisfy the
              full requirement without any significant omission. A plan that is good but
              leaves one meaningful gap scores 1, not 2. A perfect total of 12/12 should
              be genuinely rare — it requires 2/2 on every criterion with no gaps
              anywhere. When in doubt between 1 and 2, score 1.&rdquo;
            </p>
          </blockquote>
          <p className="text-gray-600 text-sm mt-5">
            This standard is embedded directly in the EVALUATE_STRATEGY prompt. It is not
            a post-hoc interpretation. Every evaluation runs against it. The evaluator is
            designed to be rigorous rather than generous — and the data above was produced
            under that standard.
          </p>
        </motion.section>

        {/* ── CTA ──────────────────────────────────────────────────────────── */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8 border-t border-gray-800 pt-12"
        >
          <div>
            <p className="text-xs font-mono text-[#C9A66B] tracking-widest uppercase mb-3">
              Beta Access
            </p>
            <p className="text-gray-400 leading-relaxed max-w-lg">
              The Mandate is in closed beta. If the evidence above is sufficient —
              and the question of how you reason under pressure is one you are ready to
              answer — register below.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <Link
              href="/engine"
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-gray-700 hover:border-gray-500 text-gray-400 hover:text-white rounded-lg transition-all text-sm font-medium"
            >
              How the engine works
            </Link>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#C9A66B] hover:bg-[#D4AF77] text-black font-bold rounded-lg transition-colors text-sm tracking-wide font-satoshi"
            >
              Apply for Access
            </Link>
          </div>
        </motion.section>

      </main>
    </div>
  );
}
