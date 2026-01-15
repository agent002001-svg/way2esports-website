'use client';

import { useTranslation } from '../lib/translation-context';

export default function Games() {
  const { t } = useTranslation();

  const games = [
    {
      name: 'Free Fire',
      desc: 'Battle Royale Action'
    },
    {
      name: 'More Coming Soon',
      desc: 'New games will be added'
    }
  ];

  return (
    <section
      style={{
        background: '#020617',
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
        {t('gamesTitle')}
      </h2>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '24px',
          maxWidth: '1000px',
          margin: '0 auto'
        }}
      >
        {games.map((game, index) => (
          <div
            key={index}
            style={{
              background: '#020617',
              border: '1px solid #1e293b',
              borderRadius: '16px',
              padding: '24px',
              textAlign: 'center'
            }}
          >
            <h3 style={{ fontSize: '22px', marginBottom: '10px' }}>
              {game.name}
            </h3>

            <p style={{ opacity: 0.7 }}>{game.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
