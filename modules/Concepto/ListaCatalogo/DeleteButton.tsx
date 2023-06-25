import { FC } from 'react';
import { MdDeleteOutline } from 'react-icons/md';
import { Button } from '@/components';

interface DeleteButtonProps {
  handleDelete: () => void;
}

export const DeleteButton: FC<DeleteButtonProps> = ({ handleDelete }) => (
  <Button
    className="!text-error flex items-center justify-center gap-2"
    onClick={handleDelete}
  >
    <MdDeleteOutline className="text-lg" />
    Eliminar
  </Button>
);
