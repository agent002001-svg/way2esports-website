'use client';

import { useTranslation } from '../lib/translation-context';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer
      style={{
        background: '#020617',
        color: 'white',
        padding: '60px 40px'
      }}
    >
      <div
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '30px'
        }}
      >
        {/* Brand */}
        <div>
          <h3 style={{ fontSize: '20px', marginBottom: '10px' }}>
            Way2 Esports
          </h3>
          <p style={{ opacity: 0.7, fontSize: '14px' }}>
            {t('footerAbout')}
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 style={{ marginBottom: '10px' }}>{t('footerLinks')}</h4>
          <ul style={{ listStyle: 'none', padding: 0, opacity: 0.8 }}>
            <li>About Us</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 style={{ marginBottom: '10px' }}>{t('footerFollow')}</h4>
          <div style={{ display: 'flex', gap: '10px' }}>
            <a
              href="https://youtube.com"
              target="_blank"
              style={{ color: 'white', textDecoration: 'none' }}
            >
              ▶ YouTube
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              style={{ color: 'white', textDecoration: 'none' }}
            >
              📸 Instagram
            </a>
          </div>
        </div>
      </div>

      <div
        style={{
          marginTop: '40px',
          borderTop: '1px solid #1e293b',
          paddingTop: '20px',
          textAlign: 'center',
          opacity: 0.6,
          fontSize: '14px'
        }}
      >
        © {new Date().getFullYear()} Way2 Esports. {t('footerRights')}
      </div>
    </footer>
  );
}
