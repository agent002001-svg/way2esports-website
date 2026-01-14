'use client';

import { useTranslation } from '../lib/translation-context';

export default function Features() {
  const { t } = useTranslation();

  const features = [
    t('feature1'),
    t('feature2'),
    t('feature3'),
    t('feature4'),
    t('feature5')
  ];

  return (
    <section
      style={{
        background: '#000',
        color: 'white',
        padding: '80px 40px'
      }}
    >
      <h2
        style={{
          textAlign: 'center',
          fontSize: '36px',
          fontWeight: 'bold',
          marginBottom: '50px'
        }}
      >
        {t('featuresTitle')}
      </h2>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '24px',
          maxWidth: '1000px',
          margin: '0 auto'
        }}
      >
        {features.map((feature, index) => (
          <div
            key={index}
            style={{
              border: '1px solid #1e293b',
              borderRadius: '16px',
              padding: '24px',
              textAlign: 'center',
              background: '#020617'
            }}
          >
            <h3 style={{ fontSize: '20px' }}>{feature}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
