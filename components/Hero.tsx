'use client';

import { useTranslation } from '../lib/translation-context';

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section
      style={{
        minHeight: '80vh',
        background: 'linear-gradient(135deg, #020617, #000000)',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '40px'
      }}
    >
      <div>
        <h1
          style={{
            fontSize: '48px',
            fontWeight: 'bold',
            marginBottom: '20px'
          }}
        >
          {t('heroTitle')}
        </h1>

        <p
          style={{
            fontSize: '18px',
            opacity: 0.8,
            marginBottom: '30px'
          }}
        >
          {t('heroSubtitle')}
        </p>

        <div>
          <button
            style={{
              padding: '12px 24px',
              fontSize: '16px',
              background: '#2563eb',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer'
            }}
          >
            {t('downloadApp')}
          </button>

          <button
            style={{
              padding: '12px 24px',
              fontSize: '16px',
              background: 'transparent',
              color: 'white',
              border: '1px solid white',
              borderRadius: '8px',
              marginLeft: '16px',
              cursor: 'pointer'
            }}
          >
            {t('joinTournament')}
          </button>
        </div>
      </div>
    </section>
  );
}
