import { useDispatch } from 'react-redux';
import { useState } from 'react';

import {
  Form,
  InputContact,
  LabelContact,
  ButtonSubmit,
} from '../../components/contactsForm/ContactsForm.styled.jsx';

import { register } from 'Redux/authOperations';

export const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleChange = evt => {
    const { name, value } = evt.target;

    if (name === 'name') {
      setName(value);
    }

    if (name === 'email') {
      setEmail(value);
    }

    if (name === 'password') {
      setPassword(value);
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    dispatch(
      register({
        name,
        email,
        password,
      })
    );
    // reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h2>Registration</h2>
      <LabelContact htmlFor="name">
        Name
        <InputContact
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </LabelContact>
      <LabelContact htmlFor="email">
        Email
        <InputContact
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          required
        />
      </LabelContact>
      <LabelContact htmlFor="password">
        Password
        <InputContact
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          autoComplete="off"
          required
        />
      </LabelContact>

      <ButtonSubmit type="submit">Register</ButtonSubmit>
    </Form>
  );
};
