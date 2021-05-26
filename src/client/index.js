import axios from "axios";

const headers = {
  "Content-Type": "application/json",
};

const client = axios.create({
  baseURL: "http://localhost:3006",
  headers,
});

export default client;
