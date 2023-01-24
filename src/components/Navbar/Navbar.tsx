import { Box, AppBar, Toolbar } from "@mui/material";
import {
  LogoLink,
  NavItems,
  NavDrawer,
  SearchForm,
  SocialIcons,
} from "../index";

import "./navbar.css";

const Navbar = () => {
  return (
    <>
      <AppBar
        position="fixed"
        component="nav"
        sx={{
          height: "110px",
          bgcolor: "#b6205f",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderBottom: "4px solid #6f0b35",
        }}
      >
        <Box maxWidth={"2000px"} width={"100%"}>
          <Toolbar
            sx={{
              px: { xs: 2, sm: 3, md: 4, lg: 8, xl: 10 },
              justifyContent: "space-between",
            }}
          >
            <LogoLink />
            <Box sx={{ display: { xs: "none", md: "block" } }}>
              <NavItems direction="row" />
            </Box>
            <SearchForm />
            <SocialIcons showInMobile={false} />
          </Toolbar>
          <NavDrawer />
        </Box>
      </AppBar>
    </>
  );
};

export default Navbar;
