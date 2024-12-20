import axios from "axios";

export const fetchedData = async () => {
  try {
    const res = await axios.get("/api/products");
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
