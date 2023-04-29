import React, { useContext, useEffect, useState } from "react";
import { BookContext } from "../../context";
import { Grid, Box, Card, Text, Flex, Button } from "theme-ui";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import Pagination from "../pagination/Pagination";
import { bookGrid_, book_, title_, cardFooter_, ifEmpty_ } from "./style.book";
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

  const navigateToBooks = (book) => {
    sessionStorage.setItem("currentBook", JSON.stringify(book));
    toast.loading("Loading...");
    setTimeout(() => {
      toast.remove();
      const currentBook = JSON.parse(sessionStorage.getItem("currentBook"));
      navigate(`/${currentBook.id}`);
    }, 1000);
  };

  if (formattedData.length < 1) {
    return (
      <Flex sx={ifEmpty_}>
        <FontAwesomeIcon
          icon={faCircleExclamation}
          style={{ fontSize: "20px" }}
          className="text-secondary"
        />
        <Text>No data</Text>
      </Flex>
    );
  }

  return (
    <>
      <Box
        sx={{
          marginTop: "10px",
          display: "flex",
          width: "100%",
          overflowX: "scroll",
        }}
      >
        <table>
          <thead>
            <tr
              style={{
                border: "1px solid #ccc",
                boxShadow: "0 0 5px 0 #ccc inset",
              }}
            >
              <th style={{ minWidth: "300px", padding: "5px 0" }}>TITLE</th>
              <th style={{ minWidth: "200px" }}>AUTHOR</th>
              <th style={{ minWidth: "150px" }}>YEAR</th>
              <th style={{ minWidth: "300px" }}>CATEGORIES</th>
              <th style={{ minWidth: "150px" }}>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {!isPaginated
              ? formattedData?.map((book, index) => (
                  <tr key={index}>
                    <td style={{ minWidth: "300px" }}>
                      <Text>{book.title}</Text>
                    </td>
                    <td style={{ minWidth: "200px" }}>
                      <Text>{book.author}</Text>
                    </td>
                    <td
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        minWidth: "150px",
                      }}
                    >
                      <Text>{book.year}</Text>
                    </td>
                    <td style={{ minWidth: "300px" }}>
                      <Text>{book.categories}</Text>
                    </td>
                    <td
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        minWidth: "150px",
                      }}
                    >
                      <Button
                        onClick={() => {
                          navigateToBooks(book);
                        }}
                      >
                        VIEW BOOK
                      </Button>
                    </td>
                  </tr>
                ))
              : paginatedData[currentPage - 1].map((book, index) => (
                  <tr key={index}>
                    <td style={{ minWidth: "300px", padding: "5px 0" }}>
                      <Text>{book.title}</Text>
                    </td>
                    <td style={{ minWidth: "150px" }}>
                      <Text>{book.author}</Text>
                    </td>
                    <td
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        minWidth: "150px",
                      }}
                    >
                      <Text>{book.year}</Text>
                    </td>
                    <td style={{ minWidth: "300px" }}>
                      <Text>{book.categories}</Text>
                    </td>
                    <td
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        minWidth: "150px",
                      }}
                    >
                      <Button
                        onClick={() => {
                          navigateToBooks(book);
                        }}
                      >
                        VIEW
                      </Button>
                    </td>
                  </tr>
                ))}
          </tbody>
        </table>
      </Box>
      <Pagination
        length={paginatedData.length}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
};

export default Books;
