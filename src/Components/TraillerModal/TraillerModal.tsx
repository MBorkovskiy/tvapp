import { Box, Stack } from "@mui/material";
import styles from "./TraillerModal.module.scss";
import { FC } from "react";
import { OtherProps } from "../../types/types";

interface TraillerModalProps {
  other: OtherProps;
  closeModal: () => void;
}

export const TraillerModal: FC<TraillerModalProps> = ({
  other,
  closeModal,
}) => {
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
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </Stack>
  );
};
