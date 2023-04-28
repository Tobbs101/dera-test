import { headerBar_, logo_, logoText_, logoIcon_ } from "./style.header";
import React, { useState, useContext, useEffect } from "react";
import { BookContext } from "../../context";
import { Flex, Text, Box } from "theme-ui";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import Search from "./components/Search";
import Filters from "./components/Filters";

const Header = () => {
  const { data, setData } = useContext(BookContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedYear, setSelectedYear] = useState("");

  console.log({ data });

  useEffect(() => {
    setData((prev) => ({
      ...prev,
      filters: {
        search: searchTerm,
        year: selectedYear,
      },
    }));
  }, [searchTerm, selectedYear]);

  return (
    <Flex sx={headerBar_}>
      <Box sx={logo_}>
        <Text sx={logoText_}>BOOK GALLERY</Text>
        <FontAwesomeIcon icon={faBook} className={logoIcon_} />
      </Box>
      <Flex sx={{ alignItems: "center", gap: "5px" }}>
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <Filters
          selectedYear={selectedYear}
          setSelectedYear={setSelectedYear}
        />
      </Flex>
    </Flex>
  );
};

export default Header;
