import { RootState } from "../../core/redux/rootReducer";
import { FullNews, News, Pagination } from "./newsSlice";

const mapToArray = (newsMap: News) => {
  return Object.values(newsMap);
};

const transformNews = (newsArray: Array<FullNews>) => {
  const latestNews = newsArray[0];
  const newsList = newsArray.slice(1);

  return { newsList, latestNews };
};

const searchFilter = (news: Array<FullNews>, search: string) => {
  const searchString = search.toLowerCase();

  return news.filter(
    ({ headline, summary }) =>
      headline.toLowerCase().includes(searchString) ||
      summary.toLowerCase().includes(searchString)
  );
};

const paginateData = (news: Array<FullNews>, paginateOptions: Pagination) => {
  return news;
};

export const newsSelector = (state: RootState) => {
  const { news, loading, search, pagination } = state.news;
  if (!news) {
    return { loading };
  }

  const { newsList, latestNews } = transformNews(mapToArray(news));
  const searchedNews = search ? searchFilter(newsList, search) : newsList;
  const paginatedNews = paginateData(searchedNews, pagination);

  return { news: paginatedNews, latestNews, loading, search };
};

export const bookmarksSelector = (state: RootState) => {
  const { news, loading, search, pagination } = state.news;
  if (!news) {
    return { loading };
  }

  let bookmarks = mapToArray(news).filter(({ bookmark }) => bookmark);
  const { newsList, latestNews } = transformNews(mapToArray(bookmarks));
  const searchedNews = search ? searchFilter(newsList, search) : newsList;
  const paginatedNews = paginateData(searchedNews, pagination);

  return { news: paginatedNews, latestNews, loading };
};
