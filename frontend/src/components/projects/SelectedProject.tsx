import React, { useEffect, useRef, useState } from "react";
import styles from "./Projects.module.scss";
import type { ProjectsInterface } from "../../types/projects";
import TechCategory from "./TechCategory";

interface Props {
  selectedProject: ProjectsInterface;
  setSelectedProject: React.Dispatch<React.SetStateAction<null | ProjectsInterface>>;
}

const SelectedProject: React.FC<Props> = ({ selectedProject, setSelectedProject }) => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false); // show shimmer effect if the video hasnt loaded...

  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const handlePlayVideo = () => {
      setIsVideoLoaded(true);
    };

    ref.current.addEventListener("canplay", handlePlayVideo);

    return () => {
      removeEventListener("canplay", handlePlayVideo);
    };
  }, [selectedProject.video]);

  return (
    <div className={styles.selectedProject}>
      <h3>{selectedProject.overview}</h3>

      <div className={styles.mainPart}>
        {!isVideoLoaded && <div className={styles.shimmering} />}

        <a href={selectedProject.url} target="_blank" className={styles.videoWrapper}>
          <video src={`/${selectedProject.video}`} className={styles.video} muted autoPlay loop ref={ref} />
        </a>

        <div className={styles.information}>
          <p>Information:</p>

          <TechCategory label="Frontend" techCategories={selectedProject.tech.frontend} />
          {selectedProject.tech.backend && (
            <TechCategory label="Backend" techCategories={selectedProject.tech.backend} />
          )}
          <TechCategory label="Development" techCategories={selectedProject.tech.development} />
        </div>
      </div>

      <div className={styles.ghLink}>
        <img src="svg/github.svg" alt="GitHub image." className={styles.img} />
        <a className={styles.text} href={selectedProject.gh} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      </div>

      <p className={styles.description}>{selectedProject.description}</p>

      <span className={styles.closeSelectedProject} onClick={() => setSelectedProject(null)}>
        X
      </span>
    </div>
  );
};

export default SelectedProject;
