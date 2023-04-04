import axios from "axios";
const BASE_URL = "https://youtube-v31.p.rapidapi.com/search";

const options = {
  method: "GET",
  url: BASE_URL,
  params: {
    maxResults: "50",
  },
  headers: {
    "X-RapidAPI-Key": process.env.APP_KEY,
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};
export const fetchFromAPI = async (url) => {
  const { data } = await axios.getUri(`${BASE_URL}/${url}`, options);
  return data;
};
