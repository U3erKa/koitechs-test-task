import { useLoaderData } from 'react-router-dom';
import { UserRepos } from '../components';
import { LOCALE } from '../const';
import type { User, Repos } from '../types';

export default function User() {
  const [user, repos] = useLoaderData() as [User, Repos];
  const { name, login, public_repos, created_at } = user;
  const memberSince = new Date(created_at);

  return (
    <main>
      <h1>{name ?? login}</h1>
      <p>Has {public_repos} public repositories</p>
      <p>Member since {memberSince.toLocaleDateString(LOCALE)}</p>
      <UserRepos username={login} public_repos={public_repos} repos={repos} />
    </main>
  );
}
