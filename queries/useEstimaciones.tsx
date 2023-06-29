import { useQuery } from 'react-query';
import { ESTIMACION_LIST_KEY, ESTIMACIONES_URL } from '@/constants';
import { Catalog, Estimacion, ReporteEstimacion } from '@/interfaces';

export async function getEstimacionesList() {
  const res = await fetch(ESTIMACIONES_URL);
  const catalogs: Estimacion[] = await res.json();
  return catalogs;
}

export async function getEstimaciones(id: string) {
  const res = await fetch(`${ESTIMACIONES_URL}${id}`);
  const catalog: Estimacion = await res.json();
  return catalog;
}

export async function deleteEstimacion(id: string) {
  const res = await fetch(`${ESTIMACIONES_URL}${id}`, {
    method: 'DELETE',
  });
  const catalog: Catalog = await res.json();
  return catalog;
}

export async function createEstimacion(id: string) {
  const res = await fetch(`${ESTIMACIONES_URL}${id}`, {
    method: 'POST',
  });
  const estimacion: ReporteEstimacion = await res.json();
  return estimacion;
}

export function useEstimacionesList() {
  return useQuery<Estimacion[]>(ESTIMACION_LIST_KEY, getEstimacionesList, {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
}
