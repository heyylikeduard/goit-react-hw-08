import { Field, Form, Formik } from "formik";
import s from './RegisterForm.module.css'
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const RegisterForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleSubmit = (values, options) => {
        dispatch(register(values))
        .unwrap()
        .then(res => {
            toast(`Welcome, ${res.user.name}`);
            navigate('/contacts')
        }). catch (() => {
            toast.error('An account with that name or email already exists!')
        });
        options.resetForm();
    };

    const initialValues = {
        name: '',
        email: '',
        password: '',
    };

    return (
        <div className={s.wrapper}>
            <h2 className={s.title}>Register</h2>
            <Formik onSubmit={handleSubmit} initialValues={initialValues}>
                <Form className={s.form}>
                 <Field name='name' placeholder='Enter name' />
                 <Field name='email' placeholder='Enter email' />
                 <Field name='password' type='password' placeholder='Enter pass' />
                 <button type='submit' className={s.button}>Submit</button>
                </Form>
            </Formik>
        </div>
    )
};

export default RegisterForm;