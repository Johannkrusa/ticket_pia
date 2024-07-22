import TanstackProvider from '../providers/tanstack.provider';
import ReduxProvider from '@/providers/redux.provider';
import AuthProvider from '@/providers/authentication.provider';

import { Inter } from 'next/font/google';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ToastContainer} from 'react-toastify';
import type { Metadata } from 'next';

import './globals.css';
import 'react-toastify/dist/ReactToastify.css';


const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'TICKET PIA',
  description: 'TICKET PIA',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TanstackProvider>
          <ReduxProvider>
            <AuthProvider>
              <ToastContainer></ToastContainer>
              <Header />
              {children}
              <Footer />
            </AuthProvider>
          </ReduxProvider>
        </TanstackProvider>
      </body>
    </html>
  );
}
