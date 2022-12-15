import { useDispatch } from 'react-redux';
import { useState } from 'react';

import {
  Form,
  InputContact,
  LabelContact,
  ButtonSubmit,
} from '../../components/contactsForm/ContactsForm.styled.jsx';

import { logIn } from 'Redux/authOperations';

export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleChange = evt => {
    const { name, value } = evt.target;

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
      logIn({
        email: email.trim(),
        password: password.trim(),
      })
    );
    // reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h2>Log in</h2>

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

      <ButtonSubmit type="submit">Log in</ButtonSubmit>
    </Form>
  );
};
