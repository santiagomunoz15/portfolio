import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'Santiago Muñoz — Software Engineer', description: 'Software at the intersection of real-time systems, physical data, and thoughtful interfaces. Explore FlightDeck X, EarthLens, and my engineering work.' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
