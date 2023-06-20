import { FC } from 'react';
import { Toaster } from 'react-hot-toast';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import { ILayout } from './Layout.props';

const Layout: FC<ILayout> = ({ children }) => {
  return (
    <div className="flex h-full min-h-screen flex-col ">
      <Header />
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
      <Footer />
    </div>
  );
};

export default Layout;
