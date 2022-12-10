import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getError, getIsLoading } from 'Redux/selectors';
import { fetchContacts } from 'Redux/operations';
import { ContactsForm } from './contactsForm/ContactsForm';
import { Filter } from './filter/Filter';
import { ContactList } from './contactList/ContactList';
import { Wrapper, Title, Heading, Loader } from './App.styled';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Wrapper>
        <Heading>Phonebook</Heading>
        <ContactsForm />
        <Title>Contacts</Title>
        <Filter />
        {isLoading && <Loader>Loading...</Loader>}
        {error && <div>Try again later...</div>}
        <ContactList />
      </Wrapper>
    </>
  );
};
