import { FC, useRef } from 'react';
import { useForm } from 'react-hook-form';
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Dialog,
  TextInput,
  Title,
} from '@/components';
import { CreaConcepto } from '@/interfaces';
import { createConcept } from '@/queries';
import styles from '@/styles/components/input.module.scss';

const CRUMB: BreadcrumbItem[] = [
  {
    href: '/conceptos',
    text: 'Conceptos',
  },
  {
    href: '/conceptos/agregar',
    text: 'Agregar',
  },
];

export const AgregarConcepto: FC = () => {
  const { register, handleSubmit, reset } = useForm<CreaConcepto>();
  const dialogRef = useRef<HTMLDialogElement>(null);

  const onSubmit = async (data: CreaConcepto) => {
    try {
      await createConcept(data).then(() => {
        reset();
        if (dialogRef.current) {
          dialogRef.current?.showModal();
          setTimeout(() => {
            dialogRef.current?.close();
          }, 2000);
        }
      });
    } catch (error) {
      console.error(error);
    }
  };

  const textInputStyle = '!bg-gray !mt-2 rounded-sm !border-none';
  return (
    <div className="w-full space-y-8 h-fit p-4">
      <Breadcrumb crumbs={CRUMB} />
      <Title className="text-center !font-bold">Agregar Concepto</Title>
      <form className="w-full space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-2 gap-10">
          <TextInput
            className={textInputStyle}
            label="Nombre de concepto"
            id="nombre"
            {...register('nombre', { required: true })}
          />
          <TextInput
            className={textInputStyle}
            label="Unidad"
            id="unidad"
            {...register('unidad', { required: true })}
          />
        </div>
        <div className="grid grid-cols-2 gap-10">
          <TextInput
            className={textInputStyle}
            label="Precio unitario"
            id="precio"
            pattern="[0-9]+(\.[0-9][0-9]+)"
            {...register('precio', { required: true })}
          />
          <TextInput
            className={textInputStyle}
            label="Cantidad"
            id="cantidad"
            pattern="[0-9]*"
            {...register('cantidad', { required: true })}
          />
        </div>
        <div className={styles.labelInput}>
          <label className="mb-2" htmlFor="descripcion">
            Descripción
          </label>
          <textarea
            id="descripcion"
            className="w-full min-h-[100px] bg-gray rounded-sm border-none p-3 outline-none text-primary pt-1 pb-3 px-2 text-base font-semibold"
            {...register('descripcion', { required: false })}
          />
        </div>
        <div className="flex w-full justify-center py-4">
          <Button variant="gray" type="submit">
            Agregar concepto
          </Button>
        </div>
      </form>
      <Dialog ref={dialogRef} text="Concepto agregado correctamente!" />
    </div>
  );
};
