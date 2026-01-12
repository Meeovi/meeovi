import directus, { readItems } from './index';

export const searchCollection = async (collection: string, query: string) => {
  return await directus.request(
    readItems(collection, {
      filter: {
        _or: [
          { title: { _icontains: query } },
          { description: { _icontains: query } }
        ]
      }
    })
  );
};