import { useSelector } from "react-redux";
import { NewsCard } from "../../../components/NewsCard";
import { newsSelector } from "../newsSelectors";
import { NewsWrapper, NewsList } from "../../../components/NewsList";

export const News = () => {
  const { news, latestNews } = useSelector(newsSelector);

  return (
    <NewsWrapper>
      {latestNews && <NewsCard item={latestNews} isLatest={true} />}
      <NewsList>
        {news &&
          news.length > 0 &&
          news
            .slice(0, 10)
            .map((item) => <NewsCard key={item.id} item={item} />)}
      </NewsList>
    </NewsWrapper>
  );
};
