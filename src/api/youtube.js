import axios from "axios";

const KEY = "AIzaSyD3vCDHUOYIqu057GVJUejDsXOtJLUz5cM";
export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
