import directus from '../index';
import * as auth from '../auth';
import * as forms from '../forms';
import * as search from '../search';

export const useDirectus = () => {
  return {
    client: directus,
    auth,
    forms,
    search
  };
};