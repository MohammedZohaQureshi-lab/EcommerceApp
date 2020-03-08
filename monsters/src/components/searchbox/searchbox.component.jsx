import React from "react";
import "./searchbox.style.css";

const SearchBox = ({ placeholder, handleChange }) => {
  return (
    <div className="searchText">
      <input type="search" placeholder={placeholder} onChange={handleChange} />
    </div>
  );
};

export default SearchBox;
