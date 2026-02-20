import { useCallback, useState } from 'react';

function randomPosTopHalf(containerElement: Element) {
  if (!containerElement) return { x: 0, y: 0 };

  const containerWidth = containerElement.clientWidth;
  const containerHeight = containerElement.clientHeight;

  const x = Math.random() * containerWidth;
  const y = (Math.random() * containerHeight) / 2;

  return { x, y };
}

function randomAnimationDelay() {
  return Math.random() * 6;
}

function randomAnimationDuration() {
  return Math.random() * 4 + 2;
}

function randomSize() {
  return Math.random() + 1;
}

const ShootingStar = ({
  starContainerRef,
}: {
  starContainerRef: Element | null;
}) => {
  if (!starContainerRef) return;

  const [position, setPosition] = useState(() =>
    randomPosTopHalf(starContainerRef)
  );
  const [delay, setDelay] = useState(() => randomAnimationDelay());
  const [duration, setDuration] = useState(() => randomAnimationDuration());
  const size = randomSize();

  const [key, setKey] = useState(0); // Add key to force re-render

  const handleAnimationEnd = useCallback(() => {
    setPosition(randomPosTopHalf(starContainerRef));
    setDelay(randomAnimationDelay());
    setDuration(randomAnimationDuration());

    setKey((prev) => prev + 1);
  }, [starContainerRef]);

  return (
    <>
      <div
        key={key}
        className={
          'animate-shooting-star pointer-events-none absolute z-50 size-2'
        }
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          animationDelay: delay + 's',
          animationDuration: duration + 's',
          opacity: 0,
        }}
        onAnimationEnd={handleAnimationEnd}
      >
        <div
          className={
            'absolute z-10 rounded-full bg-white shadow-[0_0_4px_1px_hsla(0,0%,100%,.5)]'
          }
          style={{ width: `${size}px`, height: `${size}px` }}
        ></div>
      </div>
    </>
  );
};

export default ShootingStar;
