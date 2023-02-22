import { configureStore, createSlice } from "@reduxjs/toolkit";
import { moviesSlice } from "./slices/movieSlice";

export const store = configureStore({
  reducer: {
    movies: moviesSlice.reducer,
  },
});
