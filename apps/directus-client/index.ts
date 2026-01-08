import { createDirectus, authentication, rest } from '@directus/sdk';

const directus = createDirectus(process.env.DIRECTUS_URL || 'http://localhost:8055')
  .with(authentication('json')) // or 'cookie' if using SSR with sessions
  .with(rest());

export default directus;
export * from '@directus/sdk';