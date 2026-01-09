import { createDirectus, rest, authentication, readItem, readItems, createItem, deleteItem, uploadFiles, readSingleton, readFieldsByCollection } from '@directus/sdk';
import type { DirectusSchema } from '~/types/directus';

export default defineNuxtPlugin(() => {
	const config = useRuntimeConfig()

	const directus = createDirectus<DirectusSchema>(`${config.public.directus.url}`)
		.with(rest())
		.with(authentication())

	return {
		provide: { directus, readItem, readItems, createItem, deleteItem, uploadFiles, readSingleton, readFieldsByCollection },
	};
});