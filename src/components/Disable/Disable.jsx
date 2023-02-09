import React from "react";
import styles from "./disable.module.css";

function Disable({ children, condition = true }) {
  const outer = !condition ? styles.grayed : styles.none;
  const inner = !condition ? styles.child : styles.none;
  return (
    <div className={outer}>
      <div className={inner}>{children}</div>
    </div>
  );
}

export default Disable;
