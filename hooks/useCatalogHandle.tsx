import { useRouter } from 'next/router';
import { useMemo, useState, useCallback } from 'react';
import {
  createManyConceptsInCatalog,
  deleteManyConceptsInCatalog,
  useConceptList,
} from '@/queries';
import { Concepto } from '@/interfaces';

export const useCatalogHandle = (
  currentConcepts: Concepto[],
  refetch: () => void
) => {
  const router = useRouter();
  const { id } = router.query;
  const { data } = useConceptList();
  const [isAddOpen, setAddOpen] = useState(false);
  const [isDeleteOpen, setDeleteOpen] = useState(false);

  const addConceptClick = () => {
    setAddOpen(!isAddOpen);
    setDeleteOpen(false);
  };

  const deleteConceptClick = () => {
    setDeleteOpen(!isDeleteOpen);
    setAddOpen(false);
  };

  const handleAddSubmit = useCallback(
    (concepts: Concepto[]) => {
      createManyConceptsInCatalog(id as string, concepts).then(() => {
        refetch();
        setDeleteOpen(false);
        setAddOpen(false);
      });
    },
    [id, refetch]
  );

  const handleDeleteSubmit = useCallback(
    (concepts: Concepto[]) => {
      deleteManyConceptsInCatalog(
        id as string,
        concepts.map(({ clave }) => clave)
      ).then(() => {
        refetch();
        setDeleteOpen(false);
        setAddOpen(false);
      });
    },
    [id, refetch]
  );

  const conceptList = useMemo(() => {
    if (data) {
      if (isAddOpen)
        return data.filter(
          ({ clave }) =>
            !currentConcepts.find(({ clave: clave2 }) => clave === clave2)
        );
      if (isDeleteOpen)
        return data.filter(({ clave }) =>
          currentConcepts.find(({ clave: clave2 }) => clave === clave2)
        );
    }
    return [];
  }, [currentConcepts, data, isAddOpen, isDeleteOpen]);

  return {
    conceptList,
    isDeleteOpen,
    isAddOpen,
    addConceptClick,
    deleteConceptClick,
    handleAddSubmit,
    handleDeleteSubmit,
  };
};
