# Henri Schulz — Portfolio

Personal portfolio website built with Next.js 15, showcasing projects, experience, and skills.

## Tech Stack

- **Framework:** Next.js 15 (App Router, Turbopack)
- **Language:** TypeScript
- **Styling:** Tailwind CSS

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Scripts

| Command          | Description                     |
| ---------------- | ------------------------------- |
| `npm run dev`    | Start dev server with Turbopack |
| `npm run build`  | Build for production            |
| `npm run start`  | Start production server         |
| `npm run lint`   | Run ESLint                      |
| `npm run format` | Format code with Prettier       |

## Project Structure

```
src/
  app/
    components/   # Shared UI components
    projects/     # Projects page
    css/          # Global styles
utils/
  Data/           # Site content & personal data
public/           # Static assets & Lottie animations
```

## Customization

All personal data (name, email, links, etc.) is managed in [utils/Data/PersonalData.ts](utils/Data/PersonalData.ts).
Projects and experience are defined in [utils/Data/](utils/Data/).
