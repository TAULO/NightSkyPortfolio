const NavBar = () => {
  return (
    <>
      <div className={"fixed my-10 left-1/2 -translate-x-1/2"}>
        <div
          className={
            "flex bg-menu rounded-xl gap-10 items-center text-white font-light text-xs px-5 py-2 border border-[rgba(62,71,137,0.3)] backdrop-grayscale-25 truncate"
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
