import { ContactsForm } from '../../components/contactsForm/ContactsForm';
import { Filter } from '../../components/filter/Filter';
import { ContactList } from '../../components/contactList/ContactList';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getError, getIsLoading } from 'Redux/selectors';
import { fetchContacts } from 'Redux/operations';
import { Wrapper, Title, Heading, Loader } from './ContactsPage.styled';

export const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Wrapper>
      <Heading>Phonebook</Heading>
      <ContactsForm />
      <Title>Contacts</Title>
      <Filter />
      {isLoading && <Loader>Loading...</Loader>}
      {error && <div>Try again later...</div>}
      <ContactList />
    </Wrapper>
  );
};
