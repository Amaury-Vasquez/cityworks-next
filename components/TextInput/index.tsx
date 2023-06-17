import { HTMLProps, forwardRef } from "react";
import styles from "@/styles/components/input.module.scss";

const { labelInput, textInput } = styles;

interface TextInputProps extends HTMLProps<HTMLInputElement> {
  id: string;
  label: string;
}

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  (props, ref) => (
    <div className={labelInput}>
      <label htmlFor={props.id}>{props.label}</label>
      <input className={textInput} {...props} ref={ref} />
    </div>
  )
);

TextInput.displayName = "TextInput";
