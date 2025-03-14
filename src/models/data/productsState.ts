interface Rating {
  count: number;
  rate: number;
  size: 'small' | 'medium' | 'large';
}

interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
  rating: Rating;
  isFavorited: boolean;
}

interface ProductsState {
  products: Product[];
  bestSellerProducts: Product[];
  popularProducts: Product[];
  product: Product;
  pending: boolean;
  error: any;
}
interface Params {
  id: number;
}
export type {ProductsState, Product, Params, Rating};
