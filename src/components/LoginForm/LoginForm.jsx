import { Field, Form, Formik } from "formik";
import s from './LoginForm.module.css';
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const LoginForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleSubmit = (values, options) => {
        dispatch(login(values))
        .unwrap()
        .then(res => {
            toast(`Welcome, ${res.user.name}`);
            navigate('/contacts');
        });
        options.resetForm();
    };
    const initialValues = {
        email: '',
        password: '',
    };
    return (
        <div className={s.wrapper}>
            <h2 className={s.title}>Log In</h2>
            <Formik onSubmit={handleSubmit} initialValues={initialValues}>
                <Form className={s.form}>
                  <Field name='email' placeholder='Enter email' />
                  <Field name='password' type='password' placeholder='Enter pass' />
                  <button type='submit' className={s.button}>Submit</button>
                </Form>
            </Formik>
        </div>
    )
};

export default LoginForm;