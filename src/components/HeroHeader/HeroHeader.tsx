import { Box, Grid } from "@mui/material";
import { ContentSide, ImgSide } from "../index";

const HeroHeader = () => {
  return (
    <Box
      minHeight={"100vh"}
      bgcolor={"#ffa930"}
      maxWidth={"2000px"}
      width={"100%"}
    >
      <Grid
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
  );
};

export default HeroHeader;
