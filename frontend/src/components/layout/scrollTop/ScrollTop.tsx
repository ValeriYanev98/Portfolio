import React from "react";
import styles from "./ScrollTop.module.scss";

const ScrollTop: React.FC = () => {
  const handleScrollToTop = (): void => {
    return scrollTo({ top: 0 });
  };

  return <img className={styles.scrollTop} src="/svg/scrollTop.svg" onClick={handleScrollToTop} />;
};

export default ScrollTop;
