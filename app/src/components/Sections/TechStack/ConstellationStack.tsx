import { ITechStack } from './techstack.data';
import Tooltip from '../../UI/Tooltip/Tooltip.tsx';
import { useMemo } from 'react';

const Stack = (techStack: ITechStack) => {
  const baseRadius = 140;
  const perSkill = 20;
  const calculated = baseRadius + techStack.skills.length * perSkill;

  // Render at the larger size, scale down with CSS
  const radiusInPx = Math.min(calculated, 350);
  const angleStep = (2 * Math.PI) / techStack.skills.length;

  const duration = useMemo(
    () => [150, 200, 250, 300, 350][Math.floor(Math.random() * 5)],
    []
  );

  return (
    <>
      <style>{`
        @keyframes orbitSpin {
          to { transform: rotate(360deg); }
        }
      `}</style>

      <div className={'origin-center scale-75 sm:scale-100'}>
        <div
          style={{ width: `${radiusInPx}px`, height: `${radiusInPx}px` }}
          className={
            'border-1 border-border hover:border-border-hover relative overflow-visible rounded-full transition-colors duration-300'
          }
        >
          {/* CENTER */}
          <div
            className={
              'absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'
            }
          >
            <div className={'flex flex-col items-center gap-2'}>
              <h3 className={'text-xl font-bold text-white'}>
                {techStack.name}
              </h3>
              <p className={'text-white/50'}>
                {techStack.skills.length} skills
              </p>
            </div>
          </div>

          {/* ROTATING RING */}
          <div
            className={'absolute inset-0'}
            style={{
              animation: `orbitSpin ${duration}s linear infinite`,
            }}
          >
            {techStack.skills.map((skill, index) => {
              const angle = angleStep * index - Math.PI / 2;
              const x = Math.cos(angle) * (radiusInPx / 2);
              const y = Math.sin(angle) * (radiusInPx / 2);

              const skillId = `skill-${skill.name}-${index}`;
              return (
                <div
                  className={'absolute left-1/2 top-1/2'}
                  style={{
                    transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                  }}
                  key={index}
                >
                  {/* Counter-rotate to keep icons upright */}
                  <div
                    style={{
                      animation: `orbitSpin ${duration}s linear infinite reverse`,
                    }}
                  >
                    <Tooltip id={skillId} content={skill.name} key={skillId}>
                      <div className={'z-10 size-6 text-white'}>
                        {skill.svg}
                      </div>
                    </Tooltip>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Stack;
