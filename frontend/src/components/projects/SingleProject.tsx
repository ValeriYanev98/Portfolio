import type React from "react";
import styles from "./Projects.module.scss";
import type { ProjectsInterface } from "../../types/projects";

interface Props {
  project: ProjectsInterface;
  setSelectedProject: React.Dispatch<React.SetStateAction<null | ProjectsInterface>>;
}

const SingleProject: React.FC<Props> = ({ project, setSelectedProject }) => {
  return (
    <div className={styles.singleProject}>
      <p>{project.overview}</p>

      <img
        src={`/${project.image}`}
        alt="Dominos project's image, showing the main page."
        loading="lazy"
        width={200}
        onClick={() => setSelectedProject(project)}
      />
    </div>
  );
};

export default SingleProject;
