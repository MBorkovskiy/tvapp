import styles from "./RightBar.module.scss";
import { Box, Button, Stack, Typography } from "@mui/material";
import { getTopMovies } from "../../store/topMoviesSlice";
import { getTopTvShows } from "../../store/topTvShowsSlice";
import { FC, useEffect } from "react";
import { RightBarCard } from "../RightBarCard/RightBarCard";
import { useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";

export const RightBar: FC = () => {
  const topMovies = useAppSelector((state) => state.topMovies.topMovies);
  const topTvShows = useAppSelector((state) => state.topTvShows.topTvShows);
  const location = useLocation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const goToMovies = () => {
    navigate("/category/movies");
  };
  const goToSeries = () => {
    navigate("/category/series");
  };
  useEffect(() => {
    if (topMovies.length === 0) {
      dispatch(getTopMovies());
    }
    if (topTvShows.length === 0) {
      dispatch(getTopTvShows());
    }
  }, []);

  return (
    <Box className={styles.right_bar}>
      <Typography
        variant="body2"
        fontWeight={700}
        textTransform="uppercase"
        gutterBottom
      >
        Top 250 Movies
      </Typography>
      <Stack spacing={1.9} direction="row" flexWrap="wrap" mb="15px">
        {topMovies.map((el) => (
          <RightBarCard key={el.id} el={el} />
        ))}
      </Stack>
      <Button
        fullWidth
        color="secondary"
        className={styles.button}
        onClick={goToMovies}
        disabled={location.pathname === "/category/movies"}
      >
        View All
      </Button>
      <Box mt="30px">
        <Typography
          variant="body2"
          fontWeight={700}
          textTransform="uppercase"
          gutterBottom
        >
          Top 250 Series
        </Typography>
      </Box>
      <Stack spacing={1.9} direction="row" flexWrap="wrap" mb="15px">
        {topTvShows.map((el) => (
          <RightBarCard key={el.id} el={el} />
        ))}
      </Stack>
      <Button
        fullWidth
        color="secondary"
        className={styles.button}
        onClick={goToSeries}
        disabled={location.pathname === "/category/series"}
      >
        View All
      </Button>
    </Box>
  );
};
