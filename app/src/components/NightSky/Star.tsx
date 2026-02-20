function randomSize() {
  return Math.random() * 2 + 1;
}

function randomPos(containerElement: Element) {
  if (!containerElement) return { x: 0, y: 0 };

  const containerWidth = containerElement.clientWidth;
  const containerHeight = containerElement.clientHeight;

  const x = Math.random() * containerWidth;
  const y = Math.random() * containerHeight;

  return { x, y };
}

function randomAnimationStartDelay() {
  return Math.random() * 8;
}

const Star = ({ starContainerRef }: { starContainerRef: Element | null }) => {
  if (!starContainerRef) return;

  const size = randomSize();
  const { x, y } = randomPos(starContainerRef);
  const delay = randomAnimationStartDelay();

  return (
    <>
      <div
        style={{
          width: `${size}px`,
          height: `${size}px`,
          left: `${x}px`,
          top: `${y}px`,
          animationDelay: `${delay}s`,
        }}
        className={
          'animate-twinkle pointer-events-none absolute rounded-full bg-white opacity-0'
        }
      ></div>
    </>
  );
};

export default Star;
