import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

const GlobalSearch = () => {
  return (
    <IconButton
      color="black"
      aria-label="search the website"
      className="!rounded-none md:!rounded-full"
    >
      <SearchIcon fontSize="medium" />
    </IconButton>
  );
};

export default GlobalSearch;
