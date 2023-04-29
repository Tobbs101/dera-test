import React, { useEffect } from "react";
import { Box, Text, Grid, Button } from "theme-ui";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

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
      <Box
        sx={{
          border: "1px solid #ccc",
          backgroundColor: "#fff",
          boxShadow: "0 0 5px 0 #ccc",
          padding: "10px",
          borderRadius: "5px",
        }}
      >
        <Box
          sx={{
            marginBottom: "15px",
            borderBottom: "1px solid #ccc",
            paddingBottom: "5px",
          }}
        >
          <Text
            sx={{
              fontWeight: "600",
              fontSize: "16px",
            }}
          >
            {currentBook?.title}
          </Text>
        </Box>

        <Grid
          sx={{
            gridTemplateColumns: "repeat(4,1fr)",
            gap: "25px",
            "@media screen and (max-width:1000px)": {
              gridTemplateColumns: "repeat(2,1fr)",
            },
            "@media screen and (max-width:500px)": {
              gridTemplateColumns: "repeat(1,1fr)",
            },
          }}
        >
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
