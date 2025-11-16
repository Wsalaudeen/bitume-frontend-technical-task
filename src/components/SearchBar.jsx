import React, { useState } from "react";
import { Search, X } from "lucide-react";

const SearchBar = ({ onSearch, searchQuery, setSearchQuery }) => {
  const [localQuery, setLocalQuery] = useState(searchQuery);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(localQuery);
    setSearchQuery(localQuery);
  };

  const handleClear = () => {
    setLocalQuery("");
    setSearchQuery("");
    onSearch("");
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <form onSubmit={handleSubmit} className="relative">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 w-5 h-5" />
            <input
              type="text"
              value={localQuery}
              onChange={(e) => setLocalQuery(e.target.value)}
              placeholder="Search for news, topics..."
              className="w-full pl-12 pr-12 py-3 border border-gray-200 dark:border-gray-700 bg-white text-gray-900 placeholder-gray-500 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none text-base shadow-sm"
            />
            {localQuery && (
              <button
                type="button"
                onClick={handleClear}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 p-1 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>
        </form>
      </div>
    </section>
  );
};

export default SearchBar;
