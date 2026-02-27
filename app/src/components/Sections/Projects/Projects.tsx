import ProjectsItem from './ProjectsItem.tsx';
import Title from '../../UI/Title/Title.tsx';
import { projects, allUniqTechStacks } from './project.data.ts';
import { useEffect, useState } from 'react';
import { ITechSkill } from '../TechStack/techstack.data.ts';

type UniqueTechStack = ITechSkill & { isSelected: boolean };

const Projects = () => {
  const [allUniqTechStacksSelected, setAllUniqTechStacksSelected] = useState<
    UniqueTechStack[]
  >([]);

  useEffect(() => {
    setAllUniqTechStacksSelected(
      allUniqTechStacks.map((stack) => ({
        ...stack,
        isSelected: false,
      }))
    );
  }, []);

  const selectedStacks = allUniqTechStacksSelected
    .filter((stack) => stack.isSelected)
    .map((stack) => stack.name);

  const filteredProjects = projects.filter((project) =>
    project.techStack.some((tech) => !selectedStacks.includes(tech.name))
  );

  function toggleTechStackClick(index: number) {
    const updatedTechStacks = allUniqTechStacksSelected.map((stack, i) => {
      if (i === index) {
        return { ...stack, isSelected: !stack.isSelected };
      }
      return stack;
    });
    setAllUniqTechStacksSelected(updatedTechStacks);
  }

  function hasSelectedTechStack() {
    return allUniqTechStacksSelected.some((stack) => stack.isSelected);
  }

  function disabledAllTechStacks() {
    const hasSelected = hasSelectedTechStack();

    setAllUniqTechStacksSelected(
      allUniqTechStacks.map((stack) => ({
        ...stack,
        isSelected: !hasSelected,
      }))
    );
  }

  return (
    <div className={'flex flex-col gap-4'}>
      <Title title={'Projects'}></Title>
      <div className={'flex flex-col'}>
        <div className={'flex flex-wrap items-center gap-2'}>
          <div
            className={
              'border-border bg-secondary hover:border-border-hover min-w-24 rounded-full border border-dashed text-center text-white hover:cursor-pointer'
            }
            onClick={disabledAllTechStacks}
          >
            <div
              className={
                'flex items-center justify-center gap-2 p-1 text-white'
              }
            >
              <p>{hasSelectedTechStack() ? 'All' : 'Clear'}</p>
            </div>
          </div>
          {allUniqTechStacksSelected.map((techStack, index) => {
            return (
              <div
                key={index}
                className={`size-6 transition-all duration-300 hover:scale-110 hover:cursor-pointer ${
                  techStack.isSelected ? 'grayscale' : 'grayscale-0'
                }`}
                onClick={() => toggleTechStackClick(index)}
              >
                {techStack.svg}
              </div>
            );
          })}
        </div>
      </div>
      <div
        className={
          'grid w-full grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-3'
        }
      >
        {filteredProjects.map((project, index) => (
          <ProjectsItem {...project} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
