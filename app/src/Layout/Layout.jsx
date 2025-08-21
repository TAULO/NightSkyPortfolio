const Layout = ({children}) => {
  return (
    <>
      <div className={'bg-primary p-5 sm:p-20'}>
        <div className={'flex flex-col gap-35'}>
          {children}
        </div>
      </div>
    </>
  );
}

export default Layout;