import { LOCALE } from '../const';
import { Repos } from '../types';

type Props = Pick<
  Repos[number],
  'html_url' | 'name' | 'pushed_at' | 'description' | 'language'
>;

export default function RepoInfo({
  html_url,
  name,
  pushed_at,
  description,
  language,
}: Props): JSX.Element {
  const pushedAt = new Date(pushed_at as string);

  return (
    <section>
      <p>
        <a href={html_url} target="_blank">
          {name}
        </a>
      </p>
      {pushed_at && (
        <p>Last activity at {pushedAt.toLocaleDateString(LOCALE)}</p>
      )}
      {description && <p>{description}</p>}
      {language && <p>Primary language: {language}</p>}
    </section>
  );
}
