import axios from "axios";

const API_KEY = import.meta.env.VITE_NEWS_API_KEY;
const BASE_URL = "https://newsapi.org/v2";

const newsApi = axios.create({
  baseURL: BASE_URL,
  params: {
    apiKey: API_KEY,
  },
});

export const fetchTopHeadlines = async (category = "", country = "us") => {
  try {
    const params = {
      country,
      pageSize: 20,
    };

    if (category && category !== "all") {
      params.category = category;
    }

    const response = await newsApi.get("/top-headlines", { params });
    return response.data;
  } catch (error) {
    console.error("Error fetching top headlines:", error);
    throw error;
  }
};

export const searchNews = async (query, searchIn = "title,content") => {
  try {
    const response = await newsApi.get("/everything", {
      params: {
        q: query,
        searchIn,
        sortBy: "publishedAt",
        pageSize: 20,
        language: "en",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error searching news:", error);
    throw error;
  }
};

export default newsApi;
