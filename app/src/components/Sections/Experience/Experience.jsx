import Switch from './Switch.jsx';
import Title from '../../UI/Title/Title.jsx';

const Experience = () => {
  return (
    <>
      <section className={'flex flex-col'}>
        <Title title={'Experience'}></Title>
        <div className={'self-center sm:self-start'}>
          <Switch></Switch>
        </div>
      </section>
    </>
  );
};

export default Experience;
