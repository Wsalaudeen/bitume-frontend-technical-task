import axios from "axios";

const isDevelopment = import.meta.env.MODE === "development";

console.log("Environment:", import.meta.env.MODE);
console.log(
  "Using:",
  isDevelopment ? "NewsAPI directly" : "Serverless functions"
);

const BASE_URL = isDevelopment ? "https://newsapi.org/v2" : "/api";

const newsApi = axios.create({
  baseURL: BASE_URL,

  ...(isDevelopment && {
    params: {
      apiKey: import.meta.env.VITE_NEWS_API_KEY,
    },
  }),
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

    const endpoint = isDevelopment ? "/top-headlines" : "/topHeadlines";
    const response = await newsApi.get(endpoint, { params });
    return response.data;
  } catch (error) {
    console.error("Error fetching top headlines:", error);
    throw error;
  }
};

export const searchNews = async (query, searchIn = "title,content") => {
  try {
    const response = await newsApi.get(
      isDevelopment ? "/everything" : "/searchNews",
      {
        params: {
          q: query,
          searchIn,
          sortBy: "publishedAt",
          pageSize: 20,
          language: "en",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error searching news:", error);
    throw error;
  }
};

export default newsApi;
