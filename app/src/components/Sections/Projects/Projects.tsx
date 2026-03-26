import ProjectsItem from './ProjectsItem.tsx';
import Title from '../../UI/Title/Title.tsx';
import { projects, allUniqTechStacks } from './project.data.ts';
import { useEffect, useState } from 'react';
import { ITechSkill } from '../TechStack/techstack.data.ts';
import Button from '../../UI/Button/Button.tsx';

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

  const hasSelectedTechStack = allUniqTechStacksSelected.some(
    (stack) => stack.isSelected
  );

  const allUniqTechStacksSelectedLen = allUniqTechStacksSelected.filter(
    (stack) => !stack.isSelected
  ).length;

  function toggleTechStackClick(index: number) {
    const updatedTechStacks = allUniqTechStacksSelected.map((stack, i) => {
      if (i === index) {
        return { ...stack, isSelected: !stack.isSelected };
      }
      return stack;
    });
    setAllUniqTechStacksSelected(updatedTechStacks);
  }

  function toggleTechStackSelection() {
    setAllUniqTechStacksSelected(
      allUniqTechStacks.map((stack) => ({
        ...stack,
        isSelected: !hasSelectedTechStack,
      }))
    );
  }

  return (
    <div className={'flex flex-col gap-4'}>
      <Title title={'Projects'}></Title>
      <div className={'flex flex-col gap-2 md:flex-row'}>
        <div className={'relative w-fit'}>
          <Button
            text={hasSelectedTechStack ? 'All' : 'Clear'}
            onClick={toggleTechStackSelection}
          />
          <div
            className={
              'absolute -right-1 -top-1 size-4 rounded-full bg-tertiary'
            }
          >
            <p className={'text-center text-xs font-bold text-white'}>
              {allUniqTechStacksSelectedLen}
            </p>
          </div>
        </div>
        <div className={'flex flex-wrap items-center gap-2'}>
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
          <ProjectsItem
            {...project}
            selectedStacks={selectedStacks}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
