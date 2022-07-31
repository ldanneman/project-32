import React from "react";
import styles from "./card.module.css";

function Card({ title = "titl", body = "body", footer = "footer", ...props }) {
  return (
    <div className={styles.card} {...props}>
      <div className={styles.title}>{title}</div>
      <div className={styles.main}>{body}</div>
      <div className={styles.footer}>{footer}</div>
    </div>
  );
}

export default Card;
