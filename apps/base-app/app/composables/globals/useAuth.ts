export const useAuth = () => {
    const {
      $supabase
    } = useNuxtApp()

    const user = useState < any | null > ('auth-user', () => null)
    const profile = useState < any | null > ('auth-profile', () => null)
    const loading = useState < boolean > ('auth-loading', () => true)

    const fetchProfile = async () => {
      if (!user.value) return

      const data = await $fetch('/api/profile')
      profile.value = data


      const userStore = useUserStore()

      const init = async () => {
        loading.value = true

        const {
          data: {
            user: supaUser
          }
        } = await $supabase.auth.getUser()

        user.value = supaUser ?? null

        if (user.value) {
          await fetchProfile()
          userStore.setAuth(user.value, profile.value)
        } else {
          userStore.clear()
        }

        loading.value = false
      }

      const logout = async () => {
        await $supabase.auth.signOut()
        user.value = null
        profile.value = null
        navigateTo('/login')
      }

      const isAuthenticated = computed(() => !!user.value)
      const isSeller = computed(() => profile.value?.role?.key === 'seller')
      const isAdmin = computed(() => profile.value?.role?.key === 'admin')

      return {
        user,
        profile,
        loading,
        init,
        logout,
        isAuthenticated,
        isSeller,
        isAdmin
      }
    }
  }