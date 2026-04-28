"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  type ReactNode,
} from "react";
import en, { type TranslationKeys } from "./translations/en";
import es from "./translations/es";

type Locale = "en" | "es";

interface I18nContextType {
  locale: Locale;
  t: TranslationKeys;
  setLocale: (locale: Locale) => void;
}

const translations: Record<Locale, TranslationKeys> = { en, es };

const I18nContext = createContext<I18nContextType>({
  locale: "en",
  t: en,
  setLocale: () => {},
});

/**
 * Detects the user's preferred locale from the browser.
 * Returns "es" if the browser language starts with "es", otherwise "en".
 */
function detectLocale(): Locale {
  if (typeof navigator === "undefined") return "en";

  const browserLang =
    navigator.language || (navigator as { userLanguage?: string }).userLanguage || "en";

  return browserLang.toLowerCase().startsWith("es") ? "es" : "en";
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("dc-locale") as Locale | null;
    const initial = saved ?? detectLocale();
    setLocaleState(initial);
    setMounted(true);
  }, []);

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem("dc-locale", newLocale);
  }, []);

  // Avoid hydration mismatch by rendering children only after mount
  if (!mounted) {
    return (
      <I18nContext.Provider value={{ locale: "en", t: en, setLocale }}>
        {children}
      </I18nContext.Provider>
    );
  }

  return (
    <I18nContext.Provider
      value={{ locale, t: translations[locale], setLocale }}
    >
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  return useContext(I18nContext);
}
