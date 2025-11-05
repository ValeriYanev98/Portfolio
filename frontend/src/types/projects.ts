type FrontendCore = "React" | "JavaScript" | "TypeScript";
type FrontendStyling = "SASS/SCSS" | "Bootstrap" | "CSS";
type FrontendTools = "Vite" | "Redux Toolkit" | "Context API";

type Server = "Node.js" | "Express.js";
type Database = "PostgreSQL" | "MongoDB";
type Integration = "Stripe API";

type VersionControl = "Git" | "GitHub";
type Testing = "Vitest" | "React Testing Library";
type Deployment = "Vercel";

export interface ProjectsInterface {
  image: string;
  url: string;
  overview: string;
  tech: {
    frontend: { core: FrontendCore[]; styling: FrontendStyling[]; tooling: FrontendTools[] };
    backend: { server: Server[]; database: Database[]; integration: Integration[] };
    development: { versionControl: VersionControl[]; testing: Testing[]; deployment: Deployment[] };
  };
}
