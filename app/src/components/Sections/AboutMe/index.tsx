const AboutMe = () => (
  <div className={"flex flex-col gap-3"}>
    <p className={"text-lg font-semibold text-white"}>
      Software developer based in Aarhus, Denmark.
    </p>
    <p className={"leading-7 text-white/75"}>
      I'm most at home building frontend applications, but I try not to get too
      comfortable with any single stack. I'd rather pick up something unfamiliar
      than reach for the same tool every time.
    </p >
    <p className={"leading-7 text-white/50"}>
      When I'm not in front of a dark-themed IDE, you'll find me at the gym,
      hanging out with friends and family, or lost in a good book - anything
      from non-fiction to Sci-Fi and High Fantasy. If you're a bookworm too,
      let's follow each other on{' '}
      <a
        href={"https://www.goodreads.com/user/show/170297255-thomas-taulo"}
        target={"_blank"}
        rel={"noopener noreferrer"}
        className={"text-tertiary hover:text-tertiary/70 transition-colors"}
      >
        Goodreads
      </a>
      .
    </p>
  </div>
);

export default AboutMe;
