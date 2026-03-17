# Professional Portfolio Overhaul — Plan

A focused plan to move your portfolio from playful/casual to clean, confident, and hire-ready.

---

## 1. Typography & fonts

| Current | Change |
|--------|--------|
| **Cedarville Cursive** for taglines | Remove. Use one clear sans (e.g. Inter) or add a single **serif** for headings only (e.g. **DM Serif Display**, **Fraunces**, or **Lora**) for a more editorial/professional feel. |
| Inter everywhere | Keep as body font; optionally use a serif for section titles and hero headline only. |

**Files:** `app/globals.css` (remove Cedarville import and `.cursive`), any component using `className="cursive"`.

---

## 2. Copy & voice

Replace casual or slogan-y lines with clear, professional statements.

| Location | Current | Professional direction |
|----------|--------|-------------------------|
| **Hero badge** | “Fullstack Developer Portfolio” + sparkles | “Full-stack engineer” or “Software engineer” — no sparkle icon, or a minimal icon. |
| **Hero headline** | “Providing the best project experience” | “I build web applications that scale” or “Full-stack development for product teams” (adjust to your real focus). |
| **Hero intro** | “Hi I'm Dana. A Full Stack Software Engineer…” | “I’m Dana, a full-stack software engineer specializing in [e.g. React, Next.js, TypeScript]. I build websites and web applications for [clients / startups / product teams].” |
| **Hero CTA** | “Learn More!” | “View my work” or “See projects”. |
| **Skills section** | “Think better with Next js 13” + “Never miss a task, deadline or idea” (cursive) | One short line: e.g. “Built with modern stacks: React, Next.js, TypeScript, Node.” No cursive. |
| **Encryption section** | “Secure your data with end-to-end encryption” (cursive) | Remove section or replace with one sober line in About/Skills: “Security-conscious development when handling sensitive data.” |
| **Footer** | “♥ Modern web developer” | “Full-stack developer” or “Software engineer” — no heart. |
| **Metadata** (`layout.tsx`) | “This is my portfolio” | “Dana Bestun — Full-stack software engineer. Portfolio and selected projects.” |

**Files:** `HeroContent.tsx`, `SkillText.tsx`, `Encryption.tsx`, `Footer.tsx`, `layout.tsx`.

---

## 3. Visual design (colors & effects)

| Current | Change |
|--------|--------|
| Strong purple/cyan gradients everywhere | Keep dark base; **reduce gradient intensity**. Use one accent (e.g. one purple *or* one blue), or use gradients only for headings/CTAs, not every card and box. |
| “Welcome-box” / “Welcome-text” (rainbow gradient) | Replace with a **subtle border + neutral or single-accent text** (e.g. white/gray or one brand color). |
| Sparkles icon in hero and skills | Remove or swap for a minimal icon (e.g. briefcase, code bracket) if you keep a badge. |
| Resume card decorative dots | Remove. |
| Button “hover:animate-bounce” on Download icon | Remove; use a simple hover state (opacity or color). |

**Files:** `globals.css`, `HeroContent.tsx`, `SkillText.tsx`, `Resume.tsx`, `Projects.tsx`, `ProjectCard.tsx` (gradient use).

---

## 4. Sections & content structure

| Section | Action |
|--------|--------|
| **Encryption** | **Remove** from main flow (full viewport + lock graphic + cursive feels gimmicky). If you want to mention security, add one line in About or Skills. |
| **Projects** | “Recent Projects” → “Selected work” or “Work”. “See more” → “View all projects”. |
| **Resume** | “Dana Dev - Full Stack Developer” → Use full name: “Dana Bestun — Full-stack developer” (and align with Footer/Navbar). |

**Files:** `app/page.tsx` (remove `<Encryption />` or replace with a small “Security” line elsewhere), `Projects.tsx`, `Resume.tsx`, `Footer.tsx`, `Navbar.tsx`.

---

## 5. Branding consistency

| Issue | Fix |
|-------|-----|
| Navbar: “Dana Dev” | Pick one: **Dana Bestun** (full name) or **Dana Dev** (brand). Use the same in Navbar, Footer, Resume card, and metadata. |
| Socials | Footer uses different links (e.g. danabestun) than `constants/index.ts` (e.g. aelius_77, Danadev25L). Unify to the profiles you want recruiters to see. |

**Files:** `Navbar.tsx`, `Footer.tsx`, `Resume.tsx`, `constants/index.ts`, `layout.tsx`.

---

## 6. Small polish items

- **Favicon:** You use `WebchainLogo.svg` — switch to a “D” or personal logo if this isn’t your brand.
- **Resume card:** “PDF format • Updated regularly” is fine; optional: add “Last updated: [month year]”.
- **Project cards:** Keep “View project” / “Watch demo”; ensure GitHub links use the project-specific `githubLink` when available (you already have it; double-check it’s used everywhere).
- **Mobile nav:** Ensure “Resume” is in the bottom nav so all sections are reachable (you have About, Skills, Projects; add Resume if missing).

---

## 7. Implementation order (recommended)

1. **Copy & branding** — Update all text and unify name/socials (quick, high impact).
2. **Typography** — Remove cursive; optionally add one serif for headings.
3. **Colors & effects** — Tone down gradients and remove sparkles/decorative dots.
4. **Encryption** — Remove from homepage (or replace with one line elsewhere).
5. **Metadata & favicon** — Professional title and description; correct favicon.
6. **Final pass** — Read every screen as a recruiter; fix any remaining casual phrases or inconsistencies.

---

## 8. What to keep

- **Dark theme** — Professional and easy to read.
- **Star background** — Can stay; it’s subtle. Option: slow rotation further or make it static.
- **Project cards and structure** — Layout is fine; only copy and visual style need tightening.
- **Skills grid** — Clear; just update the section headline/copy and remove cursive.
- **Framer Motion** — Subtle animations are good; avoid bouncy/playful ones on primary actions.

---

After this pass, the site will read as a **professional portfolio** (clear role, consistent name, no gimmicks, restrained visuals) while still feeling modern and personal.
