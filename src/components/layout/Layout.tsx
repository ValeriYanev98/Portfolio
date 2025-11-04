import type React from "react";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import styles from "./Layout.module.scss";

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
