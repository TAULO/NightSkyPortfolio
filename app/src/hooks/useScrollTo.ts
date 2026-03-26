import { RefObject } from 'react';

export default function useScrollTo() {
  return (element: RefObject<HTMLElement | null>) => {
    if (!element.current) return;

    const offset = 40;
    window.scrollTo({
      top: element.current.offsetTop - offset,
      behavior: 'smooth',
    });
  };
}