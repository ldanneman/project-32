import React from "react";
import styles from "./css/search.module.css";

function useSearch(data) {
  const [search, setSearch] = React.useState("");

  const filteredData = React.useMemo(() => {
    const filter = data?.filter((item) =>
      Object?.values(item)?.some((val) =>
        String(val).toLowerCase()?.includes(String(search).toLowerCase())
      )
    );
    // if (search == "" || !filter.length) return data;
    return filter;
  }, [data, search]);

  const SearchBar = React.useCallback(() => {
    return (
      <div className={styles.container}>
        <form>
          <input
            className={styles.input}
            onChange={(e) => setSearch(e.target.value.toLowerCase())}
            placeholder="Search"
            name="search"
          />
        </form>
      </div>
    );
  }, []);
  //   if (!filteredData) return null;
  return [SearchBar, filteredData];
}

export default useSearch;
