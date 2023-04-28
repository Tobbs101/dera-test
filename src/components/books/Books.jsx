import React, { useContext } from "react";
import { BookContext } from "../../context";
import { Grid, Box, Card, Text, Button } from "theme-ui";

const Books = () => {
  const { data } = useContext(BookContext);

  const filteredData = data.books.filter(
    (book) =>
      book.title === data.filters.search ||
      book.author === data.filters.search ||
      book.year === data.filters.year
  );

  console.log({ filteredData });

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
            minHeight: "180px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
          key={index}
        >
          <Text>{book.title}</Text>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: "3px",
            }}
          >
            <Text>{book.author}</Text>
            <Button>VIEW BOOK</Button>
          </Box>
        </Card>
      ))}
    </Grid>
  );
};

export default Books;
