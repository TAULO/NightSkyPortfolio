import { ReactElement } from 'react';

const Layout = ({ children }: { children: Array<ReactElement> }) => {
  return (
    <>
      <div className={'bg-primary p-5 sm:p-20'}>
        <div className={'gap-35 flex flex-col'}>{children}</div>
      </div>
    </>
  );
};

export default Layout;
