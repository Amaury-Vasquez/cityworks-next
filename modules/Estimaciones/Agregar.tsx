import clsx from 'clsx';
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
import { CreaEstimacion } from '@/interfaces';
import { createConcept } from '@/queries';
import styles from '@/styles/components/input.module.scss';

const CRUMB: BreadcrumbItem[] = [
  {
    href: '/estimaciones',
    text: 'Estimaciones',
  },
  {
    href: '/estimaciones/agregar',
    text: 'Agregar',
  },
];

export const AgregarEstimacion: FC = () => {
  const { register, handleSubmit, reset } = useForm<CreaEstimacion>();
  const dialogRef = useRef<HTMLDialogElement>(null);

  const onSubmit = async (data: CreaEstimacion) => {
    // try {
    //   await createConcept(data).then(() => {
    //     reset();
    //     if (dialogRef.current) {
    //       dialogRef.current?.showModal();
    //       setTimeout(() => {
    //         dialogRef.current?.close();
    //       }, 2000);
    //     }
    //   });
    // } catch (error) {
    //   console.error(error);
    // }
  };

  const textInputStyle = '!bg-gray !mt-2 rounded-sm !border-none';
  return (
    <div className="w-full space-y-8 h-fit p-4">
      <Breadcrumb crumbs={CRUMB} />
      <Title className="text-center !font-bold">Agregar Concepto</Title>
      <form className="w-full space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-4 gap-10">
          <TextInput
            className={textInputStyle}
            containerClassName="col-start-1 col-end-4"
            label="Nombre de estimacion"
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
        <div className="grid grid-cols-5 gap-10">
          <TextInput
            className={textInputStyle}
            label="Programado"
            id="programado"
            {...register('programado', { required: true })}
          />
          <TextInput
            className={textInputStyle}
            label="Acumulado"
            id="acumulado"
            pattern="[0-9]*"
            {...register('acumulado', { required: true })}
          />
          <TextInput
            className={textInputStyle}
            label="Total"
            id="total"
            pattern="[0-9]*"
            {...register('total', { required: true })}
          />
          <TextInput
            className={textInputStyle}
            label="Por ejecutar"
            id="faltante"
            pattern="[0-9]*"
            {...register('faltante', { required: true })}
          />
          <TextInput
            className={textInputStyle}
            label="Precio unitario"
            id="precio"
            pattern="[0-9]*"
            {...register('precio', { required: true })}
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
            Agregar estimacion
          </Button>
        </div>
      </form>
      <Dialog ref={dialogRef} text="Estimacion agregada correctamente!" />
    </div>
  );
};
