// src/app/layout.js
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Sistema Académico',
  description: 'Sistema de gestión con roles académicos',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${inter.className} body`}>
        {children}
      </body>
    </html>
  );
}
