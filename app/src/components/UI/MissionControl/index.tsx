const MissionControl = () => {
  return (
    <div className={'flex items-center gap-1 text-center'}>
      <kbd
        className={
          'bg-secondary border-border text-md rounded-md border px-2 py-px font-mono text-white/50'
        }
      >
        ⌘
      </kbd>
      <kbd
        className={
          'bg-secondary border-border text-md rounded-md border px-2 py-px font-mono text-white/50'
        }
      >
        k
      </kbd>
    </div>
  );
};

export default MissionControl;
