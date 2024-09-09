import axios from "axios";

const APIClient = axios.create({ 
  baseURL: "https://api.rawg.io/api",
  params: {
    key: import.meta.env.VITE_API_KEY
  }
});

export default APIClient;