import { useSelector } from "react-redux";
import { NewsCard } from "../../../components/NewsCard";
import { newsSelector } from "../newsSelectors";

export const News = () => {
  const { news } = useSelector(newsSelector);

  return <>{/*{news && news.length > 0 && <NewsCard item={news[2]} />}*/}</>;
};
