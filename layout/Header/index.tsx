import Link from 'next/link';
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
        <Link href={user ? '/' : '/auth'} tabIndex={-1}>
          <Button variant="gray" onClick={handleClick}>
            {user ? 'Cerrar sesion' : 'Iniciar sesion'}
          </Button>
        </Link>
      </nav>
    </header>
  );
};
