import { RootState } from "../../core/redux/rootReducer";
import { FullNews, News, Pagination } from "./newsSlice";

const transformNews = (news: News) => {
  const list = Object.values(news);
  const latestNews = list[0];
  const newsList = list.slice(1);

  return { newsList, latestNews };
};

const searchFilter = (news: Array<FullNews>, search: string) => {
  return news.filter(
    ({ headline, summary }) =>
      headline.includes(search) || summary.includes(search)
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

  const { newsList, latestNews } = transformNews(news);
  const searchedNews = search ? searchFilter(newsList, search) : newsList;
  const paginatedNews = paginateData(searchedNews, pagination);

  return { news: paginatedNews, latestNews, loading };
};

export const bookmarksSelector = (state: RootState) => {
  const { news, loading, search, pagination } = state.news;
  if (!news) {
    return { loading };
  }

  const { newsList, latestNews } = transformNews(news);
  const searchedNews = search ? searchFilter(newsList, search) : newsList;
  const paginatedNews = paginateData(searchedNews, pagination);

  return { news: paginatedNews, latestNews, loading };
};
