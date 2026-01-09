import { defineEventHandler } from 'file://C:/Users/Basti/OneDrive/Documents/My%20Websites/Handmade%20Sites/Javascript-Projects/Nuxt-Projects/AlternateCMS-Framework/TheMeeoviCompany-Sites/bold-frontend/node_modules/nitropack/node_modules/h3/dist/index.mjs';

const searchExample = defineEventHandler(async (event) => {
  const { serverMeilisearchClient } = event.context;
  await serverMeilisearchClient.index("movies").addDocuments(
    {
      id: 999999994234,
      title: "Batman Unmasked: The Psychology of the Dark Knight",
      poster: "https://image.tmdb.org/t/p/w1280/jjHu128XLARc2k4cJrblAvZe0HE.jpg",
      overview: "Delve into the world of Batman and the vigilante justice tha",
      release_date: "2008-07-15"
    }
  );
  return { myCustomResponse: "Document is on the way...." };
});

export { searchExample as default };
//# sourceMappingURL=searchExample.mjs.map
