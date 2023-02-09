import React from "react";
import styles from "./card.module.css";

function Card({ data, title, body, footer, options, ...props }) {
  const sections = new Map([
    ["title", options?.title || title],
    ["body", options?.body || body],
    ["footer", options?.footer || footer],
    ["image", options?.image || data.image],
    ["nestedImage", options?.nestedImage || data.nestedImage],
  ]);
  return (
    <div className={styles.card} {...props}>
      <div className={styles.title}>{data[sections.get("title")]}</div>
      <div className={styles.main}>
        <div>{data[sections.get("body")]}</div>
        <div>
          {options.image && (
            <img src={data[sections.get("image")]} alt={"im"} />
          )}
          {options.nestedImage && (
            <img
              src={data[sections.get("nestedImage")].url}
              alt={"im"}
              width={"100%"}
              height={250}
            />
          )}
        </div>
      </div>
      <div className={styles.footer}>{data[sections.get("footer")]}</div>
    </div>
  );
}

export default Card;
