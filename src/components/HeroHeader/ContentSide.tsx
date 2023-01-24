import { Box, Grid, Stack, Typography } from "@mui/material";

const ContentSide = () => {
  return (
    <Grid item md={6}>
      <Stack direction={"column"} spacing={2}>
        <Box
          width={{ xs: "280px", sm: "380px" }}
          border={"6px solid #5E1539"}
          height={"200px"}
          bgcolor={"#55BEB7"}
          position={"relative"}
        >
          <Typography variant="h1" color="white" fontWeight={"700"}>
            STUDIO
          </Typography>
        </Box>
      </Stack>
    </Grid>
  );
};

export default ContentSide;
