import  { ContactList }  from "../../components/ContactList/ContactList";
import  { SearchBox }  from "../../components/SearchBox/SearchBox"; 
import ContactForm from "../../components/ContactForm/ContactForm";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contacts/operations";


const ContactsPage = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchContacts());
    },[dispatch])
    return (
        <div>
            <ContactForm />
            <SearchBox />
            <ContactList />
        </div>
    )
};

export default ContactsPage;