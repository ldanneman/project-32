import React from "react";
import useModal from "../../hooks/useModal";
import Button from "../../components/Button/Button";
import Card from "../../components/Card/Card";
import ListItem from "../../components/ListItem/ListItem";
import useSearch from "../../hooks/useSearch";
import useGetRequest from "../../hooks/useGetRequest";
import { getRequest } from "../../lib/requests";

// const data = [
//   { title: "hello", body: "one", footer: "gooter" },
//   { title: "bye", body: "two", footer: "three" },
//   { title: "say", body: "hello", footer: "fffer" },
//   { title: "hello", body: "one", footer: "gooter" },
//   { title: "bye", body: "two", footer: "three" },
//   { title: "say", body: "hello", footer: "fffer" },
// ];

// const data2 = [
//   { title: "asasa", body: "asaa", footer: "asasa" },
//   { title: "mN", body: "SAS", footer: "thSASASe" },
//   { title: "say", body: "hello", footer: "fffer" },
//   { title: "hello", body: "one", footer: "gooter" },
//   { title: "bye", body: "two", footer: "three" },
//   { title: "say", body: "hello", footer: "fffer" },
// ];

const data3 = [
  { header: "asasa", main: "asaa", end: "asasa" },
  { header: "mN", main: "SAS", end: "thSASASe" },
  { header: "say", main: "hello", end: "fffer" },
  { header: "hello", main: "one", end: "gooter" },
  { header: "bye", main: "two", end: "three" },
  { header: "say", main: "hello", end: "fffer" },
];
function Stocks() {

  const data = useGetRequest("https://api.thedogapi.com/v1/breeds");

  const [SearchBar, filteredData] = useSearch(data || []);

  return (
    <>
      <SearchBar />
      <ListItem
        data={filteredData}
        Item={Card}
        options={{
          title: "name",
          body: "origin",
          footer: "temperament",
          nestedImage: "image",
        }}
      />
    </>
  );
}

export { Stocks };
