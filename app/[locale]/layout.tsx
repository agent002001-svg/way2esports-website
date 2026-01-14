import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import { ReactNode } from 'react';
import { locales } from '../../i18n';
import { TranslationProvider } from '../../lib/translation-context';

export default async function LocaleLayout({
  children,
  params
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!locales.includes(locale as any)) notFound();

  setRequestLocale(locale);

  const messages = (await import(`../../messages/${locale}.json`)).default;

  return (
    <html lang={locale} suppressHydrationWarning>
      <body>
        <TranslationProvider locale={locale} messages={messages}>
          {children}
        </TranslationProvider>
      </body>
    </html>
  );
}
