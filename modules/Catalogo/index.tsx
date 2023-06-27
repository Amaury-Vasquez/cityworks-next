import { FC } from 'react';
import { useRouter } from 'next/router';
import { Breadcrumb, BreadcrumbItem } from '@/components';
import { Table } from '../Concepto/Lista/Table';
import { PageLoader } from '@/layout';
import { useCatalogConcepts } from '@/queries';
import { NoConcepts } from './NoConcepts';
import { MenuCatalogo } from './MenuCatalogo';

const CRUMBS: BreadcrumbItem[] = [
  {
    href: '/conceptos/',
    text: 'Conceptos',
  },
  {
    href: '/conceptos/catalogos',
    text: 'Lista de catalogos',
  },
];

export const Catalogo: FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data, isLoading, isFetching, refetch } = useCatalogConcepts(
    id as string
  );

  const crumbs = data?.catalogo
    ? [...CRUMBS, { text: data.catalogo.nombre }]
    : CRUMBS;

  return (
    <div className="w-full flex flex-col space-y-4">
      <div className="w-full flex justify-between items-center">
        <Breadcrumb crumbs={crumbs} />
        <MenuCatalogo
          currentConcepts={data?.conceptos ?? []}
          refetch={refetch}
        />
      </div>
      {isLoading || isFetching ? (
        <PageLoader />
      ) : (
        <div className="w-full flex flex-col space-y-10 animate-fadeIn">
          {data?.conceptos ? <Table data={data.conceptos} /> : <NoConcepts />}
        </div>
      )}
    </div>
  );
};
