import { FC } from 'react';
import { Breadcrumb, BreadcrumbItem } from '@/components';
import { PageLoader } from '@/layout';
import { useConceptList } from '@/queries';
import { Table } from './Table';

const CRUMBS: BreadcrumbItem[] = [
  {
    href: '/conceptos',
    text: 'Conceptos',
  },
  {
    href: '/conceptos/lista',
    text: 'Lista',
  },
];

export const ListaConceptos: FC = () => {
  const { data, isLoading, isFetching } = useConceptList();

  return (
    <div className="w-full flex flex-col space-y-8 px-4">
      <Breadcrumb crumbs={CRUMBS} />
      {isLoading || !data || isFetching ? (
        <PageLoader />
      ) : (
        <Table data={data ?? []} />
      )}
    </div>
  );
};
