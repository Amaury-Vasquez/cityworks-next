import { useState } from 'react';
import { useConceptList } from '@/queries';

export const useCatalogHandle = (refetch: () => void) => {
  const { data: concepList, isLoading } = useConceptList();
  const [showList, setShowList] = useState<boolean>(false);

  function addConceptClick() {
    setShowList(true);
  }

  return {
    concepList,
    isLoading,
    showList,
    addConceptClick,
  };
};
