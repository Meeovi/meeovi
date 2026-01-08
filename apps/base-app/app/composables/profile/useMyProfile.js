export const useMyProfile = () => {
    const { $directus } = useNuxtApp();
    const user = useSupabaseUser();
    const profile = ref(null);
  
    const loadProfile = async () => {
      if (!user.value) return;
      profile.value = await $directus.items('users').readItem(user.value.id);
    };
  
    return { profile, loadProfile };
  };
  