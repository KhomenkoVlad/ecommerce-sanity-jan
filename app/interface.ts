export interface simplifiedProduct {
  _id: string;
  name: string;
  price: number;
  slug: string;
  categoryName: string;
  imageUrl: string;
}

export interface fullProduct {
  _id: string;
  name: string;
  price: number;
  slug: string;
  categoryName: string;
  images: any;
  description: string;
  price_id: string;
}
