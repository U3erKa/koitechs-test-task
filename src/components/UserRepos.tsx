import { useEffect, useState } from 'react';
import { RepoInfo } from '../components';
import { getUserRepos } from '../api';
import { truncateNumber, uniqueId } from '../functions';
import { INITIALLY_LOADED_REPOS, MAX_REPOS_PER_REQUEST } from '../const';
import type { Repos } from '../types';

type Props = { username: string; public_repos: number; repos: Repos };

export default function UserRepos({ username, public_repos, repos }: Props) {
  const [allRepos, setAllRepos] = useState<Repos>(repos);

  const languages: Record<string, number> = {};
  let languageCount = 0;

  useEffect(() => {
    const isAllReposLoaded = public_repos <= INITIALLY_LOADED_REPOS;
    if (!isAllReposLoaded) {
      const tasks: ReturnType<typeof getUserRepos>[] = [];
      for (
        let i = 1;
        i <= Math.ceil(public_repos / MAX_REPOS_PER_REQUEST);
        i++
      ) {
        tasks.push(getUserRepos(username, i, MAX_REPOS_PER_REQUEST));
      }

      Promise.all(tasks).then((results) => {
        const repos = results.flatMap(({ data }) => data);
        setAllRepos(repos);
      });
    }
  }, [public_repos, username]);

  const recentRepos: JSX.Element[] = [];

  allRepos.forEach(
    ({ id, name, description, pushed_at, html_url, language }, i) => {
      if (language) {
        if (language in languages) {
          languages[language]++;
        } else {
          languages[language] = 1;
        }
        languageCount++;
      }

      if (i < INITIALLY_LOADED_REPOS) {
        recentRepos.push(
          <RepoInfo
            key={id}
            {...{ html_url, name, pushed_at, description, language }}
          />,
        );
      }
    },
  );

  const languageStats = Object.entries(languages).map(([language, count]) => {
    const languagePercentage = (count * 100) / languageCount;
    return (
      <p key={uniqueId()}>
        {language}: {truncateNumber(languagePercentage)}%
      </p>
    );
  });

  return (
    <article>
      <section>{languageStats}</section>
      <section>
        {recentRepos.length ? (
          recentRepos
        ) : (
          <p>This user doesn't seem to have any repositories, yet</p>
        )}
      </section>
    </article>
  );
}
