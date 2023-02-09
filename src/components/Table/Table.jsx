import React from "react";
import styles from "./Table.module.css";

function Table({ columns, data }) {
  if (!columns && !data) return null;
  let tableColumns;
  let newArray = [];
  if (columns) {
    tableColumns = columns;
  } else {
    const allKeys = [];
    data.map((item) => {
      const zz = Object.keys(item);
      for (let i = 0; i < zz.length; i++) {
        if (!allKeys.some((j) => j === zz[i])) {
          allKeys.push(zz[i]);
        }
      }
    });
    allKeys.forEach((item) => {
      let obj = { title: item.replaceAll(/_/gi, " "), label: item };
      newArray.push(obj);
    });
    tableColumns = newArray;
  }
  const length = tableColumns.length;

  return (
    <div className={styles.container}>
      <div
        className={styles.userGrid}
        style={{
          gridTemplateColumns: `repeat(${tableColumns.length}, ${
            100 / tableColumns.length
          }%)`,
        }}
      >
        {tableColumns.map((tableColumn) => (
          <div
            className={styles.gridItem}
            style={{ fontWeight: "bold", backgroundColor: "gray" }}
          >
            {tableColumn.title}
          </div>
        ))}
      </div>
      {data && (
        <div
          className={styles.userGrid}
          style={{
            gridTemplateColumns: `repeat(${tableColumns.length}, ${
              100 / tableColumns.length
            }%)`,
          }}
        >
          {data.map((item, z) => {
            return Object.keys(item)
              .sort(
                (a, b) =>
                  tableColumns.indexOf(a.title) - tableColumns.indexOf(b.title)
              )
              .map((it, i) => {
                return (
                  <div
                    className={styles.gridItem}
                    style={{
                      ...(z % 2 === 0 && { backgroundColor: "lightGray" }),
                    }}
                  >
                    {typeof item[`${it}`] !== "object" ? (
                      item[`${it}`]
                    ) : (
                      <div>[object]</div>
                    )}
                  </div>
                );
              });
          })}
        </div>
      )}
    </div>
  );
}

export default Table;
