import { FC, useEffect, useState } from 'react';
import Loader from '../../components/Loader';
import useGetProductList, { ProductItem } from '../../services/get-product-list';
import ProductCard from './components/ProductCard';

const ProductList: FC = () => {
  const [cartList, setCartList] = useState<number[]>([]);

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isFetching,
    isFetched,
  } = useGetProductList({
    limit: '16',
    skip: '0',
  }, {
    staleTime: 600000,
  });

  const combinedProductList = [
    ...(data?.pages || [])
  ].reduce(
    (accummulator: ProductItem[], pageData) => ([
      ...accummulator,
      ...(pageData?.products || []),
    ]),
    [],
  );

  useEffect(() => {
    const onScroll = () => {
      if (document.documentElement.scrollTop + window.innerHeight >= document.documentElement.scrollHeight - 200 && !isFetching) {
        fetchNextPage();
      }
    };
    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [fetchNextPage, hasNextPage, isFetching]);

  return (isFetching && !isFetched) ? <Loader /> : (
    <div className="mx-auto max-w-2xl lg:max-w-7xl">
      <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {combinedProductList?.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            thumbnail={product.thumbnail}
            title={product.title}
            category={product.category}
            description={product.description}
            rating={product.rating}
            price={product.price}
            stock={product.stock}
            discountPercentage={product.discountPercentage}
            isAddedToCart={cartList.some(productId => productId === product.id)}
            onAddToCart={productId => setCartList(prevList => [...prevList, productId])}
          />
        ))}
        {isFetchingNextPage && <Loader />}
      </div>
    </div>
  );
};

export default ProductList;
