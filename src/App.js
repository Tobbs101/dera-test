import { useState } from "react";
import { BookContext } from "./context";
import { Box } from "theme-ui";
import Header from "./components/header/Header";
import { Routes, Route } from "react-router-dom";
import Books from "./components/books/Books";
import BookInfo from "./components/bookInfo/BookInfo";
import { container, innerContainer_ } from "./App.styles";
import bookData from "./books.json";
import { Toaster } from "react-hot-toast";

function App() {
  //GLOBAL CONTEXT DATA
  const [data, setData] = useState({
    books: [...bookData.books],
    filters: { search: "", year: "" },
  });

  return (
    <>
      <BookContext.Provider value={{ data, setData }}>
        <Box sx={container}>
          <Box sx={innerContainer_}>
            <Header />
            <Routes>
              <Route path="/" element={<Books />} />
              <Route path="/:id" element={<BookInfo />} />
            </Routes>
          </Box>
        </Box>
      </BookContext.Provider>
      <Toaster />
    </>
  );
}

export default App;
