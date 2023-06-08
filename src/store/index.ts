import { configureStore } from "@reduxjs/toolkit";
import boxOfficeAllTimeSlice from "./boxOfficeAllTimeSlice";
import topMoviesSlice from "./topMoviesSlice";
import topTvShowsSlice from "./topTvShowsSlice";
import mostPopularMoviesSlice from "./mostPopularMoviesSlice";
import mostPopularSeriesSlice from "./mostPopularSeriesSlice";
import genresListSlice from "./genresListSlice";
import genreSlice from "./genreSlice";
import wishListSlice from "./wishListSlice";
import itemSlice from "./itemSlice";
import castSlice from "./castSlice";
import searchSlice from "./searchSlice";
import otherSlice from "./otherSlice";

const store = configureStore({
  reducer: {
    mostPopularMovies: mostPopularMoviesSlice,
    mostPopularSeries: mostPopularSeriesSlice,
    boxOfficeAllTime: boxOfficeAllTimeSlice,
    topMovies: topMoviesSlice,
    topTvShows: topTvShowsSlice,
    genresList: genresListSlice,
    genre: genreSlice,
    cast: castSlice,
    wishlist: wishListSlice,
    item: itemSlice,
    other: otherSlice,
    search: searchSlice,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
