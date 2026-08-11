# SAP Compass

**Orienting new leaders in the SAP world.**

A personalised, AI-powered SAP learning agent for new Managing Directors and senior leaders stepping into SAP practice groups for the first time. Built with the Claude API and live web search — no backend required.

---

## What it does

- **Personalised onboarding** — 3-question profile wizard adapts every explanation to the leader's background (IT Infra, Manufacturing, Finance, Sales, HR, Tech Architect, or Strategy)
- **Conversational AI chat** — powered by Claude with live web search for real-time SAP news and 2026 trends
- **5-phase curriculum** — structured learning journey from SAP basics to MD-level strategy
- **Live SWOT dashboard** — researched August 2026, covers SAP Basis group strengths, weaknesses, opportunities, and threats
- **Searchable glossary** — 16 key SAP terms with plain definitions and background-specific analogies
- **Leadership lens** — every answer ends with a "So what for you as a leader?" insight

---

## File structure

```
sap-compass/
├── index.html    — App shell, layout, tab structure
├── config.js     — ALL editable content (edit this file to update anything)
├── agent.js      — AI logic, chat, rendering, onboarding flow
├── styles.css    — All styling and theming
└── README.md     — This file
```

**The golden rule: to update content, only edit `config.js`.**

---

## Hosting on GitHub Pages (recommended)

### Step 1 — Create a GitHub repository

1. Go to [github.com](https://github.com) and sign in
2. Click **New repository**
3. Name it `sap-compass` (or any name you like)
4. Set visibility to **Public** (required for free GitHub Pages)
5. Click **Create repository**

### Step 2 — Upload the files

**Option A — via GitHub web UI (easiest)**
1. Open your new repository
2. Click **Add file → Upload files**
3. Drag and drop all four files: `index.html`, `config.js`, `agent.js`, `styles.css`
4. Click **Commit changes**

**Option B — via Git CLI**
```bash
git clone https://github.com/YOUR_USERNAME/sap-compass.git
cd sap-compass
# Copy your four files here
git add .
git commit -m "Initial SAP Compass release"
git push origin main
```

### Step 3 — Enable GitHub Pages

1. In your repository, go to **Settings → Pages**
2. Under **Source**, select **Deploy from a branch**
3. Choose branch: `main`, folder: `/ (root)`
4. Click **Save**
5. Wait 1–2 minutes, then visit:
   `https://YOUR_USERNAME.github.io/sap-compass/`

That URL is your shareable link — send it to Mr. Paddy or any new leader.

---

## Keeping content up to date

All content lives in **`config.js`**. Open it and edit the relevant section:

### Update the SWOT (recommended quarterly)
```js
const SWOT = {
  strengths: [
    "Your updated strength here",
    // ...
  ],
  // ...
};
```

### Add a glossary term
```js
{
  term: "New SAP Term",
  def: "Plain English definition of what this term means.",
  analogy: "One-liner mapping it to something familiar."
},
```

### Add a new leader background
```js
{
  id: "legal",                          // unique ID, no spaces
  label: "Legal / Compliance",          // shown in the UI
  icon: "ti-scale",                     // Tabler icon name
  analogy: "Think of SAP like your case management system..."
},
```
Find Tabler icon names at: https://tabler.io/icons

### Add a curriculum topic
Find the phase you want to add to and append to its `topics` array:
```js
topics: [
  "Existing topic",
  "Your new topic here"   // ← add here
]
```

After editing `config.js`, commit and push — GitHub Pages updates within 1–2 minutes.

---

## Upgrading to scheduled updates (optional future step)

The current version uses live web search on every question — meaning answers always reflect the latest SAP news at the moment of asking. No scheduled refresh is needed for the AI responses.

For a **monthly content digest** (e.g. auto-updated SWOT or email summary), the next step would be to add a lightweight backend (Cloudflare Workers or a GitHub Action) that updates `config.js` automatically. This is a Phase 2 enhancement.

---

## Technology

| Layer | Technology |
|---|---|
| Frontend | Vanilla HTML, CSS, JavaScript — no framework |
| AI | Claude Sonnet 4.6 via Anthropic API |
| Live search | Anthropic web search tool (built into API call) |
| Icons | Tabler Icons (CDN) |
| Hosting | GitHub Pages (static, free) |

No build step. No npm. No dependencies to install. Open `index.html` in a browser and it works.

---

## Built by

SAP Full Stack Architect, Accenture SAP Practice  
*Created as a leadership enablement tool for new SAP practice MDs — August 2026*
