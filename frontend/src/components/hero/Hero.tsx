import React from "react";
import styles from "./Hero.module.scss";

const Hero: React.FC = () => {
  return (
    <section className={styles.sectionHero} id="hero">
      <h1 className={styles.heading}>Valeri Yanev | Full-Stack Web Developer</h1>
      <p className={styles.introduction}>
        I build secure and fast web applications with React, TypeScript and Node.js, creating complex features like
        secure payment integration and real-time data tracking.
      </p>
    </section>
  );
};

export default Hero;
