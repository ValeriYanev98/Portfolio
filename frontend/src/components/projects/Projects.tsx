import { useEffect, useRef, useState } from "react";
import type React from "react";
import type { ProjectsInterface } from "../../types/projects";
import styles from "./Projects.module.scss";
import { PROJECTS } from "../../data/projects";
import SingleProject from "./SingleProject";

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<null | ProjectsInterface>(null);
  const [isLoadedImage, setIsLoadedImage] = useState(false);

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

  console.log(selectedProject);

  return (
    <section className={styles.sectionProjects}>
      {selectedProject && isLoadedImage && (
        <div className={styles.selectedProject}>
          <h3>{selectedProject.overview}</h3>

          <div className={styles.selectedProjectMainPart}>
            <a href={selectedProject.url} target="_blank">
              <video src={`/${selectedProject.video}`} className={styles.selectedProjectVideo} muted autoPlay loop />
            </a>

            <div className={styles.selectedProjectInformation}>
              <p>Information:</p>

              {selectedProject.tech.frontend && (
                <>
                  <p className={styles.selectedProjectFeBeDe}>Frontend:</p>

                  <div className={styles.selectedProjectTechWrapper}>
                    <span>Core: </span>

                    {selectedProject.tech.frontend.core.map((tech, i) => (
                      <span key={tech} className={styles.selectedProjectTech}>
                        {tech}
                        {i < selectedProject.tech.frontend.core.length - 1 && ", "}
                      </span>
                    ))}
                  </div>

                  <div className={styles.selectedProjectTechWrapper}>
                    <span>Styling: </span>

                    {selectedProject.tech.frontend.styling.map((tech, i) => (
                      <span key={tech} className={styles.selectedProjectTech}>
                        {tech}
                        {i < selectedProject.tech.frontend.styling.length - 1 && ", "}
                      </span>
                    ))}
                  </div>
                  <div className={styles.selectedProjectTechWrapper}>
                    <span>Tools: </span>

                    {selectedProject.tech.frontend.tooling.map((tech, i) => (
                      <span key={tech} className={styles.selectedProjectTech}>
                        {tech}
                        {i < selectedProject.tech.frontend.tooling.length - 1 && ", "}
                      </span>
                    ))}
                  </div>
                </>
              )}

              {selectedProject.tech.backend && (
                <>
                  <p className={styles.selectedProjectFeBeDe}>Backend:</p>

                  <div className={styles.selectedProjectTechWrapper}>
                    <span>Server: </span>

                    {selectedProject.tech.backend.server.map((tech, i) => (
                      <span key={tech} className={styles.selectedProjectTech}>
                        {tech}
                        {i < selectedProject.tech.backend.server.length - 1 && ", "}
                      </span>
                    ))}
                  </div>

                  <div className={styles.selectedProjectTechWrapper}>
                    <span>Database: </span>

                    {selectedProject.tech.backend.database.map((tech, i) => (
                      <span key={tech} className={styles.selectedProjectTech}>
                        {tech}
                        {i < selectedProject.tech.backend.database.length - 1 && ", "}
                      </span>
                    ))}
                  </div>
                </>
              )}

              {selectedProject.tech.development && (
                <>
                  <p className={styles.selectedProjectFeBeDe}>Development:</p>

                  <div className={styles.selectedProjectTechWrapper}>
                    <span>Version Control: </span>

                    {selectedProject.tech.development.versionControl.map((tech, i) => (
                      <span key={tech} className={styles.selectedProjectTech}>
                        {tech}
                        {i < selectedProject.tech.development.versionControl.length - 1 && ", "}
                      </span>
                    ))}
                  </div>

                  <div className={styles.selectedProjectTechWrapper}>
                    <span>Testing: </span>

                    {selectedProject.tech.development.testing.map((tech, i) => (
                      <span key={tech} className={styles.selectedProjectTech}>
                        {tech}
                        {i < selectedProject.tech.development.testing.length - 1 && ", "}
                      </span>
                    ))}
                  </div>

                  <div className={styles.selectedProjectTechWrapper}>
                    <span>Deployment: </span>

                    {selectedProject.tech.development.deployment.map((tech, i) => (
                      <span key={tech} className={styles.selectedProjectTech}>
                        {tech}
                        {i < selectedProject.tech.development.deployment.length - 1 && ", "}
                      </span>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>

          <p className={styles.selectedProjectDescription}>{selectedProject.description}</p>

          <span className={styles.closeSelectedProject} onClick={() => setSelectedProject(null)}>
            X
          </span>
        </div>
      )}

      {PROJECTS.map((project) => (
        <SingleProject project={project} setSelectedProject={setSelectedProject} key={project.url} />
      ))}

      {selectedProject && <div className={styles.blurredOverlay} ref={blurredOverlayRef} />}
    </section>
  );
};

export default Projects;
