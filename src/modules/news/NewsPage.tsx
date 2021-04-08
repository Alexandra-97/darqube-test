import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../core/redux/store";
import { getNews } from "./newsActions";
import { newsSelector } from "./newsSelectors";
import { AppLayout } from "../../components/layouts/AppLayout";
import { News } from "./tabs/News";

export const NewsPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { news } = useSelector(newsSelector);

  useEffect(() => {
    !news && dispatch(getNews());
  }, [dispatch, news]);

  return (
    <AppLayout>
      <News />
    </AppLayout>
  );
};
