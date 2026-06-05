"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { LeadForm } from "@/components/lead-form";

const PLAN_SECTIONS = [
  {
    label: "Mission Goal",
    text: "Keep the colony safe.",
  },
  {
    label: "Operational Actions",
    text: "Joe to establish communication via the guard post at a safe distance — try to establish the stranger's intentions. Are they looking for a long-term home?",
  },
  {
    label: "Contingency Plan",
    text: "If Joe is convinced, the stranger will be escorted to the hospital for treatment by the medics. Joe to adjust the guard rotas to include extra support at the hospital until the community leader can interview the stranger and build an integration program. If the stranger is deemed dangerous, they will be asked to leave and never allowed entry to the colony — one day's clean water supplied and medical advice given, but no medicines offered.",
  },
  {
    label: "Communication Strategy",
    text: "Call an initial meeting with Joe, the community leader, and the head medic. Draft a plan for the stranger. Advise the colonists of the resource allocation and ask for extra attention to any new illnesses or symptoms, and any signs of people near the perimeter. Advise the colonists that all precautions are being taken and ask for their understanding and support.",
  },
];

export default function TheMirrorPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-gray-300">
      <main className="max-w-[800px] mx-auto px-6 pb-24 pt-28">

        {/* Header */}
        <header className="pb-12 border-b border-gray-800">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-xs font-mono text-[#C9A66B] tracking-widest mb-4 uppercase"
          >
            Colony — Winter — Week One
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="font-satoshi text-4xl sm:text-5xl font-bold text-white leading-tight mb-5"
          >
            The Mirror
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-gray-400 text-lg leading-relaxed"
          >
            You are Jon Kelly. It is late winter. A coughing stranger stands at the gate.
          </motion.p>
        </header>

        {/* The event */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="py-12 border-b border-gray-800 space-y-4"
        >
          <p className="text-xs font-mono text-gray-600 tracking-widest uppercase">The situation</p>
          <Image
            src="/images/opening_event_colony_stranger.png"
            alt="Stranger Arrives — Joe Edwards, Head of Security, reports to Jon Kelly"
            width={800}
            height={460}
            className="w-full rounded-xl border border-gray-800"
          />
          <p className="text-gray-600 text-sm leading-relaxed italic">
            Joe Edwards sees one thing clearly: the perimeter. He reports. He waits. The decision is yours.
          </p>
        </motion.section>

        {/* What you wrote — italic styled text */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="py-12 border-b border-gray-800 space-y-7"
        >
          <div>
            <p className="text-xs font-mono text-gray-600 tracking-widest uppercase mb-2">What you wrote</p>
            <p className="text-gray-500 text-sm">A real strategy entered by a real player. Unedited.</p>
          </div>

          <div className="space-y-6">
            {PLAN_SECTIONS.map(({ label, text }) => (
              <div key={label} className="border-l-2 border-[#C9A66B]/25 pl-5">
                <p className="text-xs font-mono text-[#C9A66B]/50 tracking-widest mb-2 uppercase">{label}</p>
                <p className="text-gray-400 italic leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* The bridge */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="py-14 border-b border-gray-800"
        >
          <p className="font-satoshi text-2xl sm:text-3xl text-white leading-snug">
            You will make the decision.
            <br />
            <span className="text-[#C9A66B]">The Mandate will show you what you actually did.</span>
          </p>
        </motion.section>

        {/* Mandate output */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="py-12 border-b border-gray-800 space-y-4"
        >
          <p className="text-xs font-mono text-gray-600 tracking-widest uppercase">What The Mandate saw</p>
          <Image
            src="/images/opening_event_mandate_output.png"
            alt="Mandate Evaluation Report — Strong 9/12 with full criterion breakdown and narrative"
            width={800}
            height={520}
            className="w-full rounded-xl border border-gray-800"
          />
          <p className="text-gray-600 text-sm leading-relaxed italic">
            He thought he had it handled. The Mandate disagreed.
          </p>
        </motion.section>

        {/* Journal */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="py-12 border-b border-gray-800 space-y-4"
        >
          <p className="text-xs font-mono text-gray-600 tracking-widest uppercase">
            Meanwhile, in Jon Kelly&apos;s world
          </p>
          <Image
            src="/images/opening_event_kelly_journal.png"
            alt="Jon Kelly's journal entry — his account of the stranger at the gate"
            width={800}
            height={420}
            className="w-full rounded-xl border border-gray-800"
          />
          <p className="text-gray-600 text-sm leading-relaxed italic">
            Jon does not see the evaluation. He records what he felt.
          </p>
        </motion.section>

        {/* The duality */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="py-12 border-b border-gray-800"
        >
          <div className="p-6 sm:p-8 border border-[#C9A66B]/20 rounded-xl bg-[#C9A66B]/5 space-y-4">
            <p className="text-xs font-mono text-[#C9A66B] tracking-widest uppercase">The duality</p>
            <p className="text-gray-300 leading-relaxed">
              You are Jon Kelly inside the story. You make real decisions, under incomplete information,
              with advisors who see only their corner of the problem. But you also sit outside the story —
              watching the Mandate&apos;s cold, neutral verdict on the quality of your reasoning.
              Jon never sees that verdict. You do.
            </p>
            <p className="text-gray-400 leading-relaxed">
              This is the feedback loop that almost never exists in real leadership. The gap between
              what you decided and what you actually communicated. Between what you planned and what
              the consequences were. The Mandate does not care whether you were right. It cares whether
              you thought clearly.
            </p>
          </div>
        </motion.section>

        {/* CTA */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="py-12 space-y-4"
        >
          <p className="text-xs font-mono text-[#C9A66B] tracking-widest uppercase">Apply for Access</p>
          <p className="text-gray-400 leading-relaxed mb-6">
            The Mandate is in closed beta. If this made you want to sit in the chair — register below.
          </p>
          <LeadForm interest="both" accentColor="cyan" />
        </motion.section>

      </main>
    </div>
  );
}
