import { en } from '@formkit/i18n'
import { defineFormKitConfig } from '@formkit/vue'
import { rootClasses } from './formkit/formkit.theme'

export default defineFormKitConfig({
  config: {
    rootClasses,
  },
  locales: { en },
  locale: 'en',
})