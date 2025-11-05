import type { ProjectsInterface } from "../types/data";

export const PROJECTS: ProjectsInterface[] = [
  {
    image: "images/dominos_large.png",
    overview: "Dominos Pizza Clone",
    tech: {
      backend: { database: ["PostgreSQL"], integration: ["Stripe API"], server: ["Node.js", "Express.js"] },
      development: { deployment: ["Vercel"], testing: ["React Testing Library"], versionControl: ["GitHub"] },
      frontend: {
        core: ["TypeScript", "React"],
        styling: ["SASS/SCSS", "Bootstrap"],
        tooling: ["Vite", "Context API"],
      },
    },
    url: "",
  },
  // {},
  // {},
] as const;
