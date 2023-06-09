import styles from "./RightBarCard.module.scss";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { MovieProps } from "../../types/types";
import { FC } from "react";

interface RightBarCardProps {
  el: MovieProps;
}

export const RightBarCard: FC<RightBarCardProps> = ({ el }) => {
  return (
    <Link to={`/item/${el.id}`}>
      <Box className={styles.card}>
        <img src={el?.primaryImage?.url} alt="Poster" className={styles.img} />
        <Typography variant="body2" className={styles.title}>
          {el?.originalTitleText?.text}
        </Typography>
      </Box>
    </Link>
  );
};
