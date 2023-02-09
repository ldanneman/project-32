import React from "react";
import { getRequest } from "../../lib/requests";
import Table from "../../components/Table/Table";

// const getDogData = async () => {
//   try {
//     const res = await axios.get("https://api.thedogapi.com/v1/breeds");
//     return res.data;
//   } catch (err) {
//     console.error(err);
//   }
// };
const columns = [
  { title: "ONE", label: "one" },
  { title: "TWO", label: "two" },
  { title: "THREE", label: "three" },
  { title: "FOUR", label: "four" },
  { title: "FIVE", lebel: "five" },
];
const data2 = [
  { one: "hello", two: "sing", three: "fire", four: "panic", five: "scream" },
  { one: "bye", two: "sing", three: "fire", four: "panic", five: "scream" },
  { one: "hi", two: "sing", three: "fire", four: "panic", five: "scream" },
];
function Pets() {
  const [data, setData] = React.useState(null);
  React.useEffect(() => {
    getRequest("https://api.thedogapi.com/v1/breeds", setData);
  }, []);

  return (
    <div>
      <div>Pets</div>
      <Table data={data} />
    </div>
  );
}

export { Pets };
