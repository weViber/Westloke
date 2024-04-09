import '@/styles/globals.css';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import SessionProvider from '@/components/SessionProvider';
import StayTuned from '@/components/main/StayTuned';
import { cn } from '@/utils/style';
import { getServerSession } from 'next-auth';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'Wesloke',
  description: 'Wesloke',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession();

  return (
    <html lang="en">
      <body className={cn('scrollbar flex lg:text-base', poppins.className)}>
        <SessionProvider session={session}>
          <div className="flex flex-1 flex-col">
            <Header />
            <main className="flex flex-1 flex-col">
              {children}
              <StayTuned />
              <Footer />
            </main>
          </div>
        </SessionProvider>
      </body>
    </html>
  );
}
