import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import es from './locales/es.json'
import en from './locales/en.json'
import fr from './locales/fr.json'
import ru from './locales/ru.json'

const resources = {
  es: { translation: es },
  en: { translation: en },
  fr: { translation: fr },
  ru: { translation: ru }
}

i18n.use(initReactI18next).init({
  resources,
  lng: 'es',
  fallbackLng: 'en',
  interpolation: { escapeValue: false }
})

export default i18n
