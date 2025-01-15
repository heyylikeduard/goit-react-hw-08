import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    name: "",
  },
  reducers: {
    changeFilter: (state, action) => {
      state.name = action.payload; // Оновлюємо значення фільтра
    },
  },
});

// Експорт екшену для використання у dispatch
export const { changeFilter } = filtersSlice.actions;

// Експорт редюсера для підключення до store
export default filtersSlice.reducer;
