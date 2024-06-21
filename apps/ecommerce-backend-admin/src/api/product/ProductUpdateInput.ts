import { OrderItemUpdateManyWithoutProductsInput } from "./OrderItemUpdateManyWithoutProductsInput";
import { ReviewUpdateManyWithoutProductsInput } from "./ReviewUpdateManyWithoutProductsInput";

export type ProductUpdateInput = {
  description?: string | null;
  name?: string | null;
  orderItems?: OrderItemUpdateManyWithoutProductsInput;
  price?: number | null;
  reviews?: ReviewUpdateManyWithoutProductsInput;
  stock?: number | null;
};
