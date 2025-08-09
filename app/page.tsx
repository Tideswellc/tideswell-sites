'use client';
import { useMemo } from 'react';
import './styles.css';

const sites = {
  soccerdealsdaily: {
    name: 'Soccer Deals Daily',
    primary: '#2ecc71',
    bg: '#0a0a0a',
    text: '#ffffff',
    tagline: 'Daily steals on boots, kits, and gear',
  },
  techsaverdaily: {
    name: 'Tech Saver Daily',
    primary: '#1e90ff',
    bg: '#0b1320',
    text: '#ffffff',
    tagline: 'Best daily deals in consumer tech',
  },
  luxurydealsdaily: {
    name: 'Luxury Deals Daily',
    primary: '#ffd700',
    bg: '#0a0a0a',
    text: '#ffffff',
    tagline: 'Designer fashion & watches on sale',
  },
  fashiondealsdaily: {
    name: 'Fashion Deals Daily',
    primary: '#e74c3c',
    bg: '#0b0b0b',
    text: '#ffffff',
    tagline: 'Streetwear, activewear, everyday style',
  },
  devicedealsdaily: {
    name: 'Device Deals Daily',
    primary: '#f39c12',
    bg: '#0b1320',
    text: '#ffffff',
    tagline: 'Phones, gadgets & small electronics',
  },
  activegeardeals: {
    name: 'Active Gear Deals',
    primary: '#27ae60',
    bg: '#0a0f0a',
    text: '#ffffff',
    tagline: 'Fitness gear & accessories on sale',
  },
};

function getSite() {
  const url = new URL(window.location.href);
  const s = (url.searchParams.get('site') || 'soccerdealsdaily') as keyof typeof sites;
  return sites[s] ?? sites.soccerdealsdaily;
}

export default function Home() {
  const site = useMemo(() => getSite(), []);

  return (
    <div style={{ background: site.bg, color: site.text, minHeight: '100vh' }}>
      <header style={{ padding: 24, borderBottom: `1px solid ${site.primary}` }}>
        <div style={{ fontSize: 28, fontWeight: 800, color: site.primary }}>{site.name}</div>
        <div style={{ opacity: 0.8 }}>{site.tagline}</div>
      </header>

      <main style={{ padding: 24, maxWidth: 1100, margin: '0 auto' }}>
        <h2 style={{ color: site.primary }}>It works.</h2>
        <p>This is a clean starter so we can deploy without errors. Use the <code>?site=</code> query to switch themes:</p>
        <ul>
          <li>?site=soccerdealsdaily</li>
          <li>?site=techsaverdaily</li>
          <li>?site=luxurydealsdaily</li>
          <li>?site=fashiondealsdaily</li>
          <li>?site=devicedealsdaily</li>
          <li>?site=activegeardeals</li>
        </ul>
      </main>

      <footer style={{ padding: 24, borderTop: `1px solid ${site.primary}`, opacity: 0.8 }}>
        © {new Date().getFullYear()} {site.name}. All rights reserved.
      </footer>
    </div>
  );
}
