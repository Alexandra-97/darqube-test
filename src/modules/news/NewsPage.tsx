import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";
import { AppDispatch } from "../../core/redux/store";
import { getNews } from "./newsActions";
import { newsSelector } from "./newsSelectors";
import { AppLayout } from "../../components/layouts/AppLayout";
import { News } from "./tabs/News";
import { Bookmarks } from "./tabs/Bookmarks";

export const NewsPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { news } = useSelector(newsSelector);

  useEffect(() => {
    !news && dispatch(getNews());
  }, [dispatch, news]);

  return (
    <AppLayout>
      <Switch>
        <Route path={"/news"} exact>
          <News />
        </Route>
        <Route path={"/bookmarks"}>
          <Bookmarks />
        </Route>
        <Redirect from={"/"} to={"/news"} />
      </Switch>
    </AppLayout>
  );
};
