
import { Metadata } from "next";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft, BookOpen, GraduationCap, Zap, Brain, Rocket, Globe, Shield, RefreshCw, BarChart3, Users, Target, Cpu } from "lucide-react";

export const metadata: Metadata = {
  title: "The Hidden Gap | Last Prompt",
  description: "Why High-Achievers from the Best Schools Still Struggle to Translate Success into Judgment. A series of 12 entries explaining the logic of our engine.",
};

const POSTS = [
  {
    id: "post-1",
    title: "Post 1: The Strange Complaint Everyone Shares",
    icon: Users,
    content: (
      <div className="space-y-4 text-gray-300">
        <p>Across boardrooms, consulting firms, and startups — from New York to Paris — a quiet frustration keeps surfacing:</p>
        <p>Experienced team members observe that even graduates from the most selective programs need extra reassurance when it comes to prioritizing — and constantly re-prioritizing — amid shifting circumstances.</p>
        <p>Those same high-achievers quietly admit: <span className="italic">"I should be able to handle this. I've mastered the theories and their criteria, but I feel continually at sea — the variables are too unfixed, the data incomplete, and the trade-offs carry unpredictable consequences. It feels totally different."</span></p>
        <p>Two perspectives, one profound disconnect.</p>
        <p>These individuals emerge from the best schools, armed with the most intense preparation in history: rigorous curricula, top rankings, endless exams passed with flying colors. Their paths demanded precision, discipline, and excellence in structured environments. Yet here they are, facing the same recurring bewilderment: Why doesn't it carry over?</p>
        <p>Recent data underscores how widespread this is. In 2025 surveys, nearly half (48%) of recent graduates reported feeling unprepared to even apply for entry-level roles in their field — despite educators overwhelmingly (89%) believing their students were ready for the workforce. Employers, meanwhile, continue to highlight gaps in practical readiness, with many noting that new hires struggle most with dynamic decision-making under uncertainty rather than raw knowledge.</p>
        <div className="pl-4 border-l-2 border-cyan-500/50 space-y-2">
            <p>The complaints echo across borders and industries:</p>
            <ul className="list-disc pl-5 space-y-1">
                <li>In France, graduates from grandes écoles and prépas often describe the leap from clear evaluation criteria to ambiguous real-world priorities as disorienting.</li>
                <li>In the US and beyond, similar stories appear in consulting, tech, finance, and beyond: high performers who excelled in predictable systems now navigate fog where no rubric exists.</li>
            </ul>
        </div>
        <p>And yet education levels, test scores, and training intensity have never been higher. Hiring pipelines are more competitive. Credentials are more abundant.</p>
        <p>So if preparation has improved so dramatically... why does readiness feel so elusive?</p>
        <p>The answer isn't a lack of intelligence, effort, or motivation. It's not that these high-achievers are "unprepared" in the absolute sense — they've invested years in becoming exceptionally equipped for one kind of challenge.</p>
        <p>The disconnect lies deeper: the game has changed. What once rewarded mastery of known variables now demands comfort with the unknown, the evolving, the incomplete. Success in academic arenas — where problems have defined boundaries and correct answers — doesn't automatically equip someone for judgment in environments where boundaries shift, answers emerge from trade-offs, and consequences unfold over time.</p>
        <p>This isn't an individual shortcoming. It's a systemic blind spot: a widespread, shared experience that no single person or school has fully named or addressed.</p>
        <p>When two groups — those assigning the work and those stepping into it — voice the same underlying frustration from opposite sides, it's no longer coincidence. It's evidence of something structural.</p>
        <p>In the posts ahead, we'll unpack why this gap exists, why traditional paths excel at knowledge but fall short on judgment, and why experience alone can't close it fast enough in today's accelerating world.</p>
        <p>But first: if this description resonates — even a little — you're not alone. And recognizing the pattern is the first step toward something better.</p>
      </div>
    ),
  },
  {
    id: "post-2",
    title: "Post 2: The Education Paradox",
    icon: GraduationCap,
    content: (
      <div className="space-y-4 text-gray-300">
        <p>Imagine a system built like a perfectly engineered machine: clear inputs (curricula, exams, rankings), predictable outputs (grades, diplomas, placements), and rewards for precision, endurance, and mastery of defined rules.</p>
        <p>For generations, that's exactly what elite education delivered — and delivered brilliantly.</p>
        <p>In France, the prépas and grandes écoles pathway became legendary for its intensity: years of focused preparation leading to institutions that open doors to the highest levels of responsibility. Across the Atlantic, Ivy League tracks, Oxbridge tutorials, and top US business/engineering programs followed similar logic: excel in structured challenges, and success follows in structured careers.</p>
        <p>And for much of the 20th century, it worked. Careers were linear. Industries evolved slowly. Problems had boundaries. The "correct" answer existed, and the system trained people to find it faster and better than anyone else.</p>
        <p>Then the world accelerated.</p>
        <p>Technology cycles shortened from decades to months. Organizations grew more complex and interconnected. Global competition intensified. AI began handling routine analysis, shifting human value toward oversight in uncertainty. Careers fragmented into projects rather than lifelong ladders. Data became abundant yet incomplete, variables multiplied and refused to stay fixed.</p>
        <p>The machine didn't break — it simply found itself operating in a different environment.</p>
        <p>Today we have the most educated workforce in human history. Test scores are higher, credentials more abundant, preparation more rigorous than ever. Graduates from the best schools emerge with deep knowledge, sharp analytical tools, and proven discipline under pressure.</p>
        <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-800 space-y-2">
            <p className="font-semibold text-white">Yet surveys tell a consistent story:</p>
            <ul className="list-disc pl-5 space-y-1">
                <li>In 2025, nearly half (48%) of recent graduates felt unprepared even to apply for entry-level roles in their field, despite educators believing 89% were ready (Cengage Group Employability Report).</li>
                <li>Employers report ongoing gaps not in raw intelligence or theory, but in navigating ambiguity, reprioritizing under flux, and making trade-offs where no rubric exists.</li>
                <li>In France, even as grandes écoles graduates integrate strongly into the job market (85%+ within months for recent classes), many quietly describe the transition as disorienting — from clear evaluation criteria to endless reprioritization, where decisions often get deferred or bounced until urgency forces them.</li>
            </ul>
        </div>
        <p>It's not a failure of preparation. It's a paradox of excellence: systems optimized for predictability produce extraordinary results in predictable worlds. When the world becomes probabilistic and dynamic, the same excellence can leave people feeling continually at sea — not because they lack capability, but because the game board changed shape.</p>
        <p>No one designed it this way on purpose. Education evolved to meet the needs of industrial stability and repeatable processes. Work evolved toward constant adaptation and emergent complexity. The two drifted apart gradually, almost invisibly.</p>
        <p>The result? High-achievers who "should" be thriving sometimes find themselves in loops of delegation, reassurance-seeking, or decision-bouncing — not out of laziness or incompetence, but because the mental models that served so well in exams don't yet map cleanly to environments where variables shift mid-stream and consequences cascade unpredictably.</p>
        <p>This isn't about blame. It's evolution. The same forces that brought smartphones, remote work, and AI also reshaped what "readiness" means. Knowledge mastery remains essential — but judgment in uncertainty has become the scarcer, more decisive skill.</p>
        <p className="italic text-cyan-400">Next — The Hidden Skill Nobody Teaches: What actually separates good decisions from great ones in fog?</p>
      </div>
    ),
  },
  {
    id: "post-3",
    title: "Post 3: The Hidden Skill Nobody Teaches",
    icon: Brain,
    content: (
      <div className="space-y-4 text-gray-300">
        <p>What actually makes someone effective at difficult decisions — the kind that don't come with an answer key?</p>
        <p>It's rarely raw intelligence or domain knowledge alone. Those get you far in exams and structured problems. But in real environments — where priorities shift mid-stream, information is partial, and outcomes depend on trade-offs — a different capability takes over: judgment.</p>
        <p>Judgment isn't mysterious or innate. It's a trainable set of mental habits that most education systems simply don't prioritize. Unlike neutral, self-contained problems in academia, real-world scenarios are often presented through people — layered with their own experiences, assumptions, and perspectives.</p>
        <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-800">
                <h4 className="text-white font-semibold mb-2">1. Identifying Relevant Variables</h4>
                <p className="text-sm">In school, variables are given. In work, you must spot what's truly driving the situation amid noise. Overlooking a key stakeholder's agenda? Missing how one change ripples? These compound into big problems.</p>
            </div>
            <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-800">
                <h4 className="text-white font-semibold mb-2">2. Anticipating Consequences</h4>
                <p className="text-sm">Exams test immediate outcomes. Real decisions require forecasting cascades: "If I prioritize X now, what doors close later?" High-achievers often excel at linear planning but feel "at sea" when consequences unfold nonlinearly.</p>
            </div>
            <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-800">
                <h4 className="text-white font-semibold mb-2">3. Allocating Scarce Resources</h4>
                <p className="text-sm">Judgment shines in deciding what gets focus when everything feels urgent. Reprioritizing without clear data? Saying "no" strategically rather than reactively?</p>
            </div>
            <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-800">
                <h4 className="text-white font-semibold mb-2">4. Communicating Strategy Clearly</h4>
                <p className="text-sm">Judgment includes framing trade-offs so others understand "why this path, not that one." Education drills precise arguments; work demands persuasive clarity under fog.</p>
            </div>
            <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-800">
                <h4 className="text-white font-semibold mb-2">5. Adjusting Under Change</h4>
                <p className="text-sm">Plans rarely survive first contact. The best decision-makers pivot without panic — reassessing variables and recalibrating. Rigid adherence to initial logic is a common trap.</p>
            </div>
            <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-800">
                <h4 className="text-white font-semibold mb-2">6. Navigating Hidden Biases</h4>
                <p className="text-sm">Real circumstances are often relayed by people — filtered through their own experiences. Judgment requires detecting and questioning these layers to uncover reality.</p>
            </div>
        </div>
        <p className="font-semibold text-white mt-4">Why This Skill Stays Hidden in Education</p>
        <p>Most assessments focus on recall, comprehension, and structured problem-solving. Real judgment lives in the unstructured zone: incomplete inputs, evolving conditions, and no single "right" path.</p>
        <p className="italic text-cyan-400">Next — Why Experience Became the Default Solution: It works... but it's slow, expensive, inconsistent, and often encodes hidden biases.</p>
      </div>
    ),
  },
  {
    id: "post-4",
    title: "Post 4: Why Experience Became the Default Solution",
    icon: RefreshCw,
    content: (
      <div className="space-y-4 text-gray-300">
        <p>If judgment is a trainable skill, why isn't it taught deliberately from the outset? The default answer is straightforward and time-tested: experience.</p>
        <div className="bg-gray-900/50 p-4 rounded-lg border border-cyan-500/20">
            <h4 className="text-white font-semibold mb-2">The Proven Strengths of Experience</h4>
            <ul className="list-disc pl-5 space-y-1">
                <li>Pattern recognition sharpens as you see variables recur.</li>
                <li>Consequences become visceral: a reprioritization that backfired teaches more than any case study.</li>
                <li>Adaptation under pressure forges resilience.</li>
            </ul>
        </div>
        <p className="font-semibold text-white mt-4">Where Experience Is Falling Short in 2026</p>
        <ul className="space-y-3">
            <li><span className="text-cyan-400 font-medium">It's slow:</span> Accumulating judgment takes years. Yet entry-level hiring slowed in 2025-2026. AI automates routine tasks, reducing "safe" learning opportunities.</li>
            <li><span className="text-cyan-400 font-medium">It's expensive and risky:</span> Mistakes cost real money and morale. Companies are more selective, prioritizing "day-one readiness" over potential.</li>
            <li><span className="text-cyan-400 font-medium">It's inconsistent:</span> Quality depends on mentors, crises, and luck — not a curriculum. Some stay siloed, perpetuating delegation loops.</li>
            <li><span className="text-cyan-400 font-medium">It embeds hidden biases:</span> Past successes lock in lenses. As roles blend, those biases surface faster, leading to misaligned trade-offs.</li>
        </ul>
        <p>French companies illustrate this vividly: strong placement rates mask transition disorientation, where decisions get deferred until urgency forces them.</p>
        <p className="italic text-cyan-400">Next — The Speed of Change Broke the Old Model: For most of history, skills changed slowly. No longer.</p>
      </div>
    ),
  },
  {
    id: "post-5",
    title: "Post 5: The Speed of Change Broke the Old Model",
    icon: Zap,
    content: (
      <div className="space-y-4 text-gray-300">
        <p>For most of human history, the pace of change was glacial. Skills learned in your twenties could carry you through a forty-year career. No longer.</p>
        <div className="grid md:grid-cols-2 gap-4 my-4">
            <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-800">
                <p className="text-sm font-semibold text-white mb-1">Tech Cycles Collapse</p>
                <p className="text-xs text-gray-400">From 10-20 years to 6-18 months. AI and automation reshape workflows before the previous wave settles.</p>
            </div>
            <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-800">
                <p className="text-sm font-semibold text-white mb-1">Explosive Complexity</p>
                <p className="text-xs text-gray-400">Teams are cross-functional; roles blend. "IT's problem" now lands on everyone's desk.</p>
            </div>
        </div>
        <p className="font-semibold text-white">The Old Model Can't Keep Pace</p>
        <p>Experience matched the rhythm of slow change. Now the rhythm is sprinting:</p>
        <ul className="list-disc pl-5 space-y-2">
            <li>Safe learning opportunities shrink as companies cut juniors.</li>
            <li>Decisions arrive faster than experience can process them.</li>
            <li>Delegation and decision-bouncing become survival tactics. When the environment changes faster than mental models, the easiest path is to kick it upstairs.</li>
        </ul>
        <p>In France this dynamic is visible: strong labor protections preserve positions but delay hands-on reps, creating longer gaps between theory and judgment.</p>
        <p className="font-medium text-cyan-400">What replaces the old model isn't more speed — it's a deliberate way to compress the learning curve.</p>
        <p className="italic text-cyan-400">Next — The Missing Training Environment: How do you train judgment safely? Pilots don't learn in real planes first.</p>
      </div>
    ),
  },
  {
    id: "post-6",
    title: "Post 6: The Missing Training Environment",
    icon: Shield,
    content: (
      <div className="space-y-4 text-gray-300">
        <p>Pilots don’t learn to handle engine failure by crashing real planes. Surgeons don’t master emergency procedures on live patients. They use simulations.</p>
        <p>Yet when it comes to high-stakes judgment — reprioritizing under shifting variables, navigating biases, allocating resources — we still rely on slow, expensive on-the-job trial-and-error.</p>
        <div className="bg-cyan-500/5 p-4 rounded-lg border border-cyan-500/20">
            <p className="text-white font-semibold mb-2">Simulations work because they offer:</p>
            <ul className="grid grid-cols-2 gap-2 text-sm">
                <li>• Controlled pressure</li>
                <li>• Iterative learning</li>
                <li>• Consequence visibility</li>
                <li>• Adaptability</li>
            </ul>
        </div>
        <p className="font-semibold text-white mt-4">Why Business Simulations Still Fall Short</p>
        <p>Most business "sims" (case studies, role-plays) don't deliver the same power:</p>
        <ul className="list-disc pl-5 space-y-1">
            <li>Scripted outcomes or single “correct” answers.</li>
            <li>Static scenarios — variables don’t evolve based on choices.</li>
            <li>No iterative, personal grinding.</li>
            <li>No neutral, ungamable evaluation of reasoning.</li>
        </ul>
        <p>In 2026, a few frontier tools are starting to bridge this, but they remain niche or enterprise-heavy. The everyday professional still lacks an accessible way to build judgment components.</p>
        <p className="italic text-cyan-400">Next — Why Most Simulations Still Fail: “But we already have simulations.” Yes — and most of them miss the point.</p>
      </div>
    ),
  },
  {
    id: "post-7",
    title: "Post 7: Why Most Simulations Still Fail",
    icon: BarChart3,
    content: (
      <div className="space-y-4 text-gray-300">
        <p>Most sims fail to build lasting judgment because they miss the essence of modern environments. They are theater, not evolution.</p>
        <table className="w-full text-sm border-collapse border border-gray-800 mt-4 h-auto">
            <thead>
                <tr className="bg-gray-900">
                    <th className="border border-gray-800 p-2 text-left">Typical Sim</th>
                    <th className="border border-gray-800 p-2 text-left">Real Judgment Needs</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="border border-gray-800 p-2 text-gray-400">Fixed crisis, one debrief</td>
                    <td className="border border-gray-800 p-2">Compounding consequences over cycles</td>
                </tr>
                <tr>
                    <td className="border border-gray-800 p-2 text-gray-400">Neutral inputs</td>
                    <td className="border border-gray-800 p-2">Bias-filtered info from stakeholders</td>
                </tr>
                <tr>
                    <td className="border border-gray-800 p-2 text-gray-400">Team/group play</td>
                    <td className="border border-gray-800 p-2">Solo reasoning reps</td>
                </tr>
                <tr>
                    <td className="border border-gray-800 p-2 text-gray-400">"Win/lose" scoring</td>
                    <td className="border border-gray-800 p-2">Neutral eval of reasoning dimensions</td>
                </tr>
            </tbody>
        </table>
        <p className="font-semibold text-white mt-4">The Core Gap</p>
        <p>Real environments are unpredictable. Choices ripple into future turns. Advisors have hidden profiles you must infer. Feedback must be brutally honest about how you reasoned, not if you "survived" by luck.</p>
        <p className="italic text-cyan-400">Next — Introducing Chronosymbiosis: The learning system that finally makes simulations live up to their promise.</p>
      </div>
    ),
  },
  {
    id: "post-8",
    title: "Post 8: Introducing Chronosymbiosis",
    icon: Rocket,
    content: (
      <div className="space-y-4 text-gray-300">
        <p>What would a truly effective judgment-training environment look like? We call this paradigm <span className="text-white font-bold">Chronosymbiosis</span>.</p>
        <div className="bg-gray-900/50 p-6 rounded-lg border border-cyan-500/30 text-center">
            <p className="text-2xl font-mono text-cyan-400 mb-2">Chrono + Symbiosis</p>
            <p className="text-sm">A symbiotic learning system where human judgment develops through repeated interaction with evolving, time-extended scenarios.</p>
        </div>
        <p className="font-semibold text-white mt-4">Core Principles:</p>
        <ol className="list-decimal pl-5 space-y-3">
            <li><span className="text-white font-medium">Dynamic Environments:</span> Scenarios never stay static. A fire saved today may drain sustenance tomorrow.</li>
            <li><span className="text-white font-medium">Adaptive Feedback:</span> Plans are scored on reasoning quality across orthogonal dimensions, not just survival.</li>
            <li><span className="text-white font-medium">Iterative Decision Cycles:</span> Restart, reflect, adjust. Compounding consequences matter more than single-turn brilliance.</li>
            <li><span className="text-white font-medium">Long-Horizon Thinking:</span> Choices echo forward. Q1 budget cuts make Q2 stress tests harder.</li>
            <li><span className="text-white font-medium">Psychologically Realistic Inputs:</span> Advisors report through their own lenses (e.g., a paranoid CISO vs. a well-being focused Talent Lead).</li>
        </ol>
        <p>It trains the navigator: how to hold multiple variables, pierce presented narratives, and anticipate unseen cascades.</p>
        <p className="italic text-cyan-400">Next — What Chronosymbiosis Looks Like in Practice: From theory to lived experience.</p>
      </div>
    ),
  },
  {
    id: "post-9",
    title: "Post 9: What Chronosymbiosis Looks Like in Practice",
    icon: Target,
    content: (
      <div className="space-y-4 text-gray-300">
        <p>Chronosymbiosis moves from concept to muscle memory through a tight, repeatable loop:</p>
        <ul className="space-y-4">
            <li className="flex gap-3">
                <span className="bg-gray-800 text-cyan-400 w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-xs font-bold">1</span>
                <div>
                    <p className="font-medium text-white">Immersion: The Crisis Arrives</p>
                    <p className="text-sm">You open the terminal. A new event lands — framed and filtered through a specific advisor's lens.</p>
                </div>
            </li>
            <li className="flex gap-3">
                <span className="bg-gray-800 text-cyan-400 w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-xs font-bold">2</span>
                <div>
                    <p className="font-medium text-white">Assessment: Reframe and Decide</p>
                    <p className="text-sm">Scan the state (cash flow, team engagement, sustenance). Question the advisor's weightings. Write a free-form plan acknowledging trade-offs.</p>
                </div>
            </li>
            <li className="flex gap-3">
                <span className="bg-gray-800 text-cyan-400 w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-xs font-bold">3</span>
                <div>
                    <p className="font-medium text-white">Resolution: Consequences Compound</p>
                    <p className="text-sm">Feedback arrive as a neutral debrief. Descriptive sentences on reasoning dimensions. Even a "Strong" plan can end in collapse if variables were neglected.</p>
                </div>
            </li>
            <li className="flex gap-3">
                <span className="bg-gray-800 text-cyan-400 w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-xs font-bold">4</span>
                <div>
                    <p className="font-medium text-white">Reflection: Journal</p>
                    <p className="text-sm">Log a short entry. The system archives the reasoning trace for future runs to reference blind spots.</p>
                </div>
            </li>
        </ul>
        <p className="italic text-cyan-400">Next — Why We Built Last Prompt: The engine that turns Chronosymbiosis into reality.</p>
      </div>
    ),
  },
  {
    id: "post-10",
    title: "Post 10: Why We Built Last Prompt",
    icon: Cpu,
    content: (
      <div className="space-y-4 text-gray-300">
        <p>We did not set out to build another simulation game. We built the engine ourselves because existing tools didn't close the loop for real transitions.</p>
        <p><span className="text-white font-bold">Last Prompt</span> is the first public implementation of Chronosymbiosis — a modular decision engine designed for 2026 velocity.</p>
        <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gray-900 border border-gray-800 p-4 rounded">
                <p className="text-white font-semibold mb-1 text-sm">One engine, infinite skins</p>
                <p className="text-xs">Same logic powers colony survival and corporate reckoning. Judgment learned in one transfers to another.</p>
            </div>
            <div className="bg-gray-900 border border-gray-800 p-4 rounded">
                <p className="text-white font-semibold mb-1 text-sm">Brutally honest evaluator</p>
                <p className="text-xs">Feedback on reasoning quality (variable awareness, risk anticipation). Cannot be gamed with simple scores.</p>
            </div>
        </div>
        <p>We built it because waiting for experience to catch up is no longer viable. High-achievers who mastered structured excellence deserve a way to build antifragile judgment deliberately.</p>
        <p className="italic text-cyan-400">Next — One Engine, Many Worlds: How modular skins let you train judgment portability.</p>
      </div>
    ),
  },
  {
    id: "post-11",
    title: "Post 11: One Engine, Many Worlds",
    icon: Globe,
    content: (
      <div className="space-y-4 text-gray-300">
        <p>The magic is in the modularity: swap "skins" to shift worlds, but keep the same reasoning muscle.</p>
        <ul className="space-y-4">
            <li>
                <h4 className="text-cyan-400 font-semibold text-sm uppercase tracking-wider mb-2">Colony Skin</h4>
                <p className="text-sm">Post-collapse survival. Manage a fragile outpost. Advisors like the Head of Security (perimeter-first) test trade-offs across sustenance, health, and cohesion.</p>
            </li>
            <li>
                <h4 className="text-orange-400 font-semibold text-sm uppercase tracking-wider mb-2">Corporate Skin</h4>
                <p className="text-sm">Global enterprise reckoning. Characters like the paranoid CISO or effort-oracle Head of Market Analysis deliver biased inputs. Crises span budget crunches to AI pivots.</p>
            </li>
        </ul>
        <div className="bg-gray-900 p-4 rounded-lg border border-red-500/20">
            <p className="text-white font-semibold flex items-center gap-2 mb-2"><BarChart3 className="w-4 h-4 text-red-500" /> Black Swans</p>
            <p className="text-sm italic">"Prolonged stability increases black swan odds — because complacency creeps in. They force adaptation: when the unexpected multiplies, judgment thrives."</p>
        </div>
        <p className="italic text-cyan-400">Next — Preparing for the Real World Again: Closing the gap for good.</p>
      </div>
    ),
  },
  {
    id: "post-12",
    title: "Post 12: Preparing for the Real World Again",
    icon: BookOpen,
    content: (
      <div className="space-y-4 text-gray-300">
        <p>Let’s return to where we began. Two perspectives, one profound disconnect. Intelligent high-achievers feeling "at sea" because the preparation excels at one game — predictable and rubric-defined — while the real game is fluid and accelerating.</p>
        <p><span className="text-white font-bold">Chronosymbiosis</span> is the response. <span className="text-white font-bold">Last Prompt</span> is that loop made real.</p>
        <p>This is not about becoming infallible. It is about becoming <span className="text-white font-bold italic">antifragile</span>: stronger under pressure, clearer in fog, more resilient to black swans, more attuned to hidden trade-offs.</p>
        <p>The judgment gap has been systemic for years. It has left too many capable people questioning why their preparation doesn’t carry over — and too many organizations paying the price.</p>
        <p className="font-semibold text-white">Join the waitlist. Start closing the gap.</p>
        <div className="pt-4">
            <Link href="/#contact">
                <Button className="bg-cyan-500 hover:bg-cyan-600 text-black font-bold px-8 py-6 h-auto text-lg w-full md:w-auto transition-transform hover:scale-105 active:scale-95">
                    JOIN THE WAITLIST
                </Button>
            </Link>
        </div>
      </div>
    ),
  },
];

export default function HiddenGapPage() {
  return (
    <div className="pt-24 pb-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-screen overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-cyan-500/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-orange-500/10 blur-[120px] rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-[800px] mx-auto px-6">
        {/* Header */}
        <div className="mb-12 space-y-4">
          <Link href="/" className="inline-flex items-center text-sm text-gray-400 hover:text-cyan-400 transition-colors gap-2 group mb-4">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-white">
            The <span className="text-cyan-400">Hidden</span> Gap
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed max-w-2xl font-medium">
            Why High-Achievers from the Best Schools Still Struggle to Translate Success into Judgment
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-8">
            <Accordion type="single" collapsible className="w-full space-y-4">
                {POSTS.map((post) => (post.id !== "post-12" && (
                    <AccordionItem key={post.id} value={post.id} className="border border-gray-800 rounded-xl px-4 bg-gray-900/20 hover:bg-gray-900/40 transition-all">
                        <AccordionTrigger className="hover:no-underline py-6">
                            <div className="flex items-center gap-4 text-left">
                                <div className="p-2 rounded-lg bg-gray-800 text-cyan-400 shrink-0">
                                    <post.icon className="w-5 h-5" />
                                </div>
                                <span className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                                    {post.title}
                                </span>
                            </div>
                        </AccordionTrigger>
                        <AccordionContent className="text-base text-gray-300 border-t border-gray-800 mt-2 pt-6 pb-8">
                            {post.content}
                        </AccordionContent>
                    </AccordionItem>
                )))}
            </Accordion>

            {/* Final post - expanded by default or just showing at bottom */}
            <div className="bg-gradient-to-br from-cyan-900/20 to-orange-900/10 border border-cyan-500/30 rounded-2xl p-8 md:p-12 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-20">
                    <BookOpen className="w-24 h-24 text-cyan-400 rotate-12" />
                </div>
                <div className="relative z-10">
                    <h2 className="text-3xl font-black text-white mb-6 flex items-center gap-3">
                        <BookOpen className="w-8 h-8 text-cyan-400" />
                        {POSTS[POSTS.length - 1].title}
                    </h2>
                    <div className="text-lg leading-relaxed text-gray-200">
                        {POSTS[POSTS.length - 1].content}
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
