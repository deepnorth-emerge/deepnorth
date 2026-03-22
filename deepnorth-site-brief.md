# Deep North — Site Build Brief for Claude Code

## Overview

Build and deploy deepnorth.com.au — the professional hub for K Scott Davidson's research, consulting, and speaking practice. The site positions Ken as a researcher and host of explorations about emerging intelligence patterns. It complements (not replaces) his Substack, which handles publication and distribution.

**Positioning line:** "I research patterns of intelligence and host explorations about what is emerging."

---

## Tech Stack

**Framework:** Astro (v4+)
- Static-first with island architecture for interactive components
- Markdown-friendly for content pages
- React islands for the Perspective Engine
- Excellent Lighthouse scores out of the box

**Styling:** Tailwind CSS
**Interactive components:** React (only where needed — perspective engine)
**Deployment:** Netlify or Vercel via GitHub (`~/Projects/deepnorth`)
**Domain:** deepnorth.com.au

---

## Design System

### Vibe
Clean, warm, spacious. The feeling of a well-lit room where serious thinking happens. Not corporate. Not academic. Not "wellness." Intellectual but human. The kind of site a Daniel Schmachtenberger or Nora Bateson would take seriously, but a curious general reader wouldn't bounce from.

### Typography
- **Headings:** A serif with weight — e.g., `Playfair Display`, `Lora`, or `Source Serif Pro`
- **Body:** A clean sans — e.g., `Inter`, `Source Sans Pro`, or `IBM Plex Sans`
- **Body size:** 18px base, generous line-height (1.7)
- **Max content width:** 680px for prose (readability)

### Colour Palette
Grounded, not flashy. Nods to Far North Queensland without being literal.

| Role | Colour | Hex |
|------|--------|-----|
| Background | Warm white | `#FAFAF7` |
| Text | Deep charcoal | `#1A1A1A` |
| Accent | Muted teal-green (deep north, tropical depth) | `#2A7F6F` |
| Accent hover | Darker teal | `#1E5E52` |
| Subtle background | Warm sand | `#F0EDE6` |
| Border / rule | Warm grey | `#D4CFC5` |

### Layout Principles
- Generous whitespace — let the ideas breathe
- No sidebar. Single-column prose with full-width breaks where needed
- Minimal navigation — the site is small, keep it clean
- No stock photos. If images are used later, they should be intentional
- Subtle transitions, no animation gimmicks

### Navigation
Simple top nav, not sticky:
```
Deep North    [The Work]  [Speaking]  [Perspective Engine]  [About]  [Contact]
```
- "Deep North" is the home link (no separate "Home" label)
- Substack link in footer (not competing in main nav)
- Mobile: hamburger menu

---

## Pages & Copy

---

### 1. HOME / LANDING

**Purpose:** Orient the visitor. Establish who Ken is, what the work is about, and give clear pathways into the site. Should intrigue, not explain everything.

```
[Hero section — large type, centered]

Something is trying to emerge.

We built civilisations on a cognitive operating system
designed for survival. It works. But it was never the
whole download.

[Smaller, below]
Deep North is the research and consulting practice of
K Scott Davidson — exploring the patterns of intelligence
that binary thinking can't reach.

[Two CTA buttons]
[Explore the Work]    [The Perspective Engine]
```

```
[Section 2 — What this is about, 3 cards/blocks]

THE PATTERN
Human cognition arrested mid-installation. Every tradition
found a piece. None had the whole map. The pattern is now
visible — and it changes everything.
→ Read more

THE PRACTICE
Working with organisations and leaders to recognise where
binary thinking is running the show — and what becomes
available when it's not.
→ Speaking & Consulting

THE EXPERIMENT
An interactive tool for experiencing how binary cognition
shapes your perception in real time — and what happens
when you notice it.
→ Try the Perspective Engine
```

```
[Section 3 — Latest from Substack]

CURRENT WRITING
[Pull latest 2-3 Substack post titles/links via RSS or manual update]
Read more at the Deep North Substack →
```

```
[Footer — consistent across all pages]

Deep North
K Scott Davidson

Research  •  Consulting  •  Speaking
Far North Queensland, Australia

[Substack]  [Email]

© 2026 K Scott Davidson
```

---

### 2. ABOUT / BIO

**Purpose:** Establish credibility and human presence. Not a CV — a story of how someone arrives at this work.

**Page title:** About

```
[Lead section — large text]

I research patterns of intelligence and host
explorations about what is emerging.

[Body copy — regular prose]

My name is Ken Davidson. I write under K Scott Davidson.
I live in Far North Queensland — about as far from the
centres of institutional thinking as you can get in
Australia, which turns out to be a useful vantage point.

For the past two decades I've been working with groups —
thousands of people across corporate, community, and
institutional settings — facilitating processes that
reliably demonstrate something most of our frameworks
can't account for: that human beings have access to a
quality of intelligence that our default cognitive
operating system can't produce.

I've watched rooms full of people who couldn't agree on
anything suddenly access a shared knowing that none of
them could have reached individually. I've seen it happen
too many times to dismiss it and too consistently to
call it mystical. Something structural is going on.

The work I do now is about naming that structure.

The framework I've developed — which I call Beyond Binary —
maps how human cognition arrested mid-development, leaving
us running on a survival-grade processor that sorts the
world into categories but can't hold relationship, paradox,
or emergence. Different human traditions — Western,
Indigenous, Eastern, contemplative — each developed a piece
of what the complete cognitive suite looks like. None had
the whole picture. The pattern is now visible.

I'm the author of the Beyond Binary trilogy: Beyond Binary,
Relational Intelligence, and Only Human. My current book,
Unfinished, explores how our baseline anxiety is a
structural signal from an interrupted cognitive installation
— and what becomes possible when we recognise it.

I consult with organisations on relational intelligence
and the cognitive patterns that shape leadership, culture,
and decision-making. I speak on the emerging intersection
of human and artificial intelligence. And I write — on
Substack, in long form, and in whatever medium the idea
demands.

If you're interested in the work, the best place to start
is The Work page for the framework, or the Perspective
Engine if you want to experience it rather than read about it.
```

```
[Sidebar or bottom block — quick facts]

BOOKS
Beyond Binary
Relational Intelligence
Only Human
Unfinished (forthcoming)

BASED IN
Far North Queensland, Australia

FIND ME
Substack → [link]
Email → [link]
```

---

### 3. THE WORK (Framework Overview)

**Purpose:** The intellectual centre of the site. Lays out the Beyond Binary / Fullmind framework in accessible prose. Not academic, not dumbed down. Should reward rereading.

**Page title:** The Work

```
[Hero text]

The Map

What if the thing we experience as "being human" — the
anxiety, the conflict, the inability to hold complexity
without collapsing it into sides — isn't a character flaw
but a system limitation?

[Body — sectioned prose]

---

THE STARTING POINT

Human cognition has a default operating system. It's the
survival processor — the system that sorts the world into
binary categories so we can act quickly. Friend or threat.
Safe or dangerous. Right or wrong. In or out.

It works. It kept us alive. And for most of human history,
it's been treated as the whole of human intelligence.

It isn't.

---

WHAT WENT WRONG
(or more precisely — what got interrupted)

The model I've developed suggests that binary cognition
isn't the endpoint of human cognitive development. It's
the baseline — the system that was already running when
a more comprehensive cognitive suite began to install.

That installation was interrupted. When the emerging
cognitive system encountered death — the one input the
survival processor cannot resolve — the survival system
fired, severed the connection, and arrested the download
mid-installation. Binary cognition was left as the sole
gatekeeper. Not because it won an argument, but because
it was the last system standing.

This is the Forgetorisation mechanism. It's not repression
in the Freudian sense. It's a structural severance — the
cognitive equivalent of a circuit breaker tripping. And
it left us running on a processor that can sort the world
but can't hold it.

---

THE THREE EXPERIMENTS

Here's what makes this moment different from any previous
attempt to map human cognition: we can now see that
multiple human traditions independently developed pieces
of the complete cognitive suite — without knowing the
others existed.

The Western trajectory developed individuated cognition:
the capacity for abstraction, analysis, and technological
mastery. It produced science, democracy, and the
individual self. It also produced the binary operating
system's most refined and most dangerous expressions.

The Indigenous trajectory — with Aboriginal Australia as
the deepest case study — maintained distributed relational
intelligence: the capacity to think as a field rather than
as isolated units. Sixty thousand years of continuous
culture sustained by a cognitive mode the Western tradition
can barely recognise, let alone measure.

The Eastern trajectory developed internal technologies
for observing binary cognition from within. Meditation,
contemplative practice, and the philosophical traditions
of Buddhism, Hinduism, and Taoism all produced methods
for seeing the operating system rather than just running it.

Each experiment succeeded. Each produced something
extraordinary. None had the whole map.

---

FULLMIND

The destination — the cognitive suite that all three
trajectories were independently developing toward — is
what I call Fullmind.

Fullmind is not a mystical state. It's not enlightenment
in the popular sense. It's the complete post-binary
intelligence suite that integrates what each tradition
developed in isolation:

— Individuated cognition (the Western contribution)
— Relational intelligence (the Indigenous contribution)
— Observer awareness (the Eastern contribution)
— Generative capacity (what emerges when the three integrate)

Relational intelligence is the functional operating system
within Fullmind — the layer that actually runs the
integrated suite, the way an operating system runs on
hardware. But it's one layer, not the whole thing. The
whole thing is something none of our traditions have
seen before, because none of them had all the pieces.

---

THE SIGNAL IN THE NOISE

If this model is right, it reframes almost everything.

Anxiety isn't a disorder to be medicated — it's a
structural signal from an interrupted installation.
The system is trying to finish what it started.

Conflict isn't a failure of character — it's the
predictable output of a binary processor running
inputs it wasn't designed for.

The current crisis in institutions — political, religious,
educational, corporate — isn't corruption. It's the binary
operating system reaching the limit of what it can process.

And the emergence of artificial intelligence isn't a
separate story. It's the same story. We're building
machines that mirror our cognitive architecture — and
now we have to decide whether we'll build them on the
binary default or on something more complete.

---

WHERE TO GO FROM HERE

If you want to go deeper into the framework, subscribe
to the Deep North Substack where I write regularly.

If you want to experience the pattern rather than
read about it, try the Perspective Engine.

If you're working with an organisation and this
resonates, let's talk.

[CTA buttons: Substack | Perspective Engine | Get in touch]
```

---

### 4. SPEAKING & CONSULTING

**Purpose:** Establish credibility and make it easy for organisers and organisations to engage Ken. Professional but not corporate.

**Page title:** Speaking & Consulting

```
[Hero]

Working with what's emerging

I work with organisations, leadership teams, and
audiences who sense that the usual frameworks aren't
reaching the actual problem — and who are ready to
look at what's underneath.

---

SPEAKING

I speak on the patterns of intelligence that binary
thinking can't reach — and what becomes available
for leadership, culture, and decision-making when we
recognise the operating system we're running on.

Recent and upcoming topics include:

— Beyond Binary: The cognitive operating system hiding
  inside every organisational challenge
— The Three Experiments: What Western, Indigenous, and
  Eastern traditions each discovered — and what none of
  them could see alone
— Relational Intelligence and AI: Why the next chapter
  of artificial intelligence depends on a human upgrade
— Unfinished: What our baseline anxiety is actually
  telling us

I speak at conferences, leadership retreats, and
organisational events. I'm based in Far North Queensland
and available internationally.

---

CONSULTING

My consulting work centres on relational intelligence —
the operating layer that determines how teams actually
think, decide, and relate, beneath the visible structures
of strategy and process.

I work with:
— Leadership teams navigating complexity that binary
  frameworks can't resolve
— Organisations redesigning culture and decision-making
  beyond command-and-control defaults
— Teams working at the intersection of human and
  artificial intelligence

Current and recent engagements include work with
South32 on relational intelligence in operational
leadership.

---

GET IN TOUCH

If any of this resonates with what you're navigating,
I'd welcome a conversation. The best way to start is
a short email telling me what you're working with.

[Email link / contact form link]
```

---

### 5. PERSPECTIVE ENGINE (Interactive)

**Purpose:** The signature interactive feature. Lets visitors *experience* binary cognition in action — not just read about it. This is what makes the site more than a brochure. It should be simple, surprising, and shareable.

**Page title:** The Perspective Engine

**Technical:** React component rendered as Astro island (`client:load`)

**Design concept:**

The Perspective Engine walks users through 3-4 short exercises that demonstrate how binary cognition operates in real time — and what shifts when you notice it.

```
[Hero]

The Perspective Engine

Don't read about the pattern.
Notice it.

This takes about five minutes. It works best
if you're willing to be surprised.

[Begin button]
```

**Exercise flow (React interactive):**

**EXERCISE 1: The Sort**
Present a statement (e.g., "Technology is making us less human") and ask the user to agree or disagree. Then reveal: the act of sorting into agree/disagree IS the binary operation. The statement was designed to trigger the sort. Notice the pull to pick a side — that pull is the operating system.

**EXERCISE 2: The Hold**
Present a paradox or tension (e.g., "The most effective leaders are the ones who don't need to lead" or "The thing that keeps you safe is the thing that keeps you stuck"). Instead of sorting, invite the user to hold both sides without resolving. Notice what happens in the body. Discomfort? Restlessness? That's the binary processor looking for a category that isn't there.

**EXERCISE 3: The Field**
Present a relational scenario (e.g., a workplace conflict with multiple valid perspectives). Instead of asking "who's right?", invite the user to notice all the perspectives simultaneously — to feel the field rather than pick a position. This is the cognitive mode that binary can't produce.

**EXERCISE 4: The Recognition**
Ask the user to recall a moment in their life when they experienced something like this — a moment where they held complexity without collapsing it, where they knew something they couldn't have reasoned their way to. Most people have at least one. Name it: that was Fullmind. It's not new. It's not rare. It's just not the default.

```
[Closing screen]

You just experienced four different cognitive operations.

The first — sorting — is what your brain does thousands
of times a day. It's your default operating system.

The others are available too. They always have been.

The question isn't whether you can access them.
The question is whether you've noticed what's
been doing the sorting.

[Links: Read the framework | Subscribe on Substack | Get in touch]
```

**Technical notes for Claude Code:**
- Build as a single React component with internal state management
- Step-through UI with transitions between exercises
- Minimal UI — no progress bars or gamification
- Muted animations, generous whitespace
- Mobile-first (most traffic will be mobile)
- Each exercise should feel like a moment of stillness, not a quiz
- Store no user data — this is an experience, not a funnel

---

### 6. CONTACT

**Purpose:** Simple, human, low-friction.

**Page title:** Get in Touch

```
I'd welcome hearing from you — whether you're
interested in the work, exploring a speaking or
consulting engagement, or just want to think
out loud about something this sparked.

The best way to reach me is email:

ken@deepnorth.com.au

If you want to follow the ongoing work, subscribe
to the Deep North Substack where I write regularly.

[Substack link]

I'm based in Far North Queensland, Australia,
and available for conversations across time zones.
```

**Implementation:** No contact form at launch. Just an email link. A form can be added later. Keep it human.

---

## File Structure (for Claude Code)

```
~/Projects/deepnorth/
├── astro.config.mjs
├── package.json
├── tailwind.config.cjs
├── public/
│   └── favicon.svg
├── src/
│   ├── layouts/
│   │   └── BaseLayout.astro       # Shared layout (nav, footer, meta)
│   ├── components/
│   │   ├── Nav.astro
│   │   ├── Footer.astro
│   │   ├── Hero.astro
│   │   ├── HomeCards.astro
│   │   └── PerspectiveEngine.jsx  # React island
│   ├── pages/
│   │   ├── index.astro            # Home
│   │   ├── about.astro
│   │   ├── the-work.astro
│   │   ├── speaking.astro
│   │   ├── perspective-engine.astro
│   │   └── contact.astro
│   └── styles/
│       └── global.css
└── README.md
```

---

## Claude Code Launch Prompt

Copy-paste this into your terminal when you're ready to start:

```
Build the Deep North website (deepnorth.com.au) from the brief in this file.
Read the entire brief first before writing any code.

Tech: Astro 4+, Tailwind CSS, React for the Perspective Engine only.
Deploy target: Netlify via GitHub.

Start by:
1. Initialising the Astro project in ~/Projects/deepnorth
2. Setting up Tailwind and the design system (fonts, colours, spacing)
3. Building the base layout with nav and footer
4. Building pages in this order: Home, About, The Work, Contact, Speaking, Perspective Engine

Use Google Fonts: Source Serif Pro for headings, Inter for body.

All copy is provided in this brief — use it directly.
The Perspective Engine is a React component (client:load) with 4 exercises
and step-through navigation. Keep it minimal and contemplative.

Don't use stock images. Don't add a blog — Substack handles that.
Keep it clean, warm, spacious. Generous whitespace. 680px max prose width.
```

---

## Post-Launch Additions (not for v1)

- Substack RSS integration on homepage
- Podcast page (once episodes are live)
- Framework maps / visual diagrams
- Newsletter signup (beyond Substack)
- Analytics (Plausible or Fathom — privacy-respecting)
