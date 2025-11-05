import { useEffect, useState } from "react";
import type React from "react";
import type { ProjectsInterface } from "../../types/data";
import styles from "./Projects.module.scss";
import { PROJECTS } from "../../data/projects";
import SingleProject from "./SingleProject";

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<null | ProjectsInterface>(null);
  const [isLoadedImage, setIsLoadedImage] = useState(false);

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

  // Wait for the image to fully load, since there might be some lag in the CSS animation.
  useEffect(() => {
    if (selectedProject) {
      const image = new Image();

      image.src = `/${selectedProject.image}`;
      image.onload = () => {
        setIsLoadedImage(true);
      };
    } else {
      setIsLoadedImage(false);
    }
  }, [selectedProject]);

  return (
    <section className={styles.sectionProjects}>
      {selectedProject && isLoadedImage && (
        <div className={styles.selectedProject}>
          <p>{selectedProject.overview}</p>

          <img
            src={`/${selectedProject.image}`}
            alt="Dominos project's image, showing the main page."
            loading="lazy"
            width={800}
            height={450}
          />
        </div>
      )}

      {PROJECTS.map((project) => (
        <SingleProject project={project} setSelectedProject={setSelectedProject} key={project.url} />
      ))}

      {selectedProject && (
        <span className={styles.closeSelectedProject} onClick={() => setSelectedProject(null)}>
          X
        </span>
      )}
      {selectedProject && <div className={styles.blurredOverlay} />}
    </section>
  );
};

export default Projects;
