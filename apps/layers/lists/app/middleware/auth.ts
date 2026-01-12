import { defineNuxtRouteMiddleware, navigateTo, useCookie, useNuxtApp } from '#imports'

export default defineNuxtRouteMiddleware(async (to, from) => {
  const { $directus } = useNuxtApp();
  const token = useCookie('directus_access_token');

  if (!token.value && to.path.startsWith('/admin')) {
    return navigateTo('/Auth/login');
  }

  // Optionally, refresh token/session here if needed
  // You can use $directus.auth.refresh() if using the auth module
});
