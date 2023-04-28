import React, { useContext, useEffect, useState } from "react";
import { Select } from "theme-ui";
import { filter_ } from "../style.header";
import { BookContext } from "../../../context";
import { getDates } from "../utils";

const Filters = () => {
  const { data } = useContext(BookContext);
  const [uniqueDates, setUniqueDates] = useState([]);

  useEffect(() => {
    getDates(data, setUniqueDates);
  }, [data]);

  // console.log("d", data);
  return (
    <Select sx={filter_}>
      <option selected disabled>
        Filter by Year
      </option>
      {uniqueDates.map((date, index) => (
        <option key={index}>{date}</option>
      ))}
    </Select>
  );
};

export default Filters;
