import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { PaymentService } from "./payment.service";
import { PaymentRequest } from "../payment/PaymentRequest";

@swagger.ApiTags("payments")
@common.Controller("payments")
export class PaymentController {
  constructor(protected readonly service: PaymentService) {}

  @common.Get("/check-payment-status")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async CheckPaymentStatus(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.CheckPaymentStatus(body);
      }

  @common.Get("/:id/create-payment-request")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async CreatePaymentRequest(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.CreatePaymentRequest(body);
      }

  @common.Post("/payment-webhook")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async HandlePaymentNotification(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.HandlePaymentNotification(body);
      }

  @common.Post("/initiate-payment-request")
  @swagger.ApiOkResponse({
    type: PaymentRequest
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async InitializePaymentProcess(
    @common.Body()
    body: string
  ): Promise<PaymentRequest> {
        return this.service.InitializePaymentProcess(body);
      }

  @common.Post("/payment-success")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async PaymentSuccessCallback(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.PaymentSuccessCallback(body);
      }
}
