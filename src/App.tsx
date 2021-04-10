import React from "react";
import { NewsPage } from "./modules/news/NewsPage";
import { BrowserRouter } from "react-router-dom";

export const App = () => {
  return (
    <BrowserRouter>
      <NewsPage />
    </BrowserRouter>
  );
};

export default App;
