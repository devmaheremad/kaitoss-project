import { Box } from "@mui/material";
import GridLoader from "react-spinners/GridLoader";

const Loader = () => {
  return (
    <Box
      width={"100vw"}
      height={"100vh"}
      bgcolor={"#090808"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <GridLoader color="#FCA73E" loading margin={2} size={25} />
    </Box>
  );
};

export default Loader;
