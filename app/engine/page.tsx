"use client";

import { motion } from "framer-motion";
import { Cpu, Layers, Lock, Brain, Zap, ArrowRight, Globe } from "lucide-react";
import Link from "next/link";
import { LeadForm } from "@/components/lead-form";

const ARCHITECTURE = [
    {
        key: "Stat Handler",
        desc: "Manages a dynamic list of variables (Stats) with min/max clamping and threshold logic. The engine never hardcodes variable names — it reads them from the active skin.",
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
        color: "text-amber-400",
        border: "border-amber-500/20",
    },
    {
        title: "Harsh Interpretation",
        desc: "Plans under 20 words, or lacking contingencies, are immediately penalised. The evaluator is not a cheerleader.",
        color: "text-orange-400",
        border: "border-orange-500/20",
    },
    {
        title: "Reasoning Required",
        desc: "Every rubric score must include a reasoning string. The evaluator is accountable for every point it awards or withholds.",
        color: "text-violet-400",
        border: "border-violet-500/20",
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
        color: "text-green-400",
        border: "border-green-500/20",
    },
];

const COMPLEXITY_LEVELS = [
    {
        vars: "2–3 Variables",
        label: "Ethical Compression",
        desc: "Binary trade-offs, moral tension. Fewer variables amplify the emotional weight of each decision.",
        example: "e.g., Security vs. Compassion",
        color: "text-amber-400",
        border: "border-amber-500/30",
        bg: "bg-amber-950/10",
    },
    {
        vars: "4–6 Variables",
        label: "Systems Leadership",
        desc: "Interdependency and prioritisation. Decisions ripple across multiple systems simultaneously.",
        example: "e.g., Colony Survival, Corporate Crisis",
        color: "text-cyan-400",
        border: "border-cyan-500/30",
        bg: "bg-cyan-950/10",
    },
    {
        vars: "7+ Variables",
        label: "Executive Strategy",
        desc: "High-complexity environments requiring abstraction, delegation, and long-horizon thinking.",
        example: "e.g., National Crisis, Diplomatic Simulation",
        color: "text-violet-400",
        border: "border-violet-500/30",
        bg: "bg-violet-950/10",
    },
];

export default function EnginePage() {
    return (
        <div className="pt-16 overflow-x-hidden">
            {/* ── HERO ── */}
            <section className="relative min-h-[70vh] flex items-center overflow-hidden">
                <div className="absolute inset-0 bg-[#050810]" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_30%_50%,rgba(6,182,212,0.07),transparent)]" />
                <div
                    className="absolute inset-0 opacity-[0.03] pointer-events-none"
                    style={{
                        backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.5) 2px, rgba(255,255,255,0.5) 3px)",
                        backgroundSize: "100% 3px",
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
                            LAST PROMPT ENGINE — TECHNICAL OVERVIEW
                        </div>
                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6 leading-[0.9] tracking-tight">
                            The Engine
                        </h1>
                        <p className="text-xl text-gray-400 leading-relaxed mb-6">
                            Last Prompt is not just a game. It is a <span className="text-white font-medium">decision-intelligence evaluation engine</span> that can be wrapped in any thematic skin — survival, corporate, diplomatic, scientific.
                        </p>
                        <p className="text-gray-500 leading-relaxed">
                            The engine evaluates the quality of human reasoning under uncertainty. It is content-agnostic, skin-agnostic, and domain-agnostic. The only constant is the rubric.
                        </p>
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
                            <h2 className="text-4xl font-bold text-white mt-4 mb-6">
                                The scarce skill is no longer information recall.
                            </h2>
                            <p className="text-gray-400 leading-relaxed mb-4">
                                AI-mediated systems are increasing the complexity of human decision-making at every level. The bottleneck is not access to information — it's the ability to reason structurally under uncertainty.
                            </p>
                            <p className="text-gray-400 leading-relaxed mb-4">
                                Last Prompt is built on a single thesis: <span className="text-white">better reasoning produces better outcomes</span>. The engine proves this by making the quality of your written plan the direct cause of what happens next in the simulation.
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
                                <div className="pl-4"><span className="text-gray-600">// Score against 5-criterion rubric</span></div>
                                <div className="pl-4">scores = <span className="text-cyan-400">rubric</span>.evaluate(plan, state);</div>
                                <div className="pl-4">band = <span className="text-cyan-400">getQualityBand</span>(scores.total);</div>
                                <div className="pl-4 mt-2"><span className="text-gray-600">// Apply interdependency multipliers</span></div>
                                <div className="pl-4">deltas = <span className="text-cyan-400">calculateDeltas</span>(band, state);</div>
                                <div className="pl-4 mt-2"><span className="text-gray-600">// Set flags for future crises</span></div>
                                <div className="pl-4"><span className="text-cyan-400">flags</span>.update(scores, plan);</div>
                                <div className="pl-4 mt-2"><span className="text-amber-400">return</span> {"{ scores, band, deltas, narrative }"};</div>
                                <div>{"}"}</div>
                                <div className="mt-4 pt-4 border-t border-gray-800">
                                    <div className="text-gray-600 text-xs">// The engine never hardcodes variable names.</div>
                                    <div className="text-gray-600 text-xs">// All labels are pulled from the active skin config.</div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ── COGNITIVE COMPLEXITY SCALING ── */}
            <section className="py-24 bg-[#050810] border-y border-gray-900">
                <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase">Cognitive Complexity Scaling</span>
                        <h2 className="text-4xl font-bold text-white mt-4 mb-4">Variable count is not cosmetic.</h2>
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
                                <h3 className="text-white font-bold text-xl mb-3">{level.label}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed mb-4">{level.desc}</p>
                                <div className={`text-xs font-mono ${level.color} opacity-60`}>{level.example}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── ENGINE vs SKIN ARCHITECTURE ── */}
            <section className="py-24 bg-gray-950">
                <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase">Architecture</span>
                        <h2 className="text-4xl font-bold text-white mt-4 mb-4">Engine vs. Skin</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            The engine is the unseen hand. The skin is the sensory experience. They are completely decoupled.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                        {/* Engine */}
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
                                    <div className="text-white font-bold">The Engine (System Logic)</div>
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

                        {/* Skin */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="p-7 rounded-2xl border border-violet-500/20 bg-violet-950/10"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 rounded-lg bg-violet-500/10 flex items-center justify-center">
                                    <Layers className="w-5 h-5 text-violet-400" />
                                </div>
                                <div>
                                    <div className="text-xs font-mono text-violet-400 tracking-widest">LAYER 02</div>
                                    <div className="text-white font-bold">The Skin (Thematic Content)</div>
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
                                        <div className="shrink-0 w-1 bg-violet-500/30 rounded-full" />
                                        <div>
                                            <div className="text-white text-sm font-semibold">{item.key}</div>
                                            <div className="text-gray-500 text-xs leading-relaxed">{item.desc}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Mapping table */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-white font-bold text-xl mb-4 text-center">Data-Driven Variable Mapping</h3>
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm font-mono">
                                <thead>
                                    <tr className="border-b border-gray-800">
                                        <th className="text-left py-3 px-4 text-gray-600 text-xs tracking-widest">ENGINE KEY</th>
                                        <th className="text-left py-3 px-4 text-green-400 text-xs tracking-widest">COLONY SKIN</th>
                                        <th className="text-left py-3 px-4 text-orange-400 text-xs tracking-widest">CORPORATE SKIN</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {SKIN_MAPPING.map((row, i) => (
                                        <tr key={i} className="border-b border-gray-900 hover:bg-gray-900/40 transition-colors">
                                            <td className="py-3 px-4 text-gray-500">{row.engine}</td>
                                            <td className="py-3 px-4 text-green-400/80">{row.colony}</td>
                                            <td className="py-3 px-4 text-orange-400/80">{row.corporate}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ── AI GUARDRAILS ── */}
            <section className="py-24 bg-[#050810] border-y border-gray-900">
                <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="text-xs font-mono text-red-400 tracking-widest uppercase">AI Guardrails</span>
                        <h2 className="text-4xl font-bold text-white mt-4 mb-4">The evaluator cannot be gamed.</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Substantial guardrails prevent players from gaming the system, asking for full marks, or exploiting the AI's tendency to be agreeable.
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

            {/* ── BUILD A SKIN ── */}
            <section className="py-24 bg-gray-950">
                <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-xs font-mono text-violet-400 tracking-widest uppercase">Collaborators</span>
                            <h2 className="text-4xl font-bold text-white mt-4 mb-6">
                                Have a domain? Build a skin.
                            </h2>
                            <p className="text-gray-400 leading-relaxed mb-4">
                                The engine is modular. If you work in medicine, diplomacy, urban planning, education, or any field where structured reasoning under uncertainty matters — the Last Prompt Engine can be adapted to your context.
                            </p>
                            <p className="text-gray-400 leading-relaxed mb-8">
                                We're looking for collaborators who are frustrated by polarised thinking and inspired by the idea of lateral reasoning as a trainable skill.
                            </p>
                            <div className="space-y-3">
                                {[
                                    "Define your variables (2–10+)",
                                    "Write your crisis events and character profiles",
                                    "The engine handles evaluation, scoring, and consequence resolution",
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3 text-gray-300 text-sm">
                                        <div className="w-5 h-5 rounded-full bg-violet-500/20 border border-violet-500/30 flex items-center justify-center shrink-0">
                                            <div className="w-1.5 h-1.5 rounded-full bg-violet-400" />
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

            {/* ── EXPLORE SKINS ── */}
            <section className="py-16 bg-[#050810] border-t border-gray-900">
                <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                        <div>
                            <h3 className="text-white font-bold text-2xl mb-1">See the engine in action.</h3>
                            <p className="text-gray-500">Explore the two live skins currently in development.</p>
                        </div>
                        <div className="flex gap-4">
                            <Link
                                href="/colony"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-green-500/10 hover:bg-green-500/20 border border-green-500/30 text-green-400 rounded-lg transition-all text-sm font-medium"
                            >
                                Colony <ArrowRight className="w-4 h-4" />
                            </Link>
                            <Link
                                href="/corporate-crisis"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500/10 hover:bg-orange-500/20 border border-orange-500/30 text-orange-400 rounded-lg transition-all text-sm font-medium"
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
