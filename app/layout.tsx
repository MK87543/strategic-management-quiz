import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Strategic Management Quiz',
  description: 'Interactive quiz for strategic management exam preparation',
  viewport: 'width=device-width, initial-scale=1.0',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
