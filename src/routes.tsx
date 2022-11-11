import { FC, lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loader from "./components/Loader";
import MainLayout from "./layout/main";

const ProductList = lazy(() => import('./pages/products'));
const ProductListByCategory = lazy(() => import('./pages/products/category'));
const Cart = lazy(() => import('./pages/cart'));

const AppRoutes: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route
            index
            element={(
              <Suspense fallback={<Loader />}>
                <ProductList />
              </Suspense>
            )}
          />
          <Route
            path="category/:id"
            element={(
              <Suspense fallback={<Loader />}>
                <ProductListByCategory />
              </Suspense>
            )}
          />
          <Route
            path="cart"
            element={(
              <Suspense fallback={<Loader />}>
                <Cart />
              </Suspense>
            )}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};


export default AppRoutes;
