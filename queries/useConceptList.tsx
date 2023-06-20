import { useQuery } from 'react-query';
import { CONCEPT_LIST_KEY, CONCEPT_URL } from '@/constants';
import { Concepto, CreaConcepto } from '@/interfaces';

export async function createConcept(concepto: CreaConcepto) {
  const response = await fetch(CONCEPT_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(concepto),
  });
  return await response.json();
}

export async function getConceptList() {
  const response = await fetch(CONCEPT_URL);
  return await response.json();
}

export const useConceptList = () => {
  return useQuery<Concepto[]>([CONCEPT_LIST_KEY], getConceptList, {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
};
