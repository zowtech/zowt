import { ReactNode } from 'react';
import { Navigation } from './Navigation';
import { Footer } from './Footer';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-dark-slate text-white">
      <Navigation />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
}
