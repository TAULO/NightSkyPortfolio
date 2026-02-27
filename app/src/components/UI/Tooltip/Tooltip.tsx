import { ReactNode } from 'react';

interface IPopover {
  id: string;
  content: string;
  children: ReactNode;
}

export default function Tooltip({ id, content, children }: IPopover) {
  return (
    <div key={id}>
      <div
        onMouseEnter={(e) => {
          const popover = document.getElementById(id);
          const rect = e.currentTarget.getBoundingClientRect();
          if (popover) {
            popover.showPopover();
            popover.style.top = `${rect.bottom + 10}px`;
            popover.style.left = `${rect.left + rect.width / 2 - popover.offsetWidth / 2}px`;
          }
        }}
        onMouseLeave={() => document.getElementById(id)?.hidePopover()}
      >
        {children}
      </div>
      <div
        className={
          'bg-secondary animate-toggle-popover border-border fixed min-w-[75px] justify-center rounded border p-2'
        }
        popover={'manual'}
        id={id}
      >
        <p className={'text-center text-xs font-bold text-white'}>{content}</p>
      </div>
    </div>
  );
}
