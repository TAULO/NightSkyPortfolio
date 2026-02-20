import { IProject } from '../../Sections/Projects/project.data.ts';
import { createContext, useContext, useState } from 'react';

interface ModalContextType {
  project: IProject | null;
  isOpen: boolean;
  openModal: (project: IProject) => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextType | null>(null);

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [project, setProject] = useState<IProject | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  function openModal(project: IProject) {
    setProject(project);
    setIsOpen(true);
  }

  function closeModal() {
    setProject(null);
    setIsOpen(false);
  }

  return (
    <ModalContext.Provider value={{ project, isOpen, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
}