import React from "react";
import { useNavigate } from "react-router-dom";
import { Clock, Heart, MessageCircle, Share } from "lucide-react";
import { useReadMore } from "../hooks/useReadMore";
import { formatDate } from "../utils/dateUtils";

const NewsCard = ({ article, isLarge = false, articleIndex }) => {
  const navigate = useNavigate();
  const { displayText, isExpanded, shouldTruncate, toggleExpanded } =
    useReadMore(article.description, 120);

  const handleCardClick = () => {
    navigate(`/article/${articleIndex}`);
  };

  if (isLarge) {
    return (
      <div
        className="news-card overflow-hidden cursor-pointer group"
        onClick={handleCardClick}
      >
        <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] bg-gradient-to-br from-teal-800 to-teal-900">
          {article.urlToImage && (
            <img
              src={article.urlToImage}
              alt={article.title}
              className="w-full h-full object-cover opacity-90"
              onError={(e) => {
                e.target.style.display = "none";
              }}
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-8 lg:p-12 text-white">
            <h1 className="text-2xl sm:text-3xl lg:text-5xl font-black mb-3 sm:mb-4 lg:mb-6 leading-tight max-w-4xl font-serif text-white">
              {article.title}
            </h1>
            <p className="text-sm sm:text-base lg:text-lg text-gray-300 mb-4 sm:mb-6 lg:mb-8 line-clamp-2 sm:line-clamp-3 max-w-3xl leading-relaxed">
              {article.description}
            </p>
            <button className="inline-flex items-center px-4 py-2 sm:px-5 sm:py-2.5 lg:px-6 lg:py-3 bg-primary-600 text-white font-semibold text-sm sm:text-base lg:text-lg rounded-lg hover:bg-primary-700 transition-colors shadow-lg">
              Read More
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <article
      className="news-card overflow-hidden cursor-pointer group hover-lift fade-in"
      onClick={handleCardClick}
    >
      {article.urlToImage && (
        <div className="aspect-video overflow-hidden bg-gray-100">
          <img
            src={article.urlToImage}
            alt={article.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            onError={(e) => {
              e.target.parentElement.style.display = "none";
            }}
          />
        </div>
      )}

      <div className="p-4 sm:p-6">
        <div className="flex items-center justify-between mb-4">
          <span className="inline-block px-2 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded">
            {article.source?.name || "Unknown Source"}
          </span>
          <div className="flex items-center text-gray-500 text-xs">
            <Clock className="w-3 h-3 mr-1" />
            {formatDate(article.publishedAt)}
          </div>
        </div>

        <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-4 line-clamp-2 group-hover:text-primary-600 transition-colors leading-tight font-serif">
          {article.title}
        </h3>

        <div className="text-gray-600 dark:text-gray-400 text-[15px] mb-6 leading-relaxed">
          {shouldTruncate ? (
            <p>
              {displayText}
              {!isExpanded && "..."}
              <button
                onClick={toggleExpanded}
                className="ml-1 text-primary-600 hover:text-primary-700 font-medium transition-colors"
              >
                {isExpanded ? " Read less" : " Read more"}
              </button>
            </p>
          ) : (
            <p>{displayText}</p>
          )}
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4 text-gray-500 dark:text-gray-400">
            <button
              className="flex items-center space-x-1 hover:text-primary-600 transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <Heart className="w-4 h-4" />
              <span className="text-sm">1.2k</span>
            </button>
            <button
              className="flex items-center space-x-1 hover:text-primary-600 transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <MessageCircle className="w-4 h-4" />
              <span className="text-sm">34</span>
            </button>
            <button
              className="flex items-center space-x-1 hover:text-primary-600 transition-colors"
              onClick={(e) => e.stopPropagation()}
              aria-label="share"
            >
              <Share className="w-4 h-4" />
            </button>
          </div>

          {article.author && (
            <span className="text-sm text-gray-500 dark:text-gray-400 truncate max-w-32">
              By {article.author.split(" ").slice(0, 2).join(" ")}
            </span>
          )}
        </div>
      </div>
    </article>
  );
};

export default NewsCard;
