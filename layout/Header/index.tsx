import { Link } from '@/components';
import { FC, use } from 'react';
import { Button } from '@/components';
import styles from '@/styles/layout/header.module.scss';
import { useUserAuthenticated, useLogout } from '@/hooks';

const { header, homeLink, nav, navLink } = styles;

export const Header: FC = () => {
  const { user } = useUserAuthenticated();
  const logout = useLogout();
  function handleClick() {
    if (user) {
      logout();
    }
  }

  return (
    <header className={header}>
      <Link href="/" className={homeLink}>
        CityWorks
      </Link>
      <nav className={nav}>
        <Link href="/about" className={navLink}>
          ¿Qué es CityWorks?
        </Link>
        {user ? (
          <Link href="/actividades" className={navLink}>
            Actividades
          </Link>
        ) : null}

        <Link href={user ? '/' : '/auth'} variant="gray" onClick={handleClick}>
          {user ? 'Cerrar sesion' : 'Iniciar sesion'}
        </Link>
      </nav>
    </header>
  );
};
