import { useState } from "react";
import "./style/TitleAnimation.css";
import ButtonTitle from "./ButtonTitle";
import SelectTitle from "./SelectTitle";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const Title = () => {
  const [title, setTitle] = useState("Title to Change");
  return (
    <Box>
      <Box className="container">
        <Typography
          sx={{ bgcolor: "#ffe5df" }}
          variant="h1"
          component="h2"
          className="title"
        >
          {title}
        </Typography>
      </Box>
      <Box style={{ margin: "10px" }}>
        <ButtonTitle setTitle={setTitle} />
      </Box>
      <Box style={{ margin: "10px" }}>
        <SelectTitle setTitle={setTitle} />
      </Box>
    </Box>
  );
};
export default Title;
// ----------------------
