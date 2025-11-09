import React from "react";
import Navbar from "../navbar/Navbar";
import styles from "./Header.module.scss";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <a className={styles.logo} href="#hero">
        Valeri Yanev
      </a>

      <div className={styles.navWrapper}>
        <Navbar />

        <a download href="/dominos_large.png" className={styles.downloadResume}>
          Resume
        </a>
      </div>
    </header>
  );
};

export default Header;
