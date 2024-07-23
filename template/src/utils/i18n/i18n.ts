import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import * as RNLocalize from 'react-native-localize'

import authEN from './locales/auth.en.json'
import authFR from './locales/auth.fr.json'
import { RootState, store } from '../../redux/store'
import { updateLanguage } from '../../redux/appSlice'

export const resources = {
  en: {
    auth: authEN,
  },
  fr: {
    auth: authFR,
  },
}

const supportedLanguages = Object.keys(resources)

const languageTag =
  RNLocalize.getLocales()
    .map((locale) => locale.languageTag.split('-')[0]) // for example, fr-FR and fr-CA all both "fr"
    .find((lang) => supportedLanguages.includes(lang)) || 'en'

i18n.use(initReactI18next).init({
  resources,
  lng: languageTag,
  fallbackLng: 'en',
  compatibilityJSON: 'v3',
  interpolation: {
    escapeValue: false,
  },
})

i18n.on('languageChanged', (lng) => {
  const state = store.getState() as RootState
  if (state.app.lang !== lng) store.dispatch(updateLanguage({ lang: lng }))
})

export default i18n
