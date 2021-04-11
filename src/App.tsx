import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { NewsPage } from "./modules/news/NewsPage";

//TODO:  clear store on push page, empty component, search in store

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={"/"}>
          <NewsPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
