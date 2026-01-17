import { defineNuxtRouteMiddleware, navigateTo, useFetch } from "#app";
import { authClient } from "../../lib/auth-client";

export default defineNuxtRouteMiddleware(async (to) => {

    // Check if the user is navigating to the seller dashboard route
    const isUserNavigatingToAdminOnly = to.path.startsWith('/dashboard/');
    const { data: loggedIn } = await authClient.useSession(useFetch);
    // loggedIn.value can be a boolean or a session object; ensure it's not a boolean before accessing user
    const isUserSeller = !!(loggedIn.value && typeof loggedIn.value !== 'boolean' && (loggedIn.value as { user?: { role?: string } }).user?.role === 'seller');

    if (isUserNavigatingToAdminOnly && !isUserSeller) {
        return navigateTo('/seller-dashboard');
    }
});