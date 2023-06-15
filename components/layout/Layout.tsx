import { FC } from 'react';
import { Toaster } from 'react-hot-toast';

import { ILayout } from './Layout.props';

const Layout: FC<ILayout> = ({ children }) => {
  return (
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
  );
};

export default Layout;
