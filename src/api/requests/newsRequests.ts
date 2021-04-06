import { baseFetch } from "../baseFetch";
import { News } from "../dto/News";

const getNews = async () => {
  return await baseFetch<Array<News>>({
    method: "GET",
  });
};

export const newsRequests = { getNews };
