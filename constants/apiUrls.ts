const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

// conceptos
export const CONCEPT_LIST_KEY = 'concept-list';
export const CONCEPT_URL = `${BASE_URL}/concepts/`;

// catalogos
export const CATALOG_LIST_KEY = 'catalog-list';
export const CATALOGS_URL = `${BASE_URL}/catalogs/`;
export const CATALOG_URL = `${BASE_URL}/catalogs/{id}`;
export const CATALOG_CONCEPTS_URL = `${BASE_URL}/catalogs/{id}/items`;
export const CATALOG_DELETE_CONCEPT_URL = `${BASE_URL}/catalogs/{id}/{clave}`;
export const CATALOG_CONCEPTS_KEY = 'catalog-concepts';
