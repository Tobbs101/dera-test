import React, { useContext } from "react";
import { BookContext } from "../../context";
import { Grid, Box, Card, Text, Button } from "theme-ui";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import Pagination from "../pagination/Pagination";

const Books = () => {
  const { data, setData } = useContext(BookContext);
  const navigate = useNavigate();

  const formattedData = data?.books.filter(
    (x) =>
      (x.title.toLowerCase().includes(data.filters.search.toLowerCase()) ||
        x.author.toLowerCase().includes(data.filters.search.toLowerCase())) &&
      x.year.includes(data.filters.year)
  );

  // console.log({ data });
  // console.log({ formattedData });

  function shortenTitle(title) {
    const colonIndex = title.indexOf(":");
    if (colonIndex !== -1) {
      return title.substring(0, colonIndex);
    }
    return title;
  }

  const navigateToBooks = () => {
    toast.loading("Loading...");
    setTimeout(() => {
      toast.remove();
      navigate(`/${data.currentBook.id}`);
    }, 1000);
  };

  if (formattedData.length < 1) {
    return <Text>No data</Text>;
  }

  return (
    <>
      <Grid
        sx={{
          marginTop: "20px",
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
        {formattedData.length > 0 &&
          formattedData?.map((book, index) => (
            <Card
              sx={{
                border: "1px solid #ccc",
                padding: "10px 15px",
                borderRadius: "5px",
                boxShadow: "0 0 5px 0 #ccc",
                backgroundColor: "#fff",
                minHeight: "200px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
              onMouseEnter={() => {
                setData((prev) => {
                  return { ...prev, currentBook: book };
                });
              }}
              key={index}
            >
              <Text
                sx={{
                  textAlign: "center",
                  width: "100%",
                  border: "1px solid #ccc",
                  boxShadow: "0 0 5px 0 #ccc inset",
                  padding: "3px 0",
                  borderRadius: "5px",
                  fontWeight: "500",
                }}
                className="bg-slate-50 text-slate-500"
              >
                {shortenTitle(book.title).toUpperCase()}
              </Text>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  gap: "3px",
                }}
              >
                <Text style={{ fontStyle: "italic" }}>- {book.author}</Text>
                <Button
                  onClick={() => {
                    navigateToBooks();
                  }}
                >
                  VIEW BOOK
                </Button>
              </Box>
            </Card>
          ))}
      </Grid>
      <Pagination length={formattedData.length} />
    </>
  );
};

export default Books;
