import { useState } from 'react';
import { truncateNumber, uniqueId } from '../functions';
import type { Repos } from '../types';

type Props = { username: string; public_repos: number; repos: Repos };

export default function UserRepos({ username, public_repos, repos }: Props) {
  const [allRepos, setAllRepos] = useState<Repos>(repos);

  const languages: Record<string, number> = {};
  let languageCount = 0;

  allRepos.forEach(({ language }) => {
    if (language) {
      if (language in languages) {
        languages[language]++;
      } else {
        languages[language] = 1;
      }
      languageCount++;
    }
  });

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
    </article>
  );
}
