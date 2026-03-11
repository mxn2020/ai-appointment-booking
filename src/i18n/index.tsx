import { useState, useCallback, useEffect, createContext, useContext, type ReactNode } from 'react';
import en from './locales/en.json';
import de from './locales/de.json';

type Locale = 'en' | 'de';

const locales: Record<Locale, typeof en> = { en, de };

type NestedKeyOf<T> = T extends object
    ? { [K in keyof T & string]: T[K] extends object ? `${K}.${NestedKeyOf<T[K]>}` : K }[keyof T & string]
    : never;

type TranslationKey = NestedKeyOf<typeof en>;

function getNestedValue(obj: Record<string, unknown>, path: string): string {
    const keys = path.split('.');
    let current: unknown = obj;
    for (const key of keys) {
        if (current && typeof current === 'object' && key in current) {
            current = (current as Record<string, unknown>)[key];
        } else {
            return path;
        }
    }
    return typeof current === 'string' ? current : path;
}

interface I18nContextValue {
    locale: Locale;
    setLocale: (locale: Locale) => void;
    t: (key: TranslationKey) => string;
    availableLocales: Locale[];
}

const I18nContext = createContext<I18nContextValue | null>(null);

const STORAGE_KEY = 'mehdi-verse-locale';

function getInitialLocale(): Locale {
    if (typeof window === 'undefined') return 'en';
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'en' || stored === 'de') return stored;
    const browserLang = navigator.language.split('-')[0];
    return browserLang === 'de' ? 'de' : 'en';
}

export function I18nProvider({ children }: { children: ReactNode }) {
    const [locale, setLocaleState] = useState<Locale>(getInitialLocale);

    const setLocale = useCallback((newLocale: Locale) => {
        setLocaleState(newLocale);
        localStorage.setItem(STORAGE_KEY, newLocale);
        document.documentElement.lang = newLocale;
    }, []);

    useEffect(() => {
        document.documentElement.lang = locale;
    }, [locale]);

    const t = useCallback(
        (key: TranslationKey): string => getNestedValue(locales[locale] as unknown as Record<string, unknown>, key),
        [locale],
    );

    return (
        <I18nContext.Provider value={{ locale, setLocale, t, availableLocales: ['en', 'de'] }}>
            {children}
        </I18nContext.Provider>
    );
}

export function useTranslation() {
    const ctx = useContext(I18nContext);
    if (!ctx) throw new Error('useTranslation must be used within I18nProvider');
    return ctx;
}

export type { Locale, TranslationKey };
