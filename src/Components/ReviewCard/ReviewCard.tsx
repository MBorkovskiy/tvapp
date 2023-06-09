import { FC } from "react";
import { ReviewsProps } from "../../types/types";
import styles from "./ReviewCard.module.scss";
import { Rating, Stack, Typography } from "@mui/material";

interface ReviewCardProps {
  el: ReviewsProps;
}

export const ReviewCard: FC<ReviewCardProps> = ({ el }) => {
  return (
    <>
      <Stack direction={"row"} justifyContent={"space-between"}>
        <Typography
          gutterBottom
          variant="body2"
          fontWeight={700}
          textTransform="uppercase"
        >
          {el.author}
        </Typography>
        <Rating value={el.rating / 2} readOnly size="small" precision={0.5} />
      </Stack>
      <Typography variant="body2" className={styles.content} gutterBottom>
        {el.content}
      </Typography>
      <Typography fontSize={"14px"}>{el.updated_at}</Typography>
    </>
  );
};
