import { OrderItemCreateNestedManyWithoutProductsInput } from "./OrderItemCreateNestedManyWithoutProductsInput";
import { ReviewCreateNestedManyWithoutProductsInput } from "./ReviewCreateNestedManyWithoutProductsInput";

export type ProductCreateInput = {
  description?: string | null;
  name?: string | null;
  orderItems?: OrderItemCreateNestedManyWithoutProductsInput;
  price?: number | null;
  reviews?: ReviewCreateNestedManyWithoutProductsInput;
  stock?: number | null;
};
