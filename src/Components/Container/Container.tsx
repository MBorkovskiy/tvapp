import styles from "./Container.module.scss";
import { Box } from "@mui/material";
import { FC } from "react";

interface ContainerProps {
  children: React.ReactNode;
}

export const Container: FC<ContainerProps> = ({ children }) => {
  return <Box className={styles.container}>{children}</Box>;
};
