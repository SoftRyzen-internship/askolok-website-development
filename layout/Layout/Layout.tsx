import { FC } from 'react';
import { Toaster } from 'react-hot-toast';
import Head from 'next/head';

import { ILayout } from './Layout.props';
import Header from '@/page-components/Header/Header';
import Footer from '@/page-components/Footer/Footer';

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
      <Header />
      <div className="flex flex-col h-full min-h-screen ">
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
