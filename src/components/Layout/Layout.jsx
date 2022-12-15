import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth.js';
import { useSelector } from 'react-redux';
import { selectUser } from 'Redux/selectors';
import { LoginHeader } from '../LoginHeader/LoginHeader';
import { Header } from '../Header/Header';

export function Layout() {
  const user = useSelector(selectUser);
  const { isLoggedIn } = useAuth();

  return (
    <>
      {isLoggedIn ? <LoginHeader email={user.email} /> : <Header />}
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
}
