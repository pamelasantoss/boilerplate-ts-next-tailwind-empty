# Boilerplate Next.js + TypeScript + TailwindCSS

![GitHub repo size](https://img.shields.io/github/repo-size/pamelasantoss/boilerplate-ts-next-tailwind-empty?style=for-the-badge)
![GitHub](https://img.shields.io/github/license/pamelasantoss/boilerplate-ts-next-tailwind-empty?color=%23387fc6&style=for-the-badge)
![GitHub last commit](https://img.shields.io/github/last-commit/pamelasantoss/boilerplate-ts-next-tailwind-empty?color=%23387fc6&style=for-the-badge)

## Description

This repository is a minimal starter boilerplate for building TypeScript applications with Next.js and Tailwind CSS. It provides a small, well-configured base that includes linting, formatting and testing tooling so you can quickly scaffold pages and components.

What this boilerplate provides out of the box:
- A Next.js project structure with TypeScript support
- Tailwind CSS already configured and imported in `src/styles/globals.css`
- Basic example component: `src/components/Header` and a sample page at `src/pages/index.tsx`
- Developer scripts for running the dev server, building for production, linting, formatting and running tests

## Features
- Minimal example components and page to demonstrate Tailwind + TypeScript
- Preconfigured tooling: ESLint, Prettier, Husky and lint-staged
- Jest + React Testing Library ready for unit and component tests
- Tailwind base, components and utilities wired into the global stylesheet

## Technologies

- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [ESLint](https://eslint.org/) + `eslint-config-next`
- [Prettier](https://prettier.io/) + `prettier-plugin-tailwindcss`
- [Jest](https://jestjs.io/) + [React Testing Library](https://testing-library.com/)
- [Husky](https://typicode.github.io/husky/) + [lint-staged](https://github.com/okonet/lint-staged)

## Getting Started

### Prerequisites

- Node.js v19 or higher

### Installation

1. Clone the repository and install dependencies:
  ```bash
  git clone https://github.com/pamelasantoss/boilerplate-ts-next-tailwind-empty.git
  cd boilerplate-ts-next-tailwind-empty
  npm install
  ```

2. Environment file (optional):
   - This boilerplate doesn't require env vars by default. If you integrate external services later, add an `.env` file at the project root.

3. Start the development server:
  ```bash
  npm run dev
  ```

Open `http://localhost:3000` in your browser.

### Production Build

```bash
npm run build
npm run start
```

## Project Structure
- `src/`
  - `pages/` — Next.js pages (example: `src/pages/index.tsx`)
  - `components/` — Reusable UI components (example: `src/components/Header`)
  - `styles/` — Global styles and Tailwind entry (`globals.css`)
- `next.config.ts` — Next.js configuration
- `tailwind.config.ts` — Tailwind configuration and content paths
- `jest.config.ts`, `jest.setup.ts` — Jest configuration and test setup
- `eslint.config.mjs` — ESLint configuration
- `package.json` — npm scripts for dev, build, lint, format and test

## Learning Goals

This boilerplate is intended to help developers learn and practice:
- Get started quickly with Next.js pages and routing patterns (Pages Router)
- Build type-safe React components using TypeScript and proper typings
- Use Tailwind CSS effectively for utility-first, responsive styling and theming
- Configure and enforce a consistent developer workflow with ESLint, Prettier, Husky, and lint-staged
- Write unit and component tests using Jest and React Testing Library
- Optimize Next.js apps for production (build, image optimization with `next/image`, and performance best practices)
- Implement accessible UI patterns and semantic HTML
- Prepare the app for deployment (Vercel) and manage environment variables securely

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

## License

This project is under the MIT license. See the [LICENSE](https://github.com/pamelasantoss/boilerplate-ts-next-tailwind-empty/blob/main/LICENSE) file for details.

---

Made with ❤️ by [Pamela Santos](https://pamelasantos.dev.br/)