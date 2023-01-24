import { Box } from "@mui/material";
import { ContentSide, ImgSide } from "../index";

const HeroHeader = () => {
  return (
    <Box minHeight={"100vh"} bgcolor={"#ffa930"}>
      <ContentSide />
      <ImgSide />
    </Box>
  );
};

export default HeroHeader;
