import axios from "axios";
import { getToken } from "../utils";

const instance = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${getToken()}`,
  },
});

export const imgInstance = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    "Content-Type": "multipart/form-data",
    Authorization: `Bearer ${getToken()}`,
  },
});

export default instance;
