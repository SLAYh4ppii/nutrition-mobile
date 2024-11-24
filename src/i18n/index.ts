import { initReactI18next } from "react-i18next";
import * as Localization from "expo-localization";
import i18n from "i18next";
import en from "./locales/en";
import tr from "./locales/tr";
import Storage from "../storage";
import { useState } from "react";
import "intl-pluralrules";

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

const initI18n = () => {
  const savedLanguage = Storage.getItem("LANGUAGE_CODE");

  const systemLanguage = Localization.getLocales();

  i18n.use(initReactI18next).init({
    resources,
    lng: savedLanguage || systemLanguage[0].languageCode || "en",
    fallbackLng: "en",
    compatibilityJSON: "v3",
  });
};

export const changeLanguage = (languageCode: string) => {
  console.log("changeLanguage", languageCode);
  i18n.changeLanguage(languageCode);
  Storage.setItem("LANGUAGE_CODE", languageCode);
};

export const useSelectedLanguage = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

  i18n.on("languageChanged", (lng) => {
    setSelectedLanguage(lng);
  });

  return selectedLanguage;
};

initI18n();

export default i18n;
