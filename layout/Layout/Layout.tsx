import { FC } from 'react';
import { Toaster } from 'react-hot-toast';
import Head from 'next/head';

import { ILayout } from './Layout.props';
import Header from '@/page-components/Header/Header';

const Layout: FC<ILayout> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Асколок Анастасия</title>
        <meta
          name="description"
          content="Одностраничный сайт визитка человека, который занимается разработкой сайтов"
        />
      </Head>
      <div className=" flex h-full min-h-screen flex-col">
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
      </div>
    </>
  );
};

export default Layout;
