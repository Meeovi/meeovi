import { computed } from 'vue'

// Compatibility composable: expose the old `useDirectusAuth` API but backed by Sidebase Auth
export function useDirectusAuth() {
  // `useAuth` and `useAuthState` are provided by @sidebase/nuxt-auth and auto-imported by Nuxt
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const auth: any = (globalThis as any).$useAuth ?? (typeof useAuth !== 'undefined' ? useAuth() : null)
  // `useAuthState` returns reactive session state
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const authState: any = typeof useAuthState !== 'undefined' ? useAuthState() : { data: null }

  const user = computed(() => authState?.data?.user ?? null)
  const isAuthenticated = computed(() => !!authState?.data)

  async function getCurrentUser() {
    if (user.value) return user.value
    // attempt to refresh session if method available
    try {
      if (auth?.getSession) await auth.getSession()
    } catch (e) {
      // ignore
    }
    return user.value
  }

  // Try to retrieve a cached Directus token (stored by server sync or adapter), or ask server to sync and return token.
  async function getDirectusToken(): Promise<string | null> {
    try {
      if (process.client) {
        const cached = localStorage.getItem('directusToken')
        if (cached) return cached
      }

      const res = await $fetch('/api/sync/user', { credentials: 'include' })
      if (res && res.directusToken) {
        if (process.client) localStorage.setItem('directusToken', res.directusToken)
        return res.directusToken
      }
    } catch (e) {
      // swallow
    }
    return null
  }

  return {
    user,
    isAuthenticated,
    getCurrentUser,
    getDirectusToken,
    // map common auth actions where available
    login: auth?.signIn ?? (async () => { throw new Error('login not available') }),
    logout: auth?.signOut ?? (async () => { throw new Error('logout not available') }),
    authState,
    auth
  }
}

export default useDirectusAuth
