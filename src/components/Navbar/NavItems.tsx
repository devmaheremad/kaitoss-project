import { Stack } from "@mui/material";
import { NavLink } from "react-router-dom";
import { NavItemsTypesProps } from "../../@types/NavItems.types";

const NavItems = ({ direction }: NavItemsTypesProps) => {
  return (
    <Stack
      className="navLinks"
      direction={direction === "row" ? "row" : "column"}
      spacing={5}
    >
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/service">Service</NavLink>
      <NavLink to="/work">Work</NavLink>
    </Stack>
  );
};

export default NavItems;
