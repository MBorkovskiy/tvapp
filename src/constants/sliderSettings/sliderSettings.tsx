import next from "../../assets/next.svg";
import prev from "../../assets/prev.svg";
import styles from "./sliderSettings.module.scss";
import { IconButton } from "@mui/material";

export const castSettings = {
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 5,
  arrows: false,
};

export const reviewsSettings = {
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  nextArrow: (
    <IconButton
      sx={{
        position: "absolute",
        top: "-2px",
        right: "0px",
        padding: "0",
        borderRadius: "8px",
        fontSize: "0px",
      }}
    >
      <img src={next} className={styles.icon} alt="Next" />
    </IconButton>
  ),

  prevArrow: (
    <IconButton
      sx={{
        position: "absolute",
        top: "-2px",
        left: "0px",
        zIndex: "1",
        padding: "0",
        borderRadius: "8px",
        fontSize: "0px",
      }}
    >
      <img src={prev} className={styles.icon} alt="Prev" />
    </IconButton>
  ),
};

export const seriesSettings = {
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  nextArrow: (
    <IconButton
      sx={{
        position: "absolute",
        top: "-45px",
        right: "0px",
        padding: "0",
        borderRadius: "8px",
        fontSize: "0px",
      }}
    >
      <img src={next} className={styles.icon} alt="Next" />
    </IconButton>
  ),
  prevArrow: (
    <IconButton
      sx={{
        position: "absolute",
        top: "-45px",
        left: "0px",
        zIndex: "1",
        padding: "0",
        borderRadius: "8px",
        fontSize: "0px",
      }}
    >
      <img src={prev} className={styles.icon} alt="Prev" />
    </IconButton>
  ),
};

export const moviesSettings = {
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  nextArrow: (
    <IconButton
      sx={{
        position: "absolute",
        top: "-45px",
        right: "0px",
        padding: "0",
        borderRadius: "8px",
        fontSize: "0px",
      }}
    >
      <img src={next} className={styles.icon} alt="Next" />
    </IconButton>
  ),
  prevArrow: (
    <IconButton
      sx={{
        position: "absolute",
        top: "-45px",
        left: "0px",
        zIndex: "1",
        padding: "0",
        borderRadius: "8px",
        fontSize: "0px",
      }}
    >
      <img src={prev} className={styles.icon} alt="Prev" />
    </IconButton>
  ),
};

export const bannerSettings = {
  autoplay: true,
  speed: 2000,
  autoplaySpeed: 5000,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
};
