import { FC } from 'react';
import Link from 'next/link';

export interface BreadcrumbItem {
  text: string;
  href?: string;
}

export interface BreadcrumbProps {
  crumbs: BreadcrumbItem[];
}

export const Breadcrumb: FC<BreadcrumbProps> = ({ crumbs }) => (
  <div className="text-base text-primary font-semibold breadcrumbs">
    <ul>
      {crumbs.map(({ text, href }, index) => (
        <li key={text + index}>
          {index === crumbs.length - 1 ? (
            text
          ) : (
            <Link href={href ?? '/'}> {text} </Link>
          )}
        </li>
      ))}
    </ul>
  </div>
);
