import { useLanguage } from '../context/LanguageContext';

// Import translations
import idTranslations from '../locales/id.json';
import enTranslations from '../locales/en.json';

const translations = {
  id: idTranslations,
  en: enTranslations
};

export const useTranslation = () => {
  const { language } = useLanguage();

  const t = (key) => {
    const keys = key.split('.');
    let value = translations[language];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return value || key; // Return the key if translation not found
  };

  return { t };
};