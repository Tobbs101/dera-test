import React from "react";
import { Flex, Button } from "theme-ui";
import { pagination_ } from "./pagination.style";

const Pagination = ({ length, currentPage, setCurrentPage }) => {
  const pages = Array.from({ length }, (_, index) => index + 1);

  if (length < 7) {
    return null;
  }
  return (
    <Flex sx={pagination_}>
      {pages.map((x) => (
        <Button
          sx={{
            backgroundColor:
              currentPage === x ? "rgb(100 116 139)" : "rgb(226 232 240)",
            color: currentPage === x ? "#fff" : "black",
            boxShadow: currentPage === x ? null : "0 0 5px 0 #ccc inset",
          }}
          onClick={() => {
            setCurrentPage(x);
          }}
          key={x}
        >
          {x}
        </Button>
      ))}
    </Flex>
  );
};

export default Pagination;
