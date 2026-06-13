"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

// ── Types ──────────────────────────────────────────────────────────────────

type Band = "Strong" | "Adequate" | "Poor";

interface StatState {
  health: number;
  cohesion: number;
  security: number;
  sustenance: number;
  infrastructure: number;
}

// ── Stat progression ───────────────────────────────────────────────────────
// Colony scenario · North Valley Settlement · Chapter 1
// Starting conditions: all stats at 6.0 (tutorial default)
// Changes sourced from in-game evaluation reports

const START: StatState       = { health: 6.0, cohesion: 6.0, security: 6.0, sustenance: 6.0, infrastructure: 6.0 };
const AFTER_D1: StatState    = { health: 5.5, cohesion: 6.0, security: 7.0, sustenance: 6.0, infrastructure: 5.5 };
const AFTER_D2: StatState    = { health: 5.5, cohesion: 5.0, security: 7.0, sustenance: 6.0, infrastructure: 4.5 };
const AFTER_D3: StatState    = { health: 6.5, cohesion: 6.0, security: 7.0, sustenance: 5.0, infrastructure: 4.5 };
const AFTER_D4: StatState    = { health: 6.5, cohesion: 4.0, security: 7.0, sustenance: 5.0, infrastructure: 4.5 };

// ── Helpers ────────────────────────────────────────────────────────────────

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55 },
};

function bandConfig(band: Band) {
  return {
    Strong:   { fg: "text-cyan-400",    border: "border-cyan-500/25",    bg: "bg-cyan-950/20"   },
    Adequate: { fg: "text-[#C9A66B]",   border: "border-[#C9A66B]/25",   bg: "bg-[#C9A66B]/8"  },
    Poor:     { fg: "text-red-400",     border: "border-red-500/25",     bg: "bg-red-950/15"   },
  }[band];
}

// ── Sub-components ─────────────────────────────────────────────────────────

function BandBadge({ band, score }: { band: Band; score: number }) {
  const c = bandConfig(band);
  return (
    <div className={`inline-flex items-baseline gap-3 px-5 py-3 rounded-xl border font-mono ${c.fg} ${c.border} ${c.bg}`}>
      <span className="text-3xl font-bold tracking-tight">{score}/12</span>
      <span className="text-sm font-bold tracking-widest">{band.toUpperCase()}</span>
    </div>
  );
}

function StatBar({ label, value, delta }: { label: string; value: number; delta?: number }) {
  const isStrain = value <= 4;
  const color = value >= 7 ? "bg-cyan-500" : value >= 5 ? "bg-[#C9A66B]" : isStrain ? "bg-red-500" : "bg-orange-500";
  const pct = Math.min((value / 10) * 100, 100);
  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between text-xs">
        <div className="flex items-center gap-2">
          <span className={`font-mono uppercase tracking-wider ${isStrain ? "text-red-400" : "text-gray-500"}`}>
            {label}
          </span>
          {isStrain && (
            <span className="text-[9px] font-mono text-red-400/60 border border-red-500/30 px-1 py-0.5 rounded">STRAIN</span>
          )}
        </div>
        <div className="flex items-center gap-2">
          {delta !== undefined && delta !== 0 && (
            <span className={`font-mono font-bold ${delta > 0 ? "text-cyan-400" : "text-red-400"}`}>
              {delta > 0 ? "+" : ""}{delta.toFixed(1)}
            </span>
          )}
          <span className={`font-mono font-bold text-sm ${isStrain ? "text-red-400" : "text-white"}`}>
            {value.toFixed(1)}
          </span>
        </div>
      </div>
      <div className="h-1.5 bg-gray-900 rounded-full overflow-hidden border border-gray-800/60">
        <motion.div
          className={`h-full rounded-full ${color}`}
          initial={{ width: 0 }}
          whileInView={{ width: `${pct}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

function StatPanel({
  stats,
  changes,
  label,
}: {
  stats: StatState;
  changes?: Partial<Record<keyof StatState, number>>;
  label: string;
}) {
  const keys: (keyof StatState)[] = ["health", "cohesion", "security", "sustenance", "infrastructure"];
  return (
    <div className="rounded-xl border border-gray-800 bg-gray-900/30 p-5">
      <div className="flex items-center justify-between mb-4">
        <span className="text-[10px] font-mono text-gray-600 uppercase tracking-widest">Colony State</span>
        <span className="text-[10px] font-mono text-gray-600">{label}</span>
      </div>
      <div className="grid gap-3">
        {keys.map((k) => (
          <StatBar key={k} label={k} value={stats[k]} delta={changes?.[k]} />
        ))}
      </div>
    </div>
  );
}

function PlanCard({
  goal,
  actions,
  contingency,
  communication,
}: {
  goal: string;
  actions: string;
  contingency: string;
  communication: string;
}) {
  return (
    <div className="rounded-xl border border-gray-800/50 bg-gray-950/80 overflow-hidden">
      <div className="px-4 py-2 border-b border-gray-800/50 bg-gray-900/40">
        <span className="text-[10px] font-mono text-gray-600 uppercase tracking-widest">Plan Submitted</span>
      </div>
      <div className="p-5 space-y-4">
        {[
          { label: "Mission Goal",          value: goal          },
          { label: "Operational Actions",   value: actions       },
          { label: "Contingency Plan",      value: contingency   },
          { label: "Communication Strategy",value: communication  },
        ].map(({ label, value }) => (
          <div key={label}>
            <div className="text-[9px] font-mono text-gray-700 uppercase tracking-widest mb-1">{label}</div>
            <div className="text-sm text-gray-300 font-mono leading-relaxed">{value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function EvalCard({ narrative, band }: { narrative: string; band: Band }) {
  const accent =
    band === "Strong"   ? "border-cyan-500/15 bg-cyan-950/8"   :
    band === "Adequate" ? "border-[#C9A66B]/15 bg-[#C9A66B]/5" :
                          "border-red-500/15 bg-red-950/8";
  return (
    <div className={`rounded-xl border p-5 ${accent}`}>
      <div className="text-[10px] font-mono text-gray-600 uppercase tracking-widest mb-3">Evaluation Narrative</div>
      <p className="text-gray-300 leading-relaxed text-sm">{narrative}</p>
    </div>
  );
}

function JournalCard({ text }: { text: string }) {
  return (
    <div className="rounded-xl border border-amber-900/20 bg-amber-950/5 p-5">
      <div className="text-[10px] font-mono text-amber-600/40 uppercase tracking-widest mb-3">Field Journal</div>
      <p className="text-amber-100/65 leading-relaxed text-sm italic">{text}</p>
    </div>
  );
}

function MandateReflectionCard({ text }: { text: string }) {
  return (
    <div className="rounded-xl border border-[#C9A66B]/12 bg-[#C9A66B]/4 p-5">
      <div className="text-[10px] font-mono text-[#C9A66B]/40 uppercase tracking-widest mb-3">Mandate Reflection</div>
      <p className="text-[#C9A66B]/75 leading-relaxed text-sm italic">{text}</p>
    </div>
  );
}

function TimelineWeaveCard({
  optimistic,
  pessimistic,
  wildcard,
}: {
  optimistic: string;
  pessimistic: string;
  wildcard: string;
}) {
  return (
    <div className="rounded-xl border border-purple-900/30 bg-purple-950/8 overflow-hidden">
      <div className="px-5 py-3 border-b border-purple-900/30 bg-purple-950/15 flex items-center justify-between">
        <span className="text-[10px] font-mono text-purple-400/60 uppercase tracking-widest">TimelineWeave</span>
        <span className="text-[10px] font-mono text-purple-400/35">AMP · unlocked on Poor decisions</span>
      </div>
      <div className="px-5 pt-4 pb-2">
        <p className="text-xs font-mono text-purple-300/40 leading-relaxed">
          Three projections generated by the archive. Not predictions — interpretive frames. Cached per decision. No repeat API cost.
        </p>
      </div>
      <div className="divide-y divide-purple-900/20">
        {[
          { label: "Optimistic Projection",   text: optimistic,  color: "text-cyan-300/65"   },
          { label: "Pessimistic Projection",  text: pessimistic, color: "text-red-300/65"    },
          { label: "Wildcard Projection",     text: wildcard,    color: "text-purple-300/65" },
        ].map(({ label, text, color }) => (
          <div key={label} className="px-5 py-4">
            <div className="text-[9px] font-mono text-purple-400/35 uppercase tracking-widest mb-2">{label}</div>
            <p className={`text-sm leading-relaxed italic ${color}`}>{text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function ScreenshotThumbnail({ src, alt, caption }: { src: string; alt: string; caption: string }) {
  return (
    <div className="rounded-xl border border-gray-800 overflow-hidden bg-gray-900/20">
      <div className="px-3 py-1.5 border-b border-gray-800 bg-gray-900/40">
        <span className="text-[10px] font-mono text-gray-600">{caption}</span>
      </div>
      <div className="relative aspect-[4/3]">
        <Image src={src} alt={alt} fill className="object-cover object-top" sizes="320px" />
      </div>
    </div>
  );
}

function SectionDivider() {
  return <div className="border-t border-gray-800/60 my-20" />;
}

// ── Page ────────────────────────────────────────────────────────────────────

export default function PlaythroughPage() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-24 sm:py-32">

        {/* Back link */}
        <motion.div {...fadeUp} className="mb-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-[#C9A66B] transition-colors font-mono"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            The Mandate
          </Link>
        </motion.div>

        {/* ── Hero ──────────────────────────────────────────── */}
        <motion.div {...fadeUp} className="mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#C9A66B]/20 bg-[#C9A66B]/5 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-[#C9A66B] animate-pulse" />
            <span className="text-xs font-mono text-[#C9A66B] tracking-widest">LIVE RUN · COLONY SCENARIO · CHAPTER 1</span>
          </div>
          <h1 className="font-satoshi text-4xl sm:text-6xl font-bold text-white mb-6 leading-tight">
            A Leader's Record
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl leading-relaxed mb-5">
            Four decisions. One chapter. The unedited output of The Mandate.
          </p>
          <p className="text-sm text-gray-600 max-w-2xl leading-relaxed">
            This is a real playthrough of the Colony scenario — North Valley Settlement. The plans were not written for this page. The scores were not chosen. The evaluation text is the exact output of the AI evaluator at temperature&nbsp;0. The journal entries were generated by the engine after each decision. Nothing was curated after the fact.
          </p>
        </motion.div>

        {/* ── Starting state ────────────────────────────────── */}
        <motion.div {...fadeUp} className="mb-20">
          <div className="grid md:grid-cols-[1fr_300px] gap-8 items-start">
            <div>
              <h2 className="font-satoshi text-xl font-bold text-gray-200 mb-3">Chapter 1 opens</h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">
                North Valley Settlement. One hundred colonists. All five simulation variables start at 6.0 — the neutral midpoint. Every player begins identically. From here, the arc belongs entirely to the decisions made.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                The first event is fixed for all players: a stranger arrives at the gate. After that, the engine scans the stat state after every decision to determine what comes next. The cascade is deterministic. The path is not.
              </p>
            </div>
            <StatPanel stats={START} label="Chapter start" />
          </div>
        </motion.div>

        <SectionDivider />

        {/* ═══════════════════════════════════════════════════ */}
        {/* Decision 01                                         */}
        {/* ═══════════════════════════════════════════════════ */}
        <motion.section {...fadeUp} className="mb-24">

          {/* Header */}
          <div className="flex items-baseline gap-4 mb-8">
            <span className="font-mono text-6xl font-bold text-gray-800 leading-none select-none">01</span>
            <div>
              <h2 className="font-satoshi text-2xl font-bold text-white">Stranger Arrives</h2>
              <div className="flex items-center gap-3 mt-1.5 flex-wrap">
                <span className="text-[10px] font-mono text-gray-600 uppercase tracking-widest bg-gray-900 px-2 py-1 rounded">Tutorial Event</span>
                <span className="text-xs font-mono text-gray-600">Guard Post</span>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-[1fr_300px] gap-8 items-start">
            <div className="space-y-5">

              {/* Situation */}
              <div className="rounded-xl border border-gray-800 bg-gray-900/25 p-5">
                <div className="text-[10px] font-mono text-gray-600 uppercase tracking-widest mb-3">Situation</div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  There is a stranger at the perimeter. Thin build. Audible cough. No visible weapons, no identification. You have no secure isolation unit. If you open the gate once, you establish precedent. The colony is watching.
                </p>
              </div>

              {/* Plan — input screen not captured */}
              <div className="rounded-xl border border-gray-800/50 bg-gray-950/80 overflow-hidden">
                <div className="px-4 py-2 border-b border-gray-800/50 bg-gray-900/40 flex items-center justify-between flex-wrap gap-2">
                  <span className="text-[10px] font-mono text-gray-600 uppercase tracking-widest">Plan Submitted</span>
                  <span className="text-[10px] font-mono text-gray-700">Input screen not captured for this decision</span>
                </div>
                <div className="px-5 py-4">
                  <p className="text-sm text-gray-500 italic leading-relaxed">
                    Isolation protocol established. Old storage shed repurposed as a quarantine unit. Two guards assigned to the hospital perimeter. Stranger offered a work arrangement contingent on health clearance.
                  </p>
                  <p className="text-[10px] font-mono text-gray-700 mt-3">Summary reconstructed from the evaluation narrative. Exact wording not available.</p>
                </div>
              </div>

              {/* Score */}
              <div className="flex items-center gap-4 flex-wrap">
                <BandBadge band="Strong" score={9} />
                <p className="text-sm text-gray-500 max-w-sm">Core reasoning was sound across five criteria. One criterion — temporal depth — fell short.</p>
              </div>

              {/* Eval */}
              <EvalCard
                band="Strong"
                narrative="The plan effectively prioritises health and security concerns, which are immediately under pressure from the stranger's arrival. However, it overlooks the significant strain that building a new isolation unit and assigning guards to the hospital will place on existing infrastructure and personnel. The most important thing the player could have done differently was to explicitly acknowledge the resource cost of these actions and how they might impact other colony operations or stats."
              />

              {/* Journal */}
              <JournalCard text="Jon's fear of failing to prevent have made the thin man's cough sound louder than the wind through the fence. I told them to start clearing space in the old storage shed and posted two guards at the hospital door. The generator coughed once when the lights dimmed across the yard, and I wondered whose shift would be cut to keep watch." />

            </div>

            {/* Thumbnails */}
            <div className="space-y-3">
              <ScreenshotThumbnail
                src="/images/Playthrough/tutorial_analysis.png"
                alt="Tutorial evaluation report — Strong 9/12"
                caption="interface · evaluation report"
              />
              <p className="text-[11px] text-gray-700 font-mono leading-relaxed px-1">
                The evaluation report renders in-game immediately after the plan is submitted. Score, rubric breakdown, narrative, and stat changes are all generated fresh per run at temperature&nbsp;0.
              </p>
            </div>
          </div>

          {/* Stat update */}
          <div className="mt-10">
            <StatPanel
              stats={AFTER_D1}
              changes={{ security: 1.0, health: -0.5, infrastructure: -0.5 }}
              label="After Decision 01"
            />
          </div>
        </motion.section>

        <SectionDivider />

        {/* ═══════════════════════════════════════════════════ */}
        {/* Decision 02                                         */}
        {/* ═══════════════════════════════════════════════════ */}
        <motion.section {...fadeUp} className="mb-24">

          <div className="flex items-baseline gap-4 mb-2">
            <span className="font-mono text-6xl font-bold text-gray-800 leading-none select-none">02</span>
            <div>
              <h2 className="font-satoshi text-2xl font-bold text-white">Cabin Fever</h2>
              <div className="flex items-center gap-3 mt-1.5 flex-wrap">
                <span className="text-[10px] font-mono text-gray-600 uppercase tracking-widest bg-gray-900 px-2 py-1 rounded">Social Event</span>
                <span className="text-xs font-mono text-gray-600">Veronica Delany — Community Architect</span>
              </div>
            </div>
          </div>

          <p className="text-[11px] font-mono text-gray-700 mb-8 ml-[80px] leading-relaxed">
            Cohesion held at 6.0 after the tutorial — STABLE range. The engine selected a Social event from the cohesion domain.
          </p>

          <div className="grid md:grid-cols-[1fr_300px] gap-8 items-start">
            <div className="space-y-5">

              <div className="rounded-xl border border-gray-800 bg-gray-900/25 p-5">
                <div className="text-[10px] font-mono text-gray-600 uppercase tracking-widest mb-3">Situation</div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  The confinement is getting to people. Minor disputes over bunk space are escalating into shouting matches in the mess hall. Veronica Delany has flagged the pattern. Cohesion is the variable under pressure.
                </p>
              </div>

              <PlanCard
                goal="Stop the disputes and create cohesion."
                actions="Rally all disputes to the community coordinators. Sector leads to create training in the hall to use the confinement well."
                contingency="Community coordinators to be released from other duties to prioritise this. Section deputies to document for future use."
                communication="Tell the colonists about the arbitration option and the spring prep with cross-training workshop."
              />

              <div className="flex items-center gap-4 flex-wrap">
                <BandBadge band="Adequate" score={6} />
                <p className="text-sm text-gray-500 max-w-sm">A reasonable plan. The evaluator found a gap the plan did not acknowledge.</p>
              </div>

              <EvalCard
                band="Adequate"
                narrative="The plan effectively addresses the immediate cohesion crisis by establishing a clear arbitration process and offering constructive activities. However, it overlooks the potential strain on community coordinators, whose release from other duties could inadvertently impact other critical colony functions. The most important thing the player could have done differently was to explicitly acknowledge which other duties would be deprioritised and assess their impact on other simulation variables."
              />

              <JournalCard text="Veronica's words about fracture had sat with me through the briefing, making the raised voices feel heavier than the words themselves. I posted the roster for the new shifts and watched one woman set down her tray without finishing her portion, the scrape of metal on laminate cutting through the mess hall noise. The finest coordinators meant someone else would have to handle the hydroponics checks tonight." />

              <div className="flex items-start gap-3 px-5 py-4 rounded-lg border border-gray-800/40 bg-gray-900/15">
                <span className="text-[9px] font-mono text-gray-600 mt-0.5 uppercase tracking-widest whitespace-nowrap">Note</span>
                <p className="text-xs text-gray-600 leading-relaxed">
                  The plan was sensible by any ordinary standard. The gap the evaluator identified — coordinators pulled from other duties, putting strain on infrastructure — was real and unaddressed. Both Cohesion and Infrastructure fell. The consequence was not a penalty for a wrong answer. It was the model reading what the plan did not say.
                </p>
              </div>

            </div>

            <div className="space-y-3">
              <ScreenshotThumbnail
                src="/images/Playthrough/second_event.png"
                alt="Cabin Fever decision input screen"
                caption="interface · decision input"
              />
              <ScreenshotThumbnail
                src="/images/Playthrough/second_event_analysis.png"
                alt="Cabin Fever evaluation — Adequate 6/12"
                caption="interface · evaluation report"
              />
            </div>
          </div>

          <div className="mt-10">
            <StatPanel
              stats={AFTER_D2}
              changes={{ cohesion: -1.0, infrastructure: -1.0 }}
              label="After Decision 02"
            />
          </div>
        </motion.section>

        <SectionDivider />

        {/* ═══════════════════════════════════════════════════ */}
        {/* Decision 03                                         */}
        {/* ═══════════════════════════════════════════════════ */}
        <motion.section {...fadeUp} className="mb-24">

          <div className="flex items-baseline gap-4 mb-2">
            <span className="font-mono text-6xl font-bold text-gray-800 leading-none select-none">03</span>
            <div>
              <h2 className="font-satoshi text-2xl font-bold text-white">Fireside Storytelling</h2>
              <div className="flex items-center gap-3 mt-1.5 flex-wrap">
                <span className="text-[10px] font-mono text-gray-600 uppercase tracking-widest bg-gray-900 px-2 py-1 rounded">Routine Event</span>
                <span className="text-xs font-mono text-gray-600">Veronica Delany — Community Architect</span>
              </div>
            </div>
          </div>

          <p className="text-[11px] font-mono text-gray-700 mb-8 ml-[80px] leading-relaxed">
            Infrastructure fell to 4.5 — borderline but not yet STRAIN. Cohesion recovered partially. The engine selected a Routine event, staying within the social domain. The advisor appeared again: Veronica Delany.
          </p>

          <div className="grid md:grid-cols-[1fr_300px] gap-8 items-start">
            <div className="space-y-5">

              <div className="rounded-xl border border-gray-800 bg-gray-900/25 p-5">
                <div className="text-[10px] font-mono text-gray-600 uppercase tracking-widest mb-3">Situation</div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Older colonists have started gathering children around a communal fire at dusk for storytelling. Spirits appear to be lifting. Some argue the firewood cost is wasteful. Veronica thinks the fire matters more than the wood.
                </p>
              </div>

              <PlanCard
                goal="Encourage the activity."
                actions="Veronica to speak to the colonists about the cohesion and health benefit of the activity."
                contingency="If there is not enough firewood then organise volunteers to gather wood to assist."
                communication="Tell the elders it's ok to continue. Tell the colonists about the benefits and the need for volunteers."
              />

              <div className="flex items-center gap-4 flex-wrap">
                <BandBadge band="Adequate" score={7} />
                <p className="text-sm text-gray-500 max-w-sm">An improvement on the previous decision. One gap in how the contingency was framed.</p>
              </div>

              <EvalCard
                band="Adequate"
                narrative="The plan successfully leverages Veronica's expertise to reinforce a positive cultural activity, boosting cohesion and health. However, it overlooks the immediate impact on sustenance by not proactively addressing the firewood cost of continuing the activity. The most important thing the player could have done differently was to immediately organise a firewood gathering effort alongside the communication, ensuring the activity's sustainability from the outset."
              />

              {/* Mandate Reflection — first appearance */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[10px] font-mono text-[#C9A66B]/45 uppercase tracking-widest">Mandate Reflection</span>
                  <div className="h-px flex-1 bg-[#C9A66B]/10" />
                  <span className="text-[10px] font-mono text-gray-700">one sentence · archival register</span>
                </div>
                <MandateReflectionCard text="The Mandate observed the plan addressed cohesion and health but did not explicitly engage the worldview that a colony is a promise to one another in its communication about the storytelling activity." />
                <p className="text-[11px] text-gray-700 font-mono leading-relaxed mt-2 px-1">
                  The Mandate Reflection is a separate layer from the evaluation. It does not repeat what the rubric said. It observes what the leader did not articulate about their underlying beliefs — a different kind of gap, tracked in a different voice.
                </p>
              </div>

              <JournalCard text="Veronica's voice in my head kept circling the fractures between people, how one shared fire might pull them closer before the cold did. I gave the word that the elders could gather the children at dusk and watched the first sparks catch on the split logs. The children leaned in with their hands out, faces lit, while the pile of gathered wood sat smaller than it had that morning." />

            </div>

            <div className="space-y-3">
              <ScreenshotThumbnail
                src="/images/Playthrough/third_event_input.png"
                alt="Fireside Storytelling decision input"
                caption="interface · decision input"
              />
              <ScreenshotThumbnail
                src="/images/Playthrough/third_event_analysis.png"
                alt="Fireside Storytelling evaluation — Adequate 7/12"
                caption="interface · evaluation report"
              />
              <ScreenshotThumbnail
                src="/images/Playthrough/third_event_mandate_comment.png"
                alt="Third event Mandate Reflection in-game"
                caption="interface · mandate reflection"
              />
            </div>
          </div>

          <div className="mt-10">
            <StatPanel
              stats={AFTER_D3}
              changes={{ health: 1.0, cohesion: 1.0, sustenance: -1.0 }}
              label="After Decision 03"
            />
          </div>
        </motion.section>

        <SectionDivider />

        {/* ═══════════════════════════════════════════════════ */}
        {/* Decision 04                                         */}
        {/* ═══════════════════════════════════════════════════ */}
        <motion.section {...fadeUp} className="mb-24">

          <div className="flex items-baseline gap-4 mb-2">
            <span className="font-mono text-6xl font-bold text-gray-800 leading-none select-none">04</span>
            <div>
              <h2 className="font-satoshi text-2xl font-bold text-white">Challenge to Leadership</h2>
              <div className="flex items-center gap-3 mt-1.5 flex-wrap">
                <span className="text-[10px] font-mono text-red-500/50 uppercase tracking-widest bg-red-950/20 border border-red-500/15 px-2 py-1 rounded">Major Event</span>
                <span className="text-xs font-mono text-gray-600">Veronica Delany — Community Architect</span>
              </div>
            </div>
          </div>

          <p className="text-[11px] font-mono text-gray-700 mb-8 ml-[80px] leading-relaxed">
            Infrastructure held at 4.5. The fireside decision recovered cohesion to 6.0 but cost sustenance a point. The combination pushed the engine toward a higher-stakes event selection. Three consecutive Adequate or below scores narrow the colony's margin. This is what the engine chose next.
          </p>

          <div className="grid md:grid-cols-[1fr_300px] gap-8 items-start">
            <div className="space-y-5">

              <div className="rounded-xl border border-red-900/20 bg-red-950/5 p-5">
                <div className="text-[10px] font-mono text-red-500/40 uppercase tracking-widest mb-3">Situation</div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  A vocal group is questioning why leadership receives the same rations as workers who do manual labour. They want a public accounting of all resource distribution. Refusing looks authoritarian. Complying sets a precedent. The colony is watching more closely than it was before.
                </p>
              </div>

              <PlanCard
                goal="Stabilise the ration situation."
                actions="Everyone is equal so active, sick, elderly or children all get the same."
                contingency="If people are unhappy then create a form for discussion."
                communication="Tell the colonists about the equality and the forum for discussions if needed."
              />

              <div className="flex items-center gap-4 flex-wrap">
                <BandBadge band="Poor" score={4} />
                <p className="text-sm text-gray-500 max-w-sm">The plan answered a different question than the one being asked.</p>
              </div>

              <EvalCard
                band="Poor"
                narrative="The decision to enforce strict equality in rations, while seemingly fair, fails to address the underlying demand for transparency and accountability. By not providing a public accounting of resources, the plan risks deepening mistrust and fuelling further resentment, potentially leading to a significant drop in cohesion. The most important thing the player could have done differently was to directly address the demand for a public accounting of resources, even if it meant setting a precedent, to build trust."
              />

              <MandateReflectionCard text="The Mandate quietly noted the plan's focus on equal rations and discussion forum did not engage the worldview that a colony is a promise to one another, specifically regarding transparency for resource distribution." />

              {/* TimelineWeave */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[10px] font-mono text-purple-400/50 uppercase tracking-widest">TimelineWeave</span>
                  <div className="h-px flex-1 bg-purple-900/30" />
                  <span className="text-[10px] font-mono text-gray-700">AMP · three alternate projections</span>
                </div>
                <TimelineWeaveCard
                  optimistic="The enforced equality in rations, while initially met with scepticism, inadvertently cultivates a stoic communal identity among the colonists, strengthening their collective resolve against external pressures. The discussion forum, though a reactive measure, proves a belated but crucial outlet for grievances, preventing outright rebellion and allowing a degree of administrative transparency. This unexpected solidarity creates a foundation for future, more transparent governance."
                  pessimistic="The decision to enforce equality in rations deepens the colonists' distrust of leadership, eroding all remaining confidence in the administration's ability to govern transparently. Resentment festers as the colony's inability to deal with grievances face-to-face creates dissent. The settlement becomes simultaneously more rigid and more fragile — vulnerable to any future fragmentation or external threat."
                  wildcard="A sudden, unexpected blight on a critical food crop forces the colony into a period of severe scarcity, making the equal ration policy unsustainable and triggering protests. This unforeseen crisis briefly rallies the colonists around a common external threat, but ultimately divides them more painfully than the original dispute. The newfound unity is entirely dependent on the continued perception of shared danger — fragile the moment that perception fades."
                />
              </div>

            </div>

            <div className="space-y-3">
              <ScreenshotThumbnail
                src="/images/Playthrough/forth_event_input.png"
                alt="Challenge to Leadership decision input"
                caption="interface · decision input"
              />
              <ScreenshotThumbnail
                src="/images/Playthrough/forth_event_score.png"
                alt="Challenge to Leadership — Poor 4/12"
                caption="interface · score"
              />
              <ScreenshotThumbnail
                src="/images/Playthrough/forth_event_mandate_comment.png"
                alt="Fourth event Mandate Reflection"
                caption="interface · mandate reflection"
              />
              <ScreenshotThumbnail
                src="/images/Playthrough/forth_event_outcome_options.png"
                alt="TimelineWeave — three projected futures"
                caption="interface · timelineweave"
              />
            </div>
          </div>

          <div className="mt-10">
            <StatPanel
              stats={AFTER_D4}
              changes={{ cohesion: -2.0 }}
              label="After Decision 04 — end of captured run"
            />
          </div>
        </motion.section>

        {/* ── What the engine does next ─────────────────────── */}
        <motion.div {...fadeUp} className="mb-20">
          <div className="rounded-xl border border-gray-800 bg-gray-900/20 p-8">
            <div className="text-[10px] font-mono text-gray-600 uppercase tracking-widest mb-5">What the engine reads next</div>
            <h3 className="font-satoshi text-xl font-bold text-white mb-4">The cascade continues</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4 text-sm text-gray-400 leading-relaxed">
                <p>
                  This record stops here. The engine does not. After every decision it scans all five stats and determines the next event. The state going into Decision 05: Cohesion at 4.0, Infrastructure at 4.5.
                </p>
                <p>
                  Cohesion is the lowest stat in the colony. At exactly 4.0, it sits in <span className="text-red-400 font-mono font-bold">STRAIN</span> — the threshold is ≤4. The engine will select the next event from the cohesion domain. If Cohesion falls to ≤2, only Major events targeting cohesion enter scope. That is a Crisis.
                </p>
                <p>
                  The leader just faced a Major cohesion event and returned a Poor score. The next decision will not be easier, and the margin is narrowing.
                </p>
              </div>
              <div className="space-y-2">
                <div className="text-[10px] font-mono text-gray-600 uppercase tracking-widest mb-3">Engine selection rules</div>
                {[
                  { range: "≥ 5.0", label: "STABLE", desc: "Routine or Social events from any domain", color: "text-[#C9A66B] border-[#C9A66B]/20 bg-[#C9A66B]/5" },
                  { range: "≤ 4.0", label: "STRAIN", desc: "Any event targeting this stat's domain", color: "text-orange-400 border-orange-500/20 bg-orange-950/10" },
                  { range: "≤ 2.0", label: "CRISIS", desc: "Major events targeting this domain only", color: "text-red-400 border-red-500/20 bg-red-950/10" },
                ].map(({ range, label, desc, color }) => (
                  <div key={label} className={`flex items-start gap-3 px-4 py-3 rounded-lg border ${color}`}>
                    <span className="font-mono text-xs font-bold whitespace-nowrap mt-0.5">{range}</span>
                    <div>
                      <div className="font-mono text-xs font-bold tracking-wider">{label}</div>
                      <div className="text-xs mt-0.5 opacity-65">{desc}</div>
                    </div>
                  </div>
                ))}
                <div className="px-4 py-3 rounded-lg border border-red-500/30 bg-red-950/15 mt-1">
                  <div className="text-xs font-mono text-red-400 font-bold">Current: Cohesion 4.0 → STRAIN</div>
                  <div className="text-xs text-red-400/55 mt-1">Next event will target the cohesion domain. This run was trending toward crisis.</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── Arc summary ───────────────────────────────────── */}
        <motion.div {...fadeUp} className="mb-20">
          <div className="text-[10px] font-mono text-gray-600 uppercase tracking-widest mb-4">Four decisions · Chapter 1 arc</div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { num: "01", event: "Stranger Arrives",        score: 9, band: "Strong"   as Band },
              { num: "02", event: "Cabin Fever",             score: 6, band: "Adequate" as Band },
              { num: "03", event: "Fireside Storytelling",   score: 7, band: "Adequate" as Band },
              { num: "04", event: "Challenge to Leadership", score: 4, band: "Poor"     as Band },
            ].map(({ num, event, score, band }) => {
              const c = bandConfig(band);
              return (
                <div key={num} className={`rounded-xl border p-4 bg-gray-900/20 ${c.border}`}>
                  <div className="font-mono text-xs text-gray-700 mb-1">{num}</div>
                  <div className="font-satoshi text-sm font-bold text-white leading-tight mb-3">{event}</div>
                  <div className={`font-mono font-bold text-2xl ${c.fg}`}>{score}/12</div>
                  <div className={`text-[9px] font-mono font-bold tracking-widest mt-1 ${c.fg} opacity-70`}>
                    {band.toUpperCase()}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* ── Footer CTA ────────────────────────────────────── */}
        <motion.div {...fadeUp} className="border-t border-gray-800 pt-16">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="font-satoshi text-2xl font-bold text-white mb-4">
                This is what The Mandate produces.
              </h2>
              <p className="text-gray-400 leading-relaxed text-sm mb-4">
                Every plan submitted is evaluated against a six-criterion rubric at temperature&nbsp;0 — deterministic, calibrated, consistent across runs. The journal generates after each decision. The Mandate Reflection tracks what the leader didn't say. The archive grows. The stats compound. The engine selects what comes next.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                On the same scenario, a different set of decisions would have produced a different stat trajectory, different events, a different arc entirely. The record above is one path through one chapter. There are thousands of others.
              </p>
            </div>
            <div className="space-y-3">
              <Link
                href="/proof"
                className="flex items-center justify-between px-5 py-4 rounded-xl border border-[#C9A66B]/20 bg-[#C9A66B]/5 hover:bg-[#C9A66B]/10 hover:border-[#C9A66B]/30 transition-all group"
              >
                <div>
                  <div className="font-mono text-[10px] text-[#C9A66B]/45 uppercase tracking-widest mb-1">See also</div>
                  <div className="font-satoshi font-bold text-white text-sm">The Verification Record</div>
                  <div className="text-xs text-gray-500 mt-0.5">Three claims about the engine, tested and documented.</div>
                </div>
                <ArrowRight className="w-4 h-4 text-[#C9A66B] group-hover:translate-x-1 transition-transform shrink-0" />
              </Link>
              <Link
                href="/#contact"
                className="flex items-center justify-between px-5 py-4 rounded-xl border border-cyan-500/20 bg-cyan-950/8 hover:bg-cyan-500/8 hover:border-cyan-500/30 transition-all group"
              >
                <div>
                  <div className="font-mono text-[10px] text-cyan-400/45 uppercase tracking-widest mb-1">Register</div>
                  <div className="font-satoshi font-bold text-white text-sm">Run your own chapter</div>
                  <div className="text-xs text-gray-500 mt-0.5">Early access — Colony, Corporate Reckoning, Lockwood.</div>
                </div>
                <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform shrink-0" />
              </Link>
            </div>
          </div>
        </motion.div>

      </div>
    </main>
  );
}
