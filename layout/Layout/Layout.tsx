import { FC } from 'react';
import { Toaster } from 'react-hot-toast';

import Header from '@/page-components/Header/Header';
import Footer from '@/page-components/Footer/Footer';

import { ILayout } from './Layout.props';

const Layout: FC<ILayout> = ({ children }) => {
  return (
    <>
      <Header />
      <div className="flex h-full min-h-screen flex-col ">
        <main className="flex-grow">
          {children}
          <Toaster
            position="top-right"
            reverseOrder={false}
            // toastOptions={{
            //   duration: 15000,
            // }}
          />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
