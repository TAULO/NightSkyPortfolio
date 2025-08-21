import Toggler from './Toggler.jsx';

const Experience = () => {
  return (
    <>
      <div className={'bg-primary p-5 sm:p-20'}>
        <h1
          className={
            'my-5 text-center text-4xl font-bold text-white sm:text-start'
          }
        >
          Experience
        </h1>
        <Toggler></Toggler>
      </div>
    </>
  );
};

export default Experience;
