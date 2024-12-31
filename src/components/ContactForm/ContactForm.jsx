import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import styles from "./ContactForm.module.css";

const ContactForm = ({ onSubmit }) => {
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "Must be at least 3 characters")
      .max(50, "Must be less than 50 characters")
      .required("Required"),
    number: Yup.string().required("Required"),
  });

  const handleSubmit = ({ name, number }, { resetForm }) => {
    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    onSubmit(newContact);
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
