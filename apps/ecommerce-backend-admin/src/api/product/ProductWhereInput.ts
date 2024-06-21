import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { OrderItemListRelationFilter } from "../orderItem/OrderItemListRelationFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { ReviewListRelationFilter } from "../review/ReviewListRelationFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type ProductWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  orderItems?: OrderItemListRelationFilter;
  price?: FloatNullableFilter;
  reviews?: ReviewListRelationFilter;
  stock?: IntNullableFilter;
};
