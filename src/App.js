import { useState } from "react";
import { BookContext } from "./context";
import "./App.css";
import { Box } from "theme-ui";
import Header from "./header/Header";
import { Routes, Route } from "react-router-dom";
import Books from "./books/Books";
import BookInfo from "./bookInfo/BookInfo";

function App() {
  const [data, setData] = useState({ books: [], currentBook: {} });
  return (
    <BookContext.Provider value={{ data, setData }}>
      <Box sx={{ minHeight: "100vh", backgroundColor: "paleBg" }}>
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
