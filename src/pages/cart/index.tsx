import { MinusCircleIcon, PlusCircleIcon } from '@heroicons/react/24/outline';
import { FC, useEffect, useState } from 'react';
import useGetCartList, { CartProduct } from '../../services/get-cart-list';

const currencyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

const Cart: FC = () => {
  const [localCartList, setLocalCartList] = useState<CartProduct[]>([]);

  const calculatedSubTotal = localCartList.reduce(
    (accummulator, product) => accummulator + ((product.discountedPrice || product.price) * product.quantity),
    0,
  );

  const {
    data: getCartListResponse,
  } = useGetCartList({ staleTime: 600000 });

  const handleQtyChange = (productId: number, newQtyValue: number) => {
    if (newQtyValue >= 0) {
      setLocalCartList(prevCartList => {
        const matchedIndex = prevCartList.findIndex(prevCart => prevCart.id === productId);
        return Object.assign([], prevCartList, {
          [matchedIndex]: {
            ...prevCartList[matchedIndex],
            quantity: newQtyValue,
          }
        });
      });
    }
  };
  
  const handleRemoveProduct = (productId: number) => () => {
    setLocalCartList(prevCartList => prevCartList.filter(prevCart => prevCart.id !== productId));
  };

  useEffect(() => {
    if (getCartListResponse?.carts?.[0]?.products) {
      setLocalCartList(getCartListResponse?.carts?.[0]?.products);
    }
  }, [getCartListResponse]);

  return (
    <div className="flex flex-col lg:flex-row gap-2">
      <div className="flex-1 overflow-y-auto py-6">
        <h2 className="text-2xl font-bold text-gray-900">Shopping cart</h2>

        <div className="mt-8">
          <div className="flow-root">
            <ul className="-my-6 divide-y divide-gray-200">
              {localCartList.map((product) => (
                <li key={product.id} className="flex py-6">
                  <div className="flex flex-1 flex-col">
                    <div>
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <h3>
                          {product.title}
                        </h3>
                        {!product.discountPercentage && (
                          <div className="text-lg font-bold text-gray-900 flex gap-1 items-center">
                            {currencyFormatter.format(product.price)}
                          </div>
                        )}
                        {Boolean(product.discountPercentage) && (
                          <div className="flex flex-col items-end">
                            <span className="text-xs font-medium text-gray-400 line-through">
                              {currencyFormatter.format(product.price)}
                            </span>
                            <span className="text-lg font-bold text-gray-900">
                              {currencyFormatter.format(product.discountedPrice)}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="flex flex-1 items-end justify-between mt-3">
                      <div className="flex gap-1">
                        <button
                          className="text-gray-600 disabled:text-gray-300"
                          disabled={product.quantity < 2}
                          onClick={() => handleQtyChange(product.id, product.quantity - 1)}
                        >
                          <MinusCircleIcon className="w-5" />
                        </button>
                        <input
                          type="text"
                          name="qty"
                          className="border-gray-300 p-2 border w-12 text-center"
                          placeholder="0"
                          value={product.quantity}
                          onChange={event => {
                            handleQtyChange(product.id, Number(event.target.value || 0))
                          }}
                        />
                        <button
                          className="text-gray-600"
                          onClick={() => handleQtyChange(product.id, product.quantity + 1)}
                        >
                          <PlusCircleIcon className="w-5" />
                        </button>
                      </div>

                      <div className="flex">
                        <button
                          type="button"
                          className="font-medium text-rose-600 hover:text-rose-500"
                          onClick={handleRemoveProduct(product.id)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="py-6 lg:px-4">
        <div className="flex justify-between text-base font-medium text-gray-900">
          <p>Subtotal</p>
          <p>{currencyFormatter.format(calculatedSubTotal)}</p>
        </div>
        <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
        <div className="mt-6">
          <button
            className="flex items-center justify-center rounded-md border border-transparent bg-gray-900 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-emerald-500"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
