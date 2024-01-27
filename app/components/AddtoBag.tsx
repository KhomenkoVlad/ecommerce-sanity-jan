"use client";

import { Button } from "@/components/ui/button";
import { urlFor } from "@/lib/sanity";
import { useShoppingCart } from "use-shopping-cart";

export interface ProductCart {
  key: string;
  name: string;
  description: string;
  price: number;
  currency: string;
  image: any;
  price_id: string;
}

export default function AddToBag({
  key,
  price_id,
  name,
  description,
  price,
  currency,
  image,
}: ProductCart) {
  const { addItem, handleCartClick } = useShoppingCart();

  const product = {
    name,
    description,
    price,
    currency,
    image: urlFor(image).url(),
    price_id,
  };

  return (
    <Button
      onClick={() => {
        addItem(product);
        handleCartClick();
      }}
    >
      Add To Cart
    </Button>
  );
}
