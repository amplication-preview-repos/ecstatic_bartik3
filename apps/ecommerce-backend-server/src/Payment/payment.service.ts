import { Injectable } from "@nestjs/common";
import { PaymentRequest } from "../payment/PaymentRequest";
import { PaymentWebhookNotification } from "../payment/PaymentWebhookNotification";

@Injectable()
export class PaymentService {
  constructor() {}
  async CheckPaymentStatus(args: PaymentRequest): Promise<string> {
    throw new Error("Not implemented");
  }
  async CreatePaymentRequest(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async HandlePaymentNotification(args: PaymentWebhookNotification): Promise<string> {
    throw new Error("Not implemented");
  }
  async InitializePaymentProcess(args: PaymentRequest): Promise<PaymentRequest> {
    throw new Error("Not implemented");
  }
  async PaymentSuccessCallback(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
}
