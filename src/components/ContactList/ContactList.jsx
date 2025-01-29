import s from './ContactList.module.css';
import Contact from '../Contact/Contact';
import { useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/contacts/selectors';

export const ContactList = () => {
  
  const filteredData = useSelector(selectFilteredContacts)

  return (
    <ul className={s.wrapper}>
      {filteredData.map(contact => (
        <Contact {...contact} key={contact.id} />
      ))}     
    </ul>
  )
};