import type { Metadata } from 'next';
import { Inter, Bebas_Neue } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const bebasNeue = Bebas_Neue({ weight: '400', subsets: ['latin'], variable: '--font-bebas' });

export const metadata: Metadata = {
  title: 'Ablazo Cut - Premium Barbershop',
  description: 'Premium barbershop offering expert grooming services. Look Sharp. Feel Confident.',
  keywords: ['barbershop', 'haircut', 'fade', 'grooming', 'barber', 'fade haircut'],
  authors: [{ name: 'Ablazo Cut' }],
  openGraph: {
    title: 'Ablazo Cut - Premium Barbershop',
    description: 'Look Sharp. Feel Confident.',
    type: 'website',
    locale: 'en_US',
    images: [{
      url: 'https://images.unsplash.com/photo-1622287566021-d5e8d9c16dab?w=1200&h=630&fit=crop',
      width: 1200,
      height: 630,
      alt: 'Ablazo Cut Barbershop',
    }],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${bebasNeue.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#111111" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-dark text-white font-inter">
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
