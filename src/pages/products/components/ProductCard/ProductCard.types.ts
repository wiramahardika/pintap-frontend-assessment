export type ProductCardProps = {
  id: number;
  thumbnail: string;
  title: string;
  category: string;
  description: string;
  rating: number;
  price: number;
  stock: number;
  isAddedToCart: boolean;
  onAddToCart: (id: number) => void;
  discountPercentage?: number;
};
