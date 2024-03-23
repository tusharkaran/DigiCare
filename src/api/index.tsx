import axios from "axios";
import { digicareConfig } from "../assets/constants/config";

export const digiAxios = axios.create({
  baseURL: `${digicareConfig.backendWebPport}`,
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});
