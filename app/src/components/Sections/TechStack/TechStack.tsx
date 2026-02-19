import Stack from './Stack.jsx';
import Title from '../../UI/Title/Title.tsx';

import { frontendSkill, backendSkill, environmentSkill, languagesSkill } from './techstack.data';

const TechStack = () => {
  return (
    <>
      <div className={'flex flex-col'}>
        <Title title={'Tech Stack'}></Title>
        <div className={'grid gap-5 md:grid-cols-2'}>
          <Stack {...frontendSkill}></Stack>
          <Stack {...backendSkill}></Stack>
          <Stack {...environmentSkill}></Stack>
          <Stack {...languagesSkill}></Stack>
        </div>
      </div>
    </>
  );
};

export default TechStack;
