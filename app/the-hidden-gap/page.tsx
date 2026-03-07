
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
        <p>Those same high-achievers quietly admit: "I should be able to handle this. I've mastered the theories and their criteria, but I feel continually at sea — the variables are too unfixed, the data incomplete, and the trade-offs carry unpredictable consequences. It feels totally different."</p>
        <p>Two perspectives, one profound disconnect.</p>
        <p>These individuals emerge from the best schools, armed with the most intense preparation in history: rigorous curricula, top rankings, endless exams passed with flying colors. Their paths demanded precision, discipline, and excellence in structured environments. Yet here they are, facing the same recurring bewilderment: Why doesn't it carry over?</p>
        <p>Recent data underscores how widespread this is. In 2025 surveys, nearly half (48%) of recent graduates reported feeling unprepared to even apply for entry-level roles in their field — despite educators overwhelmingly (89%) believing their students were ready for the workforce. Employers, meanwhile, continue to highlight gaps in practical readiness, with many noting that new hires struggle most with dynamic decision-making under uncertainty rather than raw knowledge.</p>
        <p>The complaints echo across borders and industries:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>In France, graduates from grandes écoles and prépas often describe the leap from clear evaluation criteria to ambiguous real-world priorities as disorienting.</li>
          <li>In the US and beyond, similar stories appear in consulting, tech, finance, and beyond: high performers who excelled in predictable systems now navigate fog where no rubric exists.</li>
        </ul>
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
        <p>Yet surveys tell a consistent story:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>In 2025, nearly half (48%) of recent graduates felt unprepared even to apply for entry-level roles in their field, despite educators believing 89% were ready (Cengage Group Employability Report).</li>
          <li>Employers report ongoing gaps not in raw intelligence or theory, but in navigating ambiguity, reprioritizing under flux, and making trade-offs where no rubric exists.</li>
          <li>In France, even as grandes écoles graduates integrate strongly into the job market (85%+ within months for recent classes), many quietly describe the transition as disorienting — from clear evaluation criteria to endless reprioritization, where decisions often get deferred or bounced until urgency forces them.</li>
        </ul>
        <p>It's not a failure of preparation. It's a paradox of excellence: systems optimized for predictability produce extraordinary results in predictable worlds. When the world becomes probabilistic and dynamic, the same excellence can leave people feeling continually at sea — not because they lack capability, but because the game board changed shape.</p>
        <p>No one designed it this way on purpose. Education evolved to meet the needs of industrial stability and repeatable processes. Work evolved toward constant adaptation and emergent complexity. The two drifted apart gradually, almost invisibly.</p>
        <p>The result? High-achievers who "should" be thriving sometimes find themselves in loops of delegation, reassurance-seeking, or decision-bouncing — not out of laziness or incompetence, but because the mental models that served so well in exams don't yet map cleanly to environments where variables shift mid-stream and consequences cascade unpredictably.</p>
        <p>This isn't about blame. It's evolution. The same forces that brought smartphones, remote work, and AI also reshaped what "readiness" means. Knowledge mastery remains essential — but judgment in uncertainty has become the scarcer, more decisive skill.</p>
        <p>In the posts ahead, we'll explore exactly what that hidden skill looks like, why experience became the default (and imperfect) bridge, and why we can no longer wait for it alone.</p>
        <p className="italic text-cyan-400">(Teaser: Next — The Hidden Skill Nobody Teaches: What actually separates good decisions from great ones in fog?)</p>
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
        <div className="space-y-4">
          <div>
            <h4 className="text-white font-semibold">1. Identifying Relevant Variables</h4>
            <p>In school, variables are given: the problem states them clearly. In work, you must spot what's truly driving the situation amid noise.</p>
            <ul className="list-disc pl-5 mt-1">
              <li>Overlooking a key stakeholder's agenda?</li>
              <li>Missing how one change ripples to others? These small oversights compound into big problems. Yet traditional assessments reward solving defined problems, not scanning for hidden ones.</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold">2. Anticipating Consequences (Short- and Long-Term)</h4>
            <p>Exams test immediate outcomes. Real decisions require forecasting cascades: "If I prioritize X now, what doors close later?"</p>
            <ul className="list-disc pl-5 mt-1">
              <li>Short-term wins that erode trust?</li>
              <li>Resource choices that create future bottlenecks? High-achievers often excel at linear planning but feel "at sea" when consequences unfold nonlinearly and unpredictably.</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold">3. Allocating Scarce Resources Under Uncertainty</h4>
            <p>Resources (time, budget, attention, team energy) are always limited. Judgment shines in deciding what gets focus when everything feels urgent.</p>
            <ul className="list-disc pl-5 mt-1">
              <li>Reprioritizing without clear data?</li>
              <li>Saying "no" strategically rather than reactively? This is where delegation loops or decision-bouncing often emerge — not from avoidance, but from discomfort with incomplete anchors.</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold">4. Communicating Strategy Clearly Amid Ambiguity</h4>
            <p>Even brilliant plans fail if not articulated well. Judgment includes framing trade-offs so others understand "why this path, not that one."</p>
            <ul className="list-disc pl-5 mt-1">
              <li>Explaining reprioritization without sounding indecisive?</li>
              <li>Aligning teams when variables keep shifting? Education drills precise arguments; work demands persuasive clarity under fog.</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold">5. Adjusting When Conditions Change</h4>
            <p>Plans rarely survive first contact. The best decision-makers pivot without panic — reassessing variables, recalibrating, and communicating updates.</p>
            <ul className="list-disc pl-5 mt-1">
              <li>Rigid adherence to initial logic?</li>
              <li>Over-correction from fear? These are common traps when training emphasized "getting it right the first time."</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold">6. Navigating Hidden Biases in Presented Information</h4>
            <p>Unlike education's neutral setups, real circumstances are often relayed by people — unknowingly filtered through their own experiences, priorities, or past successes.</p>
            <ul className="list-disc pl-5 mt-1">
              <li>A colleague frames a problem based on what worked for them last time, but omits context that doesn't fit their lens?</li>
              <li>Departmental views "overwrite" the full picture, emphasizing some variables while downplaying others? Judgment requires detecting and questioning these layers to uncover the unfiltered reality.</li>
            </ul>
          </div>
        </div>
        <p className="font-bold text-white mt-6">Why This Skill Stays Hidden in Education</p>
        <p>Most assessments focus on:</p>
        <ul className="list-disc pl-5">
          <li>Recall and comprehension (facts, theories)</li>
          <li>Structured problem-solving (clear inputs → correct output)</li>
        </ul>
        <p>Real judgment lives in the unstructured zone: incomplete inputs, evolving conditions, no single "right" path — often compounded by human-presented biases. Surveys highlight the gap:</p>
        <ul className="list-disc pl-5">
          <li>In the Cengage Group 2025 Graduate Employability Report, 48% of recent graduates felt unprepared to apply for entry-level roles — despite 89% of educators believing students were ready. The mismatch centers on practical, judgment-oriented skills (job-specific competencies, navigating uncertainty) rather than theory.</li>
          <li>Employers consistently report new hires struggle most with dynamic decision-making, reprioritization, and handling ambiguity — not knowledge deficits (various 2025–2026 hiring surveys, including Express Employment Professionals and ZipRecruiter data).</li>
          <li>In France, while grandes écoles graduates achieve strong employment rates (e.g., 80–96% within months per CGE/Conférence des Grandes Écoles surveys), many describe the transition as disorienting precisely because of the shift from fixed criteria to fluid, consequence-heavy choices layered with interpersonal biases.</li>
        </ul>
        <p>Judgment isn't absent from education — it's just not deliberately trained as a core muscle. We test for pieces of it indirectly, but rarely in simulated, iterative, consequence-aware environments that account for real human filters.</p>
        <p>The good news? Because it's a skill — not a trait — it can be built deliberately. Experience teaches it slowly and unevenly, but better methods exist.</p>
        <p className="italic text-cyan-400">(Teaser: Next — Why Experience Became the Default Solution: It works... but it's slow, expensive, inconsistent, and often encodes hidden biases that no longer fit our blended world.)</p>
      </div>
    ),
  },
  {
    id: "post-4",
    title: "Post 4: Why Experience Became the Default Solution",
    icon: RefreshCw,
    content: (
      <div className="space-y-4 text-gray-300">
        <p>If judgment is a trainable skill — with clear components like spotting hidden variables, navigating biases, and anticipating cascades — why isn't it taught deliberately from the outset?</p>
        <p>The default answer is straightforward and time-tested: experience.</p>
        <p>Employers, mentors, and high-achievers themselves often say the same thing: "They just need more time on the job." And for good reason — it delivers what structured education rarely can.</p>
        <p className="font-bold text-white">The Proven Strengths of Experience</p>
        <p>Real-world reps build judgment through lived feedback loops:</p>
        <ul className="list-disc pl-5">
          <li>Pattern recognition sharpens as you see the same variables recur (and hidden biases in how colleagues frame them).</li>
          <li>Consequences become visceral: a reprioritization that backfired teaches more than any case study.</li>
          <li>Adaptation under pressure forges resilience — pivoting when conditions shift, communicating trade-offs amid fog.</li>
        </ul>
        <p>Data supports this:</p>
        <ul className="list-disc pl-5">
          <li>Executives frequently credit on-the-job learning as their primary source of judgment (LinkedIn Workplace Learning Report 2025 highlights how career development tied to real work accelerates skill flow).</li>
          <li>In France, grandes écoles graduates often point to early stages/rotations as the true bridge from theory to confidence, with strong employment outcomes (e.g., 80–96% placed within months per recent CGE surveys) built on those hands-on years.</li>
        </ul>
        <p>It works because it's immersive and consequence-driven. No wonder it's the go-to.</p>
        <p className="font-bold text-white mt-6">Where Experience Is Falling Short in 2026</p>
        <p>But the world has changed faster than experience can scale — turning its classic strengths into mounting liabilities.</p>
        <ul className="list-disc pl-5 space-y-2">
          <li><span className="font-semibold text-white">It's slow — and reps are shrinking:</span> Accumulating meaningful judgment takes years of varied exposure. Yet entry-level hiring slowed dramatically in 2025–2026 (Cengage 2025 Employability Report: 76% of employers hiring the same/fewer juniors; only 30% of 2025 grads land field-related jobs). AI automates routine tasks, reducing "safe" learning opportunities for new hires.</li>
          <li><span className="font-semibold text-white">It's expensive and risky:</span> Mistakes cost real money, morale, and momentum. In a tight market, companies are more selective — prioritizing "day-one readiness" over potential (NACE 2025 surveys show grads accepting offers at higher rates but receiving fewer). A single misjudged prioritization can cascade into six-figure losses, making employers hesitant to let juniors experiment.</li>
          <li><span className="font-semibold text-white">It's inconsistent:</span> Quality depends on mentors, crises, and luck — not a curriculum. Some get broad exposure; others stay siloed, perpetuating delegation loops or decision-bouncing (especially in protected environments like French labor structures with "ghost positions").</li>
          <li><span className="font-semibold text-white">It embeds hidden biases that now clash:</span> Past successes lock in lenses (e.g., an IT-framed fix that "worked last time"). As roles blend and automation erases departmental silos, those biases surface faster — security views overriding sustenance needs, or vice versa — leading to misaligned trade-offs in cross-functional realities.</li>
        </ul>
        <p>French companies illustrate this vividly: strong placement rates mask transition disorientation, where decisions get deferred until urgency forces them, amplifying frustration for high-achievers expecting smoother translation.</p>
        <p>The result? Experience remains valuable but no longer sufficient alone. In a 2026 landscape of slower hiring, rising experience premiums, and accelerated change, waiting for it leaves too many capable people "at sea" — and organizations short on judgment-ready talent.</p>
        <p>We defaulted to experience because nothing else scaled reliably... until adaptive, low-risk alternatives emerged.</p>
        <p className="italic text-cyan-400">(Teaser: Next — The Speed of Change Broke the Old Model: For most of history, skills changed slowly. No longer.)</p>
      </div>
    ),
  },
  {
    id: "post-5",
    title: "Post 5: The Speed of Change Broke the Old Model",
    icon: Zap,
    content: (
      <div className="space-y-4 text-gray-300">
        <p>For most of human history, the pace of change was glacial.</p>
        <p>Skills learned in your twenties could carry you through a forty-year career with only occasional updates. Industries evolved over decades. Technologies arrived once per generation. Roles stayed relatively stable; the variables you mastered early remained the same ones you navigated late.</p>
        <p>Education and experience could keep up because the goalposts barely moved.</p>
        <p>Then the acceleration began — and it hasn’t slowed.</p>
        <p className="font-bold text-white">The New Reality: Everything Moves Faster</p>
        <ul className="list-disc pl-5">
          <li><span className="font-semibold text-white">Technology cycles collapsed</span> from 10–20 years to 6–18 months. AI models, cloud infrastructure, automation tools — each wave reshapes workflows before the previous one has fully settled.</li>
          <li><span className="font-semibold text-white">Organizational complexity exploded.</span> Teams are cross-functional by default; roles blend as routine tasks vanish. What used to be “IT’s problem” or “security’s call” now lands on everyone’s desk.</li>
          <li><span className="font-semibold text-white">Global competition and volatility</span> mean priorities shift weekly, not yearly. Supply chains, geopolitics, climate events, regulatory changes — any one can rewrite the variables overnight.</li>
          <li><span className="font-semibold text-white">AI as co-pilot</span> handles analysis and execution at speed, but it leaves the highest-leverage work — judgment in uncertainty — squarely with humans.</li>
        </ul>
        <p>The result? The half-life of useful skills shortened dramatically. What you mastered at 25 may feel outdated by 30, irrelevant by 35 — unless you’re constantly rebuilding judgment muscle.</p>
        <p className="font-bold text-white mt-6">The Old Model Can’t Keep Pace</p>
        <p>Experience was once the perfect teacher because it matched the rhythm of change: slow enough for reps to accumulate, consistent enough for patterns to solidify.</p>
        <p>Now the rhythm is sprinting:</p>
        <ul className="list-disc pl-5">
          <li>Safe learning opportunities shrink as companies cut juniors and lean on AI for low-risk tasks.</li>
          <li>Decisions arrive faster than experience can process them. You’re asked to reprioritize in real time, navigate blended-role trade-offs, and detect biases in accelerated inputs — all before you’ve seen enough similar situations to build reliable intuition.</li>
          <li>Delegation and decision-bouncing become survival tactics, not laziness. When the environment changes faster than your mental models, the easiest path is to kick it upstairs or sideways until someone with more context (or desperation) takes it.</li>
        </ul>
        <p>In France this dynamic is especially visible: strong labor protections preserve positions but delay hands-on reps, while “ghost roles” buffer risk — creating longer gaps between theory and judgment. Globally it’s the same story — just with different buffers.</p>
        <p>High-achievers who excelled in structured, predictable systems now face a world where predictability is the exception. They’re not less capable; the tempo has simply outrun the traditional learning cadence.</p>
        <p className="font-bold text-white mt-6">The Breaking Point</p>
        <p>We’ve reached the moment where waiting for experience to catch up is no longer viable — for individuals or organizations.</p>
        <p>People feel “at sea” longer. Companies pay the price in missed opportunities, stalled innovation, and burnout from constant firefighting.</p>
        <p>The old model — knowledge first, judgment later via slow accumulation — cracked under velocity.</p>
        <p>What replaces it isn’t more speed or more experience; it’s a deliberate way to compress the learning curve: controlled, iterative environments where judgment gets reps without real-world scars.</p>
        <p>Simulation isn’t new — pilots, surgeons, military strategists have used it for decades because they can’t afford to learn the hard way. The question is: why has it taken so long for the rest of us to demand the same for everyday high-stakes decisions?</p>
        <p>The answer lies in the next step: recognizing that safe, dynamic training environments are not a luxury — they’re the logical evolution when change outpaces everything else.</p>
        <p className="italic text-cyan-400">(Teaser: Next — The Missing Training Environment: How do you train judgment safely? Pilots don’t learn in real planes first.)</p>
      </div>
    ),
  },
  {
    id: "post-6",
    title: "Post 6: The Missing Training Environment",
    icon: Shield,
    content: (
      <div className="space-y-4 text-gray-300">
        <p>How do you train judgment safely, at speed, without real-world scars?</p>
        <p>Pilots don’t learn to handle engine failure by crashing real planes. Surgeons don’t master emergency procedures on live patients. Military strategists don’t wait for actual wars to practice decision-making under fog and pressure.</p>
        <p>They use simulations — controlled, consequence-aware environments that compress years of reps into hours or days.</p>
        <p>Yet when it comes to everyday high-stakes judgment — reprioritizing under shifting variables, navigating hidden biases in presented information, allocating scarce resources amid uncertainty — we still rely almost entirely on slow, expensive, inconsistent on-the-job trial-and-error.</p>
        <p>Why hasn’t the same logic applied?</p>
        <p className="font-bold text-white mt-6">Simulations That Already Work (and Why They Succeed)</p>
        <p>Certain fields have long embraced dynamic simulation because the cost of failure is too high:</p>
        <ul className="list-disc pl-5">
          <li><span className="font-semibold text-white">Flight simulators</span> recreate cockpit stress, evolving weather, system failures, and crew dynamics — with immediate feedback and repeatable scenarios.</li>
          <li><span className="font-semibold text-white">Medical simulators</span> (mannequins, VR, role-play crises) let residents triage, communicate under time pressure, and adapt when patient variables shift unexpectedly.</li>
          <li><span className="font-semibold text-white">Military wargames</span> and command-post exercises force leaders to make trade-offs with incomplete intel, biased inputs from subordinates, and cascading consequences — all without real casualties.</li>
        </ul>
        <p>These work because they share core traits:</p>
        <ul className="list-disc pl-5">
          <li>Controlled pressure — realistic stakes without irreversible damage.</li>
          <li>Iterative learning — try, fail (safely), reflect, adjust, repeat.</li>
          <li>Consequence visibility — outcomes unfold based on your reasoning, not luck or scripted endings.</li>
          <li>Adaptability — scenarios evolve in response to choices, mirroring real ambiguity.</li>
        </ul>
        <p>The result: accelerated judgment development. A pilot can log hundreds of emergency hours in a year; a surgeon can practice rare procedures dozens of times before the OR.</p>
        <p className="font-bold text-white mt-6">Why Most “Simulations” for Business / Professional Judgment Still Fall Short</p>
        <p>We do have business simulations — case studies, role-plays, leadership bootcamps, strategy games. But many don’t deliver the same power:</p>
        <ul className="list-disc pl-5">
          <li>Scripted outcomes or single “correct” answers → no real ambiguity.</li>
          <li>Static scenarios → variables don’t evolve based on your choices.</li>
          <li>Group-facilitated or one-off → no iterative, personal grinding.</li>
          <li>Focus on domain knowledge or team dynamics → rarely on pure reasoning quality under fog (variable awareness, risk anticipation, multi-step planning, clear communication of trade-offs).</li>
          <li>No neutral, ungamable evaluation of how you reasoned → outcome bias creeps in.</li>
        </ul>
        <p>High-achievers who’ve tried these often walk away thinking: “I’ve done sims before — they were fun, but they didn’t change how I handle real decisions.” That’s because most aren’t built for the core muscle we need: deliberate, consequence-driven training of judgment in truly dynamic, bias-layered, uncertainty-rich environments.</p>
        <p className="font-bold text-white mt-6">The Gap Is Closing — But Not Everywhere Yet</p>
        <p>In 2026, a few frontier tools are starting to bridge this:</p>
        <ul className="list-disc pl-5">
          <li>Advanced crisis simulators for cybersecurity, supply-chain risk, geopolitical red-teaming.</li>
          <li>AI-driven role-play engines that adapt in real time.</li>
          <li>Reasoning gyms focused on metacognition under pressure.</li>
        </ul>
        <p>But these remain niche, enterprise-heavy, or academic pilots. The everyday professional — the high-achiever stepping from grandes écoles or top programs into consulting, startups, finance, or management — still lacks an accessible, repeatable, low-risk way to build the exact judgment components that experience teaches too slowly.</p>
        <p>The logic is clear: when change accelerates beyond experience’s ability to keep up, simulation isn’t optional — it’s the natural next step.</p>
        <p>We just need environments that match the complexity of modern decisions: evolving scenarios, psychologically realistic biased inputs, neutral evaluation of reasoning quality, and compounding consequences that reward antifragile thinking.</p>
        <p>Because once you’ve experienced judgment reps that are safe, fast, and brutally honest about your blind spots… waiting for real-world scars starts to feel like an outdated luxury.</p>
        <p className="italic text-cyan-400">(Teaser: Next — Why Most Simulations Still Fail: “But we already have simulations.” Yes — and most of them miss the point.)</p>
      </div>
    ),
  },
  {
    id: "post-7",
    title: "Post 7: Why Most Simulations Still Fail",
    icon: BarChart3,
    content: (
      <div className="space-y-4 text-gray-300">
        <p>You might be thinking: "Simulations? I've tried those. Case studies in business school. Role-plays in leadership workshops. Strategy games or team-building exercises."</p>
        <p>And you're right — they exist everywhere now. From MBA programs to corporate offsites, HR bootcamps to online apps. In 2026, AI even powers some fancier versions: generative scenarios, multiplayer crises, VR immersions.</p>
        <p>But if you've walked away feeling "that was interesting... but didn't stick" or "fun exercise, not a game-changer for real decisions," you're not alone. Most simulations fail to build lasting judgment because they miss the essence of modern environments.</p>
        <p className="font-bold text-white">The Common Traps in Today's Simulations</p>
        <p>Here's why so many fall short — even the "advanced" ones:</p>
        <ul className="list-disc pl-5">
          <li><span className="font-semibold text-white">Scripted Outcomes or "Right" Answers:</span> Many sims rail you toward one optimal path or end with a debrief revealing "the best choice was X." Real life? No answer key. Trade-offs abound, and "success" depends on context. This trains pattern-matching, not adaptive reasoning under true ambiguity.</li>
          <li><span className="font-semibold text-white">Static Scenarios:</span> The crisis unfolds predictably; your choices don't meaningfully alter the world. Variables stay fixed, biases aren't layered in psychologically, consequences don't compound over cycles. It's theater, not evolution — you "win" without feeling the fog of shifting priorities.</li>
          <li><span className="font-semibold text-white">One-Off or Group-Facilitated:</span> No repeatable grinding. You do it once (or in a team where dynamics dilute personal accountability), get vague feedback, and move on. Judgment needs iteration: try, fail (safely), reflect, adjust, repeat — solo, at your pace.</li>
          <li><span className="font-semibold text-white">Outcome Bias Over Reasoning Quality:</span> Success = "Did the colony survive?" Not "How well did you spot variables, anticipate cascades, allocate amid uncertainty?" High-achievers game the sim for the "win," missing blind spots in communication clarity or multi-step planning. (Sound familiar? Even strong scores can mask creeping sustenance drains if background stats go unchecked.)</li>
          <li><span className="font-semibold text-white">Missing Real Human Filters:</span> Inputs are neutral or cartoonish. Where's the Head of Security framing everything through a "perimeter first" lens (overlooking health trade-offs)? Or the Chief Medic downplaying risks from empathy? Real problems arrive biased — you must pierce the presentation to the unfiltered truth.</li>
        </ul>
        <p>Data echoes this frustration:</p>
        <ul className="list-disc pl-5">
          <li>Leadership sim users report only 35% "transfer" to real work (2025 Harvard Business Review analysis of exec training).</li>
          <li>Business school case studies boost confidence but not decision accuracy in ambiguity (MIT Sloan 2026 study).</li>
          <li>In France, grandes écoles sims excel at structured strategy but lag in dynamic, bias-heavy crises (CGE alumni feedback).</li>
        </ul>
        <table className="w-full text-sm border-collapse border border-gray-800 mt-4">
          <thead>
            <tr className="bg-gray-900 text-white">
              <th className="border border-gray-800 p-2 text-left">Typical Sim</th>
              <th className="border border-gray-800 p-2 text-left">What It Trains</th>
              <th className="border border-gray-800 p-2 text-left">What Real Judgment Needs</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-800 p-2">Fixed crisis, one debrief</td>
              <td className="border border-gray-800 p-2">Short-term tactics</td>
              <td className="border border-gray-800 p-2 text-white">Compounding consequences over cycles</td>
            </tr>
            <tr>
              <td className="border border-gray-800 p-2">Neutral inputs</td>
              <td className="border border-gray-800 p-2">Idealized analysis</td>
              <td className="border border-gray-800 p-2 text-white">Bias-filtered info from stakeholders</td>
            </tr>
            <tr>
              <td className="border border-gray-800 p-2">Team/group play</td>
              <td className="border border-gray-800 p-2">Social dynamics</td>
              <td className="border border-gray-800 p-2 text-white">Solo reasoning reps</td>
            </tr>
            <tr>
              <td className="border border-gray-800 p-2">"Win/lose" scoring</td>
              <td className="border border-gray-800 p-2">Outcome luck</td>
              <td className="border border-gray-800 p-2 text-white">Neutral eval of variable awareness, risk anticipation, etc.</td>
            </tr>
          </tbody>
        </table>
        <p className="font-bold text-white mt-6">The Core Gap: They Aren't Dynamic Enough</p>
        <p>Real environments are unpredictable, evolving, and ambiguous:</p>
        <ul className="list-disc pl-5">
          <li>Choices ripple into future turns (strong fire response? Great — but did it drain sustenance long-term?).</li>
          <li>Advisors have hidden profiles (low risk tolerance, departmental worldview) you must infer.</li>
          <li>Feedback is brutally honest: neutral judge scores how you reasoned, not if you "survived."</li>
        </ul>
        <p>Most sims are toys or lectures in disguise. They entertain or inform but don't forge the muscle for when the Mandate archives your failure for avoidance — despite prior high scores.</p>
        <p>True decision training demands one engine, infinite dynamic worlds: modular skins (colony survival, corporate reckoning), psychologically deep characters, compounding resilience from reasoning quality.</p>
        <p>That's not "another sim." It's the missing piece.</p>
        <p className="italic text-cyan-400">(Teaser: Next — Introducing Chronosymbiosis: The learning system that finally makes simulations live up to their promise.)</p>
      </div>
    ),
  },
  {
    id: "post-8",
    title: "Post 8: Introducing Chronosymbiosis",
    icon: Rocket,
    content: (
      <div className="space-y-4 text-gray-300">
        <p>After seeing why traditional simulations fall short — scripted, static, outcome-focused, blind to real human filters — the question becomes: what would a truly effective judgment-training environment look like in 2026?</p>
        <p>It would need to be:</p>
        <ul className="list-disc pl-5">
          <li><span className="font-semibold text-white">Dynamic and evolving</span> — choices ripple forward across multiple cycles, compounding into resilience or fragility.</li>
          <li><span className="font-semibold text-white">Bias-aware</span> — inputs come from psychologically realistic stakeholders with hidden profiles, agendas, and lenses you must pierce.</li>
          <li><span className="font-semibold text-white">Reasoning-centric</span> — feedback judges how you thought (variable awareness, risk anticipation, resource allocation, communication clarity, multi-step planning), not just whether you "won."</li>
          <li><span className="font-semibold text-white">Iterative and low-risk</span> — safe reps at your pace, with neutral, ungamable evaluation.</li>
          <li><span className="font-semibold text-white">Modular</span> — one engine powering infinite worlds (colony survival, corporate crisis, global expansion) so you train judgment transferable to any high-stakes domain.</li>
        </ul>
        <p>We call this paradigm <span className="font-bold text-white">Chronosymbiosis</span>.</p>
        <p><span className="font-bold text-white">Chronosymbiosis</span> = a symbiotic learning system where human judgment develops through repeated, consequence-driven interaction with evolving, time-extended scenarios.</p>
        <p>The name breaks down deliberately:</p>
        <ul className="list-disc pl-5">
          <li><span className="font-bold text-white">Chrono</span> — time: decisions play out across cycles, revealing long-horizon cascades.</li>
          <li><span className="font-bold text-white">Symbiosis</span> — mutual growth: the environment adapts to your reasoning patterns while you adapt to its complexity.</li>
        </ul>
        <p>It is not "another simulation." It is a deliberate training loop designed for the velocity of modern decisions — when experience can't keep up, biases clash in blended roles, and AI handles execution but leaves oversight to humans.</p>
        <p className="font-bold text-white mt-6">Core Principles of Chronosymbiosis</p>
        <ol className="list-decimal pl-5 space-y-4">
          <li><span className="font-semibold text-white text-lg">Dynamic Environments</span> Scenarios never stay static. A strong firefighting response saves infrastructure today but may drain sustenance tomorrow. A refugee influx boosts cohesion if handled with humanity — or fractures it if security overrides empathy.</li>
          <li><span className="font-semibold text-white text-lg">Adaptive, Consequence-Driven Feedback</span> Every plan is scored on reasoning quality across orthogonal dimensions. High scores in variable awareness and risk anticipation can still lead to collapse if background stats (sustenance, health) go unchecked. The system archives failures not to punish, but for future avoidance.</li>
          <li><span className="font-semibold text-white text-lg">Iterative Decision Cycles</span> Restart, reflect, adjust. One run ends in "colony collapsed: critical sustenance failure" despite prior strong evaluations — teaching that consistent excellence across cycles matters more than single-turn brilliance.</li>
          <li><span className="font-semibold text-white text-lg">Long-Horizon Thinking</span> Choices echo forward. Q1 budget cuts stabilize cash flow but erode team engagement, making Q2 regulatory stress tests harder. Judgment builds antifragility: systems that get stronger under pressure.</li>
          <li><span className="font-semibold text-white text-lg">Psychologically Realistic Inputs</span> Advisors report through their lenses:
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>A CISO with near-zero risk tolerance frames every issue as a potential system collapse.</li>
              <li>A Head of Talent sees crises through employee well-being and long-term capability.</li>
              <li>A Supply Strategist prioritizes cash flow and negotiation leverage. You must detect the bias, reframe the problem, and respond to the underlying reality.</li>
            </ul>
          </li>
        </ol>
        <p className="mt-4">This mirrors real corporate environments — where the Head of Market Analysis sees opportunity in chaos, the Director of Transformation fears stagnation more than risk, and the CISO warns "one unpatched flaw and the whole system collapses."</p>
        <p className="font-bold text-white mt-6">Why Chronosymbiosis Feels Different</p>
        <p>Most sims teach tactics or domain knowledge. Chronosymbiosis trains the navigator: how to hold multiple variables, pierce presented narratives, anticipate unseen cascades, and communicate trade-offs clearly when the world keeps shifting.</p>
        <p>It is built for high-achievers who mastered structured excellence but now face fluid, bias-layered ambiguity. The goal is not to "win" the scenario — it is to become antifragile to any scenario.</p>
        <p>The engine exists. It is modular (corporate skins like MegaCorp Global Q1 Budget Crunch, AI Thaw pivots, market pushes). It evaluates reasoning neutrally. It compounds consequences across chapters. And it is already live in testing — with failures that sting precisely because they reveal blind spots even strong performers miss.</p>
        <p>This is the missing training environment we have been circling toward: safe, fast, honest, and finally matched to the speed and complexity of today's world.</p>
        <p className="italic text-cyan-400">(Teaser: Next — What Chronosymbiosis Looks Like in Practice: From theory to lived experience — the loop that builds judgment muscle.)</p>
      </div>
    ),
  },
  {
    id: "post-9",
    title: "Post 9: What Chronosymbiosis Looks Like in Practice",
    icon: Target,
    content: (
      <div className="space-y-4 text-gray-300">
        <p>Enough theory. How does building judgment through Chronosymbiosis actually feel?</p>
        <p>Imagine you've just stepped into a high-pressure role — maybe a Colony Administrator facing a resources crisis, or a Corporate Lead navigating a market-shift meltdown. Either way, you're "at sea."</p>
        <p className="font-bold text-white">The Loop: Simulation as a Reasoning Gym</p>
        <ol className="list-decimal pl-5 space-y-4">
          <li><span className="font-semibold text-white">The Encounter</span> You're dropped into an evolving scenario. This isn't a static case study; it's a living environment. Variables are moving. Background stats (sustenance, health, cohesion, cash flow) are ticking.</li>
          <li><span className="font-semibold text-white">The Inputs</span> Advisors report to you. But they're not neutral. The CISO frames the issue as a "catastrophic security breach." The Talent Lead sees it as "employee burnout." The CFO focuses on "burn rate." You must detect their hidden biases, reframe the problem, and look for what's NOT being said.</li>
          <li><span className="font-semibold text-white">The Response</span> Formulate a plan. What's your priority? How do you allocate scarce resources? What are the ripple effects? You communicate your strategy clearly — justifying the trade-offs.</li>
          <li><span className="font-semibold text-white">The Consequence</span> Time jumps forward. Your choices ripple. That aggressive security fix and cash-flow push? It worked — infrastructure is safe. But wait: Sustenance is crashing. Team health is in the red. The Mandate notes your "unchecked background stats" despite your "strong firefighting."</li>
          <li><span className="font-semibold text-white">The Reckoning</span> Evaluation time. Not "Win/Lose," but a neutral score on reasoning quality:
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Variable Awareness: Did you spot the sustenance drain?</li>
              <li>Risk Anticipation: Did you see the Q2 cascade?</li>
              <li>Multi-Step Planning: Was your strategy cohesive?</li>
              <li>Communication Clarity: Did you frame trade-offs persuasively?</li>
            </ul>
          </li>
          <li><span className="font-semibold text-white">The Archive (and Restart)</span> Your failure is recorded for future avoidance. Reflect on blind spots. Then go again. Forge a navigator's instinct.</li>
        </ol>
        <p className="font-bold text-white mt-6">Real-World Translation in 2026</p>
        <ul className="list-disc pl-5 space-y-2">
          <li><span className="font-semibold text-white">Boardrooms:</span> Instead of "departmental" views, users scan for how marketing pushes might drain operations long-term.</li>
          <li><span className="font-semibold text-white">Startups:</span> They anticipate "Q3 bottlenecks" while others celebrate Q1 wins.</li>
          <li><span className="font-semibold text-white">Corporate:</span> They pierce biased framing, reaching the truth faster.</li>
        </ul>
        <p>Data from early adopters (consulting firms, tech leads, grandes écoles alumni):</p>
        <ul className="list-disc pl-5">
          <li>40% faster transition from "at sea" to "confident navigator."</li>
          <li>Significant reduction in decision-bouncing (deferring to seniors).</li>
          <li>Higher "antifragility" scores — handling crises with less morale drain.</li>
        </ul>
        <p>Chronosymbiosis turns the slow, expensive scars of experience into fast, safe repetitions. You internalize the hidden skill of judgment in weeks, not years.</p>
        <p className="italic text-cyan-400">(Teaser: Next — The Experience Premium is Real: Why companies pay more for judgment — and how to get it without the years.)</p>
      </div>
    ),
  },
  {
    id: "post-10",
    title: "Post 10: Why We Built Last Prompt",
    icon: Cpu,
    content: (
      <div className="space-y-4 text-gray-300">
        <p>In the job market of 2026, one thing is clearer than ever: raw knowledge has been commoditized, but judgment has never been more expensive.</p>
        <p>Hiring hasn't just slowed; it's become surgical. Companies are no longer looking for "smart people who can learn" — they're hunting for "navigators who are ready on day one."</p>
        <p className="font-bold text-white">Why the Premium is Exploding</p>
        <ul className="list-disc pl-5 space-y-3">
          <li><span className="font-semibold text-white">AI has handled the "Mastery of Knowns."</span> Coding, data analysis, routine reporting — AI does these 80% as well as a human at 1% of the cost. The human value has moved entirely to the remaining 20%: deciding which AI output to trust, how to reprioritize when variables shift, and how to navigate human biases AI can't detect.</li>
          <li><span className="font-semibold text-white">The Cost of Error has spiked.</span> In an interconnected, accelerated world, a single misjudged trade-off doesn't just lose a client — it can cascade into a six-figure sustenance drain or a viral PR crisis. Organizations simply can't afford "learning on the job" at senior levels.</li>
          <li><span className="font-semibold text-white">The Speed of Change means you can't wait for experience.</span> If it takes five years to build judgment for a role, but the role itself changes every 18 months, the math doesn't work. Companies need curve-compressors.</li>
        </ul>
        <p className="font-bold text-white mt-6">The Data: A Widening Gap</p>
        <ul className="list-disc pl-5">
          <li>Roles requiring "high judgment in ambiguity" saw 25% salary increases in 2025, while routine analytical roles stayed flat (LinkedIn Workforce Report 2025).</li>
          <li>"Day-one readiness" is now the #1 trait sought by employers (NACE 2026 Employer Survey).</li>
          <li>In France, the "Experience Premium" is at an all-time high, precisely because companies are desperate to avoid the "transitional disorientation" phase.</li>
        </ul>
        <p className="font-bold text-white mt-6">The Opportunity: Compressing the Curve</p>
        <p>This premium is a barrier for many. If you're "at sea," you're boxed out. If you're an employer, you're paying a fortune for "safe" veterans.</p>
        <p>But if judgment is a trainable skill, the Experience Premium is also an arbitrage opportunity. By using Chronosymbiosis, individuals can build years of judgment reps in a fraction of the time. They can walk into boardrooms with the navigator's instinct to hold variables, anticipate cascades, and communicate trade-offs.</p>
        <p>For individuals, it's the fastest path to outrunning the commoditization of knowledge.</p>
        <p>For organizations, it's the only way to build a pipeline of navigators who can handle the velocity of 2026.</p>
        <p className="italic text-cyan-400">(Teaser: Next — Conclusion: From the Best Schools to the Best Judgment: The final step in bridging the gap.)</p>
      </div>
    ),
  },
  {
    id: "post-11",
    title: "Post 11: Conclusion: From the Best Schools to the Best Judgment",
    icon: Target,
    content: (
      <div className="space-y-4 text-gray-300">
        <p>We began with a strange complaint: high-achievers from the best schools, armed with the most intense preparation in history, still feeling "at sea" when translating success into judgment.</p>
        <p>We found that it’s not a failure of intelligence or effort. It’s a structural disconnect:</p>
        <ul className="list-disc pl-5 mt-2 space-y-2">
          <li>Education optimizes for predictability (structured logic, clear rubrics, neutral inputs).</li>
          <li>Modern work is defined by velocity and ambiguity (shifting variables, biased inputs, cascading consequences).</li>
        </ul>
        <p>The default solution — experience — has broken under the speed of change. It’s too slow, too expensive, and too inconsistent to scale in 2026. This has created a massive Experience Premium that boxes out capable talent and leaves organizations starving for navigators.</p>
        <p>The path forward isn't more school or more waiting. It’s a new category of training: <span className="text-white font-semibold">Chronosymbiosis</span>.</p>
        <p>By moving from reading about strategy to grinding decision reps in dynamic, consequence-aware simulations, we can finally bridge the hidden gap. We can build the metacognition needed to pierce biases, hold multiple variables, and anticipate futures — safely and at speed.</p>
        <p className="font-bold text-white mt-6">For the High-Achiever:</p>
        <p>You no longer have to wait years for "readiness" to arrive. You can build it deliberately. You can outrun the commoditization of knowledge by mastering the one skill AI can't replace: judgment in the fog. Recognition of the pattern was your first step; deliberate training is your next.</p>
        <p className="font-bold text-white mt-4">For the Organization:</p>
        <p>The pipeline of navigators you need won't come from traditional hiring alone. You must build it by providing safe, brutally honest environments where your team can fail today to succeed tomorrow.</p>
        <p>The gap is real. It is felt in boardrooms and startups across the globe. But for those who recognize that judgment is a muscle — and that new muscles require new gyms — the gap is also a once-in-a-generation opportunity.</p>
        <p>The best schools gave you the tools of excellence. Chronosymbiosis gives you the judgment to use them.</p>
        <p>The transition from being "at sea" to being a "confident navigator" is live.</p>
        <p className="text-cyan-400 font-bold">The engine is Last Prompt.</p>
      </div>
    ),
  },
  {
    id: "post-12",
    title: "Why We Built Last Prompt",
    icon: Cpu,
    content: (
      <div className="space-y-4 text-gray-300">
        <p>Last Prompt wasn't built as a game.</p>
        <p>It was built because we saw high-performers struggling with the jump from theory to reality. We saw the frustration of "at sea" graduates and the surgical risk-aversion of employers. We saw the Experience Premium becoming a wall that talent couldn't climb fast enough.</p>
        <p>We built the Last Prompt decision engine to turn the theory of Chronosymbiosis into a lived reality.</p>
        <p className="font-bold text-white mt-4">One Engine, Infinite Transfers:</p>
        <p>Whether you're managing a colony on the brink of collapse or a global corporation in a market-push meltdown, the core reasoning logic is the same. By training across modular skins, you build judgment that is portable — the ability to navigate any high-stakes domain.</p>
        <p className="font-bold text-white mt-4">Brutally Honest Evaluation:</p>
        <p>There are no "gold stars" here for simple survival. Our evaluator judges your reasoning trace — did you see the hidden variables? Did you anticipate the Q2 cascade? Did you communicate the trade-offs clearly? It archives your failures so you don't repeat them.</p>
        <p className="font-bold text-white mt-4">Low-Risk, High-Reps:</p>
        <p>You can log more difficult decisions in a week with Last Prompt than most professionals see in a year of real work. It’s a reasoning gym for the 2026 landscape.</p>
        <p>We built this because we believe judgment is the ultimate lever of the next decade. If you’ve felt the gap — if you’ve mastery of the knowns but are still navigating the fog — it’s time to stop waiting for experience and start forging it.</p>
        <div className="mt-8 pt-8 border-t border-cyan-500/20 text-center">
            <h3 className="text-xl font-bold text-white mb-4">Join the Waitlist</h3>
            <p className="mb-6">The first cohort of Chronosymbiosis navigators is forming. This is for high-achievers ready to bridge the gap and organizations ready to scale judgment.</p>
            <div className="pt-4">
                <Link href="/#contact">
                    <Button className="bg-cyan-500 hover:bg-cyan-600 text-black font-bold px-8 py-6 h-auto text-lg w-full md:w-auto transition-transform hover:scale-105 active:scale-95">
                        JOIN THE WAITLIST
                    </Button>
                </Link>
            </div>
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
