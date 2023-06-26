import { FC } from 'react';
import { Button } from '@/components';

interface NoConceptsProps {}

export const NoConcepts: FC<NoConceptsProps> = () => (
  <div className="hero h-[500px]">
    <div className="hero-content text-center">
      <div className="max-w-xl text-primary">
        <h1 className="text-5xl font-bold">No tienes ningun concepto!</h1>
        <p className="py-6">
          Parece que este catalogo no tiene conceptos. Puedes agregar uno
          haciendo click en el botón + de la barra de herramientas.
        </p>
      </div>
    </div>
  </div>
);
