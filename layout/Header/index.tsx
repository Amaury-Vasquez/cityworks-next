import Link from "next/link";
import { FC } from "react";
import { Button } from "@/components";
import styles from "@/styles/layout/header.module.scss";

const { header, homeLink, nav, navLink } = styles;

export const Header: FC = () => {
  return (
    <header className={header}>
      <Link href="/" className={homeLink}>
        CityWorks
      </Link>
      <nav className={nav}>
        <Link href="/about" className={navLink}>
          ¿Qué es CityWorks?
        </Link>
        <Link href="/auth" tabIndex={-1}>
          <Button variant="gray">Iniciar sesión</Button>
        </Link>
      </nav>
    </header>
  );
};
