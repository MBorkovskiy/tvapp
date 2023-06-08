import styles from "./CastCard.module.scss";
import question from "../../assets/question.png";
import { Stack, Typography } from "@mui/material";
import { FC } from "react";
import { CastProps } from "../../types/types";

interface CastCardProps {
  el: CastProps;
}

export const CastCard: FC<CastCardProps> = ({ el }) => {
  return (
    <Stack
      key={el.node.name.id}
      className={styles.cast}
      justifyContent="center"
      alignItems="center"
    >
      <img
        src={
          el?.node?.name?.primaryImage === null
            ? question
            : el?.node?.name?.primaryImage?.url
        }
        alt="Cast"
        className={styles.cast_img}
      />
      <Typography variant="body2" textAlign="center" className={styles.txt}>
        {el?.node?.name?.nameText?.text}
      </Typography>
    </Stack>
  );
};
