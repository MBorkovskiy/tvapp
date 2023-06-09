import { useParams } from "react-router-dom";
import { Container } from "../../Components/Container/Container";
import { Stack, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { FC, useEffect } from "react";
import { getSearch } from "../../store/searchSlice";
import { MainCard } from "../../Components/MainCard/MainCard";
import { Loader } from "../../Components/Loader/Loader";
import { ParamsIdProps } from "../../types/types";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";

const Search: FC = () => {
  const { id } = useParams<keyof ParamsIdProps>() as ParamsIdProps;
  const dispatch = useAppDispatch();
  const { search, isLoading } = useAppSelector((state) => state.search);

  useEffect(() => {
    dispatch(getSearch({ id: id }));
  }, [id]);
  return (
    <Container>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {" "}
          {search.length > 0 ? (
            <>
              <Typography
                fontWeight={700}
                textTransform="uppercase"
                mb={"15px"}
              >
                Found on request "{id}"
              </Typography>
              <Stack spacing={2.5} direction="row" flexWrap="wrap">
                {search
                  ?.filter((el) => el?.primaryImage?.url)
                  .map((el) => (
                    <MainCard key={el.id} el={el} />
                  ))}
              </Stack>
            </>
          ) : (
            <Typography fontWeight={700} textTransform="uppercase" mb={"15px"}>
              Nothing found on request "{id}"
            </Typography>
          )}
        </>
      )}
    </Container>
  );
};

export default Search;
