import styles from "./Item.module.scss";
import Slider from "react-slick";
import youtube from "../../assets/youtube.png";
import { useNavigate, useParams } from "react-router-dom";
import { Container } from "../../Components/Container/Container";
import { FC, useEffect } from "react";
import { getItem } from "../../store/itemSlice";
import {
  Box,
  Stack,
  Typography,
  Button,
  Rating,
  IconButton,
} from "@mui/material";
import { getCast } from "../../store/castSlice";
import { getOther } from "../../store/otherSlice";
import { addItemToWishList } from "../../store/wishListSlice";
import { deleteItemFromWishList } from "../../store/wishListSlice";
import { TraillerModal } from "../../Components/TraillerModal/TraillerModal";
import { useState } from "react";
import {
  castSettings,
  reviewsSettings,
} from "../../constants/sliderSettings/sliderSettings";
import { ReviewCard } from "../../Components/ReviewCard/ReviewCard";
import { CastCard } from "../../Components/CastCard/CastCard";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { ParamsIdProps } from "../../types/types";

const Item: FC = () => {
  const params = useParams<keyof ParamsIdProps>() as ParamsIdProps;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const item = useAppSelector((state) => state.item.item);
  const cast = useAppSelector((state) => state.cast.cast);
  const other = useAppSelector((state) => state.other.other);
  const wishList = useAppSelector((state) => state.wishlist.wishlist);
  const [isModal, setIsModal] = useState(false);
  const closeModal = () => {
    setIsModal(false);
  };
  const openModal = () => {
    setIsModal(true);
  };
  const addToWishList = () => {
    const find = wishList.find((find) => find.id === item.id);
    if (find === undefined) {
      dispatch(addItemToWishList(item));
    }
  };

  const deleteFromWishList = () => {
    dispatch(deleteItemFromWishList(item));
  };

  const toGenre = (el: string) => {
    navigate(`/genre/${el}`);
  };

  useEffect(() => {
    dispatch(getItem({ id: params.id }));
    dispatch(getCast({ id: params.id }));
    dispatch(getOther({ id: params.id }));
  }, [params.id]);
  console.log(other);
  return (
    <Container>
      <Stack
        direction="row"
        justifyContent="space-between"
        spacing={4}
        height={"595px"}
      >
        <Box className={styles.img_box}>
          <img src={item?.primaryImage?.url} alt="" />
          <Stack
            alignItems={"center"}
            justifyContent={"center"}
            className={styles.youtube_box}
          >
            <IconButton onClick={openModal}>
              <img
                src={youtube}
                alt="You Tube"
                className={styles.youtube_img}
              />
            </IconButton>
          </Stack>
        </Box>
        <Stack spacing={2} width="520px">
          <Typography variant="h5" fontWeight={900} textTransform="uppercase">
            {item?.originalTitleText?.text}
          </Typography>
          <Stack spacing={1} direction="row" flexWrap="wrap">
            {item?.genres?.genres.map((el) => (
              <Button
                key={el.id}
                variant="contained"
                onClick={() => toGenre(el.text)}
              >
                {el.text}
              </Button>
            ))}
          </Stack>
          <Typography variant="body2" className={styles.txt}>
            {item?.plot?.plotText?.plainText}
          </Typography>
          <Stack direction="row" justifyContent="space-between">
            <Box>
              <Stack direction="row" spacing={1}>
                <Typography
                  variant="body2"
                  fontWeight={700}
                  textTransform="uppercase"
                >
                  Release Date
                </Typography>

                <Typography className={styles.txt} variant="body2">
                  {item?.releaseDate?.day}.{item?.releaseDate?.month}.
                  {item?.releaseDate?.year}
                </Typography>
              </Stack>
              <Stack direction="row" spacing={1}>
                <Typography
                  variant="body2"
                  fontWeight={700}
                  textTransform="uppercase"
                >
                  Runtime
                </Typography>
                {item?.runtime?.seconds && (
                  <Typography className={styles.txt} variant="body2">
                    {(item.runtime.seconds / 3600).toFixed(2)} hours
                  </Typography>
                )}
              </Stack>
            </Box>
            {item?.ratingsSummary?.aggregateRating && (
              <Stack>
                <Rating
                  value={item.ratingsSummary.aggregateRating / 2}
                  readOnly
                  size="small"
                  precision={0.5}
                />
                <Typography variant="body2" className={styles.txt}>
                  ({item?.ratingsSummary?.voteCount} votes)
                </Typography>
              </Stack>
            )}
          </Stack>
          <Typography
            variant="body2"
            fontWeight={700}
            textTransform="uppercase"
          >
            Top cast
          </Typography>
          <Slider {...castSettings}>
            {cast.map((el) => (
              <CastCard el={el} key={el.node.name.id} />
            ))}
          </Slider>
          {wishList.find((el) => el.id === item.id) ? (
            <Button variant="outlined" onClick={deleteFromWishList}>
              Delete from Wishlist
            </Button>
          ) : (
            <Button variant="contained" onClick={addToWishList}>
              Add To Wishlist
            </Button>
          )}
        </Stack>
      </Stack>
      <Box position={"relative"} mt={"30px"}>
        {other?.reviews && (
          <Typography
            fontWeight={700}
            textTransform="uppercase"
            textAlign={"center"}
            mb={"30px"}
          >
            {other?.reviews?.length > 0 ? " reviews" : "there is no reviews "}
          </Typography>
        )}
        <Slider {...reviewsSettings}>
          {other?.reviews?.map((el) => (
            <ReviewCard el={el} key={el.content} />
          ))}
        </Slider>
      </Box>
      {isModal && <TraillerModal other={other} closeModal={closeModal} />}
    </Container>
  );
};

export default Item;
