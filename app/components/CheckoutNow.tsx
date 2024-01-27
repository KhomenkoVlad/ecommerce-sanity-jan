"use client";

import { Button } from "@/components/ui/button";
import { urlFor } from "@/lib/sanity";
import { useShoppingCart } from "use-shopping-cart";
import { ProductCart } from "./AddtoBag";

export default function CheckoutNow({
  key,
  price_id,
  name,
  description,
  price,
  currency,
  image,
}: ProductCart) {
  const { checkoutSingleItem } = useShoppingCart();

  function buyNow(priceId: string) {
    checkoutSingleItem(priceId);
  }

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
        buyNow(product.price_id);
      }}
    >
      Add To Cart
    </Button>
  );
}
