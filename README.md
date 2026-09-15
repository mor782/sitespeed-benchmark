# ⚡ Website Performance Dashboard

A tool for testing and comparing website performance. Enter several website URLs, run a test, and get a results table, a comparison chart, and a performance history over time.

Built on top of **Browsertime** — the measurement engine at the core of the open source [sitespeed.io](https://www.sitespeed.io/) project.

## 📊 Metrics Tracked
* ⚡ **LCP (Largest Contentful Paint):** loading stability and timing of the largest visible element
* ⏱️ **TTFB (Time to First Byte):** how quickly the server responds to a request
* ⌛ **Total Time:** total page load time

## 🛠️ Tech Stack
* 🟢 **Node.js + Express** — backend server
* 🌐 **Browsertime** — performance testing engine
* 🎨 **HTML / CSS / Vanilla JS + Chart.js** — frontend and charts
* ✅ **Vitest** — automated tests
* 🔄 **GitHub Actions** — CI, runs tests automatically on every push
* 🐙 **Git & GitHub**

## 🚀 Running Locally

\`\`\`bash
cd backend
npm install
node server.js
\`\`\`

Then open \`frontend/index.html\` directly in your browser (not through Live Server — see note below).

> **Note:** Avoid running this project through VS Code's Live Server, since it also watches the \`backend\` folder — writing to the history file triggers an unwanted page reload.

## 🧪 Tests

\`\`\`bash
cd backend
npm test
\`\`\`

## 📁 Project Structure

\`\`\`
backend/
  routes/       — HTTP endpoints
  services/     — Browsertime logic and history storage
  data/         — history.json
frontend/
  index.html, app.js, style.css
\`\`\`