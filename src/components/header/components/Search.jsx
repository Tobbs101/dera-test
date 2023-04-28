import React from "react";
import { Input } from "theme-ui";
import { useDebounce } from "../../../hooks/useDebounce";
import { search_ } from "../style.header";

const Search = ({ setSearchTerm }) => {
  const debouncedSearch = useDebounce((searchTerm) => {
    // Call your search function here
    console.log(`Searching for "${searchTerm}"...`);
  }, 1000);

  const handleSearchChange = (event) => {
    const newSearchTerm = event.target.value;
    setSearchTerm(newSearchTerm);
    debouncedSearch(newSearchTerm);
  };

  return (
    <Input
      placeholder="Search by title or author..."
      onChange={handleSearchChange}
      type="search"
      sx={search_}
    />
  );
};

export default Search;
