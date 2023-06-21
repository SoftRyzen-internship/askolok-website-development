import { FC } from 'react';
import { Toaster } from 'react-hot-toast';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import { useHeaderHeight } from '@/hooks/useHeaderHeight';

import { ILayout } from './Layout.props';

const Layout: FC<ILayout> = ({ children }) => {
  const { headerHeight, headerRef } = useHeaderHeight();

  return (
    <div className="flex h-full min-h-screen flex-col ">
      <Header HeaderRef={headerRef} headerHeight={headerHeight} />
      <main className="flex-grow">
        {children}
        <Toaster
          position="top-right"
          reverseOrder={false}
          toastOptions={{
            duration: 3000,
          }}
        />
      </main>
      <Footer headerHeight={headerHeight} />
    </div>
  );
};

export default Layout;
