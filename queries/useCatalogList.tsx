import { useQuery } from 'react-query';
import { CATALOG_LIST_KEY, CATALOGS_URL } from '@/constants';
import { Catalog } from '@/interfaces';

export async function getCatalogList() {
  const res = await fetch(CATALOGS_URL);
  const catalogs: Catalog[] = await res.json();
  return catalogs;
}

export async function getCatalog(id: string) {
  const res = await fetch(`${CATALOGS_URL}${id}`);
  const catalog: Catalog = await res.json();
  return catalog;
}

export async function deleteCatalog(id: string) {
  const res = await fetch(`${CATALOGS_URL}${id}`, {
    method: 'DELETE',
  });
  const catalog: Catalog = await res.json();
  return catalog;
}

export function useCatalogList() {
  return useQuery(CATALOG_LIST_KEY, getCatalogList, {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
}
