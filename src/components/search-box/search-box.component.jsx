import React from "react";
import "./search-box.style.css";

export const SearchBox = ({ placeholder, handleEvent }) => (
  <input
    type="search"
    className="search"
    placeholder={placeholder}
    onChange={handleEvent}
  />
);
