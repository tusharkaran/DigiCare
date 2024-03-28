import axios from "axios";

export const digiAxios = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_HOST,
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});
