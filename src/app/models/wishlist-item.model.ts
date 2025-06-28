export interface WishlistItem {
  productId: {
    id: string;
    name: string;
    description: string;
    price: number;
    images: string[];
    thumbnail: string;
    category: string;
  };
  addedAt: string;
}

export interface WishlistResponse {
  id: string;
  user: string;
  items: WishlistItem[];
  totalItems: number;
  createdAt: string;
  updatedAt: string;
}
