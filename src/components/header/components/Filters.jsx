import React, { useContext, useEffect, useState } from "react";
import { Select } from "theme-ui";
import { filter_ } from "../style.header";
import { BookContext } from "../../../context";
import { getDates } from "../utils";

const Filters = () => {
  const { data, setData } = useContext(BookContext);
  const [uniqueDates, setUniqueDates] = useState([]);

  useEffect(() => {
    getDates(data, setUniqueDates);
  }, []);

  // function getDates() {
  //   console.log("hey");
  //   if (data.books.length > 1) {
  //     console.log("heyy");
  //     const length = data.books.length;
  //     console.log(length);
  //     for (let i = 0; i < length; i++) {
  //       const currentYear = data.books[i].year;
  //       setUniqueDates((prev) => {
  //         if (currentYear === "0") return prev;
  //         if (prev.some((year) => year === currentYear)) return prev;
  //         const updatedDates = [...prev, currentYear];
  //         return updatedDates.sort((a, b) => a - b);
  //       });
  //     }
  //   }
  // }

  console.log("d", data);
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
