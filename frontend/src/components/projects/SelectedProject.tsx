import React from "react";
import styles from "./Projects.module.scss";
import type { ProjectsInterface } from "../../types/projects";
import { v4 as uuidv4 } from "uuid";

interface Props {
  selectedProject: ProjectsInterface;
  setSelectedProject: React.Dispatch<React.SetStateAction<null | ProjectsInterface>>;
}

const SelectedProject: React.FC<Props> = ({ selectedProject, setSelectedProject }) => {
  return (
    <div className={styles.selectedProject}>
      <h3>{selectedProject.overview}</h3>

      <div className={styles.mainPart}>
        <a href={selectedProject.url} target="_blank">
          <video src={`/${selectedProject.video}`} className={styles.video} muted autoPlay loop />
        </a>

        <div className={styles.information}>
          <p>Information:</p>

          {(selectedProject.tech.frontend.core.length > 0 ||
            selectedProject.tech.frontend.styling.length > 0 ||
            selectedProject.tech.frontend.tooling.length > 0) && (
            <div className={styles.singleTechWrapper}>
              <p className={styles.feBeDe}>Frontend:</p>

              {selectedProject.tech.frontend.core.length > 0 && (
                <div className={styles.techWrapper}>
                  <span>Core: </span>

                  {selectedProject.tech.frontend.core.map((tech, i) => (
                    <React.Fragment key={uuidv4()}>
                      <img key={uuidv4()} src={tech.img} className={styles.techImg} />

                      <span key={uuidv4()} className={styles.techText}>
                        {tech.text}
                        {i < selectedProject.tech.frontend.core.length - 1 && ", "}
                      </span>
                    </React.Fragment>
                  ))}
                </div>
              )}

              {selectedProject.tech.frontend.styling.length && (
                <div className={styles.techWrapper}>
                  <span>Styling: </span>

                  {selectedProject.tech.frontend.styling.map((tech, i) => (
                    <React.Fragment key={uuidv4()}>
                      <img key={uuidv4()} src={tech.img} className={styles.techImg} />

                      <span key={uuidv4()} className={styles.techText}>
                        {tech.text}
                        {i < selectedProject.tech.frontend.styling.length - 1 && ", "}
                      </span>
                    </React.Fragment>
                  ))}
                </div>
              )}

              {selectedProject.tech.frontend.tooling.length > 0 && (
                <div className={styles.techWrapper}>
                  <span>Tools: </span>

                  {selectedProject.tech.frontend.tooling.map((tech, i) => (
                    <React.Fragment key={uuidv4()}>
                      <img key={uuidv4()} src={tech.img} className={styles.techImg} />

                      <span key={uuidv4()} className={styles.techText}>
                        {tech.text}
                        {i < selectedProject.tech.frontend.tooling.length - 1 && ", "}
                      </span>
                    </React.Fragment>
                  ))}
                </div>
              )}
            </div>
          )}

          {selectedProject.tech.backend &&
            (selectedProject.tech.backend.database.length > 0 || selectedProject.tech.backend.server.length > 0) && (
              <div className={styles.selectedProjectSingleTechWrapper}>
                <p className={styles.selectedProjectFeBeDe}>Backend:</p>

                {selectedProject.tech.backend.server.length > 0 && (
                  <div className={styles.techWrapper}>
                    <span>Server: </span>

                    {selectedProject.tech.backend.server.map((tech, i) => (
                      <React.Fragment key={uuidv4()}>
                        <img key={uuidv4()} src={tech.img} className={styles.techImg} />

                        <span key={uuidv4()} className={styles.techText}>
                          {tech.text}
                          {selectedProject.tech.backend && i < selectedProject.tech.backend.server.length - 1 && ", "}
                        </span>
                      </React.Fragment>
                    ))}
                  </div>
                )}

                {selectedProject.tech.backend.database.length > 0 && (
                  <div className={styles.techWrapper}>
                    <span>Database: </span>

                    {selectedProject.tech.backend.database.map((tech, i) => (
                      <React.Fragment key={uuidv4()}>
                        <img key={uuidv4()} src={tech.img} className={styles.techImg} />

                        <span key={uuidv4()} className={styles.techText}>
                          {tech.text}
                          {selectedProject.tech.backend && i < selectedProject.tech.backend.database.length - 1 && ", "}
                        </span>
                      </React.Fragment>
                    ))}
                  </div>
                )}
              </div>
            )}

          {(selectedProject.tech.development.deployment.length > 0 ||
            selectedProject.tech.development.testing.length > 0 ||
            selectedProject.tech.development.versionControl.length > 0) && (
            <div className={styles.selectedProjectSingleTechWrapper}>
              <p className={styles.selectedProjectFeBeDe}>Development:</p>

              {selectedProject.tech.development.versionControl.length > 0 && (
                <div className={styles.techWrapper}>
                  <span>Version Control: </span>

                  {selectedProject.tech.development.versionControl.map((tech, i) => (
                    <React.Fragment key={uuidv4()}>
                      <img key={uuidv4()} src={tech.img} className={styles.techImg} />

                      <span key={uuidv4()} className={styles.techText}>
                        {tech.text}
                        {i < selectedProject.tech.development.versionControl.length - 1 && ", "}
                      </span>
                    </React.Fragment>
                  ))}
                </div>
              )}

              {selectedProject.tech.development.testing.length > 0 && (
                <div className={styles.techWrapper}>
                  <span>Testing: </span>

                  {selectedProject.tech.development.testing.map((tech, i) => (
                    <React.Fragment key={uuidv4()}>
                      <img key={uuidv4()} src={tech.img} className={styles.techImg} />

                      <span key={uuidv4()} className={styles.techText}>
                        {tech.text}
                        {i < selectedProject.tech.development.testing.length - 1 && ", "}
                      </span>
                    </React.Fragment>
                  ))}
                </div>
              )}

              {selectedProject.tech.development.deployment.length > 0 && (
                <div className={styles.techWrapper}>
                  <span>Deployment: </span>

                  {selectedProject.tech.development.deployment.map((tech, i) => (
                    <React.Fragment key={uuidv4()}>
                      <img key={uuidv4()} src={tech.img} className={styles.techImg} />

                      <span key={uuidv4()} className={styles.techText}>
                        {tech.text}
                        {i < selectedProject.tech.development.deployment.length - 1 && ", "}
                      </span>
                    </React.Fragment>
                  ))}
                </div>
              )}
            </div>
          )}
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
