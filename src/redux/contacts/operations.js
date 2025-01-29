import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../auth/operations";

export const fetchContacts = createAsyncThunk('contacts', async (_, thunkAPI) => {
    try {
        const response = await BASE_URL.get('/contacts');
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const deleteContact = createAsyncThunk('/contacts/deleteContact', async (contactId, thunkAPI) => {
    try {
        await BASE_URL.delete(`/contacts/${contactId}`);
        return contactId;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const addContact = createAsyncThunk('/contacts/addContact', async (body, thunkAPI) => {
    try {
        const response = await BASE_URL.post('/contacts', body);
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});