import { Injectable } from "@nestjs/common";
import { BinCheckRequest } from "../binCheck/BinCheckRequest";

@Injectable()
export class BinCheckService {
  constructor() {}
  async BinCheck(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async PerformBinCheck(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async PerformCardBinCheck(args: BinCheckRequest): Promise<BinCheckRequest> {
    throw new Error("Not implemented");
  }
}
