import './globals.css';
import { Inter, Noto_Sans } from 'next/font/google';
import Head from 'next/head';

export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

const notoSans = Noto_Sans({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
  variable: '--font-notosans',
});

export const metadata = {
  title: 'My Next.js Site',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@300;400;500;600&family=Sedgwick+Ave+Display&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <body className={notoSans.className}>{children}</body>
    </html>
  );
}
