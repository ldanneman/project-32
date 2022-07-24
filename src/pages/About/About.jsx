import React from "react";
import Disable from "../../components/Disable/Disable";

function About() {
  const [count, setCount] = React.useState(0);
  return (
    <div>
      <div>About</div>
      <div>{count}</div>{" "}
      <button onClick={() => setCount((prev) => prev + 1)}>+</button>{" "}
      <Disable condition={count % 2 === 0}>
        <button
          style={{ backgroundColor: "orange", borderWidth: "0px" }}
          onClick={() => alert("pressed")}
        >
          Button Test
        </button>
      </Disable>
    </div>
  );
}

export { About };
