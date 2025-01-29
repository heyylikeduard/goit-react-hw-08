import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./auth/slice";
import storage from 'redux-persist/lib/storage';
import { contactsReducer } from "./contacts/slice";
import { filterReducer } from "./filters/slice";
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'

const persistConfigAuth = {
  key: 'root',
  version: 1,
  storage,
  whitelist: ['token'],
};

const persistConfigContacts = {
  key: 'contacts',
  storage,
};

const persistedReducer = persistReducer(persistConfigAuth, authReducer);
const persistedReducerContacts = persistReducer(persistConfigContacts, contactsReducer)


export const store = configureStore({
    reducer: {
      contacts: persistedReducerContacts,
      filter: filterReducer,
      auth: persistedReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
});

export const persistor = persistStore(store)