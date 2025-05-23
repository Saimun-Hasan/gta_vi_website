import type { Metadata } from "next";
import localFont from 'next/font/local'
import "./globals.css";
import App from "./app";


const gtaFont = localFont({
  src: [
    {
      path: '../../public/assets/fonts/normal.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/assets/fonts/medium.woff',
      weight: '500',
      style: 'medium',
    },
    {
      path: '../../public/assets/fonts/bold.woff',
      weight: '700',
      style: 'bold',
    },
    {
      path: '../../public/assets/fonts/condensed.woff',
      weight: '800',
      style: 'extra-bold',
    },
  ],
  variable: '--font-gta-deco',
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Grand Theft Auto VI",
  description: "GTA VI Landing Clone",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <App fontVars={`${gtaFont.variable}`}>
        {children}
      </App>
    </html>
  );
}
