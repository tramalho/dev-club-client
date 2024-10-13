import axios from "axios";
import { dotenv } from "dotenv";

const api = axios.create({
  baseURL: dotenv.env.SERVER_URL,
});

export default api;
