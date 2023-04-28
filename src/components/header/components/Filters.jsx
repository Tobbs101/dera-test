import React from "react";
import { Select } from "theme-ui";

const Filters = () => {
  return (
    <Select
      sx={{
        width: "150px",
        height: "30px",
        fontSize: "10px",
        "@media screen and (max-width: 300px)": {
          width: "50%",
        },
      }}
    >
      <option>Filter by Year</option>
      <option>Option 1</option>
      <option>Option 2</option>
    </Select>
  );
};

export default Filters;
