import { FC } from 'react';
import { MdLink } from 'react-icons/md';
import { ListItem, Link } from '@/components';
import { Catalog } from '@/interfaces';
import { DeleteButton } from './DeleteButton';

interface CatalogItemProps extends Catalog {
  handleDeleteClick: (id: string) => void;
}

export const CatalogItem: FC<CatalogItemProps> = ({
  id,
  nombre,
  fecha,
  handleDeleteClick,
}) => (
  <ListItem>
    <span className="text-primary font-bold">{nombre}</span>
    <span className="text-primary font-bold">{fecha}</span>
    <div className="h-fit w-fit gap-8 grid grid-cols-2">
      <Link
        className="!w-full justify-center flex items-center gap-2"
        href={`/conceptos/catalogos/${id}`}
      >
        <MdLink className="text-lg" />
        Visitar
      </Link>
      <DeleteButton handleDelete={() => handleDeleteClick(id)} />
    </div>
  </ListItem>
);
