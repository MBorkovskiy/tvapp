import { Container } from "../../Components/Container/Container";
import { Box, Stack, Typography } from "@mui/material";
import { MainCard } from "../../Components/MainCard/MainCard";
import { PaginationComponent } from "../../Components/PaginationComponent/PaginationComponent";
import { FC, useState } from "react";
import { useAppSelector } from "../../hooks/hooks";

const WishList: FC = () => {
  const { wishlist } = useAppSelector((state) => state.wishlist);
  const [page, setPage] = useState(1);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(8);
  const step = 8;
  const handlePage = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    setStart(value * step - 8);
    setEnd(value * step);
  };

  return (
    <Container>
      <Box mt={2} mb={2}>
        <Typography fontWeight={700} textTransform="uppercase">
          {wishlist?.length
            ? `Wishlist(${wishlist?.length})`
            : "Your Wishlist is empty"}
        </Typography>
      </Box>
      <Stack direction="row" spacing={2} flexWrap="wrap">
        {wishlist?.slice(start, end).map((el) => (
          <MainCard key={el.id} el={el} />
        ))}
      </Stack>
      {wishlist?.length > 8 && (
        <PaginationComponent
          page={page}
          onChange={handlePage}
          count={Math.ceil(wishlist.length / 8)}
        />
      )}
    </Container>
  );
};

export default WishList;
