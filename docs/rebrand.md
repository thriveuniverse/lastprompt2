
### **Mission Statement & Brand Brief — The Mandate**

**Core Positioning**  
**The Mandate** is a private, high-stakes decision intelligence platform. It trains elite judgment by letting leaders write real plans under uncertainty, then revealing the compounding consequences of their reasoning with unsparing clarity.

**Brand Hierarchy**  
- **Primary brand**: **The Mandate** — the product experience people buy and use.  
- **Proprietary engine**: **Last Prompt** — the unique technology that makes it work.  
- **Official tagline**: **The Mandate — Powered by Last Prompt**

"The Mandate" is what the terminal outputs — it names the evaluation/judgment framework being applied, not the delivery mechanism. People aren't buying a crisis sim; they're buying an unsparing verdict on their own reasoning.

### **The Founding Concepts**

Two concepts are core to understanding this product and must be present (implicitly or explicitly) in all copy:

**The Hidden Gap** — the gap between what leaders *think* they decide and what they *actually* communicate and execute. Rooted in the founder's background teaching business English; she sees this constantly. The hidden gap page exists to name this problem for the audience.

**Chronosymbiosis** — you live with the consequences of your decisions even when new information emerges *after* the decision was made. All advisors are highly focused; deciding is always a trade-off. There is no revision. This is not a game mechanic — it is the philosophical core of the platform. It is what makes the debrief land with weight.

**How the engine works (for copy/AI-proofing purposes)**  
The player starts at a point. Every decision they make forms their environment. Every subsequent event is provoked specifically by the environment they created. No two players have the same path because no two inputs are the same. Every play is a unique journey through decisions defined by the player's own reasoning.

### **Strategic Context**

**Origin**: The founder (business English teacher) saw a gap in the market for a decision intelligence engine. Her husband wanted to build a game; she pushed toward a serious decision platform. His contribution — chronosymbiosis — became the philosophical backbone.

**Beta learnings**: Beta testers found the product genuinely, unexpectedly hard. Some panicked. Some left. This confirmed the product works as intended — but revealed the audience must be people who *want* to be tested at this level. The rebrand targets those people specifically.

**The AI summarization test**: The primary signal for whether messaging is working is whether an AI asked to "summarise this product in one sentence" returns something that accurately captures what it is. Previous iterations: AIs misdefined it (March), then understood it but called it "just another simulation" (April). We iterate until the summary is precise. If a sophisticated AI can't classify it correctly, a busy executive won't either.

**Twofold goal of this rebrand**:  
1. Define the product precisely enough that it is not miscategorised  
2. Identify and speak directly to the right audience (high-stakes decision-makers who welcome being tested)

The luxury/premium positioning is not purely aesthetic — it is a filtering mechanism. The product *is* hard. The rebrand reframes hard as exclusive rather than inaccessible.

### **Visual Identity — Midnight Command**

**Colour Palette**  
- **Primary**: Deep charcoal / true black (#0A0A0A)  
- **Brand accent**: Brushed bronze/gold (#C9A66B / hover #D4AF77) — The Mandate identity  
- **UI accent**: Muted teal/cyan — engine/navigation elements  
- **Neutrals**: Cool greys  
- **Threat/Alert**: Subtle faint red-orange (nod to existing UI)

**Skin signature colours (canonical — do not deviate)**

| Skin | Hex | Description |
|---|---|---|
| Colony | #D0633A | Burnt orange / terracotta |
| Corporate Reckoning | #3498DB | Mid blue |
| Lockwood | #BAA5E8 | Soft lavender / violet |

**Overall Feel**: Expensive, serious, slightly military-luxury. Quiet authority. No gamification sparkle.

**Logo Treatment**  
- Main logo: "THE MANDATE" (elegant serif, bronze/gold)  
- Secondary line: "Powered by Last Prompt" (small, muted teal/cyan, clean sans)
- Built in-code (SVG) — no external designer.

**Typography**  
- **Headings**: Satoshi (free)  
- **Body**: Inter (free)

### **Homepage Copy (locked)**

| Element | Copy |
|---|---|
| **Headline** | Many leaders have never truly been tested. |
| **Bridge line** | A private platform for training judgment under real pressure. |
| **Brand attribution** | The Mandate — Powered by Last Prompt *(visually distinct — label weight, not sentence weight)* |
| **Body line 1** | You write the plan in plain English. |
| **Body line 2** | Every decision shapes the world that answers back. |
| **Body line 3** | The ripples of your decisions become the ground you stand on. |
| **Body line 4** | There is no undo. |
| **Pull quote** | Not what you choose. How you reason. *(mid-page visual break)* |
| **Classification block** | The Mandate is not a simulation. Not a course. Not a test you can prepare for. It is a private evaluation of how you reason when it matters. *(placed near Engine section — does classification work without feeling defensive)* |
| **CTA** | Begin Command in the Colony |

**Notes on placement:**
- "Not what you choose. How you reason." was engineered to stop AI misclassification — keep it prominent enough to be indexed.
- The classification block replaces the old "NOT A GAME · NOT A TRAINING COURSE · NOT A PERSONALITY ASSESSMENT" strip. Same logical content; authority register instead of defensive register.
- Much of the current homepage detail moves to /engine, /the-hidden-gap, and /skins — the homepage becomes a hook, not an explanation.

### **Website Architecture (last-prompt.com)**

| Page                  | Purpose                                      | Priority | Top Nav? | Notes |
|-----------------------|----------------------------------------------|----------|----------|-------|
| **Homepage**          | Luxury hook + clear entry point              | Highest  | Yes      | Hook only — detail lives on other pages |
| **Skins** (new)       | Explain ENGINE modularity — not "worlds"     | High     | Yes      | Key message: any skin can run on the engine. People currently think it's a game with different settings. This page corrects that. |
| **The Engine**        | How the reasoning system actually works      | Medium   | Yes      | Receives detail moved off homepage. Lead with "The Last Prompt Engine" |
| **Hidden Gap**        | The core problem it solves                   | Medium   | No       | Deep link from homepage |
| **Observer Patch Holography** | Deeper philosophy                  | Low      | No       | Bottom-linked only |

**Product Entry (.io)**: `lastprompt.io` is the game/decision interface (Unity). New users are guided directly into **Colony** (default). Other skins require explicit request after initial experience.

**Domain split**:  
- `last-prompt.com` — marketing site (this codebase)  
- `lastprompt.io` — game/decision interface

Note: "Last Prompt" as a brand name gets confused with AI prompting advice. "The Mandate" is the hero name that cuts through this.

### **Routes**

- `/corporate-crisis` — keep as-is. "Corporate Reckoning" is the skin name but "crisis" is more immediately understandable to a new visitor.

### **AI-Proofing Strategy**

The product is genuinely novel and sits in no clean category. Without deliberate signals, AI crawlers will default to the nearest familiar bucket (game, simulation, training course). The following layers work together to prevent this — each one addresses a different type of AI visitor.

**Layer 1 — `llms.txt` (direct signal to LLM crawlers)**  
A plain-text file at `/public/llms.txt`, modelled on `robots.txt` but addressed to language models. Anthropic, Perplexity, and others are beginning to read this. It should give a precise product definition in plain language — what it is, what it is not, and where to find depth. This is the most direct channel we have to an AI that is about to summarise the site.

**Layer 2 — Meta description (first thing most crawlers read)**  
The `<meta name="description">` tag must do classification work, not just hook work. Proposed:  
> *"The Mandate is a decision intelligence platform that evaluates how leaders reason under uncertainty. Powered by the Last Prompt engine. Not a game. Not a simulation. Not a course. A private reckoning with your judgment."*

**Layer 3 — Page `<title>` tag**  
> *"The Mandate — Decision Intelligence Platform | Powered by Last Prompt"*  
Avoids "game", "sim", "training". Uses "platform" and "intelligence" as anchoring category signals.

**Layer 4 — JSON-LD schema (structured data for crawlers)**  
Use `SoftwareApplication` schema type — not `Game`, `Course`, or `EducationalOccupationalProgram`. Include explicit `applicationCategory: "DecisionIntelligence"` and a description that mirrors the classification block copy. Placed in `<head>` as a `<script type="application/ld+json">` block.

**Layer 5 — Open Graph tags**  
`og:title`, `og:description`, and `og:type` (use `website`, not `game`). These are read by social crawlers and increasingly by AI scrapers summarising pages from social links.

**Layer 6 — Per-page metadata on /engine and /skins**  
These pages carry the detailed explanation that the homepage no longer holds. Their own meta descriptions should explicitly pick up the classification work and go deeper — so an AI that follows links gets a progressively clearer picture.

**Layer 7 — Sitemap with descriptions**  
An XML sitemap at `/sitemap.xml` listing all pages. Some AI crawlers prioritise sitemap entries when deciding what to index and weight.

**Implementation note**: All of this is handled natively in Next.js App Router via the `metadata` export object in each `page.tsx` / `layout.tsx`, plus a static `llms.txt` in `/public`. No third-party tools needed.

### **Tone of Voice**
- Quiet confidence. Serious. No hype.  
- Speaks to high-achievers who suspect they've never truly been tested.  
- Slightly edged, like a private command briefing.

### **Target Audience**
- Founders, executives, and high-potential leaders who make decisions that matter.  
- Organisations seeking elite command training (custom skins).  
- Individuals who want rigorous private judgment practice.

### **Success Criteria**
- AI summarization test returns a precise, accurate one-sentence description (not "game," not "simulation," not "AI prompting tool").  
- Beta testers immediately understand what to do and feel the weight of the debrief.  
- The site feels premium and exclusive rather than philosophical or technical.  
- Clear path: Try Colony → Discover other skins → Request custom skin.

### **Scope & Phase**
- Beta phase — no customers yet. Admin pages and email templates are lower priority.
- Logo built in-code (SVG). No external designer.
- Phasing TBD — to be decided as work begins.

---
