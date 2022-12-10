import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../Redux/operations';
import { getContacts, getFilter } from '../../Redux/selectors.js';
import { AiOutlineDelete } from 'react-icons/ai';
import { ContactBook, ContactItem, ButtonDels } from './ContactList.styled';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  return (
    <ContactBook>
      {contacts
        .filter(contact =>
          contact.name.toLowerCase().includes(filter.toLowerCase())
        )
        .map(({ id, name, number }) => {
          return (
            <ContactItem key={id}>
              <p>
                {name}: {number}
              </p>
              <ButtonDels
                type="button"
                onClick={() => dispatch(deleteContact(id))}
              >
                <AiOutlineDelete />
              </ButtonDels>
            </ContactItem>
          );
        })}
    </ContactBook>
  );
};
