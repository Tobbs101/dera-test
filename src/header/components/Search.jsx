import React from "react";
import { Input } from "theme-ui";

const Search = ({ setSearchTerm }) => {
  return (
    <Input
      placeholder="Search..."
      onChange={(e) => setSearchTerm(e.target.value)}
      sx={{
        border: "1px solid #ccc",
        outline: "none",
        height: "30px",
        transitionDuration: ".5s",
        "&:focus": { border: "1px solid primary" },
      }}
    />
  );
};

export default Search;
