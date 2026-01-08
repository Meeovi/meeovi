declare module '#auth-utils' {
  interface User {
    bluesky?: string
    webauthn?: string
    email?: string
    password?: string
    github?: string
    google?: string
    twitch?: string
    magento?: string
    microsoft?: string
    directus?: string
    keycloak?: string
    linkedin?: string
    facebook?: string
    x?: string
  }

  interface UserSession {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    extended?: any
    jwt?: {
      accessToken: string
      refreshToken: string
    }
    loggedInAt: number
  }

  interface SecureSessionData {
  }
}

export {}