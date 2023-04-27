import React from "react";
import { Flex, Text, Box, Input } from "theme-ui";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { headerBar_, logo_, logoText_, logoIcon_ } from "./style.header";

const Header = () => {
  return (
    <Flex sx={headerBar_}>
      <Box sx={logo_}>
        <Text sx={logoText_}>BOOK GALLERY</Text>
        <FontAwesomeIcon icon={faBook} className={logoIcon_} />
      </Box>
      <Box>
        <Input placeholder="Search..." sx={{ border: "1px solid #ccc" }} />
      </Box>
    </Flex>
  );
};

export default Header;
