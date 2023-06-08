import styles from "./FilterInput.module.scss";
import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";

export const FilterInput = ({ inputValue, setInputValue, data, title }) => {
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
            <MenuItem key={el.id} value={el}>
              {el}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};
