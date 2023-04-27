import React from "react";
import { Flex, Text, Box } from "theme-ui";

const Header = () => {
  return (
    <Flex
      sx={{
        backgroundColor: "#fff",
        padding: "5px 30px",
        width: "100%",
        border: "1px solid #ccc",
        borderRadius: "5px",
        boxShadow: "0 0 5px 0 #ccc",
      }}
    >
      <Text
        sx={{
          fontFamily: "'Stylish', sans-serif",
          fontSize: "28px",
          fontWeight: "500",
        }}
      >
        BOOK GALLERY
      </Text>
    </Flex>
  );
};

export default Header;
