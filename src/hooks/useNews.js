import { useState, useEffect } from 'react';
import { fetchTopHeadlines, searchNews } from '../services/newsApi';

export const useNews = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const fetchNews = async (category = 'all', query = '') => {
    try {
      setLoading(true);
      setError(null);

      let data;
      if (query.trim()) {
        data = await searchNews(query);
      } else {
        data = await fetchTopHeadlines(category === 'all' ? '' : category);
      }

      setArticles(data.articles || []);
    } catch (err) {
      setError(
        err.response?.data?.message || 'Failed to fetch news. Please try again.'
      );
      setArticles([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setSearchQuery('');
    fetchNews(category);
  };

  const handleSearch = (query) => {
    if (query.trim()) {
      setSelectedCategory('all');
      fetchNews('all', query);
    } else {
      fetchNews(selectedCategory);
    }
  };

  const handleRetry = () => {
    fetchNews(selectedCategory, searchQuery);
  };

  return {
    articles,
    loading,
    error,
    selectedCategory,
    searchQuery,
    setSearchQuery,
    handleCategoryChange,
    handleSearch,
    handleRetry,
  };
};
