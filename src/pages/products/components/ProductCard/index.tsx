import { FC } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircleIcon, ShoppingCartIcon, StarIcon } from '@heroicons/react/24/solid';
import { ProductCardProps } from './ProductCard.types';

const currencyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

const ProductCard: FC<ProductCardProps> = ({
  id,
  thumbnail,
  title,
  category,
  description,
  rating,
  price,
  stock,
  onAddToCart,
  isAddedToCart = false,
  discountPercentage = 0,
}) => {

  return (
    <div className="flex flex-col gap-2">
      <div className="relative">
        <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
          <img
            src={thumbnail}
            alt={title}
            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
          />
        </div>
        <div className="mt-4 flex justify-between items-start">
          <div className="flex flex-col gap-1">
            <h3 className="text-sm text-gray-700 font-bold">
              <Link to={`/product-details/${id}`}>
                <span aria-hidden="true" className="absolute inset-0" />
                {title}
              </Link>
            </h3>
            <Link
              to={`/category/${category}`}
              className="rounded-full hover:bg-gray-900 bg-gray-200 z-10 w-fit px-3 py-1 text-xs hover:text-white text-gray-900"
            >
              {category}
            </Link>
            <p className="mt-1 text-sm text-gray-500">{description}</p>
            <div className="text-xs font-medium text-gray-600 flex gap-1 items-center">
              <StarIcon className="w-3 h-3" />
              <div className="flex items-center gap-1">
                {rating}
                <span className="text-gray-400">of 5</span>
              </div>
            </div>
          </div>
          {!discountPercentage && (
            <div className="text-lg font-bold text-gray-900 flex gap-1 items-center">
              {currencyFormatter.format(price)}
            </div>
          )}
          {Boolean(discountPercentage) && (
            <div className="flex flex-col items-end">
              <span className="flex text-xs font-normal bg-rose-600 pl-1 py-1 text-white flex-nowrap whitespace-nowrap">
                {discountPercentage}% off
              </span>
              <span className="text-xs font-medium text-gray-400 line-through">
                {currencyFormatter.format(price)}
              </span>
              <span className="text-lg font-bold text-rose-600">
                {currencyFormatter.format(Number(price - (price * (discountPercentage / 100))))}
              </span>
            </div>
          )}
        </div>
      </div>

      <div className="flex justify-between">
        {isAddedToCart && (
          <button className="bg-emerald-500 text-white py-2 px-4 rounded-full text-sm flex gap-2">
            <CheckCircleIcon className="w-5" />
            Added to cart
          </button>
        )}

        {!isAddedToCart && (
          <button
            className="bg-gray-900 text-white py-2 px-4 rounded-full text-sm flex gap-2"
            onClick={() => onAddToCart(id)}
          >
            <ShoppingCartIcon className="w-5" />
            Add to cart
          </button>
        )}

        <span className="text-xs text-gray-400 font-bold">
          {stock} items left
        </span>
      </div>
    </div>
  );
};

export default ProductCard;
