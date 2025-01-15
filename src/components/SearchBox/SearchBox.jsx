import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";
import styles from "./SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filters.name);

  const handleChange = (event) => {
    dispatch(changeFilter(event.target.value)); // Оновлюємо фільтр
  };

  return (
    <label>
      Find contacts by name
      <input type="text" value={filter} onChange={handleChange} />
    </label>
  );
};

export default SearchBox;
