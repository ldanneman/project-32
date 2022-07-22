import React from "react";
import styles from "./button.module.css";

function Button({ children, onClick, ...props }) {
  return (
    <div onClick={onClick} className={styles.button} {...props}>
      {children}
    </div>
  );
}

export default Button;
