# Contributing

Thank you for considering contributing to this project! Here's how to get started.

## Development Setup

1. Fork and clone the repository
2. Install dependencies: `pnpm install`
3. Copy `.env.example` to `.env.local` and configure
4. Start the dev server: `pnpm dev`

## Workflow

1. Create a feature branch from `main`: `git checkout -b feat/your-feature`
2. Make your changes and add tests
3. Run `pnpm lint && pnpm test` to validate
4. Commit with [Conventional Commits](https://www.conventionalcommits.org/)
5. Push and open a Pull Request against `main`

## Code Style

- TypeScript strict mode is enforced
- ESLint + Prettier are configured — run `pnpm lint` before committing
- Use geenius-ui components where possible

## Reporting Issues

Use GitHub Issues with the provided templates (bug report or feature request).

## License

By contributing, you agree that your contributions will be licensed under the MIT License.
