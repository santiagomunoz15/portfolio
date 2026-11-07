import type { Metadata } from 'next';
import './globals.css';
import { assetPath } from '@/lib/assets';
export const metadata: Metadata = { icons: { icon: [{ url: assetPath('favicon.svg'), type: 'image/svg+xml', sizes: 'any' }] }, title: 'Santiago Muñoz — Software Engineer', description: 'Software at the intersection of real-time systems, physical data, and thoughtful interfaces. Explore FlightDeck X, EarthLens, and my engineering work.' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
