import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchContacts } from "./redux/contactsOps";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox"; 
import ContactList from "./components/ContactList/ContactList";
import styles from "./App.module.css";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts()); // Завантажуємо контакти з бекенду при першому рендері
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <h1>Contacts App</h1>
      <ContactForm />
      <SearchBox /> {/* Додаємо компонент для пошуку */}
      <ContactList />
    </div>
  );
};

export default App;
