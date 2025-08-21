import Toggler from './Toggler.jsx';
import Title from '../../UI/Title/Title.jsx';

const Experience = () => {
  return (
    <>
      <section className={'flex flex-col'}>
        <Title title={'Experience'}></Title>
        <div className={'self-center sm:self-start'}>
          <Toggler></Toggler>
        </div>
      </section>
    </>
  );
};

export default Experience;
