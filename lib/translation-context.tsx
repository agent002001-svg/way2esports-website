'use client';

import { createContext, useContext, ReactNode } from 'react';

type Messages = Record<string, string>;

interface TranslationContextType {
  locale: string;
  messages: Messages;
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

export function TranslationProvider({
  locale,
  messages,
  children,
}: {
  locale: string;
  messages: Messages;
  children: ReactNode;
}) {
  return (
    <TranslationContext.Provider value={{ locale, messages }}>
      {children}
    </TranslationContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error('useTranslation must be used within TranslationProvider');
  }

  const t = (key: string): string => {
    return context.messages[key] || key;
  };

  return { t, locale: context.locale };
}
