import styles from "./HorizontalCard.module.scss";
import { Box, Button, Rating, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const HorizontalCard = ({ el }) => {
  const navigate = useNavigate();
  const toItem = (el) => {
    navigate(`/item/${el.id}`);
  };
  return (
    <Stack className={styles.card}>
      <Stack spacing={1.5} direction="row" className={styles.card_info}>
        <Box>
          <img className={styles.img} src={el.primaryImage.url} alt="" />
        </Box>
        <Stack justifyContent="space-between" className={styles.info}>
          <Box>
            <Typography variant="body2">{el.originalTitleText.text}</Typography>
            <Typography variant="body2" className={styles.year}>
              {el.releaseYear.year}
            </Typography>
            <Rating
              value={el.ratingsSummary.aggregateRating / 2}
              readOnly
              size="small"
              precision={0.5}
            />
          </Box>
          <Button variant="contained" fullWidth onClick={() => toItem(el)}>
            Watch
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};
