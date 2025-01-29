import { FaPhone } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";
import s from './Contact.module.css';
import { useDispatch } from "react-redux";
import { deleteContact } from '../../redux/contacts/operations';
import toast from 'react-hot-toast';  

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
    toast.success('Contact deleted');  // Повідомлення про успішне видалення контакту
  };

  return (
    <li className={s.item}>
      <div className={s.container}>
        <p className={s.name}><IoPerson />{name}</p>
        <p className={s.number}><FaPhone />{number}</p>
      </div>
      <button className={s.button} onClick={handleDelete}>Delete</button>
    </li>
  );
};

export default Contact;
