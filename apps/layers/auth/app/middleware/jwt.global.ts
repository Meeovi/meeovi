import { appendResponseHeader } from 'h3'
import { parse, parseSetCookie, serialize } from 'cookie-es'
import type { JwtData } from '@tsndr/cloudflare-worker-jwt'
import { decode } from '@tsndr/cloudflare-worker-jwt'

export default defineNuxtRouteMiddleware(async () => {
  const nuxtApp = useNuxtApp()
  // Don't run on client hydration when server rendered
  if (import.meta.client && nuxtApp.isHydrating && nuxtApp.payload.serverRendered) return

  // Resolve session from BetterAuth on client, or server getAuthSession on server
  let sessionVal: any = null
  let clearSession = async () => {}
  let fetchSession = async () => null

  const runtimeConfig = useRuntimeConfig()

  if (import.meta.server) {
    try {
      const event = useRequestEvent()
      // `getAuthSession` is provided by the server utils
      const mod = await import('~~/layers/shared/server/utils/auth').catch(() => null)
      const getAuthSession = mod?.getAuthSession
      if (getAuthSession) sessionVal = await getAuthSession(event)
    } catch (e) {
      // ignore
    }
  } else {
    // client-side auth composable
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const auth: any = (globalThis as any).$useAuth ?? (typeof useAuth !== 'undefined' ? useAuth() : null)
    if (auth) {
      fetchSession = async () => { if (typeof auth.fetchSession === 'function') return auth.fetchSession(); if (typeof auth.fetch === 'function') return auth.fetch(); return null }
      clearSession = async () => { if (typeof auth.signOut === 'function') return auth.signOut(); if (typeof auth.clear === 'function') return auth.clear(); return null }
      sessionVal = auth.session ? (await auth.session) : null
    }
  }

  // If no session or no jwt present, nothing to do
  const jwt = sessionVal?.jwt
  if (!jwt) return

  const { accessToken, refreshToken } = jwt

  if (!accessToken || !refreshToken) {
    return
  }

  const accessPayload = decode(accessToken)
  const refreshPayload = decode(refreshToken)

  // Both tokens expired, clearing session
  if (isExpired(accessPayload) && isExpired(refreshPayload)) {
    console.info('both tokens expired, clearing session')
    await clearSession()
    // return navigateTo('/login')
  }
  // Access token expired, refreshing
  else if (isExpired(accessPayload)) {
    console.info('access token expired, refreshing')
    await useRequestFetch()('/api/jwt/refresh', {
      method: 'POST',
      onResponse({ response: { headers } }) {
        // Forward the Set-Cookie header to the main server event
        if (import.meta.server && serverEvent) {
          for (const setCookie of headers.getSetCookie()) {
            appendResponseHeader(serverEvent, 'Set-Cookie', setCookie)
            // Update session cookie for next fetch requests
            const { name, value } = parseSetCookie(setCookie)
            if (name === runtimeConfig.session.name) {
              // console.log('updating headers.cookie to', value)
              const cookies = parse(serverEvent.headers.get('cookie') || '')
              // set or overwrite existing cookie
              cookies[name] = value
              // update cookie event header for future requests
              serverEvent.headers.set('cookie', Object.entries(cookies).map(([name, value]) => serialize(name, value)).join('; '))
              // Also apply to serverEvent.node.req.headers
              if (serverEvent.node?.req?.headers) {
                serverEvent.node.req.headers['cookie'] = serverEvent.headers.get('cookie') || ''
              }
            }
          }
        }
      },
    })
    // refresh the session
    await fetchSession()
  }
})

function isExpired(payload: JwtData) {
  return payload.payload?.exp && payload.payload.exp < (Date.now() / 1000)
}