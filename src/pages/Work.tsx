import { Box, Typography } from "@mui/material";
import { Soon } from "../images";
const Work = () => {
  return (
    <Box
      component={"main"}
      minHeight={"100vh"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      flexDirection={"column"}
      bgcolor={"#ffa930"}
    >
      <Typography variant="h2" component={"h1"} color="white">
        Work Page
      </Typography>
      <Typography variant="h2" component={"h2"} color="white" mb={2}>
        Coming Soon!
      </Typography>
      <img src={Soon} alt="Soon" />
    </Box>
  );
};

export default Work;
