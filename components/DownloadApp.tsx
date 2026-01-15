'use client';

import { useTranslation } from '../lib/translation-context';

export default function DownloadApp() {
  const { t } = useTranslation();

  return (
    <section
      style={{
        background: '#020617',
        color: 'white',
        padding: '100px 40px',
        textAlign: 'center'
      }}
    >
      <h2
        style={{
          fontSize: '36px',
          fontWeight: 'bold',
          marginBottom: '20px'
        }}
      >
        {t('downloadTitle')}
      </h2>

      <p
        style={{
          fontSize: '18px',
          opacity: 0.8,
          marginBottom: '30px'
        }}
      >
        {t('downloadSubtitle')}
      </p>

      <a
        href="#"
        style={{
          display: 'inline-block',
          padding: '14px 28px',
          fontSize: '18px',
          background: '#2563eb',
          color: 'white',
          borderRadius: '10px',
          textDecoration: 'none'
        }}
      >
        {t('downloadApp')}
      </a>
    </section>
  );
}
