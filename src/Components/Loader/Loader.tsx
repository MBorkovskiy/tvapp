import styles from "./Loader.module.scss";
import { Box } from "@mui/material";
import { FC } from "react";

interface LoaderProps {
  mt?: string;
}

export const Loader: FC<LoaderProps> = ({ mt }) => {
  return (
    <Box justifyContent={"center"} className={styles.loader} mt={mt}>
      <div className={styles.lds_default}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </Box>
  );
};
