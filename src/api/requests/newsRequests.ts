import { baseFetch } from "../baseFetch";
import { NewsResponse } from "../dto/NewsResponse";

const getNews = async () => {
  return await baseFetch<Array<NewsResponse>>({
    method: "GET",
  });
};

export const newsRequests = { getNews };
