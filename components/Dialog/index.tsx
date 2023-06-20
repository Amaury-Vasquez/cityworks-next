import { FC, forwardRef } from 'react';
import { HiOutlineCheckCircle } from 'react-icons/hi';

interface DialogProps {
  text: string;
}

export const Dialog = forwardRef<HTMLDialogElement, DialogProps>(
  ({ text, ...props }, ref) => (
    <dialog ref={ref} {...props} className="modal">
      <form method="dialog" className="modal-box bg-dark text-center w-fit">
        <h3 className="font-bold text-lg text-primary">{text}</h3>
        <HiOutlineCheckCircle className="text-6xl text-primary m-auto mt-4" />
      </form>
    </dialog>
  )
);

Dialog.displayName = 'Dialog';
