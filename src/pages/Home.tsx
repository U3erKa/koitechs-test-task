import { type FormEvent } from 'react';
import { EXTERNAL_URL } from '../const';

export default function Home() {
  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    throw new Error('Function not implemented.');
  }

  return (
    <div>
      <h1>My GitHub Résumé</h1>
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
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder={
            'Enter your GitHub username and then click "Generate" button or press "Enter"'
          }
        />
        <button type="submit">Generate</button>
      </form>
    </div>
  );
}
