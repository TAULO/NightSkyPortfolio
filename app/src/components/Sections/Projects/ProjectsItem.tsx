import { githubSVG } from '../TechStack/TechSVG.tsx';

const ProjectsItem = () => {
  return (
    <div className={'w-64 h-84 border-2 border-secondary rounded-2xl text-white shadow'}>

      <div className={'flex items-center w-full gap-2 text-[#9ba3e8]'}>
        <div className={'size-8'}>
          {githubSVG}
        </div>
        <p>View Code</p>
      </div>
    </div>
  )
}

export default ProjectsItem;