import { createPortal } from 'react-dom';
import { useState } from 'react';
import { IProject, projects } from '../../Sections/Projects/project.data.ts';

function ModalComponent(project: IProject) {
  const [isOpen, setIsOpen] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

  function nextSlide() {
    setCurrentSlide(
      currentSlide + 1 >= project.images.length ? 0 : currentSlide + 1
    );
  }

  function prevSlide() {
    setCurrentSlide(
      currentSlide - 1 < 0 ? project.images.length - 1 : currentSlide - 1
    );
  }

  return !isOpen ? null : (
    <div
      className={
        'bg-primary border-secondary border-1 sm:max-w-10/12 fixed bottom-0 z-50 grid w-full overflow-hidden rounded-t-3xl p-4 shadow-lg duration-200 sm:left-1/2 sm:top-1/2 sm:h-fit sm:-translate-x-1/2 sm:-translate-y-1/2 sm:rounded-3xl sm:p-8 sm:pt-12 xl:max-w-fit'
      }
    >
      <div
        className={
          'bg-secondary mb-4 mt-2 h-3 w-32 justify-self-center rounded-full sm:hidden'
        }
      ></div>
      <button
        className={
          'absolute right-4 top-4 hidden text-gray-400 transition-colors duration-300 hover:cursor-pointer hover:text-white sm:block'
        }
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
          className="lucide lucide-x"
          aria-hidden="true"
        >
          <path d="M18 6 6 18"></path>
          <path d="m6 6 12 12"></path>
        </svg>
      </button>
      <div className={'flex flex-col gap-4 sm:grid sm:h-fit sm:grid-cols-2'}>
        <div id={'slides'} className={'mb-4 flex flex-col gap-2 sm:mb-0'}>
          <div className={'overflow-hidden'}>
            <div
              className={'flex gap-4'}
              style={{
                transform: `translate3d(calc(-${currentSlide * 100}% - ${currentSlide}rem), 0, 0)`,
                transition: 'transform 1.2s cubic-bezier(0.25, 1, 0.5, 1)',
              }}
            >
              {project.images.map((image, index) => (
                <div
                  key={index}
                  className={'min-w-0 shrink-0 grow-0 basis-full'}
                >
                  <img
                    className={'border-secondary w-full rounded-xl border'}
                    alt={image.alt}
                    src={image.src}
                  />
                </div>
              ))}
            </div>
          </div>
          <div id={'controls'} className={'flex items-center gap-2'}>
            <button
              className={
                'border-secondary hover:bg-secondary bg-secondary/25 inline-flex items-center justify-center rounded-full border p-2 text-white transition-colors duration-300 hover:cursor-pointer'
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
                'border-secondary hover:bg-secondary bg-secondary/25 rotate-180 items-center justify-center rounded-full border p-2 text-white transition-colors duration-300 hover:cursor-pointer'
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
        <div id={'body'} className={'mt-auto flex flex-col gap-2 sm:mt-0'}>
          <div className={'flex justify-between'}>
            <h1 className={'text-xl font-bold text-white'}> {project.name} </h1>
            <div className={'self-end'}>
              <a
                href={project.hrefCode}
                target="_blank"
                rel="noopener noreferrer"
                className={
                  'group/link flex items-center gap-1 text-sm text-blue-400 transition-colors hover:text-blue-400/80'
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
              'border-secondary hover:bg-secondary bg-secondary/25 w-full rounded-xl border p-2 text-white transition-colors duration-300 hover:cursor-pointer'
            }
            onClick={() => setIsOpen(false)}
          >
            Close
          </button>
          {project.hrefLive && (
            <button
              className={
                'border-secondary hover:bg-secondary bg-secondary/25 w-full rounded-xl border p-2 text-white transition-colors duration-300 hover:cursor-pointer'
              }
            >
              Visit
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Modal() {
  return (
    <div>
      {createPortal(<ModalComponent {...projects[0]} />, document.body)}
    </div>
  );
}
