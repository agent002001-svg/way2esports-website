'use client';

import Navbar from '../../components/Navbar';
import Hero from '../../components/Hero';
import Games from '../../components/Games';
import Features from '../../components/Features';
import DownloadApp from '../../components/DownloadApp';
import Socials from '../../components/Socials';
import Footer from '../../components/Footer';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Games />
      <Features />
      <DownloadApp />
      <Socials />
      <Footer />
    </>
  );
}
