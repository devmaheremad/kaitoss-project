import { TextField } from "@mui/material";

const SearchForm = () => {
  return (
    <form>
      <TextField
        id="nav-search"
        hiddenLabel
        placeholder="Search..."
        variant="outlined"
        sx={{ ml: { xs: "60px", sm: 0 } }}
      />
    </form>
  );
};

export default SearchForm;
