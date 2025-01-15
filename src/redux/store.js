import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Використання localStorage
import contactsReducer from "./contactsSlice";
import filtersReducer from "./filtersSlice";

// Конфігурація для Redux Persist
const persistConfig = {
  key: "contacts",
  storage,
  whitelist: ["items"], // Зберігаємо тільки поле items
};

// Обгортаємо редюсер контактів у persistReducer
const persistedContactsReducer = persistReducer(persistConfig, contactsReducer);

// Створення стору
const store = configureStore({
  reducer: {
    contacts: persistedContactsReducer,
    filters: filtersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
      },
    }),
});

// Створення persistor
const persistor = persistStore(store);

export { store, persistor };
