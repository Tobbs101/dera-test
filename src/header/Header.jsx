import { headerBar_, logo_, logoText_, logoIcon_ } from "./style.header";
import React from "react";
import { Flex, Text, Box, Select } from "theme-ui";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import Search from "./components/Search";

const Header = () => {
  return (
    <Flex sx={headerBar_}>
      <Box sx={logo_}>
        <Text sx={logoText_}>BOOK GALLERY</Text>
        <FontAwesomeIcon icon={faBook} className={logoIcon_} />
      </Box>
      <Flex sx={{ alignItems: "center" }}>
        <Search />
        <Select>
          <option></option>
        </Select>
      </Flex>
    </Flex>
  );
};

export default Header;
