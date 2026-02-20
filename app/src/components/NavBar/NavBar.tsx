import { RefObject, useEffect, useState } from 'react';

interface INavItem {
  name: string;
  id: string;
  isActive: boolean;
  isSelected: boolean;
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
      name: 'EXPERIENCE',
      id: 'experience',
      isActive: false,
      isSelected: false,
      ref: experienceRef,
    },
    {
      name: 'PROJECTS',
      id: 'projects',
      isActive: false,
      isSelected: false,
      ref: projectsRef,
    },
    {
      name: 'ABOUT ME',
      id: 'about-me',
      isActive: false,
      isSelected: false,
      ref: aboutMeRef,
    },
    {
      name: 'TECH STACK',
      id: 'tech-stack',
      isActive: false,
      isSelected: false,
      ref: techStackRef,
    },
    {
      name: 'CONTACT',
      id: 'contact',
      isActive: false,
      isSelected: false,
      ref: contactRef,
    },
  ]);

  useEffect(() => {
    // Track which sections are currently intersecting
    const intersectingSections = new Map<string, number>();

    const callback = (entries: Array<IntersectionObserverEntry>) => {
      entries.forEach((entry: IntersectionObserverEntry) => {
        if (entry.isIntersecting) {
          // Store the intersection ratio for this section
          intersectingSections.set(entry.target.id, entry.intersectionRatio);
        } else {
          // Remove sections that are no longer intersecting
          intersectingSections.delete(entry.target.id);
        }
      });

      // Find the section with the highest intersection ratio
      // OR the section that's closest to the top of the viewport
      let mostVisibleSection: string | null = null;
      let highestRatio = 0;
      let smallestTop = Infinity;

      intersectingSections.forEach((ratio, id) => {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();

          // Priority 1: Choose section with highest intersection ratio
          if (ratio > highestRatio) {
            highestRatio = ratio;
            mostVisibleSection = id;
            smallestTop = rect.top;
          }
          // Priority 2: If ratios are similar, choose the one closest to top
          else if (
            Math.abs(ratio - highestRatio) < 0.1 &&
            Math.abs(rect.top) < Math.abs(smallestTop)
          ) {
            mostVisibleSection = id;
            smallestTop = rect.top;
          }
        }
      });

      // Update navigation based on the most visible section
      if (mostVisibleSection) {
        setNavItemActiveAndSelectedItem(
          navItems.findIndex(
            (item) =>
              item.id.toLowerCase() === mostVisibleSection?.toLowerCase()
          )
        );
      }
    };

    const observer = new IntersectionObserver(callback, {
      root: null,
      // Multiple thresholds to get more granular updates
      threshold: [0, 0.25, 0.5, 0.75, 1.0],
      // Adjust root margin if navbar is fixed (e.g., '-80px 0px 0px 0px' for 80px navbar)
      rootMargin: '0px 0px 0px 0px',
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
      <div className={'top-15 fixed left-1/2 z-50 h-fit -translate-x-1/2'}>
        <div
          className={
            'bg-menu backdrop-grayscale-25 border-border flex items-center gap-5 text-ellipsis whitespace-nowrap rounded-2xl border px-5 py-3 text-[.55rem] font-semibold text-white shadow-lg backdrop-blur-lg sm:gap-10 sm:text-sm 2xl:text-sm'
          }
        >
          {navItems.map((item, index) => (
            <div
              key={index}
              className={'relative flex flex-col'}
              onClick={() => selectNavItem(index, item.ref as RefObject<HTMLElement>)}
              onMouseEnter={() => setNavItemActive(index)}
              onMouseLeave={() => setNavItemInactive()}
            >
              <div key={index} className={'cursor-pointer'}>
                {item.name}
              </div>
              <div
                className={`absolute -bottom-[3px] h-0.5 w-2/3 origin-center self-center bg-red-500 transition-all delay-200 duration-300 ease-in-out ${
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
