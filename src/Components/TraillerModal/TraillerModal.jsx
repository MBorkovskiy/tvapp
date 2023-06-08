import { Box, Stack } from "@mui/material";
import styles from "./TraillerModal.module.scss";

export const TraillerModal = ({ other, closeModal }) => {
  return (
    <Stack
      className={styles.modal}
      alignItems={"center"}
      justifyContent={"center"}
      onClick={closeModal}
    >
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${other?.trailer?.slice(
          28,
          other?.trailer?.length
        )}`}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </Stack>
  );
};
