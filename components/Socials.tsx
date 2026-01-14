'use client';

import { useTranslation } from '../lib/translation-context';

export default function Socials() {
  const { t } = useTranslation();

  return (
    <section
      style={{
        background: '#000',
        color: 'white',
        padding: '80px 40px',
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
        {t('socialTitle')}
      </h2>

      <p
        style={{
          fontSize: '18px',
          opacity: 0.8,
          marginBottom: '40px'
        }}
      >
        {t('socialSubtitle')}
      </p>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '20px',
          flexWrap: 'wrap'
        }}
      >
        <a
          href="https://youtube.com"
          target="_blank"
          style={{
            padding: '14px 28px',
            background: '#dc2626',
            color: 'white',
            borderRadius: '10px',
            textDecoration: 'none',
            fontSize: '18px'
          }}
        >
          ▶ YouTube
        </a>

        <a
          href="https://instagram.com"
          target="_blank"
          style={{
            padding: '14px 28px',
            background: '#9333ea',
            color: 'white',
            borderRadius: '10px',
            textDecoration: 'none',
            fontSize: '18px'
          }}
        >
          📸 Instagram
        </a>
      </div>
    </section>
  );
}
