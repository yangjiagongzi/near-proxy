import React from "react";
import styles from "./styles.css";
import logo from "~/assets/images/app-icon.png";

const PageLoading: React.FC = () => {
  return (
    <div className={styles.container}>
      <img src={logo} alt="logo" />
    </div>
  );
};

export default PageLoading;
