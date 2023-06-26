import { Concepto } from './concepto';

export interface Catalog {
  id: string;
  id_superintendente: string;
  fecha: string;
  nombre: string;
}

export interface CatalogoConceptos {
  catalogo: Catalog;
  conceptos: Concepto[];
}
