import { Link, Wrap } from './Header.styled.js';

export const Header = () => {
  return (
    <Wrap>
      <Link to="/register" end>
        Register
      </Link>
      <Link to="/login">Log in</Link>
    </Wrap>
  );
};
