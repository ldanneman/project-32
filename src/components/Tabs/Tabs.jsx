import React from "react";
import Button from "../Button/Button";

function Tabs({ options }) {
  const [selected, setSelected] = React.useState(0);
  return (
    <>
      {options.map((option, i) => (
        <Button
          key={i}
          onClick={() => setSelected(i)}
          style={{
            ...(i !== selected && { backgroundColor: "gray" }),
            borderRadius: 2,
          }}
        >
          {option.label}
        </Button>
      ))}
      <div style={{ marginTop: "2rem" }}>{options[selected].component}</div>
    </>
  );
}

export default Tabs;
