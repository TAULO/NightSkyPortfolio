const MissionControl = () => {
  const platform = navigator.userAgent.toLowerCase().includes('mac') ? '⌘' : '⌃';

  return (
    <div className={'flex items-center gap-5'}>
      <div className={'border-border-hover h-px w-[40px] border'}></div>
      <div className={'flex flex-col items-center'}>
        <p className={'text-white/50'}>Mission Control</p>
        <div className={'flex items-center gap-1 text-center'}>
          <kbd
            className={
              'bg-secondary border-border text-md rounded-md border px-2 py-px font-mono text-white/50'
            }
          >
            {platform}
          </kbd>
          <kbd
            className={
              'bg-secondary border-border text-md rounded-md border px-2 py-px font-mono text-white/50'
            }
          >
            k
          </kbd>
        </div>
      </div>
    </div>
  );
};

export default MissionControl;
