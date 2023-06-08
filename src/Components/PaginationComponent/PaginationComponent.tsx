import { Pagination, Stack } from "@mui/material";
import { FC } from "react";

interface PaginationComponentProps {
  page: number;
  onChange: (event: React.ChangeEvent<unknown>, value: number) => void; //перезаписать
  count: number;
}

export const PaginationComponent: FC<PaginationComponentProps> = ({
  page,
  onChange,
  count,
}) => {
  return (
    <Stack direction="row" justifyContent="center" mt="50px">
      <Pagination
        color="primary"
        count={count}
        page={page}
        onChange={onChange}
      />
    </Stack>
  );
};
