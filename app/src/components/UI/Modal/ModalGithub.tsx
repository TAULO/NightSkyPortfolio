import { useModal } from './ModalProvider.tsx';
import ModalContainer from './ModalContainer.tsx';

interface IGithubUserComponent {
  float: 'left' | 'right';
  githubName: string;
}

function ModalGithub({ modalId }: { modalId: string }) {
  const { data } = useModal(modalId);

  if (!data) return null;

  const GithubUserComponent = (props: IGithubUserComponent) => {
    return (
      <div
        className={`absolute grid h-full w-1/2 place-items-center ${
          props.float === 'left' ? 'left-0' : 'right-0'
        }`}
      >
        <div className={'flex flex-col items-center'}>
          <div className={'size-32 rounded-full bg-white'}></div>
          <div className={'flex h-0 items-start justify-center'}>
            <p className={'pt-4 text-center text-white font-bold text-lg'}>{props.githubName}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <ModalContainer modalId={modalId}>
      <div className={'relative h-96'}>
        {/*CENTER LINE*/}
        <div
          className={
            'absolute inset-0 top-1/2 z-50 h-1 w-full -translate-y-1/2 bg-red-800 hidden'
          }
        ></div>

        {/*LEFT*/}
        <div className={'absolute inset-0 bg-[#F03060]'}></div>
        {/*RIGHT*/}
        <div
          className={
            'absolute inset-0 bg-[#2D1B5E] [clip-path:polygon(61%_0%,100%_0%,100%_100%,40%_100%)]'
          }
        >
        </div>
        {/* VS */}
        <div
          className={
            'absolute right-1/2 top-1/2 grid size-16 -translate-y-1/2 translate-x-1/2 place-items-center rounded-full bg-white'
          }
        >
          <p className={'text-2xl font-extrabold text-[#2D1B5E]'}>VS</p>
        </div>
        <GithubUserComponent float={'left'} githubName={'Donald J. Trump'} />
        <GithubUserComponent float={'right'} githubName={'Nelson Mandela'}/>
      </div>
    </ModalContainer>
  );
}

export default ModalGithub;
