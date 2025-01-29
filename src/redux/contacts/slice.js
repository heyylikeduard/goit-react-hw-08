import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { addContact, deleteContact, fetchContacts } from "./operations";
import { logout } from "../auth/operations";

const initialState = {
    items: [],
    filters: '',
    isLoading: false,
    isError: false,
};

const slice = createSlice({
    name: 'contacts',
    initialState,
    extraReducers: builder => {
        builder.addCase(fetchContacts.fulfilled, (state, action) => {
            state.items = action.payload;
        })
        .addCase(fetchContacts.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(deleteContact.fulfilled, (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload);
        })
        .addCase(addContact.fulfilled, (state, action) => {
            state.items.push(action.payload);
        })
        .addCase(logout.fulfilled, () => initialState)
        .addMatcher(isAnyOf(addContact.rejected, deleteContact.rejected, fetchContacts.rejected), state => {
            state.isError = true;
            state.isLoading = false;
        })
        .addMatcher(isAnyOf(addContact.pending, deleteContact.pending, fetchContacts.pending), state => {
            state.isError = false;
            state.isLoading = true;
        })
        .addMatcher(isAnyOf(addContact.fulfilled, deleteContact.fulfilled, fetchContacts.fulfilled), state => {
            state.isLoading = false;
        })
    }
});

export const contactsReducer = slice.reducer;