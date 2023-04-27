import { useState } from "react";
import { BookContext } from "./context";
import { Box } from "theme-ui";
import Header from "./header/Header";
import { Routes, Route } from "react-router-dom";
import Books from "./books/Books";
import BookInfo from "./bookInfo/BookInfo";
import { container } from "./App.styles";

function App() {
  //GLOBAL CONTEXT DATA
  const [data, setData] = useState({ books: [], currentBook: {} });

  return (
    <BookContext.Provider value={{ data, setData }}>
      <Box sx={container}>
        <Header />
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/:id" element={<BookInfo />} />
        </Routes>
      </Box>
    </BookContext.Provider>
  );
}

export default App;
