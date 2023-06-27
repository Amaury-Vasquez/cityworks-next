import clsx from 'clsx';
import { FC, useState, useCallback, useMemo, ChangeEvent } from 'react';
import { MdOutlineDelete } from 'react-icons/md';
import { Button, IconButton } from '@/components';
import { Concepto } from '@/interfaces';

interface EditPanelProps {
  concepts: Concepto[];
  title: string;
  actionName: string;
  eliminate?: boolean;
  onSubmit: (concepts: Concepto[]) => void;
}

const EditPanel: FC<EditPanelProps> = ({
  concepts,
  onSubmit,
  title,
  actionName,
  eliminate = false,
}) => {
  const [selectedConcepts, setSelected] = useState<Concepto[]>([]);
  const [search, setSearch] = useState('');
  const [isConfirming, setConfirming] = useState(false);

  const handleSearch = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  }, []);

  const searchResults = useMemo(() => {
    if (!search) return concepts;
    return concepts.filter((concept) =>
      concept.nombre.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, concepts]);

  const generateConcepts = () => {
    const concepts: Concepto[] = selectedConcepts.map(
      ({ clave, cantidad, ...data }) => {
        const input = document.getElementById(
          cantidad + ':' + clave
        ) as HTMLInputElement;
        return { clave, cantidad: parseInt(input.value), ...data };
      }
    );
    return concepts;
  };

  return (
    <article
      className={clsx(
        'w-[650px] top-full mt-1 absolute h-fit overflow-y-auto py-4 right-0 bg-gray flex flex-col gap-4 items-center rounded-xl',
        'scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-secondary scrollbar-track-darker'
      )}
    >
      {isConfirming ? (
        <>
          <table className="table text-center">
            <thead>
              <tr className="text-primary border-neutral-600">
                <th>Nombre</th>
                <th>Precio</th>
                <th>Cantidad disponible</th>
                {!eliminate && <th>Cantidad a agregar</th>}
              </tr>
            </thead>
            <tbody className="text-white">
              {selectedConcepts.map(
                ({ nombre, precio, cantidad, clave }, idx) => (
                  <tr
                    key={'selected' + clave + idx}
                    className="border-neutral-600"
                  >
                    <td>{nombre}</td>
                    <td>{`$${precio}`}</td>
                    <td>{cantidad}</td>
                    {!eliminate && (
                      <td>
                        <input
                          type="text"
                          placeholder="Cantidad a agregar"
                          className="input input-sm rounded-md input-bordered input-accent w-full max-w-xs"
                          defaultValue={cantidad}
                          id={cantidad + ':' + clave}
                          pattern="[0-9]*"
                        />
                      </td>
                    )}
                    <td>
                      <IconButton
                        Icon={MdOutlineDelete}
                        iconStyle="text-error"
                        tooltip="Remover"
                        tooltipStyle="tooltip-error"
                        onClick={() => {
                          const newSelected = [...selectedConcepts];
                          newSelected.splice(idx, 1);
                          setSelected(() => newSelected);
                        }}
                      />
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
          <Button
            onClick={() => {
              onSubmit(eliminate ? selectedConcepts : generateConcepts());
              setConfirming(false);
            }}
          >
            {eliminate ? 'Eliminar conceptos' : 'Agregar conceptos'}
          </Button>
        </>
      ) : (
        <>
          <h3 className="text-lg font-semibold text-center text-primary">
            {title}
          </h3>
          <div className="flex flex-col w-full space-y-2">
            <div className="flex justify-between w-full px-4 items-center">
              <div className="form-control w-full max-w-xs">
                <label className="label label-text text-primary font-semibold">
                  Filtrar por nombre
                </label>
                <input
                  onChange={handleSearch}
                  type="text"
                  className="input input-sm input-bordered input-accent"
                />
              </div>
              <Button
                onClick={() => {
                  if (selectedConcepts.length === 0) onSubmit([]);
                  else setConfirming(true);
                }}
              >
                {actionName}
              </Button>
            </div>
            <table className="table text-center">
              <thead>
                <tr className="text-primary border-neutral-600">
                  <th>Nombre</th>
                  <th>Precio</th>
                  <th>Cantidad disponible</th>
                  <th>Agregar</th>
                </tr>
              </thead>
              <tbody className="text-white">
                {searchResults.map((concept, idx) => (
                  <tr key={concept.clave + idx} className="border-neutral-600">
                    <td>{concept.nombre}</td>
                    <td>{`$${concept.precio}`}</td>
                    <td>{concept.cantidad} </td>
                    <td>
                      <label>
                        <input
                          type="checkbox"
                          className="checkbox checkbox-primary border-neutral-500"
                          onClick={(e) => {
                            // @ts-ignore
                            if (e.target.checked)
                              setSelected((prev) => [...prev, concept]);
                            else {
                              setSelected((prev) =>
                                prev.filter((id) => id !== concept)
                              );
                            }
                          }}
                        />
                      </label>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </article>
  );
};

export default EditPanel;
