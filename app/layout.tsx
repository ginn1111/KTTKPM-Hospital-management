import Providers from '@/components/Providers';
import { IBM_Plex_Sans } from 'next/font/google';
import './globals.css';

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ['vietnamese'],
  weight: '400',
  variable: '--font-sans',
  display: 'swap',
});

export const metadata = {
  title: 'Quản lý bệnh viện',
  description: 'Website quản lý bệnh viện',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${ibmPlexSans.variable} font-sans`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
