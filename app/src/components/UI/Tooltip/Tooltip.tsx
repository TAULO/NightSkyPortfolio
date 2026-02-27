interface IPopover {
  id: string;
  content: string;
}

export default function Tooltip({ id, content }: IPopover) {
  return (
    <div
      className={
        'bg-secondary animate-toggle-popover fixed min-w-[150px] rounded p-2'
      }
      popover={'manual'}
      id={id}
    >
      <p className={'text-xs font-bold text-white'}>{content}</p>
    </div>
  );
}
