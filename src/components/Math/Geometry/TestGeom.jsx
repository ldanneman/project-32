import React from 'react'
import { GeometryBoard } from 'react-dynamic-geometry';
import styles from "./TestGeom.module.css"

function TestGeom() {
  return (
    <view className={styles.outer}>
    <view className={styles.box}>
    <GeometryBoard>
  {(build) => {
        const A = build("Point", { x: 0, y: 0 });
        const B = build("Point", { x: 3, y: 5 });
        const C = build("Point", { x: -5, y: -3 });
    const D = build("Point", { x: 6, y: -3 });
    const E = build("Point", { x: -4, y: 5 });
   
    build("Axes", {});
    build("Line", { start: A, end: B });
    build("Polygon", { vertices: [C, D, E] });
  }}
</GeometryBoard>
  </view>
  </view>
  )
}

export default TestGeom