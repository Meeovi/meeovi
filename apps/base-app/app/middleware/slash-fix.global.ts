export default defineNuxtRouteMiddleware((to) => {
  // Check if the path starts with multiple slashes
  if (to.path.startsWith('//')) {
    // Clean the slashes and redirect to the correct internal path
    const sanitizedPath = to.path.replace(/\/+/g, '/');
    return navigateTo(sanitizedPath, { redirectCode: 301 });
  }
});
