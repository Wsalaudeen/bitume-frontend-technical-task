import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col items-center text-center">
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 mb-4">
            <a
              href="#"
              className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 text-sm"
            >
              About Us
            </a>
            <a
              href="#"
              className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 text-sm"
            >
              Contact
            </a>
            <a
              href="#"
              className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 text-sm"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 text-sm"
            >
              Terms of Service
            </a>
          </div>
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            © 2024 News Today. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
