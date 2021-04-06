import { combineReducers } from "@reduxjs/toolkit";
import { newsReducer } from "../../modules/news/newsSlice";

const rootReducer = combineReducers({
  news: newsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
