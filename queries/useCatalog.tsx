import { useQuery } from 'react-query';
import { CATALOG_CONCEPTS_URL, CATALOG_CONCEPTS_KEY } from '@/constants';
import { CatalogoConceptos } from '@/interfaces';

export async function getCatalogConcepts(id: string) {
  const res = await fetch(CATALOG_CONCEPTS_URL.replace('{id}', id));
  const concepts: CatalogoConceptos = await res.json();
  return concepts;
}

export function useCatalogConcepts(id: string) {
  return useQuery([CATALOG_CONCEPTS_KEY, id], () => getCatalogConcepts(id));
}
