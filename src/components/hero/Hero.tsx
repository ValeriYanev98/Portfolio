import type React from "react";
import styles from "./Hero.module.scss";

const Hero: React.FC = () => {
  return (
    <section className={styles.sectionHero}>
      <h1>Valeri — Full-Stack Web Developer</h1>
      <p>
        I build secure and fast web applications with React, TypeScript and Node.js, creating complex features like
        secure payment integration and real-time data tracking.
      </p>

      <ul>
        <li>
          <img src="/svg/typescript.svg" />
        </li>
        <li>
          <img src="/svg/react.svg" />
        </li>
        <li>
          <img src="/svg/nodejs.svg" />
        </li>
      </ul>

      <div></div>
    </section>
  );
};

export default Hero;
