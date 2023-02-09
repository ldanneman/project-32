import React from "react";
import data from "../../data/hiearchy.json";

function Home(props) {
  function getKeys(obj) {
    const array = [];
    let id = 0;

    function loop(obj) {
      Object.entries(obj).forEach((entry) => {
        array.push({
          id: ++id,
          label: entry[0],
        });
        if (entry[1] != null && entry[1].constructor.name === "Object") {
          loop(entry[1]);
        }
      });
    }

    loop(obj);

    return array;
  }

  return (
    <div>
      <div>Home</div>
    </div>
  );
}

export { Home };
