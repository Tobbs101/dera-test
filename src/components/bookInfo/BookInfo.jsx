import React, { useEffect } from "react";
import { Box, Text, Grid, Button } from "theme-ui";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { container_, gridStyle_, title_ } from "./bookinfo.style";

const BookInfo = () => {
  const navigate = useNavigate();
  const [currentBook, setCurrentBook] = useState({});

  useEffect(() => {
    const book = JSON.parse(sessionStorage.getItem("currentBook"));
    setCurrentBook(book);
    console.log(currentBook);
  }, []);
  return (
    <>
      <Button
        sx={{ marginBottom: "10px", marginTop: "10px" }}
        onClick={() => {
          navigate("/");
        }}
      >
        <FontAwesomeIcon icon={faArrowLeftLong} />
      </Button>
      <Box sx={container_}>
        <Box sx={title_}>
          <Text
            sx={{
              fontWeight: "600",
              fontSize: "16px",
            }}
          >
            {currentBook?.title}
          </Text>
        </Box>

        <Grid sx={gridStyle_}>
          <Text>Author(s): {currentBook?.author}</Text>
          <Text>
            Description:{" "}
            {currentBook?.description ? currentBook?.description : "-"}
          </Text>
          <Text>Edition: {currentBook?.edition}</Text>
          <Text>Language: {currentBook?.language}</Text>
          <Text>Pages: {currentBook?.pages}</Text>
          <Text>Link: {currentBook?.url}</Text>
          <Text>Year: {currentBook?.year}</Text>
        </Grid>
      </Box>
    </>
  );
};

export default BookInfo;
