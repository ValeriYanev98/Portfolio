import React from "react";
import styles from "./Footer.module.scss";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.linkWrapper}>
        <a href="https://github.com/ValeriYanev98" target="_blank" className={styles.link}>
          <img src="/svg/github.svg" className={styles.img} />
          <span className={styles.text}>GitHub</span>
        </a>

        <a href="https://www.linkedin.com/in/valeri-t-yanev/" target="_blank" className={styles.link}>
          <img src="/svg/linkedin.svg" className={styles.img} />
          <span className={styles.text}>LinkedIn</span>
        </a>

        <a href="mailto:valeri@valeriyanev.com" className={styles.link}>
          <img src="/svg/mail.svg" className={styles.img} />
          <span className={styles.text}>Email</span>
        </a>

        <a href="/dominos.large.png" download className={styles.link}>
          <span className={styles.text}>Resume</span>
        </a>
      </div>

      <div className={styles.note}>&copy;2025 Valeri. All rights reserved.</div>
    </footer>
  );
};

export default Footer;
