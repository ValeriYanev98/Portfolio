import type React from "react";
import styles from "./Projects.module.scss";
import type { TechMap } from "../../types/projects";

interface Props<T extends keyof TechMap = keyof TechMap> {
  selectedProject: TechMap[T];
  tech: T;
  techType: keyof TechMap[T];
}

const ProjectInformation = <T extends keyof TechMap>({ tech, techType, selectedProject }: Props<T>) => {
  const a = selectedProject[techType];

  return (
    <div className={styles.selectedProjectTechWrapper}>
      <span>{techType}: </span>

      {selectedProject[techType].map((tech, i) => (
        <span key={tech} className={styles.selectedProjectTech}>
          {tech}
          {i < selectedProject[techType].length - 1 && ", "}
        </span>
      ))}
    </div>
  );
};

export default ProjectInformation;
