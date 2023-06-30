import i18n from 'i18next';
import * as Localization from 'expo-localization';
import { initReactI18next } from "react-i18next";
import en from './translations/en.json';
import ru from './translations/ru.json';


// creating a language detection plugin using expo
const languageDetector = {
    type: 'languageDetector',
    async: true, // async detection
    detect: (callback) => {
        // We will get back a string like "en-UK".
        callback(Localization.locale);
    },

    init: () => {
    },

    cacheUserLanguage: () => {
    },
};


i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .use(languageDetector)
    .init({
        fallbackLng: 'en-US',
        compatibilityJSON: 'v3',
        // the translations

        resources: {
            'en-US': {
                translation: en
            },
            'ru-RU': {
                translation: ru
            },
            // have a initial namespace
            ns: ['translation'],
            supportedLngs: [  // Supported languages
                {
                    code: 'en-US',
                    locale: 'English'
                }, {
                    code: 'ru-RU',
                    locale: 'Russian'
                }
            ],
            defaultNS: 'translation',
            interpolation: {
                escapeValue: false // not needed for react
            }
        }
    })
export default i18n;