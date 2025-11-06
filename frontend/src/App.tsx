import type React from "react";
import Layout from "./components/layout/Layout";
import Hero from "./components/hero/Hero";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import NotFound from "./components/notFound/NotFound";

const App: React.FC = () => {
  const currentPath = window.location.pathname;

  if (currentPath !== "/") {
    return <NotFound />;
  }

  return (
    <Layout>
      <Hero />
      <Projects />
      <Contact />
    </Layout>
  );
};

export default App;
