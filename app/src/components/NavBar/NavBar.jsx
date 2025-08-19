const NavBar = () => {
  return (
    <>
      <div className={'fixed left-1/2 my-10 -translate-x-1/2'}>
        <div
          className={
            'bg-menu backdrop-grayscale-25 flex items-center gap-10 truncate rounded-xl border border-[rgba(62,71,137,0.3)] px-5 py-2 text-xs font-light text-white'
          }
        >
          <div>SKILL SET</div>
          <div>EXPERIENCE</div>
          <div>PROJECTS</div>
          <div>ABOUT ME</div>
          <div>CONTACT</div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
