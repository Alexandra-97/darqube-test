import { createAsyncThunk } from "@reduxjs/toolkit";
import { News } from "../../api/dto/News";
import { newsRequests } from "../../api/requests/newsRequests";

export const getNews = createAsyncThunk<Array<News>>(
  "news/getNews",
  async (params, thunkAPI) => {
    try {
      return await newsRequests.getNews();
    } catch (err) {
      return thunkAPI.rejectWithValue("Invalid operation: " + err);
    }
  }
);
