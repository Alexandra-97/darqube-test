import { useDispatch, useSelector } from "react-redux";
import { NewsCard } from "../../components/NewsCard";
import { AppDispatch } from "../../core/redux/store";
import { useEffect } from "react";
import { getNews } from "./newsActions";
import { newsSelector } from "./newsSlice";

export const News = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { loading, news } = useSelector(newsSelector);

  useEffect(() => {
    dispatch(getNews());
  }, []);

  return <NewsCard />;
};
