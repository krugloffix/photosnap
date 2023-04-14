import { configureStore } from "@reduxjs/toolkit";
import StoriesSlice from "./StoriesSlice";

export const store = configureStore({
  reducer: {
    stories: StoriesSlice,
  },
});
