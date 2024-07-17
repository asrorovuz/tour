import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import languageDetector from "i18next-browser-languagedetector"

import uzTranslation from "../public/locales/uz.json"
import enTranslation from "../public/locales/en.json"
import ruTranslation from "../public/locales/ru.json"

const languageDefault = localStorage.getItem("i18nextLng") || "uz"

i18n
.use(Backend)
//tilni aniqlash
.use(languageDetector)
//reactni i18next bilan bog'lash
.use(initReactI18next)
//@ts-ignore
.init({
    fallbackLng: "en",
    lng: languageDefault,
    // debug: true,
    resources: {
        uz: {translation: uzTranslation},
        ru: {translation: ruTranslation},
        en: {translation: enTranslation},
    }
})

export default i18n;