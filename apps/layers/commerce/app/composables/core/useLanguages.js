import { createDirectus, rest, readItems, readItem } from '@directus/sdk'

export const useLanguages = () => {
  const config = useRuntimeConfig()
  const client = createDirectus(config.public.directus.url).with(rest())

  const getLanguages = async () => {
    return await client.request(
      readItems('languages', {
        filter: { status: { _eq: 'active' } }
      })
    )
  }

  const getTranslations = async (collection, itemId, language) => {
    return await client.request(
      readItems(`${collection}_translations`, {
        filter: {
          _and: [
            { [`${collection}_id`]: { _eq: itemId } },
            { languages_code: { _eq: language } }
          ]
        }
      })
    )
  }

  const getLocalizedContent = async (collection, itemId, language = 'en') => {
    const translations = await getTranslations(collection, itemId, language)
    return translations.length > 0 ? translations[0] : null
  }

  const getCurrentLanguage = () => {
    return useNuxtApp().$i18n?.locale?.value || 'en'
  }

  return { getLanguages, getTranslations, getLocalizedContent, getCurrentLanguage }
}