import { useSelector } from "react-redux";
import { NewsWrapper, NewsList } from "../../../components/NewsList";
import { bookmarksSelector } from "../newsSelectors";
import { NewsCard } from "../../../components/NewsCard";

export const Bookmarks = () => {
  const { news, latestNews } = useSelector(bookmarksSelector);

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
