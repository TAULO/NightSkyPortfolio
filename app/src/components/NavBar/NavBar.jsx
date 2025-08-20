import { useState } from 'react';

const NavBar = () => {
  const [navItems, setNavItems] = useState([
    {
      name: 'Skill Set',
      isActive: false,
    },
    {
      name: 'Experience',
      isActive: false,
    },
    {
      name: 'Projects',
      isActive: false,
    },
    {
      name: 'About Me',
      isActive: false,
    },
    {
      name: 'Contact',
      isActive: false,
    },
  ]);

  return (
    <>
      <div className={'sm:my-15 fixed left-1/2 my-10 -translate-x-1/2'}>
        <div
          className={
            'bg-menu backdrop-grayscale-25 flex items-center gap-5 text-ellipsis whitespace-nowrap rounded-xl border border-[rgba(62,71,137,0.3)] px-5 py-2 text-[.55rem] font-semibold text-white sm:gap-10 sm:text-sm 2xl:text-sm'
          }
        >
          {navItems.map((item, index) => (
            <div
              key={index}
              className={'relative flex flex-col'}
              onClick={() =>
                setNavItems((prev) =>
                  prev.map((item, idx) =>
                    idx === index
                      ? { ...item, isActive: true }
                      : { ...item, isActive: false }
                  )
                )
              }
            >
              <div key={index} className={'cursor-pointer'}>
                {item.name}
              </div>
              {item.isActive && (
                <div
                  className={
                    'absolute -bottom-[4px] h-0.5 w-1/2 self-center bg-red-500'
                  }
                ></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default NavBar;
