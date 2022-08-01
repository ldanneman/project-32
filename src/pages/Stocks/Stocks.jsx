import React from "react";
import useModal from "../../hooks/useModal";
import Button from "../../components/Button/Button";
import Card from "../../components/Card/Card";
import ListItem from "../../components/ListItem/ListItem";
import useSearch from "../../hooks/useSearch";

const data = [
  { title: "hello", body: "one", footer: "gooter" },
  { title: "bye", body: "two", footer: "three" },
  { title: "say", body: "hello", footer: "fffer" },
  { title: "hello", body: "one", footer: "gooter" },
  { title: "bye", body: "two", footer: "three" },
  { title: "say", body: "hello", footer: "fffer" },
];

const data2 = [
  { title: "asasa", body: "asaa", footer: "asasa" },
  { title: "mN", body: "SAS", footer: "thSASASe" },
  { title: "say", body: "hello", footer: "fffer" },
  { title: "hello", body: "one", footer: "gooter" },
  { title: "bye", body: "two", footer: "three" },
  { title: "say", body: "hello", footer: "fffer" },
];
function Stocks() {
  const [SearchBar, filteredData] = useSearch({ data });
  console.log("filteredData", filteredData);
  // const [SearchBar2, filteredData2] = useSearch({ data2 });
  return (
    <>
      <SearchBar />
      <ListItem data={filteredData} Item={Card} />

      {/* <SearchBar2>
        <ListItem data={filteredData2} Item={Card} />
      </SearchBar2> */}
    </>
  );
}

export { Stocks };
