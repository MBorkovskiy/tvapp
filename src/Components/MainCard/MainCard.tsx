import styles from "./MainCard.module.scss";
import { Box, IconButton, Rating, Stack, Typography } from "@mui/material";
import { ReactComponent as Plus } from "../../assets/plus.svg";
import { useDispatch, useSelector } from "react-redux";
import { addItemToWishList } from "../../store/wishListSlice";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { FC } from "react";
import { MovieProps } from "../../types/types";

interface MainCardProps {
  el: MovieProps;
}

export const MainCard: FC<MainCardProps> = ({ el }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
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
    <>
      <Stack
        justifyContent="end"
        className={styles.main_card}
        onClick={() => toItem(el)}
      >
        <img src={el.primaryImage.url} className={styles.img} alt="" />

        <Stack className={styles.cover} justifyContent="space-between">
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            {el?.ratingsSummary?.aggregateRating ? (
              <Rating
                value={el.ratingsSummary.aggregateRating / 2}
                readOnly
                precision={0.5}
              />
            ) : (
              <Box></Box>
            )}

            <IconButton
              sx={{
                padding: "0",
                borderRadius: "8px",
              }}
              onClick={(e) => {
                e.stopPropagation();
                addToWishList(el);
              }}
            >
              <Plus className={styles.icon} />
            </IconButton>
          </Stack>
          <Stack>
            <Typography
              variant="body2"
              textTransform="uppercase"
              fontWeight={700}
              gutterBottom
            >
              {el?.titleText?.text}
            </Typography>
            <Typography
              variant="body2"
              className={styles.description}
              fontSize={12}
            >
              {el?.plot?.plotText?.plainText}
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};
