import { useState, useRef, useEffect } from 'react';

const Switch = ({ items, setItems }) => {
  const [backgroundStyle, setBackgroundStyle] = useState({
    width: 0,
    transform: 'translateX(0px)',
  });

  const buttonRefs = useRef([]);

  useEffect(() => {
    const selectedIndex = items.findIndex((item) => item.isSelected);
    if (buttonRefs.current[selectedIndex]) {
      const selectedButton = buttonRefs.current[selectedIndex];
      setBackgroundStyle({
        width: selectedButton.offsetWidth,
        transform: `translateX(${selectedButton.offsetLeft}px)`,
      });
    }
  }, []);

  function toggleItem(index) {
    setItems((prev) =>
      prev.map((item, idx) =>
        idx === index
          ? { ...item, isSelected: true }
          : { ...item, isSelected: false }
      )
    );

    const selectedButton = buttonRefs.current[index];
    if (selectedButton) {
      setBackgroundStyle({
        width: selectedButton.offsetWidth,
        transform: `translateX(${selectedButton.offsetLeft}px)`,
      });
    }
  }

  return (
    <>
      <div
        className={
          'bg-secondary relative flex w-fit self-center rounded-lg shadow sm:self-start'
        }
      >
        <div
          className="absolute bottom-0 top-0 rounded-lg bg-white transition-all duration-300 ease-in-out"
          style={{
            width: `${backgroundStyle.width}px`,
            transform: backgroundStyle.transform,
          }}
        />

        {items.map((item, index) => (
          <div
            key={index}
            ref={(el) => (buttonRefs.current[index] = el)}
            className={`relative z-10 rounded-lg px-5 py-2 hover:cursor-pointer ${
              item.isSelected
                ? 'text-black transition-colors delay-100 duration-150'
                : 'text-white transition-colors duration-100 hover:text-gray-200'
            }`}
            onClick={() => toggleItem(index)}
          >
            {item.name}
          </div>
        ))}
      </div>
    </>
  );
};

export default Switch;
