import React from "react";
import { Input } from "theme-ui";

const Search = () => {
  return (
    <Input
      placeholder="Search..."
      sx={{
        border: "1px solid #ccc",
        outline: "none",
        height: "30px",
        "&:focus": { border: "1px solid red" },
      }}
    />
  );
};

export default Search;
