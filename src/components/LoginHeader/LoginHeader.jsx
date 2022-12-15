import { useDispatch } from 'react-redux';
import { logOut } from 'Redux/authOperations';
import { ButtonLogOut, Text, Wrapper } from './LoginHeader.styled.js';

export const LoginHeader = ({ email }) => {
  const dispatch = useDispatch();
  return (
    <Wrapper>
      <Text>Welcome, {email}</Text>
      <ButtonLogOut type="button" onClick={() => dispatch(logOut())}>
        Log out
      </ButtonLogOut>
    </Wrapper>
  );
};
