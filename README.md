# AI Appointment Booking Bot

An intelligent appointment scheduling system with AI-powered booking management.

Part of [The Mehdi Verse](https://github.com/mxn2020) — a collection of open-source sample applications.

## Tech Stack

- **Frontend**: React 19 + TypeScript + Vite
- **Backend**: [Shared Convex deployment](https://github.com/mxn2020/the-mehdi-verse-convex-backend)
- **Auth**: Email/password via `@convex-dev/auth`

## Getting Started

```bash
npm install
cp .env.example .env.local
# Set VITE_CONVEX_URL to your deployment URL
npm run dev
```

## License

MIT © Mehdi Nabhani

---

<details>
<summary>📋 Original Feature Spec</summary>

# {{APP_TITLE}}

{{APP_DESCRIPTION}}

Part of [The Mehdi Verse](https://github.com/mxn2020) — a collection of open-source sample applications.

## Tech Stack

- **Frontend**: React 19 + TypeScript + Vite
- **Backend**: [Shared Convex deployment](https://github.com/mxn2020/the-mehdi-verse-convex-backend)
- **Auth**: Email/password via `@convex-dev/auth`

## Getting Started

### Prerequisites

- Node.js 22+
- A running [shared Convex backend](https://github.com/mxn2020/the-mehdi-verse-convex-backend)

### Setup

```bash
# Install dependencies
npm install

# Create .env.local with your Convex URL
cp .env.example .env.local
# Edit .env.local and set VITE_CONVEX_URL to your deployment URL

# Start the dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view the app.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Vite dev server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run typecheck` | Run TypeScript type checking |

## Project Structure

```
src/
  main.tsx              # Entry point with ConvexAuthProvider
  App.tsx               # Auth routing (Landing vs Dashboard)
  App.css               # Component styles
  index.css             # Global styles & design tokens
  components/
    Landing.tsx          # Marketing/landing page
    SignIn.tsx           # Auth form (sign-in/sign-up)
    Dashboard.tsx        # Authenticated app shell
api.ts                   # Convex API types (from shared backend)
```

## License

MIT © Mehdi Nabhani

</details>
