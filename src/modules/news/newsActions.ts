import { createAsyncThunk } from "@reduxjs/toolkit";
import { newsRequests } from "../../api/requests/newsRequests";
import { News } from "./newsSlice";

export const getNews = createAsyncThunk<News>(
  "news/getNews",
  async (params, thunkAPI) => {
    try {
      const response = await newsRequests.getNews();
      return response.slice(1).reduce<News>((acc, item) => {
        acc[item.id] = item;
        return acc;
      }, {});
    } catch (err) {
      return thunkAPI.rejectWithValue("Invalid operation: " + err);
    }
  }
);
