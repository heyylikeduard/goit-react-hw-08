import { useDispatch } from 'react-redux';
import s from './SearchBox.module.css';
import { changeFilter } from '../../redux/filters/slice';

export const SearchBox = () => {
    const dispatch = useDispatch();


    return (
        <div className={s.wrapper}>
            <label className={s.label}>
                <span className={s.span}>Find contacts by name</span>
                <input className={s.input}
                 type='text'
                 onChange={e => dispatch(changeFilter(e.target.value))}
                />
            </label>
        </div>
    )
};