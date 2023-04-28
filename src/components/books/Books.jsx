import React, { useContext } from "react";
import { BookContext } from "../../context";
import { Grid, Box, Card, Text, Button } from "theme-ui";

const Books = () => {
  const { data, setData } = useContext(BookContext);

  console.log({ data });

  function shortenTitle(title) {
    const colonIndex = title.indexOf(":");
    if (colonIndex !== -1) {
      return title.substring(0, colonIndex);
    }
    return title;
  }

  return (
    <Grid
      sx={{
        marginTop: "20px",
        gridTemplateColumns: "repeat(4,1fr)",
      }}
    >
      {data?.books?.map((book, index) => (
        <Card
          sx={{
            border: "1px solid #ccc",
            padding: "10px 15px",
            borderRadius: "5px",
            boxShadow: "0 0 5px 0 #ccc",
            backgroundColor: "#fff",
            cursor: "pointer",
            minHeight: "200px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
          key={index}
          onClick={() => {
            setData((prev) => {
              return { ...prev, currentBook: book };
            });
          }}
        >
          <Text sx={{ textAlign: "center", width: "100%" }}>
            {shortenTitle(book.title)}
          </Text>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: "3px",
            }}
          >
            <Text style={{ fontStyle: "italic" }}>{book.author}</Text>
            <Button>VIEW BOOK</Button>
          </Box>
        </Card>
      ))}
    </Grid>
  );
};

export default Books;
