import { createSelector } from "@reduxjs/toolkit";

export const selectContacts = state => state.contacts.items;
export const selectIsError = state => state.contacts.isError;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectFilter = state => state.contscts.filter;

export const selectFilteredContacts = createSelector(
    [state => state.contacts.items, state => state.filter.filter],
    (contacts, filter) => {
        return contacts.filter(item => item.name.toLowerCase().includes(filter.toLowerCase()));
    }
);