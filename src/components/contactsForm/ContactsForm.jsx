import { useState } from 'react';
import { nanoid } from 'nanoid';
import { BiUser } from 'react-icons/bi';
import { BsTelephone } from 'react-icons/bs';
import { IconContext } from 'react-icons';

import { useSelector, useDispatch } from 'react-redux';

import { newContact } from '../../Redux/operations';
import { getContacts } from '../../Redux/selectors';

import {
  Form,
  InputContact,
  LabelContact,
  ButtonSubmit,
} from '../contactsForm/ContactsForm.styled';

export function ContactsForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const contactsCatalog = contact => {
    if (
      contacts.some(
        contactPerson =>
          contactPerson.name.toLowerCase() === contact.name.toLowerCase()
      )
    ) {
      alert(`${contact.name} is already in contacts!`);
      return;
    }

    dispatch(newContact(contact));
  };

  const handleChange = evt => {
    const { name, value } = evt.target;

    if (name === 'name') {
      setName(value);
    }

    if (name === 'number') {
      setNumber(value);
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    const newSubscriber = {
      name,
      number,
      id: nanoid(7),
    };

    contactsCatalog(newSubscriber);
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <LabelContact htmlFor="name">
        <IconContext.Provider value={{ size: '1.5em' }}>
          <BiUser />
        </IconContext.Provider>
        <InputContact
          type="text"
          name="name"
          value={name}
          placeholder="Rosie Simpson"
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </LabelContact>
      <LabelContact htmlFor="number">
        <IconContext.Provider value={{ size: '1.5em' }}>
          <BsTelephone />
        </IconContext.Provider>
        <InputContact
          type="tel"
          name="number"
          value={number}
          placeholder="459-12-56"
          onChange={handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </LabelContact>
      <ButtonSubmit type="submit">Add contact</ButtonSubmit>
    </Form>
  );
}
