import React, { useState } from "react";
import { Paper, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";
import { Navigate } from "react-router-dom";

const SearchBar = () => {
  const [searchTerm, setsearchTerm] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm) {
      Navigate(`/search/${searchTerm}`);
      setsearchTerm('')
    }
  };
  return (
    <Paper
      component="form"
      onSubmit={handleSubmit}
      sx={{
        border: "1px solid #e3e3e3",
        borderRadius: 20,
        pl: 2,
        boxShadow: "none",
        mr: { sm: 5 },
      }}
    >
      <input
        className="Search-bar "
        placeholder="Search ..."
        value={searchTerm}
        onChange={(e) => setsearchTerm(e.target.value)}
      />
      <IconButton type="submit" sx={{ p: "10px", color: "red" }}>
        <Search />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
