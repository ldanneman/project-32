import React from "react";
import styles from "./modal.module.css";

function Modal({children}) {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{children}</div>
    </div>
  );
}

export default Modal;
