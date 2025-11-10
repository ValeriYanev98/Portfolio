import React from "react";
import styles from "./Projects.module.scss";
import { v4 as uuidv4 } from "uuid";

interface Props<T> {
  items: T[];
  label: string;
}

const TechList = <T extends { text: string; img: string }>({ items, label }: Props<T>) => {
  if (items.length === 0) return null;

  return (
    <div className={styles.techWrapper}>
      <span>{label}: </span>

      {items.map((tech, i) => (
        <React.Fragment key={uuidv4()}>
          <img key={uuidv4()} src={tech.img} className={styles.techImg} />

          <span key={uuidv4()} className={styles.techText}>
            {tech.text}
            {i < items.length - 1 && ", "}
          </span>
        </React.Fragment>
      ))}
    </div>
  );
};

export default TechList;
