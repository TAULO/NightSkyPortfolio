import { createPortal } from 'react-dom';
import { useModal } from './ModalProvider.tsx';

function ModalContainer({
  children,
  modalId,
}: {
  children: React.ReactNode;
  modalId: string;
}) {
  const { isOpen, closeModal } = useModal<unknown>(modalId);

  if (!isOpen) return null;

  return createPortal(
    <div className={'z-999 fixed inset-0'} onClick={closeModal}>
      <div
        id={'modal-component'}
        className={`max-h-10/12 bg-primary border-border border-1 sm:max-w-10/12 xl:max-w-6/12 fixed bottom-0 grid w-full overflow-auto rounded-t-3xl p-4 shadow-lg sm:left-1/2 sm:top-1/2 sm:h-fit sm:-translate-x-1/2 sm:-translate-y-1/2 sm:rounded-3xl sm:p-8 sm:pt-12 ${
          isOpen
            ? 'animate-slide-up sm:animate-fade'
            : 'animate-slide-down sm:animate-fade'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className={
            'bg-secondary mb-4 mt-2 h-3 w-32 justify-self-center rounded-full sm:hidden'
          }
        ></div>
        <button
          className={
            'absolute right-4 top-4 hidden text-gray-400 transition-colors duration-300 hover:cursor-pointer hover:text-white sm:block'
          }
          onClick={closeModal}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-x"
            aria-hidden="true"
          >
            <path d="M18 6 6 18"></path>
            <path d="m6 6 12 12"></path>
          </svg>
        </button>
        {children}
      </div>
    </div>,
    document.body
  );
}

export default ModalContainer;
