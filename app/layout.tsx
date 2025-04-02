
import './globals.css';
import React from 'react';

export const metadata = {
  title: 'Giga Academy',
  description: 'Web3 Learning Platform: Learn-to-Earn, NFT, DAO',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
