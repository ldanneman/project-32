import React from "react";
import NavBar from "../components/NavBar/NavBar";
// import Button from "components/Button/Button";
import { Input } from "../components/FormTypes/FormTypes";

function useSearch({ data }) {
  const [search, setSearch] = React.useState("");
  const filteredData = React.useMemo(() => {
    const filter = data.filter((item) =>
      Object.values(item).some((val) => val.includes(search))
    );
    if (search == "" || !filter.length) return data;
    return filter;
  }, [data, search]);

  const SearchBar = React.useCallback(() => {
    return (
      <nav className="d-block">
        <form>
          <input
            onChange={(e) => setSearch(e.target.value.toLowerCase())}
            className="search-input"
            placeholder="Search"
            name="search"
          />
        </form>
      </nav>
    );
  }, []);

  if (!filteredData.length) return null;
  return [SearchBar, filteredData];
}

export default useSearch;
