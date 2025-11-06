import type React from "react";
import { useEffect } from "react";

const NotFound: React.FC = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = "/";
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      style={{
        textAlign: "center",
        padding: "4rem",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>404</h1>
      <p>Oops! That page doesn’t exist.</p>
      <p>Redirecting you back home in a few seconds...</p>
      <a href="/" style={{ color: "#0070f3", textDecoration: "underline" }}>
        Click here if it doesn’t happen automatically
      </a>
    </div>
  );
};

export default NotFound;
