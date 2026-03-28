import { ReactElement, useEffect, useRef, useState } from 'react';
import Star from './Star.tsx';
import ShootingStar from './ShootingStar.tsx';
import { useModal } from '../UI/Modal/ModalProvider.tsx';

const STARS_COUNT = 400;
const SHOOTING_STARS_COUNT = 5;

const NightSky = ({ children }: { children: Array<ReactElement> }) => {
  const { isOpen: isProjectOpen } = useModal('project-modal');
  const { isOpen: isFooOpen } = useModal('github-modal');
  const isAnyModalOpen = isProjectOpen || isFooOpen;

  const starContainerRef = useRef<HTMLDivElement | null>(null);
  const [stars, setStars] = useState<Array<ReactElement>>([]);
  const [shootingStars, setShootingStars] = useState<Array<ReactElement>>([]);

  useEffect(() => {
    if (starContainerRef.current) {
      setStars(
        Array.from({ length: STARS_COUNT }).map((_, i) => (
          <Star key={i} starContainerRef={starContainerRef.current} />
        ))
      );

      setShootingStars(
        Array.from({ length: SHOOTING_STARS_COUNT }).map((_, i) => (
          <ShootingStar key={i} starContainerRef={starContainerRef.current} />
        ))
      );
    }
  }, []);

  return (
    <div
      className={`relative bg-[#040615] p-5 transition-all duration-300 sm:p-20 ${isAnyModalOpen ? 'brightness-25' : ''}`}
      ref={starContainerRef}
    >
      <div className={'gap-36 flex flex-col'}>{children}</div>
      <div className={'pointer-events-none absolute inset-0 overflow-hidden'}>
        {stars}
        {shootingStars}
      </div>
    </div>
  );
};

export default NightSky;
