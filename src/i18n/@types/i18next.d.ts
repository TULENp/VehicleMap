import en from '../translations/en.json';

// i18next typing file  
declare module 'i18next' {
    interface CustomTypeOptions {
        defaultNS: 'translation';
        resources: {
            translation: typeof en; // add types to namespace
        };
    }
}