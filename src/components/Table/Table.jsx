import React from "react";
import styles from "./Table.module.css";

function Table({ columns, data }) {
  if (!columns && !data) return null;
  let tableColumns;
  let newArray = [];
  if (columns) {
    tableColumns = columns;
  } else {
    const keys = Object.keys(data[0]);
    keys.forEach((item) => {
      let obj = { title: item.replaceAll(/_/gi, " "), label: item };
      newArray.push(obj);
    });
    tableColumns = newArray;
  }
  const length = tableColumns.length;
  return (
    <div>
      <div
        className={styles.userGrid}
        style={{
          gridTemplateColumns: `repeat(${tableColumns.length}, ${
            100 / tableColumns.length
          }%)`,
        }}
      >
        {tableColumns.map((tableColumn) => (
          <div className={styles.gridItem}>{tableColumn.title}</div>
        ))}
      </div>
      <div
        className={styles.userGrid}
        style={{
          gridTemplateColumns: `repeat(${tableColumns.length}, ${
            100 / tableColumns.length
          }%)`,
        }}
      >
        {data.map((item, i) => {
          return Object.values(item).map((it, i) => (
            <div className={styles.gridItem}>{it}</div>
          ));
        })}
      </div>
    </div>
  );
}

export default Table;
