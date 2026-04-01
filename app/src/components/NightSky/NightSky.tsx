import { ReactElement, useEffect, useRef, useState } from 'react';
import Star from './Star.tsx';
import ShootingStar from './ShootingStar.tsx';
import { useModal } from '../UI/Modal/ModalProvider.tsx';

const STARS_COUNT = 400;
const SHOOTING_STARS_COUNT = 5;

let _setShootingStarsCount: ((count: number) => void) | null = null;

export const setShootingStars = (count: number) => {
  _setShootingStarsCount?.(count);
};

export const meteoriteShower = () => {
  const count = 1000;

  setShootingStars(count);

  const steps = 8;
  const interval = 2000;
  const decrement = (count - SHOOTING_STARS_COUNT) / steps;

  for (let i = 1; i <= steps; i++) {
    setTimeout(() => {
      const next = Math.round(count - decrement * i);
      setShootingStars(Math.max(next, SHOOTING_STARS_COUNT));
    }, interval * i);
  }
};

const NightSky = ({ children }: { children: Array<ReactElement> }) => {
  const { isOpen: isProjectOpen } = useModal('project-modal');
  const { isOpen: isFooOpen } = useModal('github-modal');
  const isAnyModalOpen = isProjectOpen || isFooOpen;

  const starContainerRef = useRef<HTMLDivElement | null>(null);
  const [stars, setStars] = useState<Array<ReactElement>>([]);
  const [shootingStarsCount, setShootingStarsCount] =
    useState(SHOOTING_STARS_COUNT);
  const [maxCount, setMaxCount] = useState(SHOOTING_STARS_COUNT);

  useEffect(() => {
    _setShootingStarsCount = (count: number) => {
      setShootingStarsCount(count);
      setMaxCount((prev) => Math.max(prev, count));
    };
    return () => {
      _setShootingStarsCount = null;
    };
  }, []);

  useEffect(() => {
    if (starContainerRef.current) {
      setStars(
        Array.from({ length: STARS_COUNT }).map((_, i) => (
          <Star key={i} starContainerRef={starContainerRef.current} />
        ))
      );
    }
  }, []);

  return (
    <div
      className={`relative bg-[#040615] px-5 transition-all duration-300 sm:px-20 ${isAnyModalOpen ? 'brightness-25' : ''}`}
      ref={starContainerRef}
    >
      <div className={'mx-auto max-w-[1200px]'}>
        <div className={'sm:gap-42 flex flex-col gap-24'}>{children}</div>
      </div>
      <div className={'pointer-events-none absolute inset-0 overflow-hidden'}>
        {stars}
        {Array.from({ length: maxCount }, (_, i) => (
          <ShootingStar
            key={i}
            starContainerRef={starContainerRef.current}
            alive={i < shootingStarsCount}
          />
        ))}
      </div>
    </div>
  );
};

export default NightSky;
