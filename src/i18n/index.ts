import { initReactI18next } from "react-i18next";
import i18n from "i18next";
import en from "./locales/en";
import tr from "./locales/tr";
import "intl-pluralrules";
import Storage from "../storage";
import { useState, useEffect } from "react";

export const LANGUAGES = [
  { name: "English", originalName: "English", code: "en" },
  { name: "Turkish", originalName: "Türkçe", code: "tr" },
];

const resources = {
  en: {
    translation: en,
  },
  tr: {
    translation: tr,
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // Default language
    fallbackLng: "en",
    compatibilityJSON: "v3",
    react: {
      useSuspense: false,
      bindI18n: 'languageChanged loaded',
      bindI18nStore: 'added removed',
      transEmptyNodeValue: '',
    },
    interpolation: {
      escapeValue: false,
    },
    debug: false
  });

export const changeLanguage = async (languageCode: string) => {
  try {
    await i18n.changeLanguage(languageCode);
    await Storage.setItem("LANGUAGE_CODE", languageCode);
    console.log('Language changed to:', languageCode);
  } catch (error) {
    console.error('Error changing language:', error);
  }
};

export const useSelectedLanguage = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

  useEffect(() => {
    const handleLanguageChanged = (lng: string) => {
      setSelectedLanguage(lng);
    };

    i18n.on("languageChanged", handleLanguageChanged);

    return () => {
      i18n.off("languageChanged", handleLanguageChanged);
    };
  }, []);

  return selectedLanguage;
};

export default i18n;
