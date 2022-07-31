import React from "react";
import styles from "./listItem.module.css";

function ListItem({ data, Item }) {
  return (
    <div className={styles.items}>
      {data.map((_, i) => (
        <Item
          key={i}
          id={styles.item}
          {...data[i]}
          //   {...{ [itemProps[0]]: x[[itemProps[0]]] }}
          //   {...{ [itemProps[1]]: x[[itemProps[1]]] }}
        />
      ))}
    </div>
  );
}

export default ListItem;
