import { StringFilter } from "../../util/StringFilter";
import { OrderItemListRelationFilter } from "../orderItem/OrderItemListRelationFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type OrderWhereInput = {
  id?: StringFilter;
  orderItems?: OrderItemListRelationFilter;
  status?: "Option1";
  total?: FloatNullableFilter;
  user?: UserWhereUniqueInput;
};
