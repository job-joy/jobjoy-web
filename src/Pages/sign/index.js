import React from "react";
import Controller from "./controller";
import styles from "../styles/Sign.module.css";

const Sign = () => {
  return (
    <>
      <div className={styles.pageSign}>
        <div className={styles.boxSign}>
          <Controller />
        </div>
      </div>
    </>
  );
};
export default Sign;
