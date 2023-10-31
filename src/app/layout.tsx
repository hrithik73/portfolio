import './globals.css';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '~//components/theme-provider';
import { Analytics } from '~//components/analytics';
import Header from '~/components/ui/header';
import Footer from '~/components/ui/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Hrtik Singh',
  description: 'Personal portfolio of Hritik Singh',
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang='en'>
      <body
        className={`antialiased min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50 ${inter.className}`}
      >
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          <div className='max-w-2xl mx-auto py-10 px-4'>
            <Header />
            <main>{children}</main>
            <Footer />
          </div>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
