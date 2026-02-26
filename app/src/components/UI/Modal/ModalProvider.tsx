import { createContext, useCallback, useContext, useState } from 'react';

interface ModalEntry {
  data: unknown;
  isOpen: boolean;
}

interface ModalContextType {
  modal: Record<string, ModalEntry>;
  openModal: (id: string, data: unknown) => void;
  closeModal: (id: string) => void;
}

const ModalContext = createContext<ModalContextType | null>(null);

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [modal, setModals] = useState<Record<string, ModalEntry>>({});

  const openModal = useCallback((id: string, data: unknown) => {
    setModals((prev) => ({
      ...prev,
      [id]: { data, isOpen: true },
    }));
  }, []);

  const closeModal = useCallback((id: string) => {
    setModals((prev) => ({
      ...prev,
      [id]: { data: null, isOpen: false },
    }));
  }, []);

  return (
    <ModalContext.Provider value={{ modal, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
}

export function useModal<T>(id: string) {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }

  const modal = context.modal[id];

  return {
    data: (modal?.data ?? null) as T | null,
    isOpen: modal?.isOpen ?? false,
    openModal: (data: T) => context.openModal(id, data),
    closeModal: () => context.closeModal(id),
  };
}
