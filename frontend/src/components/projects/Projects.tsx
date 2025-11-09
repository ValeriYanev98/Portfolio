import React, { useEffect, useRef, useState } from "react";
import type { ProjectsInterface } from "../../types/projects";
import styles from "./Projects.module.scss";
import { PROJECTS } from "../../data/projects";
import SingleProject from "./SingleProject";
import SelectedProject from "./SelectedProject";

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<null | ProjectsInterface>(null);

  const blurredOverlayRef = useRef<HTMLDivElement>(null);

  // Close the modal if 'q', 'Q', or 'Esc' button is clicked.
  useEffect(() => {
    const qClicked = (e: KeyboardEvent) => {
      const key = e.key;

      if (key === "q" || key === "Q" || key === "Escape") {
        setSelectedProject(null);
      }
    };

    document.addEventListener("keyup", qClicked);

    return () => {
      document.removeEventListener("keyup", qClicked);
    };
  }, []);

  // Close the selected project if clicked outside of it.
  useEffect(() => {
    const clickOutsideSelectedProject = (e: PointerEvent) => {
      if (blurredOverlayRef && blurredOverlayRef.current && blurredOverlayRef.current.contains(e.target as Node)) {
        setSelectedProject(null);
      }
    };

    document.addEventListener("click", clickOutsideSelectedProject);

    return () => removeEventListener("click", clickOutsideSelectedProject);
  }, []);

  return (
    <section className={styles.sectionProjects}>
      {selectedProject && <SelectedProject selectedProject={selectedProject} setSelectedProject={setSelectedProject} />}

      {PROJECTS.map((project) => (
        <SingleProject project={project} setSelectedProject={setSelectedProject} key={project.image} />
      ))}

      {selectedProject && <div className={styles.blurredOverlay} ref={blurredOverlayRef} />}
    </section>
  );
};

export default Projects;
