import { RefObject, useEffect, useRef, useState } from 'react';
import { useModal } from '../UI/Modal/ModalProvider.tsx';
import useScrollTo from '../../hooks/useScrollTo.ts';
import MissionControl from '../UI/MissionControl';

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

const scrollTo = useScrollTo();

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

  const [showNav, setShowNav] = useState(false);
  const isScrollingRef = useRef(false);

  const { isOpen: isProjectOpen } = useModal('project-modal');
  const { isOpen: isFooOpen } = useModal('github-modal');
  const isAnyModalOpen = isProjectOpen || isFooOpen;

  useEffect(() => {
    // Track which sections are currently intersecting
    const intersectingSections = new Map<string, number>();

    const callback = (entries: Array<IntersectionObserverEntry>) => {
      if (isScrollingRef.current) return;

      entries.forEach((entry: IntersectionObserverEntry) => {
        if (entry.intersectionRatio > 0) {
          intersectingSections.set(entry.target.id, entry.intersectionRatio);
        } else {
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
      threshold: [0, 0.25, 0.5, 0.75, 1.0],
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

  useEffect(() => {
    setTimeout(() => {
      setShowNav(true);
    }, 1500);
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
      // Disable observer during programmatic scroll
      isScrollingRef.current = true;

      // Listen for scroll end to re-enable the observer
      let scrollTimeout: ReturnType<typeof setTimeout>;
      const onScroll = () => {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
          isScrollingRef.current = false;
          window.removeEventListener('scroll', onScroll);
        }, 100); // 100ms after last scroll event = scroll finished
      };
      window.addEventListener('scroll', onScroll);

      scrollTo(element);
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
        className={`lg:top-15 group fixed bottom-5 left-1/2 z-50 h-fit -translate-x-1/2 scale-90 transition-all duration-500 ease-out sm:scale-100 ${
          showNav && !isAnyModalOpen
            ? 'animate-slide-up'
            : 'translate-y-4 opacity-0 sm:-translate-y-4'
        }`}
      >
        <div
          className={
            'absolute -right-[200px] top-0 z-50 hidden opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:delay-500 lg:block'
          }
        >
          <MissionControl />
        </div>
        <div
          className={
            'bg-menu backdrop-grayscale-25 hover:border-border-hover border-border flex items-center gap-5 text-ellipsis whitespace-nowrap rounded-2xl border px-5 py-3 text-[.55rem] font-semibold text-white shadow-lg backdrop-blur-lg transition-colors duration-300 sm:gap-10 sm:text-sm 2xl:text-sm'
          }
        >
          {navItems.map((item, index) => (
            <div
              key={index}
              className={'relative flex flex-col'}
              onClick={() =>
                selectNavItem(index, item.ref as RefObject<HTMLElement>)
              }
              onMouseEnter={() => setNavItemActive(index)}
              onMouseLeave={() => setNavItemInactive()}
            >
              <div key={index} className={'cursor-pointer'}>
                {item.name}
              </div>
              <div
                className={`bg-tertiary absolute -bottom-[3px] h-0.5 w-2/3 origin-center self-center transition-all duration-300 ease-in-out ${
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
