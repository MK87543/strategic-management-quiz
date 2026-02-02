import './globals.css';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  weight: ['300', '400', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: 'Strategic Management Quiz',
  description: 'Master your exam prep with interactive quiz questions',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.className}>
      <body>{children}</body>
    </html>
  );
}