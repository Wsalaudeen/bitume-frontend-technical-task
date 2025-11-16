import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Clock,
  Heart,
  MessageCircle,
  Share,
  Moon,
  Sun,
} from "lucide-react";
import NewsCard from "./NewsCard";
import { useDarkMode } from "../hooks/useDarkMode";

const SingleArticle = ({ articles }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { darkMode, toggleDarkMode } = useDarkMode();

  const article = articles[parseInt(id)];

  if (!article) {
    return (
      <div
        className={`min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center ${
          darkMode ? "dark" : ""
        }`}
      >
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Article Not Found
          </h1>
          <button
            onClick={() => navigate("/")}
            className="inline-flex items-center px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div
      className={`min-h-screen bg-gray-50 dark:bg-gray-900 ${
        darkMode ? "dark" : ""
      }`}
    >
      <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => navigate("/")}
              className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to News
            </button>

            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 transition-colors"
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <header className="mb-8">
          <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400 mb-4">
            <span className="bg-primary-100 text-primary-800 px-2 py-1 rounded text-xs font-medium">
              {article.source?.name || "Unknown Source"}
            </span>
            <span>•</span>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              {formatDate(article.publishedAt)}
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100 leading-tight mb-6 font-serif">
            {article.title}
          </h1>

          {article.description && (
            <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
              {article.description}
            </p>
          )}
        </header>

        {article.urlToImage && (
          <div className="mb-8">
            <img
              src={article.urlToImage}
              alt={article.title}
              className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-xl"
              onError={(e) => {
                e.target.style.display = "none";
              }}
            />
          </div>
        )}

        <div className="prose prose-lg dark:prose-invert max-w-none mb-8">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
            {article.content ||
              article.description ||
              "Full article content would be displayed here. This is a demo showing how the single article page would look with the actual article content from the news API."}
          </p>
        </div>

        <div className="flex items-center justify-between border-t border-gray-200 dark:border-gray-700 pt-6 mb-8">
          <div className="flex items-center space-x-6">
            <button className="flex items-center space-x-2 text-gray-500 dark:text-gray-400 hover:text-red-500 transition-colors">
              <Heart className="w-5 h-5" />
              <span className="text-sm">Like</span>
            </button>
            <button className="flex items-center space-x-2 text-gray-500 dark:text-gray-400 hover:text-blue-500 transition-colors">
              <MessageCircle className="w-5 h-5" />
              <span className="text-sm">Comment</span>
            </button>
            <button className="flex items-center space-x-2 text-gray-500 dark:text-gray-400 hover:text-green-500 transition-colors">
              <Share className="w-5 h-5" />
              <span className="text-sm">Share</span>
            </button>
          </div>

          <a
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
          >
            Read Original
          </a>
        </div>

        {article.author && (
          <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 mb-12">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
              About the Author
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              By {article.author}
            </p>
          </div>
        )}

        {articles && articles.length > 1 && (
          <div className="border-t border-gray-200 dark:border-gray-700 pt-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-8 font-serif">
              Related Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {(() => {
                const currentIndex = parseInt(id);
                const currentArticle = articles[currentIndex];

               
                const otherArticles = articles
                  .map((article, index) => ({ article, index }))
                  .filter(({ index }) => index !== currentIndex);

            
                const sameSourceArticles = otherArticles.filter(
                  ({ article }) =>
                    article.source?.name === currentArticle?.source?.name
                );

          
                let relatedArticles = [];
                if (sameSourceArticles.length > 0) {
                  relatedArticles.push(...sameSourceArticles.slice(0, 1));
                }

           
                const remainingSlots = 2 - relatedArticles.length;
                if (remainingSlots > 0) {
                  const otherDifferentArticles = otherArticles.filter(
                    ({ article }) =>
                      article.source?.name !== currentArticle?.source?.name
                  );
                  relatedArticles.push(
                    ...otherDifferentArticles.slice(0, remainingSlots)
                  );
                }

              
                if (relatedArticles.length < 2) {
                  const remaining = otherArticles.filter(
                    ({ index }) =>
                      !relatedArticles.some((r) => r.index === index)
                  );
                  relatedArticles.push(
                    ...remaining.slice(0, 2 - relatedArticles.length)
                  );
                }

                return relatedArticles
                  .slice(0, 2)
                  .map(({ article, index }) => (
                    <NewsCard
                      key={`related-${index}`}
                      article={article}
                      articleIndex={index}
                    />
                  ));
              })()}
            </div>
          </div>
        )}
      </article>
    </div>
  );
};

export default SingleArticle;
