import * as Yup from 'yup';
import s from './ContactForm.module.css';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { addContact } from '../../redux/contacts/operations';
import toast from 'react-hot-toast';  

const ContactForm = () => {

    const initialValues = {
        name: '',
        number: ''
    };

    const contactSchema = Yup.object().shape({
        name: Yup.string().min(3, 'Too short!').max(50, 'Too long!').required('Required'),
        number: Yup.string().min(7).required('Required'),
    });

    const dispatch = useDispatch();

    const handleSubmit = (values) => {
       const newContact = {
        id: nanoid(),
        name: values.name,
        number: values.number,
       };
       dispatch(addContact(newContact));
       toast.success('Contact added');  // Повідомлення про успішне додавання контакту
    };

    return (
        <div className={s.wrapper}>
            <Formik validationSchema={contactSchema} onSubmit={handleSubmit} initialValues={initialValues}>
                  <Form className={s.form}>
                  <label className={s.label}>
                      <span>Name</span>
                      <Field name='name' className={s.input}></Field>
                      <ErrorMessage name='name' component='span' className={s.error}></ErrorMessage>
                  </label>
                  <label className={s.label}>
                      <span>Number</span>
                      <Field name='number' className={s.input}></Field>
                      <ErrorMessage name='number' component='span' className={s.error}></ErrorMessage>
                  </label>
                  <button type='submit' className={s.button}>Add contact</button>
              </Form>
            </Formik>
        </div>
    );
};

export default ContactForm;
