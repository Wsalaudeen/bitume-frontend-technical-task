import React from 'react';
import { Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import SingleArticleWrapper from './components/SingleArticleWrapper.jsx';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/article/:id" element={<SingleArticleWrapper />} />
    </Routes>
  );
};

export default AppRouter;
