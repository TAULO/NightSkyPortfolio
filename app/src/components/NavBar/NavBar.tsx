import { useState } from 'react';

interface INavItem {
  name: string;
  isActive: boolean;
  isSelected: boolean;
}

const NavBar = () => {
  const [navItems, setNavItems] = useState<Array<INavItem>>([
    {
      name: 'TECH STACK',
      isActive: false,
      isSelected: false,
    },
    {
      name: 'EXPERIENCE',
      isActive: false,
      isSelected: false,
    },
    {
      name: 'PROJECTS',
      isActive: false,
      isSelected: false,
    },
    {
      name: 'ABOUT ME',
      isActive: false,
      isSelected: false,
    },
    {
      name: 'CONTACT',
      isActive: false,
      isSelected: false,
    },
  ]);

  function selectNavItem(index: number) {
    setNavItems((prev) =>
      prev.map((item, idx) =>
        idx === index
          ? { ...item, isSelected: true }
          : { ...item, isSelected: false }
      )
    );
  }

  function setNavItemActive(index: number) {
    setNavItems((prev) =>
      prev.map((item, idx) =>
        idx === index
          ? { ...item, isActive: true }
          : { ...item, isActive: false }
      )
    );
  }

  function setNavItemInactive() {
    setNavItems((prev) => prev.map((item) => ({ ...item, isActive: false })));
  }

  return (
    <>
      <div
        className={
          'sm:top-15 fixed bottom-10 left-1/2 z-10 h-fit -translate-x-1/2'
        }
      >
        <div
          className={
            'bg-menu backdrop-grayscale-25 border-border flex items-center gap-5 text-ellipsis whitespace-nowrap rounded-2xl border px-5 py-3 text-[.55rem] font-semibold text-white shadow-lg backdrop-blur-lg sm:gap-10 sm:text-sm 2xl:text-sm'
          }
        >
          {navItems.map((item, index) => (
            <div
              key={index}
              className={'relative flex flex-col'}
              onClick={() => selectNavItem(index)}
              onMouseEnter={() => setNavItemActive(index)}
              onMouseLeave={() => setNavItemInactive()}
            >
              <div key={index} className={'cursor-pointer'}>
                {item.name}
              </div>
              <div
                className={`absolute -bottom-[3px] h-0.5 w-2/3 origin-center self-center bg-red-500 transition-all duration-300 ease-in-out ${
                  item.isActive || item.isSelected ? 'scale-x-100' : 'scale-x-0'
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default NavBar;
