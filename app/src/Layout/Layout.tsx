import { ReactElement } from 'react';
import { useModal } from '../components/UI/Modal/ModalProvider.tsx';

const Layout = ({ children }: { children: Array<ReactElement> }) => {
  const { isOpen } = useModal();

  return (
    <>
      <div
        className={`bg-primary p-5 transition-all duration-300 sm:p-20 ${isOpen ? 'brightness-25' : ''}`}
      >
        <div className={'gap-35 flex flex-col'}>{children}</div>
      </div>
    </>
  );
};

export default Layout;
