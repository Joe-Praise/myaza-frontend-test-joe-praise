import type { Metadata } from 'next';
import { Geist, Geist_Mono, Karla, Space_Grotesk } from 'next/font/google';
import './globals.css';
import QueryClientProvider from '@/lib/tanstack';
import { QueryClient } from '@/lib/tanstack';
import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from '@/components/theme-provider';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});
const karla = Karla({
  variable: '--font-karla',
  subsets: ['latin'],
});
const spaceGrotesk = Space_Grotesk({
  variable: '--font-space-grotesk',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'UiFry',
  description: 'Welcome to UiFry',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={`${geistSans.variable} 
        ${geistMono.variable}
        ${karla.variable}
        ${spaceGrotesk.variable}
         antialiased`}
      >
        <QueryClientProvider client={QueryClient}>
          <ToastContainer />
          <ThemeProvider
            attribute='class'
            defaultTheme=''
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
