import React from "react";
import { getRequest } from "../lib/requests";

function useGetRequest(url) {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    getRequest(url, setData);
  }, [url]);

  return data;
}

export default useGetRequest;
