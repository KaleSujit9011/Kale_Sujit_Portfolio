# Sujit Kale Portfolio

A modern developer portfolio built with React, Vite, and Tailwind CSS. The site highlights projects, experience, skills, resume access, contact flow, and light/dark theme support.

## Features

- Responsive portfolio layout for desktop and mobile
- Light and dark theme toggle with saved preference
- Animated hero role text
- Project cards with preview image, live demo link, and GitHub link
- Ladder-style experience section
- Filterable skills section with animated skill chips
- Contact form that opens a prefilled email draft
- Footer with portfolio navigation and social links
- Reusable card components for consistent styling

## Tech Stack

- React
- Vite
- Tailwind CSS
- JavaScript
- ESLint

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

Run lint checks:

```bash
npm run lint
```

## Project Structure

```text
src/
  assets/              Images used by the portfolio
  components/          Reusable UI components
  components/sections/ Page sections
  data/                Projects, skills, experience, and resume files
  App.jsx              Main application layout
  index.css            Global styles and theme variables
  main.jsx             React entry point
```

## Customization

- Update project content in `src/data/projects.js`
- Update skills in `src/data/skills.js`
- Update experience entries in `src/data/experience.js`
- Replace resume at `src/data/resume.pdf`
- Replace images in `src/assets/`
- Update footer social links in `src/components/Footer.jsx`
- Replace the contact email placeholder in `src/components/sections/Contacts.jsx`

## Contact Form Note

The contact form currently uses a `mailto:` link, so it opens the visitor's email app with a prefilled message. For production form submissions without email-client dependency, connect the form to a backend API or a form service.

## License

This project is for personal portfolio use. Update this section if you want to publish it under a specific open-source license.
