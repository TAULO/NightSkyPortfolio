import { useEffect, useState } from 'react';
import { useModal } from './ModalProvider.tsx';
import { IProject } from '../../Sections/Projects/project.data.ts';
import ModalContainer from './ModalContainer.tsx';

function ModalProject({ modalId }: { modalId: string }) {
  const { data: project, closeModal } = useModal<IProject>(modalId);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    setCurrentSlide(0);
    setIsExpanded(false);
    setIsHidden(false);
  }, [project]);

  if (!project) return null;

  function nextSlide() {
    setCurrentSlide(
      currentSlide + 1 >= project!.images.length ? 0 : currentSlide + 1
    );
  }

  function prevSlide() {
    setCurrentSlide(
      currentSlide - 1 < 0 ? project!.images.length - 1 : currentSlide - 1
    );
  }

  function toggleExpand() {
    if (!isExpanded) {
      // Expand: fade out body → hide → grid collapses
      setIsExpanded(true);
      setTimeout(() => setIsHidden(true), 300);
    } else {
      // Collapse: grid expands → show body → fade in
      setIsExpanded(false);
      setTimeout(() => {
        setIsHidden(false);
      }, 500); // match grid transition duration
    }
  }

  return (
    <ModalContainer modalId={modalId}>
      <div
        className={
          'relative flex flex-col gap-4 sm:grid sm:h-fit sm:transition-[grid-template-columns] sm:duration-500 sm:ease-in-out'
        }
        style={
          isExpanded
            ? { gridTemplateColumns: '1fr 0fr' }
            : { gridTemplateColumns: '1fr 1fr' }
        }
      >
        <div id={'slides'} className={`mb-4 flex flex-col gap-2 sm:mb-0`}>
          <div className={'w-fit overflow-hidden'}>
            <div
              className={'flex gap-4'}
              style={{
                transform: `translate3d(calc(-${currentSlide * 100}% - ${currentSlide}rem), 0, 0)`,
                transition: 'transform 1.2s cubic-bezier(0.25, 1, 0.5, 1)',
              }}
            >
              {project.images.map((image, index) => {
                const extension = image.src.split('.').pop();

                return (
                  <div
                    key={index}
                    className={
                      'group/slide relative min-w-0 shrink-0 grow-0 basis-full hover:cursor-pointer'
                    }
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleExpand();
                    }}
                  >
                    {extension === 'mov' ? (
                      <video
                        className={
                          'border-border pointer-events-none w-full rounded-xl border'
                        }
                        autoPlay
                        loop
                        muted
                        playsInline
                      >
                        <source src={image.src} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    ) : (
                      <img
                        className={'border-border w-full rounded-xl border'}
                        alt={image.alt}
                        src={image.src}
                      />
                    )}
                    {/* Hover hint */}
                    <div
                      className={
                        'pointer-events-none absolute inset-0 flex items-center justify-center rounded-xl bg-black/0 transition-colors duration-300 group-hover/slide:bg-black/30'
                      }
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={
                          'text-white opacity-0 transition-opacity duration-300 group-hover/slide:opacity-80'
                        }
                      >
                        {isExpanded ? (
                          <>
                            <polyline points="4 14 10 14 10 20" />
                            <polyline points="20 10 14 10 14 4" />
                            <line x1="14" y1="10" x2="21" y2="3" />
                            <line x1="3" y1="21" x2="10" y2="14" />
                          </>
                        ) : (
                          <>
                            <polyline points="15 3 21 3 21 9" />
                            <polyline points="9 21 3 21 3 15" />
                            <line x1="21" y1="3" x2="14" y2="10" />
                            <line x1="3" y1="21" x2="10" y2="14" />
                          </>
                        )}
                      </svg>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div id={'controls'} className={'flex items-center gap-2'}>
            <button
              className={
                'border-border hover:bg-secondary bg-secondary/25 hover:border-border-hover inline-flex items-center justify-center rounded-full border p-2 text-white transition-colors duration-300 hover:cursor-pointer'
              }
              onClick={prevSlide}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-chevron-left"
                aria-hidden="true"
              >
                <path d="m15 18-6-6 6-6"></path>
              </svg>
            </button>
            <button
              className={
                'border-border hover:bg-secondary bg-secondary/25 hover:border-border-hover rotate-180 items-center justify-center rounded-full border p-2 text-white transition-colors duration-300 hover:cursor-pointer'
              }
              onClick={nextSlide}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-chevron-left"
                aria-hidden="true"
              >
                <path d="m15 18-6-6 6-6"></path>
              </svg>
            </button>
            <p
              className={'text-center text-sm text-white/50'}
            >{`Slide ${currentSlide + 1} of ${project.images.length}`}</p>
          </div>
        </div>
        <div
          id={'body'}
          className={`mt-auto flex flex-col gap-2 overflow-hidden transition-opacity duration-300 sm:mt-0 ${
            isExpanded
              ? 'sm:pointer-events-none sm:opacity-0'
              : 'sm:opacity-100'
          } ${isHidden ? 'sm:hidden' : ''}`}
        >
          <div className={'grid- grid grid-cols-[1fr_auto]'}>
            <h1 className={'text-xl font-bold text-white'}>{project.name}</h1>
            <div>
              <a
                href={project.hrefCode}
                target="_blank"
                rel="noopener noreferrer"
                className={
                  'group/link text-tertiary hover:text-tertiary/80 flex items-center gap-1 text-sm transition-colors'
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className={
                    'h-4 w-4 transform transition-transform group-hover/link:scale-110'
                  }
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                  <path d="M9 18c-4.51 2-5-2-7-2"></path>
                </svg>
                View Code
              </a>
            </div>
          </div>
          <div className={'mb-1 flex flex-wrap gap-2'}>
            {project.techStack.map((stack, index) => (
              <div key={index} className={'size-5 shrink-0'}>
                {stack.svg}
              </div>
            ))}
          </div>
          <p className={'text-sm text-white/50'}>{project.description}</p>
        </div>
        <div id={'buttons'} className={'flex gap-2 sm:col-span-2'}>
          <button
            className={
              'border-border hover:bg-secondary bg-secondary/25 w-full rounded-xl border p-2 text-white transition-colors duration-300 hover:cursor-pointer'
            }
            onClick={closeModal}
          >
            Close
          </button>
          {project.hrefLive && (
            <button
              className={
                'border-border hover:bg-secondary bg-secondary/25 w-full rounded-xl border p-2 text-white transition-colors duration-300 hover:cursor-pointer'
              }
              onClick={() => window.open(project?.hrefLive, '_blank')}
            >
              Visit
            </button>
          )}
        </div>
      </div>
    </ModalContainer>
  );
}

export default ModalProject;
