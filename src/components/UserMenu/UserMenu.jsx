import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operations";
import s from './UserMenu.module.css';

const UserMenu = () => {
    const dispatch = useDispatch();
    const user = useSelector(selectUser);
    return (
        <div className={s.wrapper}>
            <p className={s.title}>Welcome, {user.name}</p>
            <button type="button" onClick={() => dispatch(logout())} className={s.button}>Log out</button>
        </div>
    )
};

export default UserMenu;