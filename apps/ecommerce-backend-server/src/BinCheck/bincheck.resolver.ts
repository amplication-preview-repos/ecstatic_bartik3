import * as graphql from "@nestjs/graphql";
import { BinCheckRequest } from "../binCheck/BinCheckRequest";
import { BinCheckService } from "./bincheck.service";

export class BinCheckResolver {
  constructor(protected readonly service: BinCheckService) {}

  @graphql.Query(() => String)
  async BinCheck(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.BinCheck(args);
  }

  @graphql.Query(() => String)
  async PerformBinCheck(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.PerformBinCheck(args);
  }

  @graphql.Query(() => BinCheckRequest)
  async PerformCardBinCheck(
    @graphql.Args()
    args: BinCheckRequest
  ): Promise<BinCheckRequest> {
    return this.service.PerformCardBinCheck(args);
  }
}
