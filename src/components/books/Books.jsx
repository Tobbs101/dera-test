import React, { useContext, useEffect, useState } from "react";
import { BookContext } from "../../context";
import { Grid, Box, Card, Text, Flex, Button } from "theme-ui";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import Pagination from "../pagination/Pagination";
import { bookGrid_, book_, title_, cardFooter_ } from "./style.book";
import { shortenTitle } from "../header/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";

const Books = () => {
  const { data, setData } = useContext(BookContext);
  const [paginatedData, setPaginatedData] = useState([]);
  const [isPaginated, setIsPaginated] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  const formattedData = data?.books.filter(
    (x) =>
      (x.title.toLowerCase().includes(data.filters.search.toLowerCase()) ||
        x.author.toLowerCase().includes(data.filters.search.toLowerCase())) &&
      x.year.includes(data.filters.year)
  );

  useEffect(() => {
    if (formattedData.length > 6) {
      const chunkLength = 6;
      const Chunks = [];
      for (let i = 0; i < formattedData.length; i += chunkLength) {
        const chunk = formattedData.slice(i, i + chunkLength);
        Chunks.push(chunk);
      }
      setPaginatedData(Chunks);
      setIsPaginated(true);
    } else {
      setIsPaginated(false);
      setPaginatedData([]);
    }
  }, [formattedData]);

  // console.log({ data });
  console.log({ formattedData });
  console.log({ isPaginated });

  const navigateToBooks = () => {
    toast.loading("Loading...");
    setTimeout(() => {
      toast.remove();
      navigate(`/${data.currentBook.id}`);
    }, 1000);
  };

  if (formattedData.length < 1) {
    return (
      <Flex sx={{ alignItems: "center", justifyContent: "center", gap: "5px" }}>
        <FontAwesomeIcon icon={faCircleExclamation} />
        <Text>No data</Text>
      </Flex>
    );
  }

  return (
    <>
      <Grid sx={bookGrid_}>
        {!isPaginated
          ? formattedData?.map((book, index) => (
              <Card
                sx={book_}
                onMouseEnter={() => {
                  setData((prev) => {
                    return { ...prev, currentBook: book };
                  });
                }}
                key={index}
              >
                <Text sx={title_} className="bg-slate-50 text-slate-500">
                  {shortenTitle(book.title).toUpperCase()}
                </Text>
                <Box sx={cardFooter_}>
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
            ))
          : paginatedData[currentPage - 1].map((book, index) => (
              <Card
                sx={book_}
                onMouseEnter={() => {
                  setData((prev) => {
                    return { ...prev, currentBook: book };
                  });
                }}
                key={index}
              >
                <Text sx={title_} className="bg-slate-50 text-slate-500">
                  {shortenTitle(book.title).toUpperCase()}
                </Text>
                <Box sx={cardFooter_}>
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
      <Pagination
        length={paginatedData.length}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
};

export default Books;
