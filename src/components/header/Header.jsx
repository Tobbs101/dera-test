import { headerBar_, logo_, logoText_, logoIcon_ } from "./style.header";
import React, { useState } from "react";
import { Flex, Text, Box, Select } from "theme-ui";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import Search from "./components/Search";

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");

  console.log("s", searchTerm);

  return (
    <Flex sx={headerBar_}>
      <Box sx={logo_}>
        <Text sx={logoText_}>BOOK GALLERY</Text>
        <FontAwesomeIcon icon={faBook} className={logoIcon_} />
      </Box>
      <Flex sx={{ alignItems: "center", gap: "5px" }}>
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
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
      </Flex>
    </Flex>
  );
};

export default Header;
