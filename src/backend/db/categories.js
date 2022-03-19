import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "men-clothing",
    description:
    "Online Shopping for Men - Browse & buy from a wide range of men's clothing, menswear & accessories online at best prices ✯Fast Shipping ✯Amazing Offers.",
  },
  {
    _id: uuid(),
    categoryName: "non-fiction",
    description:
    "Buy online at Footwear. Huge footwear and Clothing range. Order now and avail Best Discounts, Cash on Delivery, Easy Returns and Exchange",
  },
  {
    _id: uuid(),
    categoryName: "electronics",
    description:
    "Electronics store: Buy electronic products online from a wide range of mobiles, washing machine, camera, laptop & many more appliances.",
  },
];
