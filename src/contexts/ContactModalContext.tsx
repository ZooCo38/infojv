'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

/**
 * Contact modal context value interface
 * Provides global state management for contact modal visibility
 */
interface ContactModalContextValue {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const ContactModalContext = createContext<ContactModalContextValue | null>(null);

interface ContactModalProviderProps {
  children: ReactNode;
}

/**
 * Provider component for contact modal state
 * Wrap the app with this provider to enable global access to modal controls
 */
export function ContactModalProvider({ children }: ContactModalProviderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <ContactModalContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
    </ContactModalContext.Provider>
  );
}

/**
 * Custom hook to access contact modal context
 * @throws Error if used outside ContactModalProvider
 */
export function useContactModal(): ContactModalContextValue {
  const context = useContext(ContactModalContext);
  if (!context) {
    throw new Error('useContactModal must be used within ContactModalProvider');
  }
  return context;
}
