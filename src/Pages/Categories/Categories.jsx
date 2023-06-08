import styles from "./Categories.module.scss";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { MainCard } from "../../Components/MainCard/MainCard";
import { getMostPopularSeries } from "../../store/mostPopularSeriesSlice";
import { getMostPopularMovies } from "../../store/mostPopularMoviesSlice";
import { Container } from "../../Components/Container/Container";
import { PaginationComponent } from "../../Components/PaginationComponent/PaginationComponent";
import { Stack, Typography } from "@mui/material";
import { FilterInput } from "../../Components/FilterInput/FilterInput";
import { yearDirectionList, years } from "../../constants/years";
import { Loader } from "../../Components/Loader/Loader";

const Categories = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [alignment, setAlignment] = useState("Movies");
  const [startYear, setStartYear] = useState("2000");
  const [endYear, setEndYear] = useState("2023");
  const [yearDirection, setYearDirection] = useState("High to Low");
  const mostPopularSeries = useSelector(
    (state) => state.mostPopularSeries.mostPopularSeries
  );
  const mostPopularMovies = useSelector(
    (state) => state.mostPopularMovies.mostPopularMovies
  );
  const isLoadingMostPopularSeries = useSelector(
    (state) => state.mostPopularSeries.isLoading
  );
  const isLoadingMostPopularMovies = useSelector(
    (state) => state.mostPopularMovies.isLoading
  );

  const handlePage = (event, value) => {
    setPage(value);
  };
  const handleToggle = (event, newAlignment) => {
    setAlignment(newAlignment);
    setPage(1);
  };
  const handleStartYear = (event) => {
    setStartYear(event.target.value);
  };
  const handleEndYear = (event) => {
    setEndYear(event.target.value);
  };
  const handleYearDirection = (event) => {
    setYearDirection(event.target.value);
  };
  useEffect(() => {
    if (params.id === "movies") {
      dispatch(
        getMostPopularMovies({
          mostPop: "most_pop_movies",
          pageNumber: page,
          start: startYear,
          end: endYear,
          sortYear: yearDirection == "High to Low" ? "year.decr" : "year.incr",
        })
      );
    } else {
      dispatch(
        getMostPopularSeries({
          mostPop: "most_pop_series",
          pageNumber: page,
          start: startYear,
          end: endYear,
          sortYear: yearDirection == "High to Low" ? "year.decr" : "year.incr",
        })
      );
    }
  }, [params.id, page, startYear, endYear, yearDirection]);
  useEffect(() => {
    setAlignment("Movies");
    setStartYear("2000");
    setEndYear("2023");
    setYearDirection("High to Low");
  }, [params.id]);

  useEffect(() => {
    setPage(1);
  }, [alignment, startYear, endYear, yearDirection]);

  return (
    <Container>
      <Typography fontWeight={700} textTransform="uppercase">
        {params.id === "movies" ? "Tranding Movies" : "Tranding Series"}
      </Typography>
      <Stack direction="row" spacing={2} className={styles.filter}>
        <FilterInput
          inputValue={endYear}
          setInputValue={handleEndYear}
          data={years}
          title={"End Year"}
        />
        <FilterInput
          inputValue={startYear}
          setInputValue={handleStartYear}
          data={years}
          title={"Start Year"}
        />
        <FilterInput
          inputValue={yearDirection}
          setInputValue={handleYearDirection}
          data={yearDirectionList}
          title={"Sort By"}
        />
      </Stack>
      {isLoadingMostPopularSeries || isLoadingMostPopularMovies ? (
        <Loader />
      ) : (
        <>
          <Stack spacing={2.5} direction="row" flexWrap="wrap">
            {params.id === "movies"
              ? mostPopularMovies.map((el) => <MainCard key={el.id} el={el} />)
              : mostPopularSeries.map((el) => <MainCard key={el.id} el={el} />)}
          </Stack>
          <PaginationComponent page={page} onChange={handlePage} count={10} />
        </>
      )}
    </Container>
  );
};

export default Categories;
