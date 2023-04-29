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
          <Text>
            <b>Author(s):</b> {currentBook?.author}
          </Text>
          <Text>
            <b>Description: </b>
            {currentBook?.description ? currentBook?.description : "-"}
          </Text>
          <Text>
            <b>Edition:</b> {currentBook?.edition}
          </Text>
          <Text>
            <b>Language:</b> {currentBook?.language}
          </Text>
          <Text>
            <b>Pages:</b> {currentBook?.pages}
          </Text>
          <Text>
            <b>Link:</b> {currentBook?.url}
          </Text>
          <Text>
            <b>Year:</b> {currentBook?.year}
          </Text>
        </Grid>
      </Box>
    </>
  );
};

export default BookInfo;
