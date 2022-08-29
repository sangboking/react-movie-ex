import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "cc4d1dd0c0cd3d659a1304f42211ad26",
    language: "ko-KR",
  },
});

export default instance;
