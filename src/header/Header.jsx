import React from "react";
import { Flex, Text, Box, Input } from "theme-ui";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";

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
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "5px",
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
        <FontAwesomeIcon icon={faBook} className="text-secondary text-2xl" />
      </Box>
      <Box>
        <Input placeholder="Search..." sx={{ border: "1px solid #ccc" }} />
      </Box>
    </Flex>
  );
};

export default Header;
