import type React from "react";
import Layout from "./components/layout/Layout";
import Hero from "./components/hero/Hero";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";

const App: React.FC = () => {
  return (
    <Layout>
      <Hero />
      <Projects />
      <Contact />
    </Layout>
  );
};

export default App;
