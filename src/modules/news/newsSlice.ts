import { createSlice } from "@reduxjs/toolkit";
import { NewsResponse } from "../../api/dto/NewsResponse";
import { getNews } from "./newsActions";

export type FullNews = NewsResponse & { bookmark?: boolean };

export type News = {
  [key: number]: FullNews;
};

export interface Pagination {
  currentPage: number;
  pageSize: number;
}

interface NewsState {
  loading: boolean;
  news?: News;
  bookmarks?: News;
  search?: string;
  pagination: Pagination;
}

const defaultPaginate: Pagination = {
  currentPage: 0,
  pageSize: 6,
};

const initialState: NewsState = {
  loading: false,
  pagination: defaultPaginate,
};

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getNews.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getNews.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.news = payload;
    });
    builder.addCase(getNews.rejected, (state) => {
      state.loading = false;
    });
  },
});

export const newsReducer = newsSlice.reducer;
