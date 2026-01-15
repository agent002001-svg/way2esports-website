'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  // pathname = /en or /hi or /en/something
  const currentLocale = pathname.split('/')[1];

  const switchTo = currentLocale === 'en' ? 'hi' : 'en';

  const newPath = pathname.replace(`/${currentLocale}`, `/${switchTo}`);

  return (
    <nav
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: '16px 32px',
        background: '#000',
        color: '#fff'
      }}
    >
      {/* Logo */}
      <div style={{ fontWeight: 'bold', fontSize: 20 }}>
        Way2 Esports
      </div>

      {/* Language Switch */}
      <Link
        href={newPath}
        style={{
          border: '1px solid white',
          padding: '6px 12px',
          borderRadius: 6
        }}
      >
        {switchTo === 'en' ? 'English' : 'हिंदी'}
      </Link>
    </nav>
  );
}
