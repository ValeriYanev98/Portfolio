import type React from "react";
import { useEffect, useState } from "react";
import styles from "./NotFound.module.scss";

const NotFound: React.FC = () => {
  const [seconds, setSeconds] = useState(4);

  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = "/";
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((s) => (s > 0 ? s - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.notFound}>
      <h1>404</h1>
      <p>Oops! That page doesn’t exist.</p>
      <p>Redirecting you back home in {seconds > 1 ? `${seconds} seconds...` : `1 second...`}</p>
      <a href="/">Click here if it doesn’t happen automatically</a>
    </div>
  );
};

export default NotFound;
