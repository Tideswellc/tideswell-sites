import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Tideswell Clean Starter',
  description: 'Clean Next.js starter for Cloudflare Pages',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
