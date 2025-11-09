import React, { useEffect, useRef } from "react";
import styles from "./Hero.module.scss";
import { useInView } from "react-intersection-observer";

interface Props {
  setShowScrollToTop: React.Dispatch<React.SetStateAction<boolean>>;
}

const Hero: React.FC<Props> = ({ setShowScrollToTop }) => {
  const { ref, inView = undefined } = useInView({
    threshold: 1,
  });

  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }

    if (!inView) {
      setShowScrollToTop(true);
    } else {
      setShowScrollToTop(false);
    }
  }, [inView]);

  return (
    <section className={styles.sectionHero} id="hero" ref={ref}>
      <h1 className={styles.heading}>Valeri Yanev | Full-Stack Web Developer</h1>
      <p className={styles.introduction}>
        I build secure and fast web applications with React, TypeScript and Node.js, creating complex features like
        secure payment integration and real-time data tracking.
      </p>
    </section>
  );
};

export default Hero;
