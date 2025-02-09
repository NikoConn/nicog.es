// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import en from './locales/en.json';
import es from './locales/es.json';

i18n
  .use(LanguageDetector) // Detects the language
  .use(initReactI18next) // Passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: en, // English translations
      },
      es: {
        translation: es, // French translations
      },
    },
    lng: 'en', // Default language
    fallbackLng: 'en', // Fallback language if key is missing in current language
    interpolation: {
      escapeValue: false, // React already escapes the values
    },
  });

export default i18n;
