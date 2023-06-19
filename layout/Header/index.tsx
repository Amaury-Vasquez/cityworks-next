import { Button, Link } from '@/components';
import { FC } from 'react';
import styles from '@/styles/layout/header.module.scss';
import { useUserAuthenticated, useLogout } from '@/hooks';

const { header, homeLink, nav, navLink } = styles;

export const Header: FC = () => {
  const { user } = useUserAuthenticated();
  const logout = useLogout();

  function handleClick() {
    if (user) {
      console.log(user);
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

        {user ? (
          <Button onClick={handleClick} variant="gray">
            Cerrar sesion
          </Button>
        ) : (
          <Link href="/auth" variant="gray">
            Iniciar sesion
          </Link>
        )}
      </nav>
    </header>
  );
};
