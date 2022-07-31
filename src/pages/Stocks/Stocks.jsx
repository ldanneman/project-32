import React from "react";
import useModal from "../../hooks/useModal";
import Button from "../../components/Button/Button";
import Card from "../../components/Card/Card";
import ListItem from "../../components/ListItem/ListItem";

const data = [
  { title: "hello", body: "one", footer: "gooter" },
  { title: "bye", body: "two", footer: "three" },
  { title: "say", body: "hello", footer: "fffer" },
  { title: "hello", body: "one", footer: "gooter" },
  { title: "bye", body: "two", footer: "three" },
  { title: "say", body: "hello", footer: "fffer" },
];
function Stocks() {
  return (
    <ListItem
      data={data}
      Item={Card}
      // itemProps={{ title: "title", body: "", footer: "" }}
      itemProps={["title", "body", "footer"]}
    />
  );
}

export { Stocks };
