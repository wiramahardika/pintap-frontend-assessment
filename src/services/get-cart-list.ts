import { useQuery, UseQueryOptions } from '@tanstack/react-query';

export type CartProduct = {
  id: number;
  title: string;
  price: number;
  quantity: number;
  total: number;
  discountPercentage: number;
  discountedPrice: number;
}

export type CartItem = {
  id: number;
  products: CartProduct[];
  total: number;
  discountedTotal: number;
  userId: number;
  totalProducts: number;
  totalQuantity: number;
};

export type GetCartListResponse = {
  carts: CartItem[];
  total: number;
  skip: number;
  limit: number;
} | undefined;

export type GetCartListModel = () => Promise<GetCartListResponse>;

const ENDPOINT = 'https://dummyjson.com/carts/user/5';

export const getCartList: GetCartListModel = async () => {
  try {
    const result = await fetch(`${ENDPOINT}`);
    return await result.json();
  } catch (e) {
    throw e;
  }
};

const useGetCartList = (
  options: UseQueryOptions<GetCartListResponse>,
) => {
  return useQuery({
    queryKey: ['getCartList'],
    queryFn: () => getCartList(),
    ...options,
  });
};

export default useGetCartList;
