import clsx from 'clsx';
import { FC } from 'react';
import { Concepto } from '@/interfaces';
import { TableHeader } from './TableHeader';

interface TableProps {
  data: Concepto[];
}

const TABLE_HEADERS: { text: string }[] = [
  { text: 'clave' },
  { text: 'nombre' },
  { text: 'descripcion' },
  { text: 'unidad' },
  { text: 'precio' },
  { text: 'cantidad' },
  { text: 'importe' },
];

export const Table: FC<TableProps> = ({ data }) => (
  <table className="w-full h-fit">
    <tbody>
      <tr>
        {TABLE_HEADERS.map(({ text }, idx) => (
          <TableHeader
            key={text + idx}
            lastItem={idx === TABLE_HEADERS.length - 1}
            text={text}
          />
        ))}
      </tr>
      {data.map((concepto, idx) => {
        const odd = idx % 2 === 1;

        return (
          <tr key={concepto.clave + idx}>
            <td
              className={clsx(
                'w-fit px-3 py-2 text-neutral-200 font-medium',
                odd && 'bg-theme-gray'
              )}
            >
              {concepto.clave}
            </td>
            <td
              className={clsx(
                'w-fit px-3 py-2 text-neutral-200 font-medium',
                odd && 'bg-theme-gray'
              )}
            >
              {concepto.nombre}
            </td>
            <td
              className={clsx(
                'px-3 py-2 text-neutral-200 font-medium w-full',
                odd && 'bg-theme-gray'
              )}
            >
              {concepto.descripcion || '-'}
            </td>
            <td
              className={clsx(
                'w-fit px-3 py-2 text-neutral-200 font-medium',
                odd && 'bg-theme-gray'
              )}
            >
              {concepto.unidad}
            </td>
            <td
              className={clsx(
                'w-fit px-3 py-2 text-neutral-200 font-medium',
                odd && 'bg-theme-gray'
              )}
            >
              {`$${concepto.precio}`}
            </td>
            <td
              className={clsx(
                'w-fit px-3 py-2 text-neutral-200 font-medium',
                odd && 'bg-theme-gray'
              )}
            >
              {concepto.cantidad}
            </td>
            <td
              className={clsx(
                'w-fit px-3 py-2 text-neutral-200 font-medium',
                odd && 'bg-theme-gray'
              )}
            >
              {`$${concepto.importe}`}
            </td>
          </tr>
        );
      })}
    </tbody>
  </table>
);
