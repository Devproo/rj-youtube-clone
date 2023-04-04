import React from "react";
import { Stack } from "@mui/material";
import { categories } from "../utils/constants";

const Sidebar = ({ selectedaCtegory, setSelectedCategory }) => {
  return (
    <Stack
      direction="row"
      sx={{
        overflow: "auto",
        Height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
      }}
    >
      {categories.map((category) => (
        <button
          className="category-btn"
          onClick={() => setSelectedCategory(category.name)}
          style={{
            background: category.name === selectedaCtegory && "#FC1503",
            color: "white",
          }}
          key={category.name}
        >
          <span
            style={{
              color: category.name === selectedaCtegory ? "white" : "red",
              marginRight: "15px",
            }}
          >
            {category.icon}
          </span>

          <span
            style={{
              opacity: category.name === selectedaCtegory ? "1" : "0.8",
            }}
          >
            {category.name}
          </span>
        </button>
      ))}
    </Stack>
  );
};

export default Sidebar;
