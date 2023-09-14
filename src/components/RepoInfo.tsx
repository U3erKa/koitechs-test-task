import { LOCALE } from '../const';
import { Repos } from '../types';
import styles from '../styles/RepoInfo.module.scss';

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
    <section className={styles.container}>
      <section className={styles.heading}>
        <h2>
          <a href={html_url} target="_blank">
            {name}
          </a>
        </h2>
        {pushed_at && (
          <p>Last activity at {pushedAt.toLocaleDateString(LOCALE)}</p>
        )}
      </section>
      {description && <p>{description}</p>}
      {language && <p>Primary language: {language}</p>}
    </section>
  );
}
