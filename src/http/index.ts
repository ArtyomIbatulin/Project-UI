import axios from "axios";

const $host = axios.create({
  baseURL: "http://localhost:4000/",
});

export { $host };
