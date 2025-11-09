import type { ProjectsInterface } from "../types/projects";

export const PROJECTS: ProjectsInterface[] = [
  {
    image: "images/dominos-clone.png",
    video: "videos/dominos-clone_1.mp4",
    overview: "Dominos Pizza Clone",
    tech: {
      backend: {
        database: [{ img: "svg/postgresql.svg", text: "PostgreSQL" }],
        server: [
          { img: "svg/nodejs.svg", text: "Node.js" },
          { img: "svg/express.svg", text: "Express.js" },
        ],
      },
      development: {
        deployment: [{ img: "svg/vercel.svg", text: "Vercel" }],
        testing: [{ img: "svg/testinglibrary.svg", text: "React Testing Library" }],
        versionControl: [{ img: "svg/github.svg", text: "GitHub" }],
      },
      frontend: {
        core: [
          { img: "svg/typescript.svg", text: "TypeScript" },
          { img: "svg/react.svg", text: "React" },
        ],
        styling: [
          { img: "svg/sass.svg", text: "SASS/SCSS" },
          { img: "svg/bootstrap.svg", text: "Bootstrap" },
        ],
        tooling: [
          { img: "svg/vite.svg", text: "Vite" },
          { img: "svg/react.svg", text: "Context API" },
        ],
      },
    },
    gh: "https://github.com/ValeriYanev98/Dominos-Clone",
    url: "https://www.dominos-clone.valeriyanev.com/",
    description:
      "I architected a full-stack clone of the Dominos Pizza web application, showing my ability to manage complex e-commerce workflows. I engineered a secure payment gateway using Stripe's API and implemented Google OAuth2 for quick and secure user authentication. The application features real-time order tracking and robust data handling, allowing users to save multiple delivery addresses directly from an interactive map. This project validates my expertise in building scalable and feature-rich applications using a PostgreSQL database and a structured TypeScript/React interface.",
  },
  {
    description:
      "MindCraft Fitness Club is a full-stack simulation I architected and developed to demonstrate complex, user-centric application functionality. I engineered a secure user portal featuring essentials like a workout log, a working BMI calculator, and a user account management. The application simulates a real-world business by including an e-commerce store. This project represents my comprehensive skills in delivering a high-feature platform from concept to deployment.",
    image: "images/mindcraft-fitness.png",
    overview: "Mindcraft Fitness",
    tech: {
      backend: {
        database: [{ img: "svg/mongodb.svg", text: "MongoDB" }],
        server: [
          { img: "svg/nodejs.svg", text: "Node.js" },
          { img: "svg/express.svg", text: "Express.js" },
        ],
      },
      development: {
        deployment: [{ img: "svg/vercel.svg", text: "Vercel" }],
        testing: [{ img: "svg/testinglibrary.svg", text: "React Testing Library" }],
        versionControl: [{ img: "svg/github.svg", text: "GitHub" }],
      },
      frontend: {
        core: [
          { img: "svg/javascript.svg", text: "JavaScript" },
          { img: "svg/react.svg", text: "React" },
        ],
        styling: [{ img: "svg/css.svg", text: "CSS" }],
        tooling: [
          { img: "svg/vite.svg", text: "Vite" },
          { img: "svg/react.svg", text: "Context API" },
        ],
      },
    },
    gh: "https://github.com/ValeriYanev98/MindCraft-Fitness",
    url: "https://www.mindcraft-fitness.valeriyanev.com/",
    video: "videos/mindcraft-fitness.mp4",
  },
  {
    description:
      "I designed and developed this informational website to showcase Bulgaria's rich history and diverse natural landscapes, including its famous beaches, mineral springs, and mountain ranges. I engineered the frontend to present detailed geographic and historical information on major attractions, such as the country's highest peaks, Musala Peak and Botev Peak. This project validates my skills in creating clean, accessible, and responsive user interfaces using HTML, CSS, and JavaScript.",
    image: "images/nature-in-bulgaria.png",
    overview: "Nature in Bulgaria",
    tech: {
      development: {
        deployment: [{ img: "svg/vercel.svg", text: "Vercel" }],
        testing: [],
        versionControl: [{ img: "svg/github.svg", text: "GitHub" }],
      },
      frontend: {
        core: [
          { img: "svg/javascript.svg", text: "JavaScript" },
          { img: "svg/html5.svg", text: "HTML" },
        ],
        styling: [{ img: "svg/css.svg", text: "CSS" }],
        tooling: [],
      },
      backend: { database: [], server: [] },
    },
    gh: "https://github.com/ValeriYanev98/Nature-in-Bulgaria",
    url: "https://www.bulgaria-nature.valeriyanev.com/",
    video: "videos/nature-in-bulgaria.mp4",
  },
] as const;
