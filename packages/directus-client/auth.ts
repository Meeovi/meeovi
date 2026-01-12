import directus, { readMe } from './index';

export const login = async (email: string, password: string) => {
  return await directus.login(email, password);
};

export const logout = async () => {
  return await directus.logout();
};

export const refresh = async () => {
  return await directus.refresh();
};

export const getUser = async () => {
  return await directus.request(readMe());
};