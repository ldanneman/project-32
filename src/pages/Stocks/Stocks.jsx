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
function Stocks() {
  const [SearchBar, filteredData] = useSearch({ data });
  return (
    <>
      <SearchBar />
      <ListItem data={filteredData} Item={Card} />
    </>
  );
}

export { Stocks };
