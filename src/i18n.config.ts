import en from '@/i18n/en.json'

// You can use `defineI18nConfig` to get type inferences for options to pass to vue-i18n.
export default defineI18nConfig(() => {
  return {
    defaultLocale: 'en',
    legacy: false,
    locale: 'en',
    lazy: false,
    messages: {
      en
    }
  }
})
