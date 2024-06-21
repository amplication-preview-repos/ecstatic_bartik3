import { OrderItem } from "../orderItem/OrderItem";
import { Review } from "../review/Review";

export type Product = {
  createdAt: Date;
  description: string | null;
  id: string;
  name: string | null;
  orderItems?: Array<OrderItem>;
  price: number | null;
  reviews?: Array<Review>;
  stock: number | null;
  updatedAt: Date;
};
