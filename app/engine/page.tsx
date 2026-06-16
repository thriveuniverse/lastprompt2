"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Cpu, Layers, ArrowRight, ExternalLink } from "lucide-react";
import Link from "next/link";
import { LeadForm } from "@/components/lead-form";

const LOOP_STEPS = [
  {
    number: "01",
    label: "CRISIS EMERGES",
    description: "A dynamic event surfaces — shaped by your previous decisions and the current state of your world. No two crises are identical.",
    color: "text-[#C9A66B]",
    border: "border-[#C9A66B]/30",
    bg: "bg-[#C9A66B]/5",
  },
  {
    number: "02",
    label: "CONSULT ADVISORS",
    description: "Query your team — but they're human. Each advisor sees the world through their own bias, fear, and expertise. Their advice is incomplete by design — not as a trick, but because that is what genuine domain knowledge looks like.",
    color: "text-cyan-400",
    border: "border-cyan-400/30",
    bg: "bg-cyan-400/5",
  },
  {
    number: "03",
    label: "WRITE YOUR PLAN",
    description: "No menus. No options. You write a free-form strategy in plain English: your goal, your actions, your contingencies, your communication. Your reasoning is the move.",
    color: "text-[#BAA5E8]",
    border: "border-[#BAA5E8]/30",
    bg: "bg-[#BAA5E8]/5",
  },
  {
    number: "04",
    label: "AI EVALUATES",
    description: "A neutral AI evaluator scores your reasoning quality — not your choices — across six criteria. It runs at temperature 0. It cannot be gamed. It has no pity. It rewards structured thinking.",
    color: "text-[#3498DB]",
    border: "border-[#3498DB]/30",
    bg: "bg-[#3498DB]/5",
  },
  {
    number: "05",
    label: "CONSEQUENCES RESOLVE",
    description: "The simulation applies outcomes based on how well you reasoned — not what you chose. Poor thinking compounds. Strong thinking builds resilience. The world you face next is the world your reasoning built.",
    color: "text-[#D0633A]",
    border: "border-[#D0633A]/30",
    bg: "bg-[#D0633A]/5",
  },
];

const RUBRIC = [
  { label: "Variable Awareness", desc: "Does the plan acknowledge the key constraints and trade-offs in play?" },
  { label: "Resource Allocation", desc: "Are people, time, and resources specifically assigned — not just mentioned?" },
  { label: "Risk Anticipation", desc: "Are second-order effects and contingencies explicitly addressed?" },
  { label: "Communication Clarity", desc: "Is there a clear strategy for informing those affected by the decision?" },
  { label: "Multi-Step Planning", desc: "Is there a logical sequence with fallback positions if the primary plan fails?" },
  { label: "Temporal Symbiosis", desc: "Does the plan consider how this decision connects to earlier choices, or shapes the conditions for future ones?" },
];

const ARCHITECTURE = [
  {
    key: "Stat Handler",
    desc: "Manages a dynamic list of variables with min/max clamping and threshold logic. Never hardcodes variable names — reads them from the active skin.",
  },
  {
    key: "Evaluation Orchestrator",
    desc: "Manages the interface with the AI backend and the 0–10 rubric scoring system. Runs at temperature 0 to ensure deterministic, consistent evaluation.",
  },
  {
    key: "Rule Engine",
    desc: "A deterministic loop that filters crisis events based on stat thresholds and flags set by previous decisions. Your history shapes what comes next.",
  },
  {
    key: "Decision Loop",
    desc: "Input → AI Analysis → Outcome Resolution → Next Crisis Selection. The same loop runs in every skin, every cycle.",
  },
  {
    key: "Memory & Flags",
    desc: "Decisions set hidden flags that persist across cycles. A strong decision in Week 1 can unlock opportunities in Week 3. A poor one can trigger cascading crises.",
  },
];

const SKIN_MAPPING = [
  { engine: "Stat_01", colony: "Sustenance", corporate: "Cash Flow" },
  { engine: "Stat_02", colony: "Health", corporate: "Employee Well-Being" },
  { engine: "Stat_03", colony: "Security", corporate: "Regulatory Compliance" },
  { engine: "Stat_04", colony: "Cohesion", corporate: "Team Engagement" },
  { engine: "Stat_05", colony: "Infrastructure", corporate: "Operational Infrastructure" },
  { engine: "Time_Unit", colony: "Week", corporate: "Quarter" },
  { engine: "Entity_Name", colony: "The Colony", corporate: "The Enterprise" },
];

const GUARDRAILS = [
  {
    title: "Temperature: 0.0",
    desc: "The evaluator runs at zero temperature. No creative drift. The same plan gets the same score every time.",
    color: "text-red-400",
    border: "border-red-500/20",
  },
  {
    title: "No Pity Points",
    desc: "The AI must not assume positive outcomes unless the player explicitly describes the mechanism. Vague plans are penalised.",
    color: "text-[#C9A66B]",
    border: "border-[#C9A66B]/20",
  },
  {
    title: "Harsh Interpretation",
    desc: "Plans under 20 words, or lacking contingencies, are immediately penalised. The evaluator is not a cheerleader.",
    color: "text-[#D0633A]",
    border: "border-[#D0633A]/20",
  },
  {
    title: "Reasoning Required",
    desc: "Every rubric score must include a reasoning string. The evaluator is accountable for every point it awards or withholds.",
    color: "text-[#BAA5E8]",
    border: "border-[#BAA5E8]/20",
  },
  {
    title: "Metric Masking",
    desc: "Advisors never reference numeric outcomes. They think in human consequences: 'Morale will shatter' — not '+2 Cohesion'.",
    color: "text-cyan-400",
    border: "border-cyan-500/20",
  },
  {
    title: "Domain Containment",
    desc: "Specialists only see the world through their role. A Security advisor cannot comment on social cohesion. Advice is humanly incomplete by design.",
    color: "text-[#3498DB]",
    border: "border-[#3498DB]/20",
  },
];

const COMPLEXITY_LEVELS = [
  {
    vars: "2–3 Variables",
    label: "Ethical Compression",
    desc: "Binary trade-offs, moral tension. Fewer variables amplify the emotional weight of each decision.",
    example: "e.g., Security vs. Compassion",
    color: "text-[#C9A66B]",
    border: "border-[#C9A66B]/30",
    bg: "bg-[#C9A66B]/5",
  },
  {
    vars: "4–6 Variables",
    label: "Systems Leadership",
    desc: "Interdependency and prioritisation. Decisions ripple across multiple systems simultaneously.",
    example: "e.g., Colony, Corporate Reckoning",
    color: "text-cyan-400",
    border: "border-cyan-500/30",
    bg: "bg-cyan-950/10",
  },
  {
    vars: "7+ Variables",
    label: "Executive Strategy",
    desc: "High-complexity environments requiring abstraction, delegation, and long-horizon thinking.",
    example: "e.g., National Crisis, Diplomatic Simulation",
    color: "text-[#BAA5E8]",
    border: "border-[#BAA5E8]/30",
    bg: "bg-[#BAA5E8]/5",
  },
];

export default function EnginePage() {
  return (
    <div className="pt-16 overflow-x-hidden bg-[#0A0A0A]">

      {/* ── HERO ── */}
      <section className="relative min-h-[65vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-[#0A0A0A]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_30%_50%,rgba(201,166,107,0.06),transparent)]" />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(201,166,107,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(201,166,107,0.3) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 border border-cyan-400/20 bg-cyan-400/5 rounded-full text-xs font-mono text-cyan-400 mb-8 tracking-widest">
              <Cpu className="w-3 h-3" />
              THE LAST PROMPT ENGINE — TECHNICAL OVERVIEW
            </div>
            <h1 className="font-satoshi text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
              The Engine
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed mb-4">
              The Last Prompt Engine is the proprietary technology behind{" "}
              <span className="text-[#C9A66B] font-medium">The Mandate</span>. It is a decision-intelligence evaluation system that can be wrapped in any thematic skin — survival, corporate, diplomatic, scientific. The same evaluation logic runs in every world.
            </p>
            <p className="text-gray-500 leading-relaxed">
              The engine evaluates the quality of human reasoning under uncertainty. It is content-agnostic, skin-agnostic, and domain-agnostic. The only constant is the rubric.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── ABOUT THE NAME ── */}
      <section className="py-16 bg-gray-950 border-b border-gray-900">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <span className="text-xs font-mono text-gray-600 tracking-widest uppercase">About the name</span>
            <blockquote className="mt-5 pl-5 border-l-2 border-[#C9A66B]/30 space-y-4 text-gray-400 leading-relaxed">
              <p>
                A prompt, in its oldest sense, is a nudge — a cue that moves thinking in a new direction without dictating where it lands. In The Mandate, your advisors prompt you. Your questions prompt them. The crisis itself prompts the situation.
              </p>
              <p>
                But the last prompt — the only input that actually moves the simulation — is yours. The plan you write, in your own words, which a neutral AI then receives and evaluates. We named the engine for that moment: the last word before consequences unfold.
              </p>
              <p className="text-gray-600 text-sm italic">
                This has no connection to AI prompt engineering, LLM tooling, or anything related to writing prompts for AI systems. The word means what it meant before large language models existed.
              </p>
            </blockquote>
          </motion.div>
        </div>
      </section>

      {/* ── ENGINE THESIS ── */}
      <section className="py-24 bg-gray-950">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase">Engine Thesis</span>
              <h2 className="font-satoshi text-4xl font-bold text-white mt-4 mb-6">
                The scarce skill is no longer information recall.
              </h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                AI-mediated systems are increasing the complexity of human decision-making at every level. The bottleneck is not access to information — it is the ability to reason structurally under uncertainty.
              </p>
              <p className="text-gray-400 leading-relaxed mb-4">
                The Last Prompt Engine is built on a single thesis:{" "}
                <span className="text-white">better reasoning produces better outcomes</span>. The engine proves this by making the quality of your written plan the direct cause of what happens next in the simulation.
              </p>
              <p className="text-gray-400 leading-relaxed">
                The AI does not drive, decide, or progress the simulation. It only evaluates how well the player thought through the problem.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gray-900/60 border border-gray-800 rounded-2xl p-6 font-mono text-sm"
            >
              <div className="text-xs text-gray-600 mb-4 tracking-wider">ENGINE_CORE — EVALUATION_FLOW.pseudo</div>
              <div className="space-y-2 text-gray-400">
                <div><span className="text-cyan-400">function</span> <span className="text-white">evaluatePlan</span>(plan, state) {"{"}</div>
                <div className="pl-4 text-gray-600 text-xs">// Score against 5-criterion rubric</div>
                <div className="pl-4">scores = <span className="text-cyan-400">rubric</span>.evaluate(plan, state);</div>
                <div className="pl-4">band = <span className="text-cyan-400">getQualityBand</span>(scores.total);</div>
                <div className="pl-4 mt-2 text-gray-600 text-xs">// Apply interdependency multipliers</div>
                <div className="pl-4">deltas = <span className="text-cyan-400">calculateDeltas</span>(band, state);</div>
                <div className="pl-4 mt-2 text-gray-600 text-xs">// Set flags for future crises</div>
                <div className="pl-4"><span className="text-cyan-400">flags</span>.update(scores, plan);</div>
                <div className="pl-4 mt-2"><span className="text-[#C9A66B]">return</span> {"{ scores, band, deltas, narrative }"};</div>
                <div>{"}"}</div>
                <div className="mt-4 pt-4 border-t border-gray-800 text-gray-600 text-xs space-y-1">
                  <div>// The engine never hardcodes variable names.</div>
                  <div>// All labels are pulled from the active skin config.</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── THE DECISION LOOP ── */}
      <section className="py-24 bg-[#0A0A0A] border-y border-gray-900">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase">The Decision Loop</span>
            <h2 className="font-satoshi text-4xl sm:text-5xl font-bold text-white mt-4 mb-4">Five steps. Every cycle.</h2>
            <p className="text-gray-400 max-w-xl mx-auto">The same loop runs in every skin. The context changes. The engine does not.</p>
          </motion.div>

          <div className="space-y-4">
            {LOOP_STEPS.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.08 }}
                viewport={{ once: true }}
                className={`flex gap-6 p-6 rounded-xl border ${step.border} ${step.bg}`}
              >
                <div className={`shrink-0 text-2xl font-mono font-bold ${step.color} opacity-40 leading-none mt-0.5`}>
                  {step.number}
                </div>
                <div>
                  <div className={`text-xs font-mono font-bold ${step.color} tracking-widest mb-2`}>{step.label}</div>
                  <p className="text-gray-300 leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CHRONOSYMBIOSIS ── */}
      <section className="py-20 bg-gray-950 border-b border-gray-900">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase">Design Principle</span>
              <h2 className="font-satoshi text-3xl font-bold text-white mt-4 mb-5">Chronosymbiosis</h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                Most simulations resolve one decision at a time. The Last Prompt Engine does not. The engine is built around a single design principle: your decisions don&apos;t vanish after one moment — they resonate forward across time.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Today&apos;s trade-offs quietly strengthen or weaken tomorrow&apos;s options. Good reasoning compounds into resilience. Flawed reasoning compounds into fragility. The flags, stat deltas, and conditional events aren&apos;t mechanical features — they are the engine implementing Chronosymbiosis at a structural level.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
            >
              <span className="text-xs font-mono text-[#C9A66B] tracking-widest uppercase">What changes over 30 cycles</span>
              <div className="mt-5 rounded-xl overflow-hidden border border-gray-800">
                <Image
                  src="/images/user-development.jpg"
                  alt="User development over 30 cycles — from separate advisor perspectives to synthesised judgment"
                  width={600}
                  height={320}
                  className="w-full"
                />
              </div>
              <div className="mt-5 space-y-3 text-sm text-gray-500 leading-relaxed">
                <p>
                  Each scenario runs across <span className="text-gray-300">5 cycles per chapter, 6 chapters</span> — 30 decisions in total. Early sessions the advisors feel separate, each pulling in a different direction.
                </p>
                <p>
                  As the cycles compound, something shifts. You begin to see the shape beneath the noise — the synthesis that survives when personal bias and urgency are stripped away. That is not something the system teaches. It is what rigorous repetition reveals.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── THE RUBRIC ── */}
      <section className="py-24 bg-[#0A0A0A]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-xs font-mono text-[#C9A66B] tracking-widest uppercase">The Evaluation Rubric</span>
              <h2 className="font-satoshi text-4xl font-bold text-white mt-4 mb-6">
                Six criteria. Zero mercy.
              </h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                The AI evaluator scores your plan against six criteria, each rated 0–2. The total score (0–12) determines your quality band — and the quality band determines what happens next in the simulation.
              </p>
              <p className="text-gray-400 leading-relaxed mb-8">
                A Poor score compounds. A Strong score builds resilience. The simulation does not care about your intentions — only the quality of your reasoning.
              </p>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { band: "POOR", range: "0–4", color: "text-red-400", border: "border-red-500/30", bg: "bg-red-950/20" },
                  { band: "ADEQUATE", range: "5–8", color: "text-[#C9A66B]", border: "border-[#C9A66B]/30", bg: "bg-[#C9A66B]/5" },
                  { band: "STRONG", range: "9–12", color: "text-cyan-400", border: "border-cyan-500/30", bg: "bg-cyan-950/20" },
                ].map((b) => (
                  <div key={b.band} className={`p-4 rounded-lg border ${b.border} ${b.bg} text-center`}>
                    <div className={`text-xs font-mono font-bold ${b.color} mb-1`}>{b.band}</div>
                    <div className="text-white font-bold text-lg">{b.range}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-3"
            >
              {RUBRIC.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4 p-4 bg-gray-900/60 border border-gray-800 rounded-xl"
                >
                  <div className="shrink-0 w-8 h-8 rounded-md bg-gray-800 border border-gray-700 flex items-center justify-center">
                    <span className="text-xs font-mono text-gray-400">0–2</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm mb-0.5">{item.label}</div>
                    <div className="text-gray-500 text-sm">{item.desc}</div>
                  </div>
                </motion.div>
              ))}
              <div className="p-4 bg-[#C9A66B]/5 border border-[#C9A66B]/20 rounded-xl">
                <div className="text-xs font-mono text-[#C9A66B] mb-1">TOTAL SCORE</div>
                <div className="text-white font-bold">Sum of all six criteria — 0 to 12</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── AI GUARDRAILS ── */}
      <section className="py-24 bg-gray-950 border-y border-gray-900">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-xs font-mono text-red-400 tracking-widest uppercase">AI Guardrails</span>
            <h2 className="font-satoshi text-4xl font-bold text-white mt-4 mb-4">The evaluator cannot be gamed.</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Substantial guardrails prevent players from gaming the system, asking for full marks, or exploiting the AI&apos;s tendency to be agreeable.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {GUARDRAILS.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
                viewport={{ once: true }}
                className={`p-5 rounded-xl border ${item.border} bg-gray-900/40`}
              >
                <div className={`text-xs font-mono font-bold ${item.color} mb-2 tracking-wide`}>{item.title}</div>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COGNITIVE COMPLEXITY SCALING ── */}
      <section className="py-24 bg-[#0A0A0A]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase">Cognitive Complexity Scaling</span>
            <h2 className="font-satoshi text-4xl font-bold text-white mt-4 mb-4">Variable count is not cosmetic.</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              The number of active variables in a skin directly determines the cognitive complexity of the simulation. The engine supports any number.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {COMPLEXITY_LEVELS.map((level, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className={`p-7 rounded-2xl border ${level.border} ${level.bg}`}
              >
                <div className={`text-xs font-mono ${level.color} tracking-widest mb-3`}>{level.vars}</div>
                <h3 className="font-satoshi text-white font-bold text-xl mb-3">{level.label}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{level.desc}</p>
                <div className={`text-xs font-mono ${level.color} opacity-60`}>{level.example}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ENGINE vs SKIN ARCHITECTURE ── */}
      <section className="py-24 bg-gray-950 border-t border-gray-900">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase">Architecture</span>
            <h2 className="font-satoshi text-4xl font-bold text-white mt-4 mb-4">Engine vs. Skin</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              The engine is the unseen hand. The skin is the sensory experience. They are completely decoupled.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-7 rounded-2xl border border-cyan-500/20 bg-cyan-950/10"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                  <Cpu className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <div className="text-xs font-mono text-cyan-400 tracking-widest">LAYER 01</div>
                  <div className="font-satoshi text-white font-bold">The Engine (System Logic)</div>
                </div>
              </div>
              <p className="text-gray-400 text-sm mb-5">Content-agnostic. Never uses the words "Food", "Health", or "Colony". Pulls all labels from the active skin config.</p>
              <div className="space-y-3">
                {ARCHITECTURE.map((item, i) => (
                  <div key={i} className="flex gap-3">
                    <div className="shrink-0 w-1 bg-cyan-500/30 rounded-full" />
                    <div>
                      <div className="text-white text-sm font-semibold">{item.key}</div>
                      <div className="text-gray-500 text-xs leading-relaxed">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-7 rounded-2xl border border-[#BAA5E8]/20 bg-[#BAA5E8]/5"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-[#BAA5E8]/10 flex items-center justify-center">
                  <Layers className="w-5 h-5 text-[#BAA5E8]" />
                </div>
                <div>
                  <div className="text-xs font-mono text-[#BAA5E8] tracking-widest">LAYER 02</div>
                  <div className="font-satoshi text-white font-bold">The Skin (Thematic Content)</div>
                </div>
              </div>
              <p className="text-gray-400 text-sm mb-5">The sensory experience and context. Defined entirely in JSON — swappable without touching engine code.</p>
              <div className="space-y-3">
                {[
                  { key: "Thematic Vocabulary", desc: "Defines whether the simulation is Colony Survival, Corporate Strategy, or Diplomatic Crisis." },
                  { key: "Data Collections", desc: "The specific events.json, deltas.json, and narratives.json that populate the world." },
                  { key: "Character Profiles", desc: "Each advisor has an archetype, core fear, hidden doubt, generational lens, and decision bias weights." },
                  { key: "Visual Styles", desc: "CSS variables (colours, fonts, layout) that represent the world's atmosphere." },
                  { key: "Stat Mapping", desc: "Maps generic engine keys (Stat_01, Stat_02) to human-readable labels for the skin's context." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-3">
                    <div className="shrink-0 w-1 bg-[#BAA5E8]/30 rounded-full" />
                    <div>
                      <div className="text-white text-sm font-semibold">{item.key}</div>
                      <div className="text-gray-500 text-xs leading-relaxed">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="font-satoshi text-white font-bold text-xl mb-4 text-center">Data-Driven Variable Mapping</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm font-mono">
                <thead>
                  <tr className="border-b border-gray-800">
                    <th className="text-left py-3 px-4 text-gray-600 text-xs tracking-widest">ENGINE KEY</th>
                    <th className="text-left py-3 px-4 text-[#D0633A] text-xs tracking-widest">COLONY SKIN</th>
                    <th className="text-left py-3 px-4 text-[#3498DB] text-xs tracking-widest">CORPORATE SKIN</th>
                  </tr>
                </thead>
                <tbody>
                  {SKIN_MAPPING.map((row, i) => (
                    <tr key={i} className="border-b border-gray-900 hover:bg-gray-900/40 transition-colors">
                      <td className="py-3 px-4 text-gray-500">{row.engine}</td>
                      <td className="py-3 px-4 text-[#D0633A]/80">{row.colony}</td>
                      <td className="py-3 px-4 text-[#3498DB]/80">{row.corporate}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── BUILD A SKIN ── */}
      <section className="py-24 bg-[#0A0A0A] border-t border-gray-900">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-xs font-mono text-[#BAA5E8] tracking-widest uppercase">Collaborators</span>
              <h2 className="font-satoshi text-4xl font-bold text-white mt-4 mb-6">
                Have a domain? Build a skin.
              </h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                The engine is modular. If you work in medicine, diplomacy, urban planning, education, or any field where structured reasoning under uncertainty matters — the Last Prompt Engine can be adapted to your context.
              </p>
              <p className="text-gray-400 leading-relaxed mb-8">
                We are looking for collaborators who are frustrated by polarised thinking and inspired by the idea of lateral reasoning as a trainable skill.
              </p>
              <div className="space-y-3">
                {[
                  "Define your variables (2–10+)",
                  "Write your crisis events and character profiles",
                  "The engine handles evaluation, scoring, and consequence resolution",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-gray-300 text-sm">
                    <div className="w-5 h-5 rounded-full bg-[#BAA5E8]/10 border border-[#BAA5E8]/30 flex items-center justify-center shrink-0">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#BAA5E8]" />
                    </div>
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <LeadForm interest="both" accentColor="cyan" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── RESEARCH PAPER ── */}
      <section className="py-16 bg-[#0A0A0A] border-t border-gray-900">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
          >
            <div className="max-w-xl">
              <span className="text-xs font-mono text-gray-600 tracking-widest uppercase">Academic</span>
              <h3 className="font-satoshi text-white font-bold text-xl mt-2 mb-1">Formal architecture paper</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                &ldquo;Last Prompt: Operationalising Partial Perspectives in Decision Intelligence Training&rdquo; — Miranda Kelly and Jonathan Kelly. Working paper, May 2026.
              </p>
            </div>
            <a
              href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6706518"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-gray-700 hover:border-gray-500 text-gray-400 hover:text-white rounded-lg transition-all text-sm font-medium shrink-0"
            >
              Read on SSRN <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── EXPLORE SKINS ── */}
      <section className="py-16 bg-gray-950 border-t border-gray-900">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-satoshi text-white font-bold text-2xl mb-1">See the engine in action.</h3>
              <p className="text-gray-500">All three skins are in testing. Submit on any skin page to participate as a Decision Analysis Participant.</p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/lockwood"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#BAA5E8]/5 hover:bg-[#BAA5E8]/10 border border-[#BAA5E8]/30 text-[#BAA5E8] rounded-lg transition-all text-sm font-medium"
              >
                Lockwood <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/colony"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#D0633A]/5 hover:bg-[#D0633A]/10 border border-[#D0633A]/30 text-[#D0633A] rounded-lg transition-all text-sm font-medium"
              >
                Colony <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/corporate-crisis"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#3498DB]/5 hover:bg-[#3498DB]/10 border border-[#3498DB]/30 text-[#3498DB] rounded-lg transition-all text-sm font-medium"
              >
                Corporate <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
