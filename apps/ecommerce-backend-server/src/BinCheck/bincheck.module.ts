import { Module } from "@nestjs/common";
import { BinCheckService } from "./bincheck.service";
import { BinCheckController } from "./bincheck.controller";
import { BinCheckResolver } from "./bincheck.resolver";

@Module({
  controllers: [BinCheckController],
  providers: [BinCheckService, BinCheckResolver],
  exports: [BinCheckService],
})
export class BinCheckModule {}
