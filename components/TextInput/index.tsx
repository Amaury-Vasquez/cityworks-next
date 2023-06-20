import { HTMLProps, forwardRef } from 'react';
import clsx, { ClassValue } from 'clsx';
import styles from '@/styles/components/input.module.scss';

const { labelInput, textInput } = styles;

interface TextInputProps extends HTMLProps<HTMLInputElement> {
  id: string;
  label: string;
  className?: string;
  containerClassName?: ClassValue;
  unstyled?: boolean;
}

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  (
    { id, label, className, unstyled = false, containerClassName, ...props },
    ref
  ) => (
    <div className={clsx(labelInput, containerClassName)}>
      <label htmlFor={id}>{label}</label>
      <input
        className={clsx(!unstyled && textInput, className)}
        {...props}
        ref={ref}
      />
    </div>
  )
);

TextInput.displayName = 'TextInput';
