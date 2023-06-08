import styles from "./Genres.module.scss";
import {
  Box,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGenre } from "../../store/genreSlice";
import { useParams } from "react-router-dom";
import { MainCard } from "../../Components/MainCard/MainCard";
import { yearDirectionList, years } from "../../constants/years";
import { FilterInput } from "../../Components/FilterInput/FilterInput";
import { Container } from "../../Components/Container/Container";
import { PaginationComponent } from "../../Components/PaginationComponent/PaginationComponent";
import { Loader } from "../../Components/Loader/Loader";

const Genres = () => {
  const genre = useSelector((state) => state.genre.genre);
  const isLoadingGenre = useSelector((state) => state.genre.isLoading);

  const dispatch = useDispatch();
  const params = useParams();
  const [page, setPage] = useState(1);
  const [alignment, setAlignment] = useState("Movies");
  const [startYear, setStartYear] = useState("2000");
  const [endYear, setEndYear] = useState("2023");
  const [yearDirection, setYearDirection] = useState("High to Low");

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
    if (alignment == "Movies") {
      dispatch(
        getGenre({
          setGenre: params.id,
          mostPop: "most_pop_movies",
          pageNumber: page,
          start: startYear,
          end: endYear,
          sortYear: yearDirection == "High to Low" ? "year.decr" : "year.incr",
        })
      );
    } else {
      dispatch(
        getGenre({
          setGenre: params.id,
          mostPop: "most_pop_series",
          pageNumber: page,
          start: startYear,
          end: endYear,
          sortYear: yearDirection == "High to Low" ? "year.decr" : "year.incr",
        })
      );
    }
  }, [params.id, alignment, page, startYear, endYear, yearDirection]);

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
      {genre.length ? (
        <>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography fontWeight={700} textTransform="uppercase">
              {params.id}
            </Typography>
            <ToggleButtonGroup
              color="primary"
              value={alignment}
              exclusive
              onChange={handleToggle}
            >
              <ToggleButton value="Movies">Movies</ToggleButton>
              <ToggleButton value="Series">Series</ToggleButton>
            </ToggleButtonGroup>
          </Stack>
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
          {isLoadingGenre ? (
            <Loader />
          ) : (
            <>
              <Stack spacing={2.5} direction="row" flexWrap="wrap">
                {genre?.length > 0 &&
                  genre
                    .filter((el) => el.primaryImage !== null)
                    .map((el) => <MainCard key={el.id} el={el} />)}
              </Stack>
              {genre.length >= 8 && (
                <PaginationComponent
                  page={page}
                  onChange={handlePage}
                  count={10}
                />
              )}
            </>
          )}
        </>
      ) : (
        <Box className={styles.title}>
          <Typography fontWeight={700} textTransform="uppercase">
            There is no results...
          </Typography>
        </Box>
      )}
    </Container>
  );
};

export default Genres;
