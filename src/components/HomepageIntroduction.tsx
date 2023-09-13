import { EXTERNAL_URL } from '../const';

export default function HomepageIntroduction() {
  return (
    <article>
      {' '}
      <p>
        As a software startup owner I really enjoy when people send us their
        résumés and they include their github account so we can see tangible
        work they have done.
      </p>
      <p>
        After a{' '}
        <a href={EXTERNAL_URL.TWEET} target="_blank">
          tweet by John Resig
        </a>{' '}
        I imagined that it may be nice for people to be able to generate their{' '}
        <a href={EXTERNAL_URL.GITHUB} target="_blank">
          GitHub
        </a>{' '}
        résumés.
      </p>
    </article>
  );
}
