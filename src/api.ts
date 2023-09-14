import { Octokit } from '@octokit/rest';

const octokit = new Octokit();

export async function getUserData(username: string) {
  return await octokit.rest.users.getByUsername({ username });
}

export async function getUserRepos(username: string, page = 1, per_page = 30) {
  return await octokit.rest.repos.listForUser({
    username,
    page,
    per_page,
    sort: 'pushed',
  });
}
