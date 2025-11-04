import type React from "react";
import styles from "./Projects.module.scss";
import { PROJECTS } from "../../data/projects";
import { useState } from "react";
import type { ProjectsInterface } from "../../types/data";

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<null | ProjectsInterface>(null);

  return (
    <section className={styles.sectionProjects}>
      {selectedProject ? (
        <div></div>
      ) : (
        PROJECTS.map((project) => (
          <div key={project.url}>
            <p>{project.overview}</p>

            <img
              src={`/${project.image}`}
              alt="Dominos project's image, showing the main page."
              loading="lazy"
              width={200}
              onClick={() => setSelectedProject(project)}
            />
          </div>
        ))
      )}
    </section>
  );
};

export default Projects;
