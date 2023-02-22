import { createSlice } from "@reduxjs/toolkit";
import { movies } from "../../movies";
export const moviesSlice = createSlice({
  name: "movies",
  initialState: movies,
  reducers: {
    toggleWatched: (state, action) => {
      state = state.map((movie) => {
        if (movie.id === action.payload) {
          return { ...movie, watched: !movie.watched };
        }
        return movie;
      });
      return state;
    },
  },
});
export const { toggleWatched } = moviesSlice.actions;
