import { FC, PropsWithChildren } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { ShoppingBagIcon } from '@heroicons/react/24/solid';

import styles from './main.module.css';
import Text from '../../components/Text';
import Button from '../../components/Button';

const MainLayout: FC<PropsWithChildren> = () => {
  const navigate = useNavigate()

  return (
    <main className={`${styles.main_layout}`}>
      <header className="bg-white border-b-2 mx-5 py-5 flex justify-between max-w-7xl xl:mx-auto">
        <Text
          textElement="h1"
          size="3xl"
          weight="bold"
          letterSpacing="tight"
          color="rose-600"
        >
          Pintap Ecommerce
        </Text>
        <Button
          variant="secondary"
          className="w-10 h-10"
          onClick={() => navigate('/cart')}
        >
          <ShoppingBagIcon className="w-6 h-6" />
        </Button>
      </header>

      <section className="mx-5 max-w-7xl xl:mx-auto py-5">
        <Outlet />
      </section>
    </main>
  );
};

export default MainLayout;
