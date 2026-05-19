'use client';

import { createContext, useContext, useState } from 'react';

type ContactModalCtx = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
};

const ContactModalContext = createContext<ContactModalCtx>({
  isOpen: false,
  open: () => {},
  close: () => {},
});

export function ContactModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <ContactModalContext.Provider value={{ isOpen, open: () => setIsOpen(true), close: () => setIsOpen(false) }}>
      {children}
    </ContactModalContext.Provider>
  );
}

export const useContactModal = () => useContext(ContactModalContext);
