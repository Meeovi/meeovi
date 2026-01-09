import { useOneTap } from 'file://C:/Users/Basti/OneDrive/Documents/My%20Websites/Handmade%20Sites/Javascript-Projects/Nuxt-Projects/AlternateCMS-Framework/TheMeeoviCompany-Sites/bold-frontend/node_modules/vue3-google-signin/dist/index.es.js';

useOneTap({
  onSuccess: (response) => {
    console.log("Success:", response);
  },
  onError: () => console.error("Error with One Tap Login")
});
//# sourceMappingURL=google.mjs.map
