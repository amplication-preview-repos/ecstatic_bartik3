import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { BinCheckService } from "./bincheck.service";
import { BinCheckRequest } from "../binCheck/BinCheckRequest";

@swagger.ApiTags("binChecks")
@common.Controller("binChecks")
export class BinCheckController {
  constructor(protected readonly service: BinCheckService) {}

  @common.Get("/:id/bin-check")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async BinCheck(
    @common.Body()
    body: BinCheckRequest
  ): Promise<string> {
        return this.service.BinCheck(body);
      }

  @common.Get("/:id/perform-bin-check")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async PerformBinCheck(
    @common.Body()
    body: BinCheckRequest
  ): Promise<string> {
        return this.service.PerformBinCheck(body);
      }

  @common.Post("/perform-bin-verification")
  @swagger.ApiOkResponse({
    type: BinCheckRequest
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async PerformCardBinCheck(
    @common.Body()
    body: BinCheckRequest
  ): Promise<BinCheckRequest> {
        return this.service.PerformCardBinCheck(body);
      }
}
