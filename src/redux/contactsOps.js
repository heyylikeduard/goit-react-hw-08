import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// Встановлення базового URL для axios
const BASE_URL = "https://678a6660dd587da7ac29ffa0.mockapi.io";
axios.defaults.baseURL = 'https://678a6660dd587da7ac29ffa0.mockapi.io/contacts';

// Операція: отримання списку контактів
export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/');
      return response.data; // Повертаємо отриманий масив контактів
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message); // Повертаємо текст помилки
    }
  }
);

// Операція: додавання нового контакту
export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      const response = await axios.post('/', contact);
      return response.data; // Повертаємо доданий контакт
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message); // Повертаємо текст помилки
    }
  }
);

// Операція: видалення контакту за ID
export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId, thunkAPI) => {
    try {
      await axios.delete(`${BASE_URL}/contacts/${contactId}`); 
      return contactId;
    } catch (error) {
      console.error("Error in deleteContact:", error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);


