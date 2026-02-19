import ProjectsItem from './ProjectsItem.tsx';
import Title from '../../UI/Title/Title.tsx';
import { projects } from './project.data.ts';

const Projects = () => {
  return (
    <div>
      <Title title={'Projects'}></Title>
      <div
        className={
          'grid w-full grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-3'
        }
      >
        {projects.map((project, index) => (
          <ProjectsItem {...project} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
