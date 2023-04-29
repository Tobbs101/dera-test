import React, { useContext, useEffect, useState } from "react";
import { Select } from "theme-ui";
import { filter_ } from "../style.header";
import { BookContext } from "../../../context";
import { getDates } from "../utils";

const Filters = ({ setSelectedYear }) => {
  const { data } = useContext(BookContext);
  const [uniqueDates, setUniqueDates] = useState([]);

  useEffect(() => {
    getDates(data, setUniqueDates);
  }, [data]);
  return (
    <Select
      sx={filter_}
      onChange={(e) => {
        setSelectedYear(e.target.value);
      }}
    >
      <option selected disabled>
        Filter by Year
      </option>
      <option value={""}>All</option>
      {uniqueDates.map((date, index) => (
        <option key={index} value={date}>
          {date}
        </option>
      ))}
    </Select>
  );
};

export default Filters;
