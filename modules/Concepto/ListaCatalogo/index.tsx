import { FC, useCallback, useState } from 'react';
import {
  Alert,
  Breadcrumb,
  BreadcrumbItem,
  Dialog,
  Link,
  Button,
  ListItem,
} from '@/components';
import { useDialog } from '@/hooks';
import { AlertObject, AlertType } from '@/interfaces';
import { PageLoader } from '@/layout';
import { useCatalogList, deleteCatalog } from '@/queries';
import { CatalogItem } from './CatalogItem';

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

export const ListaCatalogos: FC = () => {
  const {
    data: catalogList,
    isLoading,
    refetch,
    isFetching,
  } = useCatalogList();
  const { ref, open, close } = useDialog();
  const [idToDelete, setIdToDelete] = useState<string | null>('');
  const [alert, setAlert] = useState<AlertObject | null>(null);

  const handleDeleteClick = useCallback(
    (id: string) => {
      open();
      setIdToDelete(id);
    },
    [setIdToDelete, open]
  );

  const handleCancel = () => {
    close();
    setIdToDelete(null);
  };

  const handleDelete = () => {
    const alertUser = (type: AlertType, message: string) => {
      setAlert({ type, message });
      setTimeout(() => setAlert(null), 3000);
    };

    if (idToDelete) {
      deleteCatalog(idToDelete)
        .then(() => {
          refetch();
          close();
          setIdToDelete(null);
          alertUser('success', 'Catalogo eliminado');
        })
        .catch(() => {
          close();
          alertUser('error', 'No se pudo eliminar el catalogo');
        });
    }
  };

  return (
    <div className="w-full flex flex-col space-y-4">
      <div className="w-full text-left">
        <Breadcrumb crumbs={CRUMBS} />
      </div>
      {isLoading || !catalogList || isFetching ? (
        <PageLoader />
      ) : (
        <>
          {catalogList?.map((data, idx) => (
            <CatalogItem
              key={data.id + idx}
              {...data}
              handleDeleteClick={handleDeleteClick}
            />
          ))}
          <Dialog ref={ref}>
            <article className="flex flex-col items-center justify-center gap-4">
              <h3 className="font-bold text-xl text-primary"> ¡Alerta! </h3>
              <p className="text-primary font-semibold">
                ¿Estas seguro que deseas eliminar este catalogo? Esta acción no
                se puede deshacer.
              </p>
              <div className="flex gap-4 w-full">
                <Button
                  className="!w-full"
                  variant="gray"
                  onClick={handleCancel}
                >
                  Cancelar
                </Button>
                <Button
                  className="!text-error !w-full border border-solid border-error"
                  onClick={handleDelete}
                >
                  Eliminar
                </Button>
              </div>
            </article>
          </Dialog>
          {alert && <Alert type={alert.type} text={alert.message} />}
        </>
      )}
    </div>
  );
};
