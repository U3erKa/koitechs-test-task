import type { getUserRepos, getUserData } from './api';

export type User = Awaited<ReturnType<typeof getUserData>>['data'];
export type Repos = Awaited<ReturnType<typeof getUserRepos>>['data'];
