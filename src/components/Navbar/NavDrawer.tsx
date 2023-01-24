import { Box, Divider, Drawer, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { LogoLink, NavItems, SocialIcons } from "../index";

const NavDrawer = () => {
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Stack
      direction={"column"}
      spacing={4}
      position={"relative"}
      zIndex={10000}
      py={10}
      onClick={handleDrawerToggle}
      bgcolor={"#6f0b35"}
      height={"100%"}
      textAlign={"center"}
    >
      <LogoLink />
      <Divider sx={{ bgcolor: "#fff", my: 4 }} />
      <NavItems direction="column" />
      <SocialIcons showInMobile={true} />
    </Stack>
  );

  return (
    <>
      <Box
        left={"27%"}
        top={"54%"}
        className="cursor-pointer"
        position={"absolute"}
        display={"inline-block"}
        zIndex={5000}
        aria-label="open drawer"
        onClick={handleDrawerToggle}
        sx={{ display: { sm: "none" }, transform: "translateY(-50%)" }}
      >
        <svg
          width={"35px"}
          height={"35px"}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="#fff"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
          />
        </svg>
      </Box>
      <Box component="nav">
        <Drawer
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: { xs: "70%", sm: "400px" },
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </>
  );
};

export default NavDrawer;
