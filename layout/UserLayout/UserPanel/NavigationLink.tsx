import Link from 'next/link';
import { FC } from 'react';
import { IconType } from 'react-icons/lib';

export interface NavigationLinkProps {
  path: string;
  Icon: IconType;
  text: string;
}

export const NavigationLink: FC<NavigationLinkProps> = ({
  path,
  text,
  Icon,
}) => (
  <Link
    className="text-primary text-lg flex w-full gap-4 items-center font-semibold hover:opacity-80"
    href={path}
  >
    <Icon className="text-xl text-primary" />
    {text}
  </Link>
);
