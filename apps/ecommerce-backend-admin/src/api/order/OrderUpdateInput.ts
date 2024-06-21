import { OrderItemUpdateManyWithoutOrdersInput } from "./OrderItemUpdateManyWithoutOrdersInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type OrderUpdateInput = {
  orderItems?: OrderItemUpdateManyWithoutOrdersInput;
  status?: "Option1" | null;
  total?: number | null;
  user?: UserWhereUniqueInput | null;
};
