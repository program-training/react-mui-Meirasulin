import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Prop } from "./utils/PropTypes";

const SelectTitle = ({ setTitle }: Prop) => {
  const handleChange = (e: SelectChangeEvent) => {
    setTitle(e.target.value);
  };
  return (
    <>
      <Box sx={{ minWidth: "120px" }}>
        <FormControl fullWidth>
          <InputLabel id="SelectTitleLabel">New Selected Title</InputLabel>
          <Select
            labelId="SelectTitleLabel"
            id="SelectTitle"
            label="New Selected Title"
            onChange={handleChange}
          >
            <MenuItem value={"First Title"}>First Title</MenuItem>
            <MenuItem value={"Second Title"}>Second Title</MenuItem>
            <MenuItem value={"Third Title"}>Third Title</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </>
  );
};
export default SelectTitle;
