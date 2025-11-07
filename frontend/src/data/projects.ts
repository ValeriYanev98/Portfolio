import type { ProjectsInterface } from "../types/projects";

export const PROJECTS: ProjectsInterface[] = [
  {
    image: "images/dominos_large.png",
    video:"videos/dominos-clone_1.mp4",
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
    url: "https://www.dominos-clone.valeriyanev.com/",
    description:
      'Fully working clone of the official Dominos Pizza web application, where users can choose from a variety of pizzas, select different sizes, and customize their orders with a range of toppings. Users can save multiple delivery addresses directly from an interactive map, "pay" securely using Stripe\'s developer cards, and enjoy real-time order tracking for a seamless experience. The app also features Google OAuth2 for quick and secure login.',
  },
  // {},
  // {},
] as const;
