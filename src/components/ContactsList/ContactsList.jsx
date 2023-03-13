import ContactItem from '../ContactItem';
import { ListContacts } from './ContactsList.styled';

import { useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/contacts/selectors';

const ContactsList = () => {
  const contacts = useSelector(selectVisibleContacts);

  return (
    <ListContacts>
      {contacts.length
        ? contacts.map(({ name, number, id }) => (
            <ContactItem key={id} name={name} number={number} id={id} />
          ))
        : 'No contacts'}
    </ListContacts>
  );
};

export default ContactsList;
