import React from "react";
import styles from "./Projects.module.scss";
import type { ProjectsInterface } from "../../types/projects";

interface Props {
  project: ProjectsInterface;
  setSelectedProject: React.Dispatch<React.SetStateAction<null | ProjectsInterface>>;
}

const SingleProject: React.FC<Props> = ({ project, setSelectedProject }) => {
  return (
    <div className={styles.singleProjectWrapper}>
      <div className={styles.singleProject}>
        <p className={styles.name}>{project.overview}</p>

        <img
          src={`/${project.image}`}
          alt={project.overview}
          className={styles.img}
          loading="lazy"
          onClick={() => setSelectedProject(project)}
        />
      </div>
    </div>
  );
};

export default SingleProject;
