import { RefObject, useEffect, useState } from 'react';

interface INavItem {
  name: string;
  isActive: boolean;
  isSelected: boolean;
  index: number;
  ref?: RefObject<HTMLElement | null>;
}

interface INavBarProps {
  techStackRef: RefObject<HTMLElement | null>;
  experienceRef: RefObject<HTMLElement | null>;
  projectsRef: RefObject<HTMLElement | null>;
  aboutMeRef: RefObject<HTMLElement | null>;
  contactRef: RefObject<HTMLElement | null>;
}

function scrollIntoView(element: RefObject<HTMLElement>) {
  const offset = 40;
  window.scrollTo({
    top: element.current.offsetTop - offset,
    behavior: 'smooth',
  });
}

const NavBar = ({
  techStackRef,
  experienceRef,
  aboutMeRef,
  projectsRef,
  contactRef,
}: INavBarProps) => {
  const [navItems, setNavItems] = useState<Array<INavItem>>([
    {
      name: 'TECH STACK',
      isActive: false,
      isSelected: false,
      index: 0,
      ref: techStackRef,
    },
    {
      name: 'EXPERIENCE',
      isActive: false,
      isSelected: false,
      index: 1,
      ref: experienceRef,
    },
    {
      name: 'PROJECTS',
      isActive: false,
      isSelected: false,
      index: 2,
      ref: projectsRef,
    },
    {
      name: 'ABOUT ME',
      isActive: false,
      isSelected: false,
      index: 3,
      ref: aboutMeRef,
    },
    {
      name: 'CONTACT',
      isActive: false,
      isSelected: false,
      index: 4,
      ref: contactRef,
    },
  ]);

  useEffect(() => {
    const callback = (entries: Array<IntersectionObserverEntry>) => {
      entries.forEach((entry: IntersectionObserverEntry) => {
        if (entry.isIntersecting) {
          switch (entry.target.id) {
            case 'tech-stack':
              setNavItemActiveAndSelectedItem(0);
              break;
            case 'experience':
              setNavItemActiveAndSelectedItem(1);
              break;
            case 'projects':
              setNavItemActiveAndSelectedItem(2);
              break;
            case 'about-me':
              setNavItemActiveAndSelectedItem(3);
              break;
            case 'contact':
              setNavItemActiveAndSelectedItem(4);
              break;
          }
        }
      });
    };

    const observer = new IntersectionObserver(callback, {
      root: null,
      rootMargin: '-200px 0px',
      threshold: 0.5,
    });

    // Observe all sections
    [techStackRef, experienceRef, projectsRef, aboutMeRef, contactRef].forEach(
      (ref) => {
        if (ref.current) {
          observer.observe(ref.current);
        }
      }
    );

    return () => observer.disconnect();
  }, []);

  function selectNavItem(
    index: number,
    element?: RefObject<HTMLElement> | null
  ) {
    setNavItems((prev) =>
      prev.map((item, idx) =>
        idx === index
          ? { ...item, isSelected: true }
          : { ...item, isSelected: false }
      )
    );

    if (element?.current) {
      scrollIntoView(element);
    }
  }

  function setNavItemActiveAndSelectedItem(index: number) {
    setNavItems((prev) =>
      prev.map((item, idx) =>
        idx === index
          ? { ...item, isActive: true, isSelected: true }
          : { ...item, isActive: false, isSelected: false }
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
          'sm:top-15 fixed bottom-10 left-1/2 z-50 h-fit -translate-x-1/2'
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
              onClick={() => selectNavItem(index, item.ref)}
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
