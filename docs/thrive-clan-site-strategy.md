# The Thrive Clan — Site Strategy Brief

Working document for the thethriveclan.com rebuild. Captures the logic, decisions, and open
items from brainstorming, for use as a reference while implementing in VS Code / Claude Code.

---

## 1. The properties

| Property | Role |
|---|---|
| `lastprompt.io` | The product itself — the consequence-bearing reasoning environment |
| `last-prompt.com` | Marketing / practitioner-facing site for Last Prompt |
| `thethriveclan.com` | Authors' home — thesis, people, library. **This is the site being rebuilt.** |
| `ukoilwatch.com` / `eurooilwatch.com` / `americasoilwatch.com` | Regional cascade-risk analysis sites (Jonathan) |

Five domains, four distinct brands. Thrive Clan is not a fifth product — it is the origin site
that explains why the other four exist and how they relate.

---

## 2. The core thesis

Everything traces back to one observation, arrived at independently by both of us and then
recognised as the same insight:

> Institutions and individuals systematically underestimate risk and consequence because they
> assess factors independently and combine them additively. Reality is interactive and
> multiplicative — the damage lives in the interaction, not the individual event.

This shows up four ways:

- **Cascade Modeling** (Jonathan, SSRN-published) — how shocks propagate through interconnected
  real-world systems (Hormuz → fuel → food; UK infrastructure decline chains).
- **Chronosymbiosis** (Last Prompt's own architecture, predates any external contact) — how
  decisions propagate through *time*, reshaping the conditions under which future decisions get
  made. Operationalised in the engine as the `temporal_symbiosis` rubric criterion.
- **Last Prompt** (the product) — trains this pattern-recognition at the scale of one person's
  judgment.
- **Oil Watch** (the three regional sites) — applies the same pattern-recognition to the world,
  live, in public.

Single sentence version, already written and good — keep it:
> "Same problem. Two scales. One method."

**Rule going forward:** state this thesis once, clearly, early (Home). Do not restate it as a
structural split on every subsequent page — that reinforces separation rather than unity.

---

## 3. Naming discipline

Three vocabulary layers currently exist and were stacking on top of each other, which is what
made the site feel over-divided:

1. **Product names** (concrete, what people search for): Last Prompt, Oil Watch
2. **Positioning categories** (descriptive, not proper nouns): decision intelligence,
   resilience intelligence
3. **Methodology terms** (deep-dive only): Cascade Modeling, Chronosymbiosis

Decision: **Layer 1 leads everywhere. Layer 2 is a subtitle/descriptor, never a competing
heading. Layer 3 lives on The Method page only** — not surfaced on Home, About, or Projects.

Retire "Pillar One / Pillar Two" as a label site-wide. Reserve "pillar" language — it implies
two independently load-bearing things by design. Prefer language closer to the thesis itself:
"two scales," "two expressions," "two doors."

---

## 4. Page-by-page plan

### Home
- Keep the hero voice as-is — "One of us arrives with the impossible idea. The other makes it
  rigorous, real, and deployed." This is the human, specific tone to protect throughout the site.
- Under the hero, lead with product names, category as descriptor beneath:
  - **Last Prompt** — decision intelligence for people
  - **Oil Watch** — resilience intelligence for the world
- State the thesis once, briefly, before or alongside these two — do not require the reader to
  reach Projects or The Method to understand why they're related.

### About
- Keep the personal, specific material (2008, the "Miranda kept hoping / Jonathan kept waiting"
  framing). This is the page doing the "we are real people" work — protect it.
- Fix the ending: currently resolves entirely into Last Prompt, leaving Oil Watch orphaned after
  a page that built toward both equally. Close on the shared instinct behind both, not one
  product. Draft direction:
  > "...it's why Jonathan kept watching the Strait of Hormuz while Miranda kept building the
  > thing that trains people to think through what he was seeing. Last Prompt and the Oil Watch
  > sites aren't two different projects we happen to run. They're what happens when neither of
  > us can leave the pattern alone."

### Projects
- Currently opens with "Two distinct pillars, one shared discipline" — the single most
  separation-reinforcing line on the site, arriving before any unifying context.
- Flip the order: lead with the thesis paragraph, then present Last Prompt and Oil Watch as
  applications of it, not as a rigid two-column structural split.
- Drop "Pillar One / Pillar Two" labels. Keep the visual "Explore →" distinction if useful for
  navigation — the layout can still route people correctly without the language insisting on
  separateness before it's earned.

### The Method
- Confirmed clean of OPH references — no changes needed on that front.
- Content is good, especially the "In the decision engine" callouts and the closing line
  ("Same problem. Two scales. One method."). Structural fix only:
  - Move the unifying claim (currently the bottom "One System, Not Two Components" section) to
    the top, folded into or replacing the intro paragraph.
  - Then walk through Cascade Modeling and Chronosymbiosis as the two expressions of it.
  - Drop the now-redundant closing synthesis block once its content has moved up.
  - "Component One / Component Two" labelling is fine to keep here — this is a deep page reached
    after the reader already understands the two products, so the label carries less weight.

### Notes (Library)
- Not a chronological blog. Organise by **form**, not by product — dividing by Last Prompt vs.
  Oil Watch here would be a fourth restatement of the split. This is the one page where the
  throughline should be felt without being argued for.
- Suggested buckets:
  - **Working papers** — SSRN-grade (Compound Cascade Methodology, Protected Generation
    whitepaper)
  - **Reports** — From Hormuz to Hunger, The Fall of the UK
  - **Essays** — shorter, discursive argument pieces
  - **Field notes** — short, dated, non-chronological-but-timestamped observations
  - **Fiction / reflection** — e.g. *The Deceiver*, framed explicitly as the thesis in narrative
    form, not a side project
- Chronosymbiosis/Cascade vocabulary stays quarantined to The Method page — don't let it leak
  into Notes copy aimed at first-time readers.

---

## 5. OPH removal

Decision made: full removal, no ambiguity.

- **Chronosymbiosis is not affected.** Confirmed to predate any OPH contact; the "symbiosis"
  root is a common biological metaphor independently arrived at, not borrowed terminology. Keep
  it as-is, no rename.
- **The Method page** — confirmed clean, no OPH references present in current source.
- **Still to check** once pages are rebuilt and re-fetchable:
  - About, Projects, Home (not yet verified directly — prior review was based on description,
    not confirmed page source)
  - Any papers/whitepapers in the Library for OPH citations or acknowledgments
  - lastprompt.io / last-prompt.com footer, credits, or "built with" sections
  - Any semi-public bios or shared docs referencing the Telegram group
- Documentation to keep on file (not site-published): Soleau deposit and GitHub history
  establishing Last Prompt predates OPH publication and contact. No action needed beyond keeping
  it accessible.

---

## 6. Voice guardrails (carry through every page)

- Warm, plain-spoken, specific — not corporate, not "founders' bio page" generic.
- The finance/supply-chain background and the systems-risk-writer background both matter because
  they explain *why* each of you sees what you see — say that plainly rather than listing résumé
  facts.
- Don't over-explain the four-domain structure on any single page — trust the thesis, stated
  once, to carry the reader to the right place.
- Keep Jonathan's and Miranda's voices distinguishable rather than blended into one generic "we"
  where the content calls for it (About page especially).

---

## 7. Open items / next steps

- [ ] Rebuild Home, About, Projects per Section 4; re-share for a fresh, cache-cleared review
- [ ] Rebuild The Method per the reordering above
- [ ] Design Notes/Library page structure and tagging per Section 4
- [ ] Run the OPH sweep across the still-to-check items in Section 5
- [ ] Decide whether any Method-page content (Cascade Modeling / Chronosymbiosis detail)
      belongs on last-prompt.com as practitioner documentation instead of, or in addition to,
      Thrive Clan
