import { FC, PropsWithChildren } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { ShoppingBagIcon } from '@heroicons/react/24/solid';

import styles from './main.module.css';

const MainLayout: FC<PropsWithChildren> = () => {
  const navigate = useNavigate()

  return (
    <main className={`${styles.main_layout}`}>
      <header className="bg-white border-b-2 mx-5 py-5 flex justify-between max-w-7xl xl:mx-auto">
        <h1 className="text-black font-bold text-3xl tracking-tight">
          Pintap Ecommerce
        </h1>
        <button
          className="flex-none flex items-center justify-center rounded-full"
          onClick={() => navigate('/cart')}
        >
          <ShoppingBagIcon className="w-6 h-6" />
        </button>
      </header>

      <section className="mx-5 max-w-7xl xl:mx-auto py-5">
        <Outlet />
      </section>
    </main>
  );
};

export default MainLayout;
