import axios from "axios";

export const axiosAnimeInstance = axios.create({
  baseURL: "https://api.jikan.moe/v4/",
});
