import axios from "axios";

export const getRequest = async (url, setState) => {
  try {
    const res = await axios.get(url, setState);
    setState(res.data);
  } catch (err) {
    console.error(err);
  }
};
