import { createSlice } from "@reduxjs/toolkit";
import { News } from "../../api/dto/News";
import { RootState } from "../../core/redux/rootReducer";
import { getNews } from "./newsActions";

interface NewsState {
  loading: boolean;
  news: Array<News>;
}

const initialState: NewsState = {
  loading: false,
  news: [],
};

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getNews.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getNews.fulfilled, (state, action) => {
      state.loading = false;
      state.news = action.payload;
    });
    builder.addCase(getNews.rejected, (state) => {
      state.loading = false;
    });
  },
});

export const newsSelector = (state: RootState) => state.news;

export const newsReducer = newsSlice.reducer;
