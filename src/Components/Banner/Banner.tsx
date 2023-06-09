import styles from "./Banner.module.scss";
import { Box, Button, IconButton, Stack, Typography } from "@mui/material";
import { ReactComponent as Plus } from "../../assets/plus.svg";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addItemToWishList } from "../../store/wishListSlice";
import { FC } from "react";
import { MovieProps } from "../../types/types";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";

interface BannerProps {
  el: MovieProps;
}

export const Banner: FC<BannerProps> = ({ el }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const wishList = useAppSelector((state) => state.wishlist.wishlist);
  const addToWishList = (el: MovieProps) => {
    const find = wishList.find((find) => find.id === el.id);
    if (find === undefined) {
      dispatch(addItemToWishList(el));
    }
  };
  const toItem = (el: MovieProps) => {
    navigate(`/item/${el.id}`);
  };
  return (
    <Box className={styles.banner}>
      {el.primaryImage && (
        <Box
          sx={{
            backgroundImage: `linear-gradient(90deg, rgba(33,36,45,1) 80%, rgba(255,255,255,0) 100%),url(${el.primaryImage.url})`,
            width: "100%",
            backgroundPosition: "right",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            borderRadius: "8px",
          }}
        >
          <Box className={styles.left_box}>
            {el.primaryImage && (
              <Box>
                <img className={styles.img} src={el.primaryImage.url} alt="" />
              </Box>
            )}

            <Box className={styles.info}>
              {el.originalTitleText && el.releaseYear ? (
                <Typography>
                  {el.originalTitleText.text} ({el.releaseYear.year})
                </Typography>
              ) : (
                <></>
              )}
              {el.runtime && (
                <Typography
                  className={styles.year_derectors_txt}
                  variant="body2"
                >
                  {` Duration: ${(el.runtime.seconds / 3600).toFixed(2)} hours`}
                </Typography>
              )}

              <Stack spacing={1} alignItems={"center"} direction={"row"}>
                {el?.genres?.genres.map((el) => (
                  <Typography
                    key={el.text}
                    variant="body2"
                    className={styles.genre}
                  >
                    {el.text}
                  </Typography>
                ))}
              </Stack>
              <Box className={styles.buttons}>
                <Button
                  variant="contained"
                  fullWidth
                  onClick={() => toItem(el)}
                >
                  Watch
                </Button>
                <IconButton
                  sx={{
                    padding: "0",
                    borderRadius: "10px",
                  }}
                  onClick={() => addToWishList(el)}
                >
                  <Plus className={styles.icon} />
                </IconButton>
              </Box>
            </Box>
          </Box>
          <Box className={styles.description}>
            {el?.plot && (
              <Typography variant="body2">
                {el?.plot.plotText?.plainText}
              </Typography>
            )}
          </Box>
        </Box>
      )}
    </Box>
  );
};
