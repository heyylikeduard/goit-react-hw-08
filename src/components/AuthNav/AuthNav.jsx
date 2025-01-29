import clsx from "clsx";
import { NavLink } from "react-router-dom";
import s from './AuthNav.module.css';

const buildLinkClass = ({ isActive }) => {
    return clsx(s.link, isActive && s.active);
  };

const AuthNav = () => {
    return (
        <div className={s.wrapper}>
            <NavLink className={buildLinkClass} to='/register'>Register</NavLink>
            <NavLink className={buildLinkClass} to='/login'>Log In</NavLink>
        </div>
    )
};

export default AuthNav;