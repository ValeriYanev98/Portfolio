import React, { useState } from "react";
import Layout from "./components/layout/Layout";
import Hero from "./components/hero/Hero";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import NotFound from "./components/notFound/NotFound";
import ScrollTop from "./components/layout/scrollTop/ScrollTop";

const App: React.FC = () => {
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  const currentPath = window.location.pathname;

  if (currentPath !== "/") {
    return <NotFound />;
  }

  return (
    <Layout>
      {showScrollToTop && <ScrollTop />}
      <Hero setShowScrollToTop={setShowScrollToTop} />
      <Projects />
      <Contact />
    </Layout>
  );
};

export default App;
