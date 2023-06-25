import { FC, ReactNode } from 'react';

interface ListItemProps {
  children: ReactNode;
}

export const ListItem: FC<ListItemProps> = ({ children }) => (
  <div className="flex justify-between items-center bg-gray w-full h-fit py-3 px-4 rounded-3xl">
    {children}
  </div>
);
