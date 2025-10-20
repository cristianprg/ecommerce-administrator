export interface Product {
  id: number;
  name: string;
  sku: string;
  price: number;
  compareAtPrice?: number | null;
  cost: number;
  description: string;
  category: string;
  subcategory: string;
  brand: string;
  stock: number;
  lowStockThreshold: number;
  image: string;
  images: string[];
  weight: number;
  dimensions: {
    length: number;
    width: number;
    height: number;
    unit: string;
  };
  variants?: any[];
  isActive: boolean;
  isFeatured: boolean;
  tags: string[];
  rating: number;
  reviewCount: number;
  createdAt: string;
  updatedAt: string;
}
