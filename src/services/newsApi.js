// import axios from "axios";

// const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

// const BASE_URL = "https://newsapi.org/v2";

// const newsApi = axios.create({
//   baseURL: BASE_URL,
//   params: {
//     apiKey: API_KEY,
//   },
// });

// export const fetchTopHeadlines = async (category = "", country = "us") => {
//   try {
//     const params = {
//       country,
//       pageSize: 20,
//     };

//     if (category && category !== "all") {
//       params.category = category;
//     }

//     const response = await newsApi.get("/top-headlines", { params });
//     return response.data;
//   } catch (error) {
//     console.error("Error fetching top headlines:", error);
//     throw error;
//   }
// };

// export const searchNews = async (query, searchIn = "title,content") => {
//   try {
//     const response = await newsApi.get("/everything", {
//       params: {
//         q: query,
//         searchIn,
//         sortBy: "publishedAt",
//         pageSize: 20,
//         language: "en",
//       },
//     });
//     return response.data;
//   } catch (error) {
//     console.error("Error searching news:", error);
//     throw error;
//   }
// };

// export default newsApi;

import axios from "axios";

// Determine if we're in development or production
const isDevelopment = import.meta.env.MODE === "development";

console.log("Environment:", import.meta.env.MODE);
console.log(
  "Using:",
  isDevelopment ? "NewsAPI directly" : "Serverless functions"
);

// In development: use NewsAPI directly (works on localhost)
// In production: use our Vercel serverless functions
const BASE_URL = isDevelopment ? "https://newsapi.org/v2" : "/api"; // This will use your Vercel serverless functions

const newsApi = axios.create({
  baseURL: BASE_URL,
  // Only add apiKey in development
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

    // Different endpoints for dev vs production
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
