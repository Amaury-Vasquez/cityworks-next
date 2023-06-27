import clsx from 'clsx';
import { FC } from 'react';
import { MdAdd, MdDeleteOutline, MdOutlineRestartAlt } from 'react-icons/md';
import { IconButton } from '@/components';
import { useCatalogHandle, useDialog } from '@/hooks';
import { Concepto } from '@/interfaces';
import dynamic from 'next/dynamic';

const EditPanel = dynamic(() => import('./EditPanel'));

export interface MenuCatalogoProps {
  refetch: () => void;
  currentConcepts: Concepto[];
}

export const MenuCatalogo: FC<MenuCatalogoProps> = ({
  currentConcepts,
  refetch,
}) => {
  const {
    conceptList,
    isAddOpen,
    isDeleteOpen,
    addConceptClick,
    deleteConceptClick,
    handleAddSubmit,
    handleDeleteSubmit,
  } = useCatalogHandle(currentConcepts, refetch);

  return (
    <div className="w-fit p-2 flex gap-4">
      <IconButton
        Icon={MdOutlineRestartAlt}
        onClick={refetch}
        tooltip="Recargar catálogo"
      />
      <div className="relative h-fit w-fit">
        <IconButton
          Icon={MdAdd}
          onClick={addConceptClick}
          tooltip="Agregar concepto"
        />
        {isAddOpen && (
          <EditPanel
            concepts={conceptList ?? []}
            actionName="Agregar conceptos"
            title="Selecciona los conceptos a agregar"
            onSubmit={handleAddSubmit}
          />
        )}
      </div>
      <div className="relative h-fit w-fit">
        <IconButton
          Icon={MdDeleteOutline}
          onClick={deleteConceptClick}
          tooltip="Eliminar concepto"
        />
        {isDeleteOpen && (
          <EditPanel
            concepts={conceptList ?? []}
            actionName="Eliminar conceptos"
            title="Selecciona los conceptos a eliminar"
            onSubmit={handleDeleteSubmit}
            eliminate
          />
        )}
      </div>
    </div>
  );
};
