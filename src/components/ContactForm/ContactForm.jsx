import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../../redux/contactsSlice";
import styles from "./ContactForm.module.css";

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.items);

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "Must be at least 3 characters")
      .max(50, "Must be less than 50 characters")
      .required("Required"),
    number: Yup.string().required("Required"),
  });

  const handleSubmit = ({ name, number }, { resetForm }) => {
    const normalizedName = name.toLowerCase();
    const isDuplicate = contacts.some(
      (contact) => contact.name.toLowerCase() === normalizedName
    );

    if (isDuplicate) {
      alert(`${name} is already in contacts!`);
      return;
    }

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    dispatch(addContact(newContact)); // Додаємо контакт
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {() => (
        <Form className={styles.form}>
          <label>
            Name:
            <Field name="name" />
            <ErrorMessage name="name" component="div" />
          </label>
          <label>
            Number:
            <Field name="number" />
            <ErrorMessage name="number" component="div" />
          </label>
          <button type="submit">Add Contact</button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
