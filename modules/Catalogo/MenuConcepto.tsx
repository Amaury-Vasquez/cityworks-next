import { FC } from 'react';
import { MdAdd, MdOutlineEdit, MdDeleteOutline } from 'react-icons/md';
import { IconButton } from '@/components';
import { useCatalogHandle } from '@/hooks';
import { Concepto } from '@/interfaces';

export interface MenuConceptoProps {
  refetch: () => void;
  currentConcepts: Concepto[];
}

export const MenuConcepto: FC<MenuConceptoProps> = ({
  currentConcepts,
  refetch,
}) => {
  const { concepList, isLoading, showList, addConceptClick } =
    useCatalogHandle(refetch);

  return (
    <div className="w-fit p-2 flex gap-4">
      <IconButton Icon={MdAdd} onClick={addConceptClick} />
      <IconButton Icon={MdOutlineEdit} />
      <IconButton Icon={MdDeleteOutline} />
    </div>
  );
};
