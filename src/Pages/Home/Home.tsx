import Slider from "react-slick";
import { Box, Stack, Typography } from "@mui/material";
import { MainCard } from "../../Components/MainCard/MainCard";
import { Banner } from "../../Components/Banner/Banner";
import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HorizontalCard } from "../../Components/HorizontalCard/HorizontalCard";
import { getMostPopularSeries } from "../../store/mostPopularSeriesSlice";
import { getBoxOfficeAllTime } from "../../store/boxOfficeAllTimeSlice";
import { getMostPopularMovies } from "../../store/mostPopularMoviesSlice";
import { useLocation } from "react-router-dom";
import { Container } from "../../Components/Container/Container";
import { Loader } from "../../Components/Loader/Loader";
import {
  bannerSettings,
  moviesSettings,
  seriesSettings,
} from "../../constants/sliderSettings/sliderSettings";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";

const Home: FC = () => {
  const dispatch = useAppDispatch();
  const location = useLocation();

  const { mostPopularMovies, isLoadingMostPopularMovies } = useAppSelector(
    (state) => state.mostPopularMovies
  );
  const { mostPopularSeries, isLoadingMostPopularSeries } = useAppSelector(
    (state) => state.mostPopularSeries
  );
  const { boxOfficeAllTime, isLoadingBoxOfficeAllTime } = useAppSelector(
    (state) => state.boxOfficeAllTime
  );

  useEffect(() => {
    dispatch(
      getMostPopularMovies({
        mostPop: "most_pop_movies",
        pageNumber: 1,
        start: "2000",
        end: "2023",
        sortYear: "year.decr",
      })
    );
    dispatch(
      getMostPopularSeries({
        mostPop: "most_pop_series",
        pageNumber: 1,
        start: "2000",
        end: "2023",
        sortYear: "year.decr",
      })
    );
    dispatch(getBoxOfficeAllTime());
  }, [location]);
  console.log(mostPopularSeries);
  return (
    <Container>
      {isLoadingBoxOfficeAllTime ? (
        <Loader />
      ) : (
        <Slider {...bannerSettings}>
          {boxOfficeAllTime.map((el) => (
            <Banner key={el.id} el={el} />
          ))}
        </Slider>
      )}
      <Stack
        justifyContent="center"
        alignItems="center"
        mt={"30px"}
        mb={"15px"}
      >
        <Typography fontWeight={700} textTransform="uppercase">
          Most Popular Series
        </Typography>
      </Stack>
      <Box position={"relative"}>
        {isLoadingMostPopularSeries ? (
          <Loader />
        ) : (
          <Slider {...seriesSettings}>
            {mostPopularSeries.map((el) => (
              <MainCard key={el.id} el={el} />
            ))}
          </Slider>
        )}
      </Box>
      <Stack
        justifyContent="center"
        alignItems="center"
        mt={"30px"}
        mb={"15px"}
      >
        <Typography fontWeight={700} textTransform="uppercase">
          Most Popular Movies
        </Typography>
      </Stack>
      <Box position={"relative"}>
        {isLoadingMostPopularMovies ? (
          <Loader />
        ) : (
          <Slider {...moviesSettings}>
            {mostPopularMovies.map((el) => (
              <HorizontalCard key={el.id} el={el} />
            ))}
          </Slider>
        )}
      </Box>
    </Container>
  );
};

export default Home;
