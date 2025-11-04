import type React from "react";
import styles from "./Navbar.module.scss";

const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <a href="#hero" className={styles.navLink}>
            Home
          </a>
        </li>
        <li className={styles.navItem}>
          <a href="#projects" className={styles.navLink}>
            Projects
          </a>
        </li>
        <li className={styles.navItem}>
          <a href="#contact" className={styles.navLink}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
