import { OrderItemCreateNestedManyWithoutOrdersInput } from "./OrderItemCreateNestedManyWithoutOrdersInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type OrderCreateInput = {
  orderItems?: OrderItemCreateNestedManyWithoutOrdersInput;
  status?: "Option1" | null;
  total?: number | null;
  user?: UserWhereUniqueInput | null;
};
