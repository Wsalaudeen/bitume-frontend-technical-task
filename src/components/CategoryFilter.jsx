import React from "react";
import { categories } from "../constants/categories";

const CategoryFilter = ({ selectedCategory, onCategoryChange }) => {
  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-4 sm:py-6">
          <div className="flex items-center space-x-2 sm:space-x-3 overflow-x-auto scrollbar-hide pb-2 sm:pb-0">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => onCategoryChange(category.id)}
                className={`category-btn flex-shrink-0 ${
                  selectedCategory === category.id
                    ? "category-btn-active"
                    : "category-btn-inactive"
                }`}
              >
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryFilter;
