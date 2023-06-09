import { FC } from "react";
import styles from "./FilterInput.module.scss";
import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { SelectChangeEvent } from "@mui/material/Select";

interface FilterInputProps {
  inputValue: string;
  setInputValue: (event: SelectChangeEvent) => void;
  data: string[];
  title: string;
}

export const FilterInput: FC<FilterInputProps> = ({
  inputValue,
  setInputValue,
  data,
  title,
}) => {
  return (
    <Box className={styles.input_box}>
      <FormControl fullWidth>
        <InputLabel>{title}</InputLabel>

        <Select
          size="small"
          value={inputValue}
          onChange={setInputValue}
          label={title}
        >
          {data.map((el) => (
            <MenuItem key={el} value={el}>
              {el}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};
