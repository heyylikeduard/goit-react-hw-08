import { createSlice } from "@reduxjs/toolkit";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
  },
  reducers: {
    addContact: (state, action) => {
      state.items.push(action.payload); // Додаємо новий контакт
    },
    deleteContact: (state, action) => {
      state.items = state.items.filter(contact => contact.id !== action.payload); // Видаляємо контакт за id
    },
  },
});

// Експорт екшенів для використання у dispatch
export const { addContact, deleteContact } = contactsSlice.actions;

// Експорт редюсера для підключення до store
export default contactsSlice.reducer;
