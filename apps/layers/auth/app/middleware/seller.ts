import { authClient } from "../../lib/auth-client";

export default defineNuxtRouteMiddleware(async (to) => {

    // Check if the user is navigating to the seller dashboard route
    const isUserNavigatingToAdminOnly = to.path.startsWith('/dashboard/');
    const { data: loggedIn } = await authClient.useSession(useFetch);
    const isUserSeller = loggedIn.value?.user.role === 'seller';

    if (isUserNavigatingToAdminOnly && !isUserSeller) {
        return navigateTo('/');
    }

});