# AI Appointment Booking Bot

[![CI](https://github.com/mxn2020/ai-appointment-booking/actions/workflows/ci.yml/badge.svg)](https://github.com/mxn2020/ai-appointment-booking/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

An intelligent appointment scheduling system with AI-powered booking management.

Part of [The Mehdi Verse](https://github.com/mxn2020) — a collection of open-source sample applications.

## Tech Stack

- **Frontend**: React 19 + TypeScript + Vite + TailwindCSS
- **Backend**: Convex
- **Auth**: `@convex-dev/auth` with `@geenius-auth/react`
- **UI**: TailwindCSS + `@geenius-ui/react-css` design system
- **AI**: `@geenius-ai/react` for AI features
- **Tools**: `@geenius-tools/errors-react` for error handling

## Getting Started

```bash
pnpm install
cp .env.example .env.local
# Set VITE_CONVEX_URL to your deployment URL
pnpm dev
```

## Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start development server |
| `pnpm build` | Build for production |
| `pnpm lint` | Run ESLint |
| `pnpm test` | Run tests with Vitest |
| `pnpm typecheck` | TypeScript type checking |

## License

MIT © Mehdi Nabhani
