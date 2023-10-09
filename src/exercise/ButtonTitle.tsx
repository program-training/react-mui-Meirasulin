import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import "./style/TitleAnimation.css";
import { Prop } from "./utils/PropTypes";
import Box from "@mui/material/Box";

const ButtonTitle = ({ setTitle }: Prop) => {
  const [input, setInput] = useState("");

  return (
    <Box>
      <TextField
        label="New Title"
        onChange={(e) => setInput(e.target.value)}
      ></TextField>
      <Button variant="contained" onClick={() => setTitle(input)}>
        Save
      </Button>
    </Box>
  );
};
export default ButtonTitle;
