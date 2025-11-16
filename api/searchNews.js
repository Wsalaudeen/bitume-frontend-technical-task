export default async function handler(req, res) {
    
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  const API_KEY = process.env.VITE_NEWS_API_KEY;

  if (!API_KEY) {
    return res.status(500).json({ error: "API key not configured" });
  }

  try {
    const {
      q: query,
      searchIn = "title,content",
      sortBy = "publishedAt",
      pageSize = 20,
      language = "en",
    } = req.query;

    if (!query) {
      return res.status(400).json({ error: "Query parameter is required" });
    }

    const url = `https://newsapi.org/v2/everything?q=${encodeURIComponent(
      query
    )}&searchIn=${searchIn}&sortBy=${sortBy}&pageSize=${pageSize}&language=${language}&apiKey=${API_KEY}`;

    const response = await fetch(url);
    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json(data);
    }

    res.status(200).json(data);
  } catch (error) {
    console.error("Search news error:", error);
    res
      .status(500)
      .json({ error: "Failed to search news", message: error.message });
  }
}
