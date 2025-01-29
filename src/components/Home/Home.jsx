import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/selectors';
import s from './Home.module.css';

const Home = () => {
    const user = useSelector(selectUser);

    return (
        <div className={s.wrapper}>
            <h1>
                {user && user.name ? `Welcome to the your Contact Book, ${user.name}!` : 'Welcome to the Contact Book!'}
            </h1>
        </div>
    );
};

export default Home;
