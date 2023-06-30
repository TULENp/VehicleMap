import i18n from 'i18next';
import * as Localization from 'expo-localization';
import { initReactI18next } from "react-i18next";
import en from './translations/en.json';
import ru from './translations/ru.json';


// language detection plugin 
const languageDetector = {
    type: 'languageDetector',
    async: true, // async detection
    detect: (callback) => {
        // will return users language code (like "en-UK").
        callback(Localization.locale);
    },
};

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .use(languageDetector) // pass language detector
    .init({
        fallbackLng: 'en-US',
        compatibilityJSON: 'v3',
        //languages
        resources: {
            'en-US': {
                translation: en
            },
            'ru-RU': {
                translation: ru
            },
            // initial namespace
            ns: ['translation'],
            defaultNS: 'translation',
            interpolation: {
                escapeValue: false // not needed for react
            }
        }
    })
export default i18n;