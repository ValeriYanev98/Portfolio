import React from "react";
import styles from "./Projects.module.scss";
import { v4 as uuidv4 } from "uuid";

interface Props<T> {
  items: T[];
  label: string;
}

const TechList = <T extends { text: string; img: string }>({ items, label }: Props<T>) => {
  if (items.length === 0) return null;

  const formatLabel = (label: string): string => {
    if (label === "versionControl") return "Version Control: ";

    return label[0].toLocaleUpperCase() + label.substring(1, label.length) + ": ";
  };

  return (
    <div className={styles.techWrapper}>
      <span>{formatLabel(label)}</span>

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
