import styles from "./Header.module.scss";
import { Link, useLocation } from "react-router-dom";
import { Box, Stack, Typography } from "@mui/material";
import { FC } from "react";

export const Header: FC = () => {
  const location = useLocation();
  return (
    <Stack direction="row" className={styles.header}>
      <Stack
        direction="row"
        alignItems="center"
        className={styles.header_container}
      >
        <Link to="/">
          <Stack
            direction="row"
            alignItems="end"
            className={styles.header_logo}
          >
            <Typography fontWeight={900} fontSize={50}>
              Watch
            </Typography>
            <Box className={styles.logo_dot}></Box>
          </Stack>
        </Link>
        <Stack direction="row" spacing={3}>
          <Link
            to={"/"}
            className={
              location.pathname === "/"
                ? styles.header_link_active
                : styles.header_link
            }
          >
            Home
          </Link>

          <Link
            to={`/category/movies`}
            className={
              location.pathname.includes("movies")
                ? styles.header_link_active
                : styles.header_link
            }
          >
            Movies
          </Link>
          <Link
            to={`/category/series`}
            className={
              location.pathname.includes("series")
                ? styles.header_link_active
                : styles.header_link
            }
          >
            Series
          </Link>
        </Stack>
      </Stack>
    </Stack>
  );
};
