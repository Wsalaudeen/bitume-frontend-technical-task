import React from 'react';
import { useParams } from 'react-router-dom';
import SingleArticle from './SingleArticle';
import { useNews } from '../hooks/useNews';
import LoadingSpinner from './LoadingSpinner';
import ErrorState from './ErrorState';

const SingleArticleWrapper = () => {
  const { id } = useParams();
  const { articles, loading, error, handleRetry } = useNews();

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <ErrorState message={error} onRetry={handleRetry} />;
  }

  return <SingleArticle articles={articles} />;
};

export default SingleArticleWrapper;




