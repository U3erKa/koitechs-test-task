import { GenerateResume, HomepageIntroduction } from '../components';

export default function Home() {
  return (
    <main>
      <h1>My GitHub Résumé</h1>
      <HomepageIntroduction />
      <GenerateResume />
    </main>
  );
}
