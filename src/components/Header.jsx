import React from "react";
import { Search, Bell, Moon, Sun } from "lucide-react";

const Header = ({ darkMode, toggleDarkMode }) => {
  return (
    <header className="bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-6 sm:space-x-12">
            <div className="flex-shrink-0 flex items-center">
              <span className="w-6 h-6 sm:w-8 sm:h-8  rounded-lg flex items-center justify-center overflow-hidden">
                <img
                  src="/n2 (1).svg"
                  alt="News Today logo"
                  className="w-full h-full object-contain cursor-pointer"
                />
              </span>
              <h1 className="cursor-pointer ml-2 sm:ml-3 text-lg sm:text-2xl font-bold text-gray-900 dark:text-gray-100 font-serif">
                News Today
              </h1>
            </div>

            <nav className="hidden lg:flex space-x-6 xl:space-x-8">
              <a
                href="#"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 font-medium "
              >
                Top Stories
              </a>
              <a
                href="#"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 font-medium "
              >
                World
              </a>
              <a
                href="#"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 font-medium "
              >
                Politics
              </a>
              <a
                href="#"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 font-medium "
              >
                Business
              </a>
              <a
                href="#"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 font-medium "
              >
                Tech
              </a>
              <a
                href="#"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 font-medium "
              >
                Culture
              </a>
            </nav>
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className="p-2 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>

            <button
              className="p-2 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
              aria-label="Notifications"
            >
              <Bell className="w-5 h-5" />
            </button>

            <div className="w-8 h-8 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
