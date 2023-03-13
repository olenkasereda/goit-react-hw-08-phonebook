import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import { selectError, selectIsLoading } from 'redux/contacts/selectors';
import SyncLoader from 'react-spinners/SyncLoader';

import ContactForm from '../../components/ContactForm/ContactForm';
// import { Filter } from '../../components/Filter/Filter';
// import { ContactsList } from '../../components/ContactsList/ContactsList';

import { Container, Header, Loader } from './Contacts.styled';
import ContactsList from 'components/ContactsList/ContactsList';
import Filter from 'components/Filter/Filter';

export default function Contacts() {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <Header>Phonebook</Header>
      <ContactForm />

      <Filter />
      <Header>Contacts</Header>

      {isLoading && !error ? (
        <Loader>
          <SyncLoader color="#2f9e99" />
        </Loader>
      ) : (
        <ContactsList />
      )}
    </Container>
  );
}
