import { useQuery } from 'react-query';
import {
  CATALOG_CONCEPTS_URL,
  CATALOG_URL,
  CATALOG_CONCEPTS_KEY,
  CATALOG_DELETE_CONCEPT_URL,
} from '@/constants';
import { CatalogoConceptos, Concepto } from '@/interfaces';

export async function getCatalogConcepts(id: string) {
  const res = await fetch(CATALOG_CONCEPTS_URL.replace('{id}', id));
  const concepts: CatalogoConceptos = await res.json();
  return concepts;
}

export async function createConceptInCatalog(
  id: string,
  { clave, cantidad }: Concepto
) {
  const res = await fetch(CATALOG_URL.replace('{id}', id), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ clave, cantidad }),
  });
  const concepts: CatalogoConceptos = await res.json();
  return concepts;
}

export async function createManyConceptsInCatalog(
  id: string,
  concepts: Concepto[]
) {
  return await Promise.all(
    concepts.map(async (concept) => await createConceptInCatalog(id, concept))
  );
}

export async function deleteConceptInCatalog(id: string, clave: string) {
  return await fetch(
    CATALOG_DELETE_CONCEPT_URL.replace('{id}', id).replace('{clave}', clave),
    {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
}

export async function deleteManyConceptsInCatalog(
  id: string,
  claves: string[]
) {
  return await Promise.all(
    claves.map(async (clave) => await deleteConceptInCatalog(id, clave))
  );
}

export function useCatalogConcepts(id: string) {
  return useQuery([CATALOG_CONCEPTS_KEY, id], () => getCatalogConcepts(id), {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
}
