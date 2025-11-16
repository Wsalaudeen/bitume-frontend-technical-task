import React from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import CategoryFilter from "./components/CategoryFilter";
import NewsCard from "./components/NewsCard";
import LoadingSpinner, { LoadingCards } from "./components/LoadingSpinner";
import ErrorState from "./components/ErrorState";
import Footer from "./components/Footer";
import { useDarkMode } from "./hooks/useDarkMode";
import { useNews } from "./hooks/useNews";

function App() {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const {
    articles,
    loading,
    error,
    selectedCategory,
    searchQuery,
    setSearchQuery,
    handleCategoryChange,
    handleSearch,
    handleRetry,
  } = useNews();

  return (
    <section className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      <SearchBar
        onSearch={handleSearch}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      <CategoryFilter
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {searchQuery && (
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 font-serif">
              Search results for "{searchQuery}"
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mt-1">
              {articles.length} articles found
            </p>
          </div>
        )}

        {loading ? (
          <LoadingCards />
        ) : error ? (
          <ErrorState message={error} onRetry={handleRetry} />
        ) : articles.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              No articles found.
            </p>
          </div>
        ) : (
          <>
            {!searchQuery && articles.length > 0 && (
              <div className="mb-12">
                <NewsCard
                  article={articles[0]}
                  isLarge={true}
                  articleIndex={0}
                />
              </div>
            )}

            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8 font-serif">
                {searchQuery ? "Search Results" : "Recent Articles"}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {articles.slice(searchQuery ? 0 : 1).map((article, index) => {
                  const actualIndex = searchQuery ? index : index + 1;
                  return (
                    <NewsCard
                      key={`${article.url}-${index}`}
                      article={article}
                      articleIndex={actualIndex}
                    />
                  );
                })}
              </div>
            </div>
          </>
        )}
      </main>

      <Footer />
    </section>
  );
}

export default App;
