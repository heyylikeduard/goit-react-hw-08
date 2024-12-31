import React from "react";
import styles from "./SearchBox.module.css";

const SearchBox = ({ filter, onFilterChange }) => {
  const handleChange = (event) => {
    onFilterChange(event.target.value);
  };

  return (
    <label>
      Find contacts by name
      <input type="text" value={filter} onChange={handleChange} />
    </label>
  );
};

export default SearchBox;
