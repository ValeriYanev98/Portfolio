import styles from "./Projects.module.scss";
import TechList from "./TechList";
import { v4 as uuidv4 } from "uuid";

interface Props<T> {
  label: string;
  techCategories: {
    [K in keyof T]: T[K];
  };
}

const TechCategory = <T extends Record<string, { text: string; img: string }[]>>({
  label,
  techCategories,
}: Props<T>) => {
  return (
    <div className={styles.singleTechWrapper}>
      <p className={styles.feBeDe}>{label}:</p>

      {Object.entries(techCategories).map(([category, items]) => (
        <TechList items={items} label={category} key={uuidv4()} />
      ))}
    </div>
  );
};

export default TechCategory;
