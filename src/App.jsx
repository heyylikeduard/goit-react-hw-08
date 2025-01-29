import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import { useDispatch, useSelector } from "react-redux";
import { lazy, useEffect } from "react";
import { refreshUser } from "./redux/auth/operations";
import { selectIsRefreshing } from "./redux/auth/selectors";
import PrivateRoute from "./components/PrivateRoute";
import RestrictedRoute from "./components/RestrictedRoute";

const HomePage = lazy(() => import ('./pages/HomePage/HomePage'));
const ContactsPage = lazy(() => import ('./pages/ContactsPage/ContactsPage'));
const LoginPage = lazy(() => import ('./pages/LoginPage/LoginPage'));
const RegisterPage = lazy(() => import ('./pages/RegisterPage/RegisterPage'));


const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  useEffect(() => {
    dispatch(refreshUser());
  },[dispatch])

  return isRefreshing ? null : (
   <Layout>
     <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='contacts' element={<PrivateRoute><ContactsPage /></PrivateRoute>} />
      <Route path='register' element={<RestrictedRoute component={<RegisterPage />} redirectTo='/contacts' />} />
      <Route path='login' element={<RestrictedRoute component={<LoginPage />} redirectTo='/contacts' />} />      
    </Routes>
   </Layout>
  )
}

export default App;