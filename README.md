# AI Appointment Booking Bot

[![CI](https://github.com/mxn2020/ai-appointment-booking/actions/workflows/ci.yml/badge.svg)](https://github.com/mxn2020/ai-appointment-booking/actions/workflows/ci.yml)
[![License: Apache-2.0](https://img.shields.io/badge/License-Apache--2.0-yellow.svg)](https://opensource.org/licenses/Apache-2.0)

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

MIT © AVS Media

---

> **License note:** As of 2026-10-23 this project is licensed under the Apache License 2.0 (previously MIT). Versions released before this change remain available under MIT to those who received them.
