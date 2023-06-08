import styles from "./LeftBar.module.scss";
import wishlistImg from "../../assets/wishlist.jpg";
import SearchIcon from "@mui/icons-material/Search";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Divider,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getGenresList } from "../../store/genresListSlice";
import { LeftBarCard } from "../LeftBarCard/LeftBarCard";

export const LeftBar = () => {
  const dispatch = useDispatch();
  const genresList = useSelector((state) => state.genresList.genresList);
  const location = useLocation();
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const findSomething = () => {
    navigate(`/search/${search}`);

    setSearch("");
  };

  useEffect(() => {
    dispatch(getGenresList());
  }, []);
  return (
    <Stack className={styles.left_bar} spacing={2}>
      <Box>
        <Typography
          variant="body2"
          fontWeight={700}
          textTransform="uppercase"
          mb={"10px"}
        >
          global search
        </Typography>
        <Stack spacing={1}>
          <TextField
            size="small"
            label="Find something..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Button
            startIcon={<SearchIcon />}
            fullWidth
            onClick={findSomething}
            disabled={search.length === 0}
          >
            Search
          </Button>
        </Stack>
      </Box>
      <Divider />
      <Box>
        <Typography
          variant="body2"
          fontWeight={700}
          textTransform="uppercase"
          gutterBottom
        >
          genres
        </Typography>
        <Stack flexWrap="wrap" spacing={1} direction="row">
          {genresList
            .filter((el) => el !== null)
            .map((el) => (
              <Link
                key={el}
                to={`/genre/${el}`}
                className={
                  location.pathname.includes(el)
                    ? styles.left_bar_link_active
                    : styles.left_bar_link
                }
              >
                {el}
              </Link>
            ))}
        </Stack>
      </Box>

      <LeftBarCard title={"WishList"} img={wishlistImg} />
    </Stack>
  );
};
