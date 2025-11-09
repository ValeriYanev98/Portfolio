type FrontendCore =
  | { text: "React"; img: "svg/react.svg" }
  | { text: "JavaScript"; img: "svg/javascript.svg" }
  | { text: "TypeScript"; img: "svg/typescript.svg" }
  | { text: "HTML"; img: "svg/html5.svg" };
type FrontendStyling =
  | { text: "SASS/SCSS"; img: "svg/sass.svg" }
  | { text: "Bootstrap"; img: "svg/bootstrap.svg" }
  | { text: "CSS"; img: "svg/css.svg" };
type FrontendTools =
  | { text: "Vite"; img: "svg/vite.svg" }
  | { text: "Redux Toolkit"; img: "svg/redux.svg" }
  | { text: "Context API"; img: "svg/react.svg" };

type Server = { text: "Node.js"; img: "svg/nodejs.svg" } | { text: "Express.js"; img: "svg/express.svg" };
type Database =
  | { text: "PostgreSQL"; img: "svg/postgresql.svg" }
  | { text: "MongoDB"; img: "svg/mongodb.svg" }
  | { text: "Mongoose"; img: "svg/mongoose.svg" };

type VersionControl = { text: "GitHub"; img: "svg/github.svg" };
type Testing =
  | { text: "Vitest"; img: "svg/vitest.svg" }
  | { text: "React Testing Library"; img: "svg/testinglibrary.svg" };
type Deployment = { text: "Vercel"; img: "svg/vercel.svg" };

export type TechMap = {
  frontend: { core: FrontendCore[]; styling: FrontendStyling[]; tooling: FrontendTools[] };
  backend?: { server: Server[]; database: Database[] };
  development: { versionControl: VersionControl[]; testing: Testing[]; deployment: Deployment[] };
};

export interface ProjectsInterface {
  image: string;
  video: string;
  url: string;
  overview: string;
  tech: TechMap;
  description: string;
  gh: string;
}
