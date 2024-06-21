import { OrderItem } from "../orderItem/OrderItem";
import { User } from "../user/User";

export type Order = {
  createdAt: Date;
  id: string;
  orderItems?: Array<OrderItem>;
  status?: "Option1" | null;
  total: number | null;
  updatedAt: Date;
  user?: User | null;
};
