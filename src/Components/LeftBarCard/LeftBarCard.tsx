import { Box, Stack, Typography } from "@mui/material";
import styles from "./LeftBarCard.module.scss";
import { Link } from "react-router-dom";
import { FC } from "react";

interface LeftBarCardProps {
  title: string;
  img: string;
}

export const LeftBarCard: FC<LeftBarCardProps> = ({ title, img }) => {
  return (
    <Link to="/wishlist">
      <Box className={styles.card}>
        <img className={styles.img} src={img} alt="" />
        <Typography variant="h6" className={styles.title}>
          {title}
        </Typography>
      </Box>
    </Link>
  );
};
