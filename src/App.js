import "./App.css";
import { Box } from "theme-ui";
import Header from "./header/Header";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Box sx={{ minHeight: "100vh", backgroundColor: "paleBg" }}>
      <Header />
      <Routes></Routes>
    </Box>
  );
}

export default App;
