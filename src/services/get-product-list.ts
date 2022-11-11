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

export type GetProductListResponse = {
  products: ProductItem[];
  total: number;
  skip: number;
  limit: number;
} | undefined;

export type GetProductListParams = {
  category?: string;
  limit: string;
  skip: string;
};

export type GetProductListModel = (params: GetProductListParams) => Promise<GetProductListResponse>;

const ENDPOINT = 'https://dummyjson.com/products';

export const getProductList: GetProductListModel = async ({
  category,
  ...otherParams
}) => {
  const endpointWithCategory = category
    ? `/category/${category}`
    : '';
  
  const params = new URLSearchParams(otherParams).toString();

  try {
    const result = await fetch(`${ENDPOINT}${endpointWithCategory}?${params}`);
    return await result.json();
  } catch (e) {
    throw e;
  }
};

const useGetProductList = (
  params: GetProductListParams,
  options: UseInfiniteQueryOptions<GetProductListResponse>,
) => {
  return useInfiniteQuery({
    queryKey: ['getProductList', params],
    queryFn: ({ pageParam }) => getProductList({
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

export default useGetProductList;
