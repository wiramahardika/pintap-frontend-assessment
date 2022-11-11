import { useInfiniteQuery, UseInfiniteQueryOptions } from '@tanstack/react-query';

export type ProductItem = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
};

export type GetProductListByCategoryResponse = {
  products: ProductItem[];
  total: number;
  skip: number;
  limit: number;
} | undefined;

export type GetProductListByCategoryParams = {
  category: string;
  limit: string;
  skip: string;
};

export type GetProductListByCategoryModel = (params: GetProductListByCategoryParams) => Promise<GetProductListByCategoryResponse>;

const ENDPOINT = 'https://dummyjson.com/products';

export const getProductListByCategory: GetProductListByCategoryModel = async ({
  category,
  ...otherParams
}) => {
  
  const params = new URLSearchParams(otherParams).toString();

  try {
    const result = await fetch(`${ENDPOINT}/category/${category}?${params}`);
    return await result.json();
  } catch (e) {
    throw e;
  }
};

const useGetProductListByCategory = (
  params: GetProductListByCategoryParams,
  options: UseInfiniteQueryOptions<GetProductListByCategoryResponse>,
) => {
  return useInfiniteQuery({
    queryKey: ['getProductListByCategory', params],
    queryFn: ({ pageParam }) => getProductListByCategory({
      ...params,
      skip: pageParam || params.skip,
    }),
    getNextPageParam: (lastPage) => {
      if (Number(lastPage?.skip || 0) >= Number(lastPage?.total || 0) - Number(lastPage?.limit || 0)) {
        return undefined;
      }

      return Number(lastPage?.skip || 0) + Number(lastPage?.limit || 0);
    },
    ...options,
  });
};

export default useGetProductListByCategory;
