import me from '../../../assets/static/me.jpeg';
import { useSocials } from '../../../hooks/useSocials.ts';

const AboutMe = () => {
  const socials = useSocials();

  return (
    <div className={'flex flex-col gap-4 sm:flex-row sm:gap-8'}>
      <div
        className={
          'h-42 border-border w-40 flex-shrink-0 overflow-hidden rounded-lg border sm:mt-[6px] sm:self-start'
        }
      >
        <img
          src={me}
          alt={'Thomas Taulo'}
          className={'h-full w-full object-cover'}
        />
      </div>
      <div className={'flex flex-col gap-4'}>
        <p className={'text-lg font-semibold text-white'}>
          Software developer based in Aarhus, Denmark.
        </p>
        <p className={'leading-7 text-white/75'}>
          By day, I build automation solutions at Sirenia for healthcare and
          administrative systems. On my own time, I'm drawn to frontend work,
          but I try not to get too comfortable with any single stack. I'd rather
          pick up something unfamiliar than reach for the same tool every time.
        </p>
        <p className={'leading-7 text-white/75'}>
          When I'm not sitting in front of a dark-themed IDE, you'll find me at
          the gym, hanging out with friends or family, or lost in a good book -
          anything from non-fiction to Sci-Fi and High Fantasy. If you're a
          bookworm too, check me out on{' '}
          <a
            href={socials.goodreads}
            target={'_blank'}
            rel={'noopener noreferrer'}
            className={'text-tertiary hover:text-tertiary/70 transition-colors'}
          >
            Goodreads
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
