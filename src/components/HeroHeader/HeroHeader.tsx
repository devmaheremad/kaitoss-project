import { Box, Grid } from "@mui/material";
import { ContentSide, ImgSide } from "../index";

const HeroHeader = () => {
  return (
    <Box
      bgcolor={"#ffa930"}
      minHeight={"100vh"}
      display={"flex"}
      justifyContent={"stretch"}
      alignItems={"center"}
    >
      <Box maxWidth={"2000px"} mx={"auto"}>
        <Grid
          height={"100%"}
          mt={0}
          container
          spacing={2}
          px={{ xs: 2, sm: 3, md: 4, lg: 8, xl: 10 }}
          pt={"150px"}
        >
          <ContentSide />
          <ImgSide />
        </Grid>
      </Box>
    </Box>
  );
};

export default HeroHeader;
