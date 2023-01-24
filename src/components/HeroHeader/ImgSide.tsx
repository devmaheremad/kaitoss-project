import { Grid } from "@mui/material";
import { HeroImg } from "../../images";

const ImgSide = () => {
  return (
    <Grid item md={6} className={"imgSide"}>
      <img src={HeroImg} alt="HeroImg" className="max-w-100percent" />
    </Grid>
  );
};

export default ImgSide;
