import clsx from 'clsx';
import { FC } from 'react';

interface TableHeaderProps {
  text: string;
  lastItem: boolean;
}

export const TableHeader: FC<TableHeaderProps> = ({ text, lastItem }) => (
  <th
    className={clsx(
      'capitalize text-left text-primary bg-theme-gray px-3 py-2 font-bold'
    )}
  >
    {text}
  </th>
);
