import * as graphql from "@nestjs/graphql";
import { PaymentRequest } from "../payment/PaymentRequest";
import { PaymentWebhookNotification } from "../payment/PaymentWebhookNotification";
import { PaymentService } from "./payment.service";

export class PaymentResolver {
  constructor(protected readonly service: PaymentService) {}

  @graphql.Query(() => String)
  async CheckPaymentStatus(
    @graphql.Args()
    args: PaymentRequest
  ): Promise<string> {
    return this.service.CheckPaymentStatus(args);
  }

  @graphql.Query(() => String)
  async CreatePaymentRequest(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.CreatePaymentRequest(args);
  }

  @graphql.Mutation(() => String)
  async HandlePaymentNotification(
    @graphql.Args()
    args: PaymentWebhookNotification
  ): Promise<string> {
    return this.service.HandlePaymentNotification(args);
  }

  @graphql.Mutation(() => PaymentRequest)
  async InitializePaymentProcess(
    @graphql.Args()
    args: PaymentRequest
  ): Promise<PaymentRequest> {
    return this.service.InitializePaymentProcess(args);
  }

  @graphql.Mutation(() => String)
  async PaymentSuccessCallback(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.PaymentSuccessCallback(args);
  }
}
