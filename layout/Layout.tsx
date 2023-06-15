import { FC } from 'react';
import { Toaster } from 'react-hot-toast';
import Policy from ""

import { ILayout } from './Layout.props';
import Header from '@/page-components/Header/Header';

const Layout: FC<ILayout> = ({ children }) => {
  return (
    <div className=" flex h-full min-h-screen flex-col">
      <Header />
      <main className="flex-grow">
        {children}
        <Toaster
          position="top-right"
          reverseOrder={false}
          toastOptions={{
            duration: 15000,
          }}
        />
      </main>
      <Policy />
    </div>
  );
};

export default Layout;
