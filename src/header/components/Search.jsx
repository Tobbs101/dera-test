import React from "react";
import { Input } from "theme-ui";

const Search = ({ setSearchTerm }) => {
  return (
    <Input
      placeholder="Search by title or author..."
      onChange={(e) => setSearchTerm(e.target.value)}
      type="search"
      sx={{
        border: "1px solid #ccc",
        outline: "none",
        height: "30px",
        transitionDuration: ".3s",
        width: "250px",
        paddingLeft: "10px",
        "&:focus": { border: "1px solid #404caf", paddingLeft: "15px" },
        "@media screen and (max-width: 768px)": {
          width: "50%",
        },
      }}
    />
  );
};

export default Search;
