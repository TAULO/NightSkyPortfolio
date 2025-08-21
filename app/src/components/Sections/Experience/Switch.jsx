import { useState, useRef, useEffect } from 'react';

const Switch = () => {
  const [items, setItems] = useState([
    {
      name: 'Work',
      isSelected: true,
    },
    {
      name: 'Education',
      isSelected: false,
    },
    {
      name: 'Personal',
      isSelected: false,
    },
  ]);

  const [backgroundStyle, setBackgroundStyle] = useState({
    width: 0,
    transform: 'translateX(0px)'
  });

  const buttonRefs = useRef([]);

  useEffect(() => {
    const selectedIndex = items.findIndex(item => item.isSelected);
    if (buttonRefs.current[selectedIndex]) {
      const selectedButton = buttonRefs.current[selectedIndex];
      setBackgroundStyle({
        width: selectedButton.offsetWidth,
        transform: `translateX(${selectedButton.offsetLeft}px)`
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
        transform: `translateX(${selectedButton.offsetLeft}px)`
      });
    }
  }

  return (
    <>
      <div className={'bg-secondary flex w-fit rounded-lg relative'}>
        <div
          className="absolute top-0 bottom-0 bg-white rounded-lg transition-all duration-300 ease-in-out"
          style={{
            width: `${backgroundStyle.width}px`,
            transform: backgroundStyle.transform
          }}
        />

        {items.map((item, index) => (
          <div
            key={index}
            ref={el => buttonRefs.current[index] = el}
            className={`rounded-lg px-5 py-2 hover:cursor-pointer relative z-10 ${
              item.isSelected
                ? 'text-black transition-colors duration-150 delay-100'
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