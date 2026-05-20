'use client';

import { useContactModal } from '@/lib/contact-modal-context';
import type { ReactNode, CSSProperties } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}

export default function ModalTriggerButton({ children, className, style }: Props) {
  const { open } = useContactModal();
  return (
    <button onClick={open} className={className} style={style}>
      {children}
    </button>
  );
}
