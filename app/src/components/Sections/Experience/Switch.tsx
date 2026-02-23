import { useState, useRef, useEffect } from 'react';

export interface ISwitchItem {
  name: string;
  isSelected: boolean;
}

interface SwitchProps {
  items: string[];
  defaultItem?: number;
  onSelectionChange?: (selectedIndex: number, selectedItem: string) => void;
}

const Switch = ({ items, defaultItem = 0, onSelectionChange }: SwitchProps) => {
  const [switchItems, setSwitchItems] = useState<Array<ISwitchItem>>(
    items.map((name, index) => ({
      name,
      isSelected: index === defaultItem,
    }))
  );

  const [backgroundStyle, setBackgroundStyle] = useState({
    width: 0,
    transform: 'translateX(0px)',
  });

  const buttonRefs = useRef<Array<HTMLElement>>([]);

  useEffect(() => {
    const selectedIndex = switchItems.findIndex((item) => item.isSelected);
    if (buttonRefs.current[selectedIndex]) {
      const selectedButton = buttonRefs.current[selectedIndex];
      setBackgroundStyle({
        width: selectedButton.offsetWidth,
        transform: `translateX(${selectedButton.offsetLeft}px)`,
      });
    }
  }, []);

  function toggleItem(index: number) {
    setSwitchItems((prev) =>
      prev.map((item, idx) =>
        idx === index
          ? { ...item, isSelected: true }
          : { ...item, isSelected: false }
      )
    );

    if (onSelectionChange) {
      onSelectionChange(index, switchItems[index].name);
    }

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
          'bg-secondary/40 border-secondary relative flex w-fit self-center rounded-lg border text-xs shadow sm:self-start sm:text-base'
        }
      >
        <div
          className="absolute bottom-0 top-0 rounded-lg bg-white transition-all duration-300 ease-in-out"
          style={{
            width: `${backgroundStyle.width}px`,
            transform: backgroundStyle.transform,
          }}
        />

        {switchItems.map((item, index) => (
          <div
            key={index}
            ref={(el: HTMLElement | null) => {
              if (el) {
                buttonRefs.current[index] = el;
              }
            }}
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
