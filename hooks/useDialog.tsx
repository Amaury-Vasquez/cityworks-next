import { useRef } from 'react';

export function useDialog() {
  const ref = useRef<HTMLDialogElement>(null);

  function open() {
    ref.current?.showModal();
  }

  function close() {
    ref.current?.close();
  }

  return { ref, open, close };
}
