import { HTMLProps, forwardRef } from 'react';
import clsx, { ClassValue } from 'clsx';
import styles from '@/styles/components/input.module.scss';

const { labelInput, textInput } = styles;

interface TextInputProps extends HTMLProps<HTMLInputElement> {
  id: string;
  label: string;
  className?: string;
  unstyled?: boolean;
}

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ id, label, className, unstyled = false, ...props }, ref) => (
    <div className={labelInput}>
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
